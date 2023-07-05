import React from "react";

//css
import "../../../assets/css/home/heroSection.css";
import { Box, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Box className="hero-section-wrapper">
      <Box className="hero-section-heading-wrapper">
        <Typography className="hero-section-heading">
          Looking for anyone to walk your friend?
          <br />
          Book on <span className="hero-section-heading-brand">EpicPaws.</span>
        </Typography>
        <Typography className="hero-section-description">
          We'll help your dog grow through soclisation and learn how to explore
          their world Play,love and exercise for your dog while you're out. Our
          dog walking service runs throughout the day.
        </Typography>
      </Box>
      <Box>hii from right side</Box>
    </Box>
  );
}

export default HeroSection;
