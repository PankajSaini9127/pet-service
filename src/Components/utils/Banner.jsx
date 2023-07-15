import { Box, Typography } from '@mui/material'
import React from 'react'

//css
import "../../assets/css/utils/banner.css"

function Banner({page,path}) {
  return (
    <>
      <Box className="banner-wrapper">
         <Box className="banner-container">
            <Typography className='banner-text-path'>{path}</Typography>
            <Typography className='banner-text-heading'>{page}</Typography>
         </Box>

      </Box>
    </>
  )
}

export default Banner
