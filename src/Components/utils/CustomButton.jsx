import { Box, Button } from "@mui/material";
import React from "react";

import "../../assets/css/utils/custombtn.css";

function CustomButton({children}) {
  return (
    <>
      <Box className="custom-btn-wrapper">
        <Box className="custom-btn-container">
          <Button>{children}</Button>
        </Box>
      </Box>
    </>
  );
}

export default CustomButton;
