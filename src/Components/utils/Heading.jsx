import { Box, Typography } from '@mui/material'
import React from 'react'

//image
import title_logo from "../../assets/Images/home/paw-title.svg";

//css
import '../../assets/css/utils/heading.css';

function Heading({children,color}) {

  return (
    <>
      <Box className="heading-title">
            <Box component={"img"} src={title_logo} alt="logo" height="25px" />
            <Typography className="heading-title" sx={{color:color? color :'black'}}>
              {children}
            </Typography>
          </Box>
    </>
  )
}

export default Heading
