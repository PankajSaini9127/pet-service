import {
  AppBar,
  Divider,
  Toolbar,
  Box,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  Collapse,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//Css File
import "../../../assets/css/layout/navbar.css";

//Icon
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

//image
import Nav_Logo from "../../../assets/Images/home/nav-logo.svg";

//module
import { MenuList } from "../../module/Menu-list";
import { Link, useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";

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
  {text:"Doctors", navigate:"/doctor-list"},
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

function Navbar() {
  const navigate = useNavigate();


  const [drawerOpen, setDrawerOpen] = useState(false);

  //mobile version drawer open
  const [open, setOpen] = useState({});

  function handleCollapse(name) {
    console.log(open[name]);
    setOpen({ [name]: !open[name] });
  }

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

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
            {
              
            }
              <Link to="/profile">
              <Typography>
              Profile
              </Typography>
            </Link>
          </Box>
          <MenuIcon
            fontSize="large"
            className="nav-responsive-mobile"
            onClick={() => {
              setDrawerOpen(true);
            }}
          />
        </Toolbar>
      </AppBar>

      <Divider className="nav-divider" />
      <Drawer anchor={"right"} open={drawerOpen} onClose={handleDrawerClose}>
        <Box className="nav-drawer-container">
          <Box
            component={"img"}
            src={Nav_Logo}
            alt="logo"
            className="naw-drawer-logo"
          />
          <List>
            <ListItemButton onClick={() => handleCollapse("home")}>
              <ListItem className="nav-drawer-list">Home</ListItem>
              {open.home ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <NestedList
              list={homeList}
              open={open.home}
              navigate={navigate}
              setOpen={setOpen}
              drawerClose={handleDrawerClose}
            />

            <ListItemButton onClick={()=>{navigate("about-us");handleDrawerClose()}}>
              <ListItem className="nav-drawer-list">About Us</ListItem>
            </ListItemButton>
            <ListItemButton onClick={() => handleCollapse("service")}>
              <ListItem className="nav-drawer-list">Service</ListItem>
              {open.service ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <NestedList
              list={serviceList}
              open={open.service}
              navigate={navigate}
              setOpen={setOpen}
              drawerClose={handleDrawerClose}
            />

            <ListItemButton onClick={() => handleCollapse("shop")}>
              <ListItem className="nav-drawer-list">Shop</ListItem>
              {open.shop ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <NestedList
              list={shopList}
              open={open.shop}
              navigate={navigate}
              setOpen={setOpen}
              drawerClose={handleDrawerClose}
            />

            <ListItemButton onClick={() => handleCollapse("blog")}>
              <ListItem className="nav-drawer-list">Blog</ListItem>
              {open.blog ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <NestedList
              list={blogList}
              open={open.blog}
              navigate={navigate}
              setOpen={setOpen}
              drawerClose={handleDrawerClose}
            />

            <ListItemButton onClick={() => handleCollapse("page")}>
              <ListItem className="nav-drawer-list">Page</ListItem>
              {open.page ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <NestedList
              list={pageList}
              open={open.page}
              navigate={navigate}
              setOpen={setOpen}
              drawerClose={handleDrawerClose}
            />

            <ListItemButton onClick={()=>{navigate("contact-us");handleDrawerClose()}}>
              <ListItem className="nav-drawer-list">Contact Us</ListItem>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* //nested list */}
    </>
  );
}

export default Navbar;

//nesrted list

function NestedList({ list, open, navigate, setOpen, drawerClose }) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {list.map((item) => (
          <ListItem
            sx={{ pl: 4 }}
            className="nav-drawer-sub-list"
            onClick={() => {
              navigate(item.navigate);
              setOpen({});
              drawerClose();
            }}
          >
            {item.text}
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
}
