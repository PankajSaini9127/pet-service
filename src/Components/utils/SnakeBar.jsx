import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../store/actions/alert-action';

function SnakeBar() {

    const {alert} = useSelector(s=>s);
    const dispatch = useDispatch();

 function handleClose(){
    dispatch(setAlert({open:null,type:null,message:null}))
 }

  return (
    <>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity={alert.variant} sx={{ width: '100%' }}>
   {alert.message}
  </Alert>
</Snackbar>
    </>
  )
}

export default SnakeBar
