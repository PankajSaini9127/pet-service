import { Box, Typography } from '@mui/material'
import React from 'react';

//css
import "../../assets/css/module/teamMember.css";

//icon
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function TeamMember({member}) {
  return (
   <>
    <Box className="team-details-container">
      <Box className="team-profile-overlay">
          <FacebookRoundedIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
      </Box>
      <Box component={'img'} src={member.profile} alt="profile" className='profile' height="270px"/>
      <Typography className='team-name'>{member.name}</Typography>
      <Typography className='team-descrption'>{member.description}</Typography>
     
    </Box>
    </>
  )
}

export default TeamMember
