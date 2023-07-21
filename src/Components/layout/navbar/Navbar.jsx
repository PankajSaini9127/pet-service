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
import { MenuList } from "../../module/Menu-list";
import { Link } from "react-router-dom";

function Navbar() {
  const homeList = [
    { text: "Main Home", navigate: "/" },
    { text: "Heidy Pet Sitter", navigate: "/" },
    { text: "Caleb Pet Sitter", navigate: "/" },
    { text: "Dog Boarding", navigate: "/" },
    { text: "Dog Grooming", navigate: "/" },
    { text: "Dog Training", navigate: "/" },
    { text: "Dog Food & Nutrition", navigate: "/" },
    { text: "Dog Veterinary", navigate: "/" },
  ];

  const serviceList = [
    { text: "Our Services", navigate: "/our-service" },
    { text: "Service Details", navigate: "/single-service" },
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
    { text: "Booking", navigate: "/booking" },
    { text: "Our Team", navigate: "/our-team" },
    { text: "Princing Plans", navigate: "/pricing-table" },
    { text: "404 not Found", navigate: "/404" },
  ];

  return (
    <>
      <AppBar className="nav-wrapper" position="static">
        <Toolbar className="nav-container">
          <SearchIcon fontSize="large" className="nav-responsive-mobile" />
          <Box>
            <Box component={"img"} src={Nav_Logo} alt="logo" />
          </Box>
          <Box className="nav-list nav-responsive-desktop">
            <MenuItem className="nav-list-item">
              <span>
                Home &nbsp; <i className="arrow-down"></i>
              </span>
              <MenuList options={homeList} />
            </MenuItem>

            <MenuItem className="nav-list-item">
              <Link to="about-us" className="nav-link-tag">
                About Us{" "}
              </Link>
            </MenuItem>

            <MenuItem className="nav-list-item">
              Service
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <MenuList options={serviceList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              Shop
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <MenuList options={shopList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              Blog
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <MenuList options={blogList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              Page
              <span>
                {" "}
                &nbsp; <i className="arrow-down"></i>
              </span>
              <MenuList options={pageList} />
            </MenuItem>
            <MenuItem className="nav-list-item">
              <Link to="contact-us" className="nav-link-tag">
                Contact Us
              </Link>
            </MenuItem>
          </Box>

          <Box className="nav-responsive-desktop">
            <Box className="nav-btn-wrapper">
              <SearchIcon fontSize="large" />
              <Link to="/booking">
              <Button className="nav-btn button-hover-scale">Book Now</Button>
              </Link>
            </Box>
          </Box>
          <MenuIcon fontSize="large" className="nav-responsive-mobile" />
        </Toolbar>
      </AppBar>
      <Divider className="nav-divider" />
    </>
  );
}

export default Navbar;
