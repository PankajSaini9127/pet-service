import React from 'react'

import Banner from "../../utils/Banner";
import NewPassword from './NewPassword';
import { useParams } from 'react-router';

function ResetPassword() {
  const {email} = useParams();
  return (
    <>
      <Banner path={"Home / Reset Password"} page={"Reset Password"}/>
      <NewPassword email={email}/>
    </>
  )
}

export default ResetPassword
