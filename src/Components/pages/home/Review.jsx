import { Box, Typography } from "@mui/material";
import React from "react";

import { Carousel } from "react-responsive-carousel";

//css
import "../../../assets/css/home/review.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//images
import User1 from "../../../assets/Images/testimonials/testimonials-2.jpg";
import User2 from "../../../assets/Images/testimonials/testimonials-img2.jpg";

function Review() {
  return (
    //review section start here
    <section className="review-wrapper">
      <Typography className="heading-title-globle review-heading">
        What our customers said about our services
      </Typography>
      <Carousel
        showArrows={true}
        useKeyboardArrows={true}
        autoPlay
        stopOnHover
        swipeable={true}
        infiniteLoop
      >
        <Box className="review-container">
          <Box className="review-info-container">
            <Typography className="review-customber-review">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aliquid at assumenda nobis dolor, quas quos exercitationem rerum
              cupiditate nostrum, doloribus repellendus consectetur, quidem odio
              expedita blanditiis nulla tempora in? Autem earum ."
            </Typography>
            <Typography className="review-customber-name">
              Cathreen pit
            </Typography>
            <Typography className="review-date">January 25, 2023</Typography>
          </Box>
          <Box className="review-image-container">
            <Box
              component={"img"}
              src={User2}
              alt="user profile"
              className="review-image"
            />
            {/* <Box component="span">"</Box> */}
          </Box>
        </Box>
        <Box className="review-container">
          <Box className="review-info-container">
            <Typography className="review-customber-review">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aliquid at assumenda nobis dolor, quas quos exercitationem rerum
              cupiditate nostrum, doloribus repellendus consectetur, quidem odio
              expedita blanditiis nulla tempora in? Autem earum ."
            </Typography>
            <Typography className="review-customber-name">
              John Doe
            </Typography>
            <Typography className="review-date">January 25, 2023</Typography>
          </Box>
          <Box className="review-image-container">
            <Box
              component={"img"}
              src={User1}
              alt="user profile"
              className="review-image"
            />
            {/* <Box component="span">"</Box> */}
          </Box>
        </Box>
      </Carousel>
    </section>
    //review section ends here
  );
}

export default Review;
