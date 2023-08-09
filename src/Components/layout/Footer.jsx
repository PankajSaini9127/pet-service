import {
  Box,
  Button,
  Divider,
  InputBase,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

//css
import "../../assets/css/layout/footer.css";

//image /logo
import logo from "../../assets/Images/home/nav-logo.svg";
import palyStoreLogo from "../../assets/Images/footer/footer-apps-300x43.png";
import arrow from "../../assets/Images/footer/Epic-arrow6.png";

function Footer() {
  return (
    <>
      {/* footer section start here */}
      <Box className="footer-wrapper">
        <Box className='footer-arrow' component={'img'} src={arrow} alt='arrow' />
         <Box className="footer-svg">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#faf6f0"
              fill-opacity="1"
              d="M0,128L80,144C160,160,320,192,480,176C640,160,800,96,960,90.7C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Box>
        <Box className="footer-subscribe-container">
          
          <Typography>
            Don’t miss this amazing big events conference and opportunities!
          </Typography>
          <Box className="footer-subscribe">
            <InputBase placeholder="Enter Your Email Address..." />
            <Button>Subscribe</Button>
          </Box>
        </Box>
        <Divider />
        <Box className="footer-container">
          <Box>
            <Box component={"img"} src={logo} alt="logo" width="200px" />
          </Box>
          <Box>
            <Typography className="footer-list-heading">About</Typography>
            <List>
              <ListItem>About Us</ListItem>
              <ListItem>Our Services</ListItem>
              <ListItem>Our Team</ListItem>
              <ListItem>Contact Us</ListItem>
            </List>
          </Box>
          <Box>
            <Typography className="footer-list-heading">Services</Typography>
            <List>
              <ListItem>House Sitting</ListItem>
              <ListItem>Drop-in Visits</ListItem>
              <ListItem>Doggy Care</ListItem>
              <ListItem>Dog Walking</ListItem>
            </List>
          </Box>
          <Box>
            <Typography className="footer-list-heading">Help</Typography>
            <List>
              <ListItem>Booking</ListItem>
              <ListItem>Pricing Table</ListItem>
              <ListItem>Shop</ListItem>
              <ListItem>Wishlist</ListItem>
            </List>
          </Box>
          <Box>
            <Typography className="footer-list-heading">Get Our App</Typography>

            <Typography className="footer-list-subheading">
              We have a dedicated team of specialists for you.
            </Typography>
            <Box
              component={"img"}
              src={palyStoreLogo}
              alt="playStore/appStore"
              className="footer-app-download"
              width={"300px"}
            />
          </Box>
        </Box>
        <Typography className="footer-copyright-text">
          © 2023 EpicPaws is Designed by Bitwit-tech.
        </Typography>
      </Box>
      {/* footer section end Here */}
    </>
  );
}

export default Footer;
