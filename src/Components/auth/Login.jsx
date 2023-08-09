import React, { useState } from "react";

//image
import image from "../../assets/Images/home/appointmentBg.jpg";
import logo from "../../assets/Images/home/nav-logo.svg";

//css
import "../../assets/css/auth/login.css";
import {
  Box,
  Button,
  Dialog,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { login } from "../../service/Api";

//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useDispatch } from "react-redux";
import { set_auth } from "../../store/actions/authActions";
import { setAlert } from "../../store/actions/alert-action";
import { setLoading } from "../../store/actions/loading-action";

function Login({ open, setOpen }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});

  const dispatch = useDispatch()

  function handleChange(e) {
    setFormError({
      ...formError,
      [e.target.name]:""
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validator(data) {
    let error = {};
    let fields = ["email", "password"];
    fields.map((item) => {
      if (data[item] === "") {
        error[item] = "Field Is Required";
      }
    });
    setFormError(error);
    if(Object.keys(error).length === 0){
      return true;
    }else{
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (validator(formData)) {
        dispatch(setLoading(true))
        const result = await login(formData);
        if(result.status === 200){
          dispatch(set_auth({auth:true,token:result.authToken,data:result.data}));
          dispatch(setAlert({open:true,variant:"success",message:result.message}));
          dispatch(setLoading(false))
        }else{
          dispatch(setLoading(false))
          dispatch(setAlert({open:true,variant:"error",message:result.message}));
        }
      }
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setAlert({open:true,variant:"error",message:"Something Went Wrong."}));
    }
   
  }

  function handleRegister() {
    setOpen({
      login: false,
      signup: true,
      resetPassword:false
    });
  };
  

  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <Dialog open={open} fullWidth>
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
            <Typography className="login-form-heading">Login</Typography>
            <Box component={"form"} onSubmit={handleSubmit}>
              <Box>
                <Box className="login-form-field-container">
                  <FormControl className="login-form-field" fullWidth>
                    <TextField
                      variant="standard"
                      type="email"
                      name="email"
                      placeholder="Email"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      onChange={handleChange}
                      value={formData.email}
                      fullWidth
                    />
                  </FormControl>
                </Box>
                {formError.email && (
                  <Typography
                    variant="caption"
                    component={"p"}
                    marginLeft="25px"
                    color="red"
                  >
                    {formError.email}
                  </Typography>
                )}
              </Box>
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
                              <VisibilityOffIcon
                                onClick={handlePasswordToggle}
                              />
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

              <Box className="login-form-field-container">
                <Button className="login-form-btn" type="submit">
                  Submit
                </Button>
              </Box>
              <Box className="login-form-field-container">
                <Typography>
                  Forgot Password ?
                  <Button className="login-form-forgot-pwd" onClick={()=>setOpen({resetPassword:true})}>Reset Now</Button>
                </Typography>
              </Box>
              <Box className="login-form-field-container">
                <Typography>
                  Don't Have Account?{" "}
                  <Button
                    className="login-form-forgot-pwd"
                    onClick={handleRegister}
                  >
                    Register Now
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default Login;
