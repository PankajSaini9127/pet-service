import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'

import "../../../assets/css/profilePage/profiletab.css";
import UserProfile from './UserProfile';
import PetInfo from './PetInfo';

function ProfileTab() {
  const [activeRow,setActiveRow] = useState(0)

    function handleChange(e,index){
      setActiveRow(index)
    };

  return (
    <>
    <Box className="profile-tab-wrapper">
      <Tabs 
      orientation='vertical'
      sx={{ borderRight: 1, borderColor: 'divider' }}
      value={activeRow}
      onChange={handleChange}
      >
        <Tab label="Profile" className={activeRow === 0 ?"profile-tab profile-tab-active":"profile-tab"}/>
        <Tab label="Pets" className={activeRow === 1 ?"profile-tab profile-tab-active":"profile-tab"}/>
        <Tab label="Booking" className={activeRow === 2 ?"profile-tab profile-tab-active":"profile-tab"}/>
        </Tabs>
      <CustomTabPanel value={activeRow} index={0}>
        <UserProfile/>
      </CustomTabPanel>
      <CustomTabPanel value={activeRow} index={1}>
       <PetInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={activeRow} index={2}>
        Item Three
      </CustomTabPanel>
     
      </Box>
    </>
  )
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tab-panel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

export default ProfileTab
