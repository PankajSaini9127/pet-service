import React from 'react'

//css
import '../../../assets/css/about/moreAbout.css';

//icons
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import { Box, Button, Typography } from '@mui/material';
import Heading from '../../utils/Heading';

function MoreAbout() {
  return (
    <section className='more-about-wrapper'>
      <Box className="more-about-container">
        <a href='#' target='_blank'>
       <PlayCircleOutlineTwoToneIcon className='more-about-icon'/>
       </a>
       </Box>
       <Box className="more-info-container">
           <Heading>Caring For Pets</Heading>
           <Typography className='more-info-heading'>Count on us.</Typography>
           <Typography className='more-info-description'>Play, love and exercise for your dog while you’re out. Our dog walking service runs throughout the day.</Typography>
           <Button className='more-about-btn button-hover-scale'>More About Us</Button>
       </Box>
    </section>
  )
}

export default MoreAbout
