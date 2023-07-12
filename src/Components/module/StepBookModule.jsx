import { Box, Button, Typography } from "@mui/material";
import React from "react";

//css
import "../../assets/css/module/stepBookModule.css";

//images
import img1 from "../../assets/Images/home/Epic-service_icon1.png";

function StepBookModule({image,heading,description}) {
  return (
    <Box className="step-book-module-wrapper">
      <Box
        component={'img'}
        src={image}
        alt="img"
        className="step-book-module-image"
      />
      <Typography className="step-book-module-heading">
       {heading}
      </Typography>
      <Typography className="step-book-module-description">
       {description}
      </Typography>
      <Button className="step-book-module-btn">Read More</Button>
    </Box>
  );
}

export default StepBookModule;
