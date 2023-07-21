import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Heading from "../utils/Heading";

//css
import "../../assets/css/module/dogWalker.css";

import { Link } from "react-router-dom";

function DogWalker({profile}) {
  return (
    <Box className="dog-walker-wrapper">
      <Box className={profile.order? "dog-walker-image-container": "dog-walker-image-container order2"}>
        <Box component={"img"} src={profile.image} alt="dog walker" />
      </Box>
      <Box className="dog-walker-text-container">
        <Heading className="dog-walker-heading">{profile.heading}</Heading>
        <Typography className="dog-walker-h1">{profile.type}</Typography>
        <Typography className="dog-walker-h4">
         {profile.description}
        </Typography>
        <Link to="/booking">
        <Button className="book-dog-walk-btn r">Book A Dog Walk</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default DogWalker;