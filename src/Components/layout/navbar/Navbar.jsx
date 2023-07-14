import { AppBar, Divider, Toolbar, Box, MenuItem, Button } from "@mui/material";
import React from "react";

//Css File
import "../../../assets/css/layout/navbar.css";

//Icon
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

//image
import Nav_Logo from "../../../assets/Images/home/nav-logo.svg";

//module
import { Menu_List } from "../../module/Menu-list";

function Navbar() {
  const homeList = [
    { text: "Main Home", navigate: "" },
    { text: "Heidy Pet Sitter", navigate: "" },
    { text: "Caleb Pet Sitter", navigate: "" },
    { text: "Dog Boarding", navigate: "" },
    { text: "Dog Grooming", navigate: "" },
    { text: "Dog Training", navigate: "" },
    { text: "Dog Food & Nutrition", navigate: "" },
    { text: "Dog Veterinary", navigate: "" },
  ];

  const serviceList = [
    { text: "Our Services", navigate: "" },
    { text: "Service Details", navigate: "" },
    { text: "Dog Walker Profile", navigate: "" },
  ];

  const shopList = [
    { text: "Single Product", navigate: "" },
    { text: "Shop Page", navigate: "" },
    { text: "Checkout", navigate: "" },
    { text: "My Cart", navigate: "" },
    { text: "My Account", navigate: "" },
  ];

  const blogList = [
    { text: "Single Article", navigate: "" },
    { text: "Blog Grid", navigate: "" },
    { text: "Blog Layouts", navigate: "" },
  ];

  const pageList = [
    { text: "Booking", navigate: "" },
    { text: "Our Team", navigate: "" },
    { text: "Princing Plans", navigate: "" },
    { text: "404 not Found", navigate: "" },
  ];

  return (
    <>
      <AppBar className="nav-wrapper" position="static">
        <Toolbar className="nav-container">
          <SearchIcon fontSize="large" className="nav-responsive-mobile"/>
          <Box>
            <Box component={"img"} src={Nav_Logo} alt="logo" />
          </Box>
          <Box className="nav-list nav-responsive-desktop">
            <MenuItem className="nav-list-item">
              <span>
                Home &nbsp; <i className="arrow-down"></i>
              </span>
              <Menu_List options={homeList} />
            </MenuItem>

            <MenuItem className="nav-list-item">About Us</MenuItem>
            <MenuItem className="nav-list-item">
              Service
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <Menu_List options={serviceList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              Shop
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <Menu_List options={shopList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              Blog
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <Menu_List options={blogList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              Page
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <Menu_List options={pageList} />
            </MenuItem>
            <MenuItem className="nav-list-item">Contact Us</MenuItem>
          </Box>

          <Box className="nav-responsive-desktop">
            <Box className="nav-btn-wrapper">
              <SearchIcon fontSize="large" />
              <Button className="nav-btn button-hover-scale">Book Now</Button>
            </Box>
          </Box>
          <MenuIcon fontSize="large" className="nav-responsive-mobile"/>
        </Toolbar>
      </AppBar>
      <Divider className="nav-divider" />
    </>
  );
}


export default Navbar;
