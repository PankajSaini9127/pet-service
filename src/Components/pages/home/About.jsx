import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";

//css
import "../../../assets/css/home/about.css";

//images
import aboutBanner from "../../../assets/Images/home/about-banner.png";
import Heading from "../../utils/Heading";

//icon
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";



function About() {
  return (
    //about page start here\
    <section className="about-wrapper">
      <Box className="about-left-container">
        <Box
          component={"img"}
          src={aboutBanner}
          alt="about bannner"
          width={"550px"}
        />
      </Box>
      <Box className="about-container-right">
        <Heading>Tursted Dog Walker</Heading>
        <Typography className="heading-title-globle about-heading">
          Search & Find Dog Walking Services In Your Area
        </Typography>
        <Typography className="about-description">
          We provide group and individual daily dogs walking that are tailored
          to fit you and your dog’s needs. During the dog walking booking, your
          sitter will walk and engage with your dog on a safe route.
        </Typography>

        <Box className="about-list-container">
          <List>
            <ListItem>
              <PetsRoundedIcon
                color="green"
                fontSize="small"
                className="listItem-icon"
              />
              <Typography component={"span"} className="listItem-text">
                Professional Service
              </Typography>
            </ListItem>
            <ListItem>
              <LocationOnRoundedIcon
                color="green"
                fontSize="small"
                className="listItem-icon"
              />
              <Typography component={"span"} className="listItem-text">
                GPS Tracking
              </Typography>
            </ListItem>
            <ListItem>
              <MonitorRoundedIcon
                color="green"
                fontSize="small"
                className="listItem-icon"
              />
              <Typography component={"span"} className="listItem-text">
                Online Booking
              </Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <PublicIcon
                color="green"
                fontSize="small"
                className="listItem-icon"
              />
              <Typography component={"span"} className="listItem-text">
              30 Award Winner
              </Typography>
            </ListItem>
            <ListItem>
              <StarIcon
                color="green"
                fontSize="small"
                className="listItem-icon"
              />
              <Typography component={"span"} className="listItem-text">
              Top Worldwide
              </Typography>
            </ListItem>
            <ListItem>
              <EmojiEventsIcon
                color="green"
                fontSize="small"
                className="listItem-icon"
              />
              <Typography component={"span"} className="listItem-text">
              500+ 5 Star Reviews
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Button className="about-btn button-hover-scale">About us</Button>
      </Box>
    </section>
    //about page end here
  );
}

export default About;


