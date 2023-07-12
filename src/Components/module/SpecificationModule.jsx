import { Box, Typography } from "@mui/material";
import React from "react";

//css
import "../../assets/css/module/specification.css";

function SpecificationModule({ item }) {
  return (
    <>
      <Box className="specification-m-wrapper">
        <Box className="specification-m-overlay"/>
          <Box className="specification-m-container">
            <Box className="specification-m-image">
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                height="50px"
              />
            </Box>

            <Typography className="specification-m-title">
              {item.title}
            </Typography>
            <Typography className="specification-m-description">
              {item.desciption}
            </Typography>
          </Box>
      </Box>
    </>
  );
}

export default SpecificationModule;
