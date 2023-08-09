import {
  Box,
  Button,
  Dialog,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import logo from "../../../assets/Images/home/nav-logo.svg";

//css login
import "../../../assets/css/auth/login.css";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../store/actions/alert-action";
import { newPassword } from "../../../service/Api";
import { useNavigate } from "react-router";

//spainer
import { SpinnerCircular } from "spinners-react";

function NewPassword({ email }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ password: "", cPassword: "" });
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading]= useState(false);

  function handleChange(e) {
    setFormError({
      ...formError,
      [e.target.name]: "",
    });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }

  function validate(data) {
    let error = {};
    if (data.password === "") {
      error.password = "Please Enter Password.";
    } else if (data.password !== data.cPassword) {
      error.cPassword = "Password Not Match";
    }
    setFormError(error);
    if (Object.keys(error).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (validate(formData)) {
        setLoading(true);
        const response = await newPassword(
          { password: formData.password },
          email
        );
        setLoading(false)
        if (response.status === 200) {
          dispatch(
            setAlert({
              open: true,
              variant: "success",
              message: response.message,
            })
          );
          setFormData({ password: "", cPassword: "" });
          setFormError({});
          navigate("/booking");
        } else {
          dispatch(
            setAlert({
              open: true,
              variant: "error",
              message: response.message,
            })
          );
        }
      }
    } catch (error) {
      console.log(error);
      dispatch(
        setAlert({
          open: true,
          variant: "error",
          message: "Something Went Wrong.",
        })
      );
    }
  }
  return (
    <Dialog open={true} fullWidth>
      <Box className="login-dialog-wrapper">
        <Box className="login-image-container">
          <Box className="login-image" />
        </Box>
        <Box className="login-form-container">
          <Box
            component={"img"}
            src={logo}
            alt="logo image"
            className="login-form-logo"
          />
          <Typography className="login-form-heading">New Password</Typography>
          <Box component={"form"} onSubmit={handleSubmit}>
            <Box>
              <Box className="login-form-field-container">
                <FormControl className="login-form-field">
                  <TextField
                    variant="standard"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {!showPassword ? (
                            <VisibilityIcon onClick={handlePasswordToggle} />
                          ) : (
                            <VisibilityOffIcon onClick={handlePasswordToggle} />
                          )}
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                    onChange={handleChange}
                    value={formData.password}
                  />
                </FormControl>
              </Box>
              {formError.password && (
                <Typography
                  variant="caption"
                  component={"p"}
                  marginLeft="25px"
                  color="red"
                >
                  {formError.password}
                </Typography>
              )}
            </Box>
            <Box>
              <Box className="login-form-field-container">
                <FormControl className="login-form-field">
                  <TextField
                    variant="standard"
                    type={showPassword ? "text" : "password"}
                    name="cPassword"
                    placeholder="Confirm Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {!showPassword ? (
                            <VisibilityIcon onClick={handlePasswordToggle} />
                          ) : (
                            <VisibilityOffIcon onClick={handlePasswordToggle} />
                          )}
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                    onChange={handleChange}
                    value={formData.cPassword}
                  />
                </FormControl>
              </Box>
              {formError.cPassword && (
                <Typography
                  variant="caption"
                  component={"p"}
                  marginLeft="25px"
                  color="red"
                >
                  {formError.cPassword}
                </Typography>
              )}
            </Box>
            <Box className="login-form-field-container">
              <Button className="login-form-btn" type="submit" disabled={loading?true:false}>
               { loading &&<SpinnerCircular
                  size={35}
                  thickness={178}
                  speed={100}
                  color="#FF553E"
                />}
                Reset Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default NewPassword;
