import React from "react";
import { Box, Button, Typography } from "@mui/material";

//css
import "../../assets/css/utilsComponents/heroSection.css";

//image
import heroImg from "../../assets/Images/home/slider1.jpg";
import heroImg2 from "../../assets/Images/home/epipasw-slider6.jpg";
import heroImg3 from "../../assets/Images/home/epipasw-slider5.jpg";
import heroImg4 from "../../assets/Images/home/epic-slider2.jpg";

function HeroSection() {
  return (
    <Box className="hero-section-wrapper">
      <Box className="hero-section-heading-wrapper">
        <Typography className="heading-title-globle hero-section-title">
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
      <Box className="hero-section-right-container">
        <Box className="hero-section-image-container">
          <Box>
            <Box
              component={"img"}
              src={heroImg}
              alt="image"
              className="hero-image hero-image-top hero-image-left"
            />
            <Box
              component={"img"}
              src={heroImg2}
              alt="image"
              className="hero-image hero-image-bottom hero-image-left"
            />
          </Box>
          <Box className="hero-section-image-right">
            <Box
              component={"img"}
              src={heroImg4}
              alt="image"
              className="hero-image hero-image-top"
            />
            <Box
              component={"img"}
              src={heroImg3}
              alt="image"
              className="hero-image hero-image-bottom"
            />
          </Box>
        </Box>
      </Box>

      <Box className="hero-section-overlay">
        <Box className="hero-section-overlay-symbol" />
        <Typography className="hero-section-overlay-text">
          Pick the pet service that's right for your pet!
        </Typography>
        <Button className="hero-section-overlay-button button-hover-scale">
          View Pricings
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
