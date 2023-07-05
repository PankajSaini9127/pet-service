import {
  AppBar,
  Divider,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";

//Css File
import "./Navbar.css";

//Icon
import SearchIcon from "@mui/icons-material/Search";
import { Nav_Logo } from "../../Assests/Images-link";
import { Home_list } from "./Menu-list";

function Navbar() {


  return (
    <>
      <AppBar className="nav-wrapper" position="static">
        <Toolbar className="nav-container">
          <Box>
            <Box component={"img"} src={Nav_Logo} alt="logo" />
          </Box>
          <Box className="nav-list">
            <MenuItem
              className="nav-list-item"
            >
              <span>
                Home &nbsp; <i className="arrow-down"></i>
              </span>
             
            </MenuItem>
            {/* <Home_list  className={'home-list nav-menu'} /> */}
            <MenuItem className="nav-list-item">About Us</MenuItem>
            <MenuItem className="nav-list-item">
              Service
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              {/* <Home_list  /> */}
            </MenuItem>
            <MenuItem className="nav-list-item">
              Shop
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              {/* <Home_list  /> */}
            </MenuItem>
            <MenuItem className="nav-list-item">
              Blog
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              {/* <Home_list  /> */}
            </MenuItem>
            <MenuItem className="nav-list-item">
              Page
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              {/* <Home_list  /> */}
            </MenuItem>
            <MenuItem className="nav-list-item">Contact Us</MenuItem>
          </Box>

          <Box>
            <Box className="nav-btn-wrapper">
              <SearchIcon fontSize="large" />
              <Button className="nav-btn">Book Now</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider className="nav-divider" />
    </>
  );
}
export default Navbar;
