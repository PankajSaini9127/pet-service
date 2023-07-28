import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//css
import "../../assets/css/auth/signup.css";

//image
import logo from "../../assets/Images/home/nav-logo.svg";
import { register } from "../../service/Api";
import { useDispatch } from "react-redux";
import { setAlert } from "../../store/actions/alert-action";

//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const initialState = {
  name: "",
  email: "",
  city: "",
  state: "",
  mobile: "",
  address: "",
  password: "",
  cPassword: "",
};

function SignUp({ open, setOpen }) {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const [formError, setformError] = useState({});

  function handleChange(e) {
    const regex = /^[a-zA-Z ]*$/;
    setformError({
      ...formError,
      [e.target.name]: "",
    });
    switch (e.target.name) {
      case "mobile":
        e.target.value.match(/^[0-9]*$/) &&
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        break;
      case "name":
        e.target.value.match(regex) !== null &&
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        break;
      case "city":
        e.target.value.match(regex) !== null &&
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        break;
      case "state":
        e.target.value.match(regex) !== null &&
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        break;

      default:
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    }
  }

  function validate(data) {
    let field = [
      "name",
      "email",
      "city",
      "state",
      "mobile",
      "address",
      "password",
      "cPassword",
    ];

    let error = {};

    field.map((item) => {
      if (data[item] === "") {
        error[item] = "Field is Required!";
      }
    });

    //password Match
    if (data.password !== data.cPassword) {
      error.cPassword = "Password Not Match!";
    }

    setformError(error);

    if (Object.keys(error).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  //handle Register
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (validate(formData)) {
        delete formData.cPassword;
        const result = await register(formData);
        if (result.status === 200) {
          dispatch(
            setAlert({
              open: true,
              variant: "success",
              message: result.message,
            })
          );
          setFormData(initialState);
          setOpen({
            login: true,
            signup: false,
          });
        } else {
          dispatch(
            setAlert({ open: true, variant: "error", message: result.message })
          );
        }
      }
    } catch (error) {
      console.log(error);
      dispatch(
        setAlert({
          open: true,
          variant: "error",
          message: "something went Wrong.",
        })
      );
    }
  }

  //navigate to login
  function handleLogin() {
    setOpen({
      login: true,
      signup: false,
    });
    setFormData(initialState);
    setformError({});
  }

  return (
    <>
      <Dialog open={open} fullWidth>
        <Box className="signup-wrapper">
          <Box component="img" src={logo} alt="logo" className="signup-logo" />
          <Typography className="signup-heading">Sign-Up</Typography>
          <Box component={"form"} onSubmit={handleSubmit}>
            <Box className="signup-form-field-container">
              <FormField
                name={"name"}
                placeHolder={"Enter Your Name"}
                handleChange={handleChange}
                value={formData.name}
                error={formError.name}
              />
              <FormField
                name={"email"}
                placeHolder={"Enter Your Email"}
                handleChange={handleChange}
                value={formData.email}
                error={formError.email}
                type={"email"}
              />
            </Box>
            <Box className="signup-form-field-container">
              <FormField
                name={"city"}
                placeHolder={"Enter Your City"}
                handleChange={handleChange}
                value={formData.city}
                error={formError.city}
              />
              <FormField
                name={"state"}
                placeHolder={"Enter Your State"}
                handleChange={handleChange}
                value={formData.state}
                error={formError.state}
              />
            </Box>
            <Box className="signup-form-field-container">
              <FormField
                name={"mobile"}
                placeHolder={"Enter Your Mobile"}
                handleChange={handleChange}
                value={formData.mobile}
                error={formError.mobile}
                max={10}
              />
              <FormField
                name={"address"}
                placeHolder={"Enter Your Address"}
                handleChange={handleChange}
                value={formData.address}
                error={formError.address}
              />
            </Box>
            <Box className="signup-form-field-container">
              <FormField
                name={"password"}
                placeHolder={"Enter Password"}
                handleChange={handleChange}
                value={formData.password}
                error={formError.password}
                type={showPassword ? "text" : "password"}
                showPassword={showPassword}
                passwordShowIcon={true}
                setShowPassword={setShowPassword}
              />
              <FormField
                name={"cPassword"}
                placeHolder={"Re Enter Password"}
                handleChange={handleChange}
                value={formData.cPassword}
                error={formError.cPassword}
                type={showPassword ? "text" : "password"}
                showPassword={showPassword}
                passwordShowIcon={true}
                setShowPassword={setShowPassword}
              />
            </Box>

            <Box className="signup-form-field-container">
              <Button type="submit" className="signup-form-btn">
                Sign Up
              </Button>
            </Box>

            <Typography textAlign={"center"}>
              Already Register ?{" "}
              <Button className="signup-form-login-btn" onClick={handleLogin}>
                Login Now
              </Button>
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default SignUp;

function FormField({
  handleChange,
  value,
  placeHolder,
  name,
  type,
  error,
  max,
  passwordShowIcon,
  showPassword,
  setShowPassword,
}) {
  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }
  return (
    <Box>
      <FormControl className="signup-form-field" fullWidth>
        <TextField
          variant="standard"
          type={type ? type : "text"}
          name={name}
          placeholder={placeHolder}
          onChange={handleChange}
          value={value}
          inputProps={{ maxLength: max }}
          fullWidth
          InputProps={{
            endAdornment: passwordShowIcon && (
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
        />
      </FormControl>
      {error && (
        <Typography
          variant="caption"
          component={"p"}
          marginLeft="15px"
          color="red"
        >
          {error}
        </Typography>
      )}
    </Box>
  );
}
