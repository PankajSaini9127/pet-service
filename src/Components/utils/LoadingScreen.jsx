import { Box, Dialog } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


function LoadingScreen() {

  const {loading:{loading}} = useSelector(s=>s);

  return (
    <Dialog open={loading} className="loading-dialog">
    <Box
      sx={{
        height: "100vh",
        width: "400px",
      }}
    >
      <Box sx={{
        backgroundImage:`url(http://northerntechmap.com/assets/img/loading-dog.gif)`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height: "40%",
        backgroundSize: "contain",
        position:"relative",
        top:'30%'
    }}  />
    </Box>
    </Dialog>
  );
}

export default LoadingScreen;
