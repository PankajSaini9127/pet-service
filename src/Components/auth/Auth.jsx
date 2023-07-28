import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ResetPassword from './ResetPassword';

function Auth() {
    const [open,setOpen] = useState({login:true,signup:false,resetPassword:false});
  
  return (
    <>
      <Login open={open.login} setOpen={setOpen}/>
      <SignUp open={open.signup} setOpen={setOpen}/>
      <ResetPassword open={open.resetPassword} setOpen={setOpen}/>
    </>
  )
}

export default Auth
