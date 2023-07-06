import { Box, Button, Divider, InputBase, List, ListItem, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'


//css 
import '../../../assets/css/footer/footer.css'

//image /logo
import logo from '../../../assets/Images/home/nav-logo.svg';
import palyStoreLogo from '../../../assets/Images/footer/footer-apps-300x43.png'

function Footer() {
  return (
    <>
    {/* footer section start here */}
    <Box className="footer-wrapper">
      
      <Box className="footer-subscribe-container">
        <Typography>Don’t miss this amazing big events
conference and opportunities!</Typography>
        <Box className="footer-subscribe">
            <InputBase placeholder='Enter Your Email Address...'/>
            <Button>Subscribe</Button>
        </Box>
      </Box>

      <Divider/>


<Box className='footer-container'>
    <Box>
        <Box component={'img'} src={logo} alt="logo" width='200px'/>
        </Box>
    <Box>
        <Typography className='footer-list-heading'>About</Typography>
        <List>
        <ListItem>About Us</ListItem>
        <ListItem>Our Services</ListItem>
        <ListItem>Our Team</ListItem>
        <ListItem>Contact Us</ListItem>
    </List>
    </Box>
    <Box>
    <Typography className='footer-list-heading'>Services</Typography>
    <List>
        <ListItem>House Sitting</ListItem>
        <ListItem>Drop-in Visits</ListItem>
        <ListItem>Doggy Care</ListItem>
        <ListItem>Dog Walking</ListItem>
    </List>
    </Box>
    <Box>
    <Typography className='footer-list-heading'>Help</Typography>
    <List>
        <ListItem>Booking</ListItem>
        <ListItem>Pricing Table</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>Wishlist</ListItem>
    </List>
    </Box>
    <Box>
    <Typography className='footer-list-heading'>Get Our App</Typography>

    <Typography className='footer-list-subheading'>We have a dedicated team of specialists for you.</Typography>
        <Box component={'img'} src={palyStoreLogo} alt="playStore/appStore" width={'300px'}/>
    </Box>
</Box>

      <Typography className='footer-copyright-text'>© 2023 EpicPaws is Powered by Bitwit-tech.</Typography>
    </Box>
    {/* footer section end Here */}
    </>
  )
}

export default Footer
