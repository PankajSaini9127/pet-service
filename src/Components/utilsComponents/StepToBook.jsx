import { Box, Typography } from "@mui/material";
import React from "react";

//css
import "../../assets/css/utilsComponents/stepToBook.css";

//image
import arrow from "../../assets/Images/home/Epic-arrow2.png";
import img1 from "../../assets/Images/home/Epic-service_icon1.png";
import img2 from "../../assets/Images/home/Epic-service_icon2.png";
import img3 from "../../assets/Images/home/Epic-service_icon3.png";

//module
import StepBookModule from "../module/StepBookModule";

function StepToBook() {
  return (
    <>
      <Box className="step-book-wrapper">
        <Box
          component={"img"}
          src={arrow}
          alg="arrow"
          height="250px"
          className="step-book-arrow"
        />
        <Typography className="step-book-heading heading-title-globle">
          How does it work?
        </Typography>
        <Typography className="step-book-description">
          Booking a dog walker with EpicPaws is easy and safe in three easy
          steps.
        </Typography>

        <Box className="step-book-container">
               <StepBookModule image={img1} heading={"Search for a dog walker"} description={"Choose from a range of experienced dog walkers nearby."}/>
               <StepBookModule image={img2} heading={"Organise a free meet"} description={"Meet your sitter for free before you make a dog walk booking. "}/>
               <StepBookModule image={img3} heading={"Confirm booking"} description={"Benefit from in-house customer support and free veterinary."}/>
        </Box>
      </Box>
    </>
  );
}

export default StepToBook;
