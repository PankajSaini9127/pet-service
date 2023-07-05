import { Box, Typography } from '@mui/material'
import React from 'react';

//css
import "../../assets/css/module/teamMember.css";

function TeamMember({member}) {
  return (
   
    <Box className="team-details-container">
      <Box component={'img'} src={member.profile} alt="profile" height="270px"/>
      <Box className="team-profile-overlay"/>
      <Typography className='team-name'>{member.name}</Typography>
      <Typography className='team-descrption'>{member.description}</Typography>
    </Box>
  )
}

export default TeamMember
