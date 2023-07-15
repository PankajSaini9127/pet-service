import { Box, Typography } from "@mui/material";
import React from "react";

//css/
import "../../assets/css/module/branchModule.css";

function BarnchInfoModule({ branch }) {
  return (
    <Box className="branch-details-container">
      {/* <Box className="branch-profile-overlay" /> */}
      <Box
        component={"img"}
        src={branch.profile}
        alt="profile"
        className="profile"
      />
      <Typography className="branch-name">{branch.name}</Typography>
      <Typography className="branch-address">{branch.description}</Typography>
      <Typography className="branch-email">
        {branch.email}
      </Typography>
      <Typography className="branch-day-off">{branch.dayOff}:Close</Typography>
    </Box>
  );
}

export default BarnchInfoModule;
