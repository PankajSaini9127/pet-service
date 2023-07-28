import { Box, Button, Dialog, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import logo from "../../assets/Images/home/nav-logo.svg";

//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//css login 
import "../../assets/css/auth/login.css";
import { useDispatch } from 'react-redux';
import { setAlert } from '../../store/actions/alert-action';
import { resetPassword } from '../../service/Api';

function ResetPassword({open,setOpen}) {

    const [formData, setFormData] = useState({ email:""});
    const [formError, setFormError] = useState({});

    const dispatch = useDispatch()


    function handleChange(e){
        setFormError({
            ...formError,
            [e.target.name]:""
        });

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    };


    function validate(data){
        let fields = ["email"];
        let error = {};

        fields.map(item=>{
            if(data[item] === "" ){
                error[item] = "Field Is Required"
            } 
        });

        setFormError(error);

        if(Object.keys(error).length === 0){
            return true;
        }else{
            return false;
        }

      
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            if(validate(formData)){
              const response = await resetPassword(formData);
              if(response.status=== 200){
                dispatch(setAlert({open:true,variant:"success",message:"Password Reset Email Sent."}));
                setOpen({login:true,resetPassword:false,signup:false});
                setFormData({email:""});
              }else{
                dispatch(setAlert({open:true,variant:"error",message:response.message}))
              }
            }
        } catch (error) {
            dispatch(setAlert({open:true,variant:"error",message:"Something Went Wrong."}))
        }
        
    };

    function handleBack(){
        setOpen({login:true,resetPassword:false,signup:false});
                setFormData({email:""});
    }

  return (
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
        <Typography className="login-form-heading">Reset Password</Typography>
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
          <Box className="login-form-field-container">
            <Button className="login-form-btn" type="submit">
              Reset Now
            </Button>
          </Box>
          <Box className="login-form-field-container">
              <Button
                className="login-form-forgot-pwd"
                onClick={handleBack}
              >
                Back
              </Button> 
          </Box>
        </Box>
      </Box>
    </Box>
  </Dialog>
  )
}

export default ResetPassword;
