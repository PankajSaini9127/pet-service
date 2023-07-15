import React, { useState } from "react";

import DatePicker from "react-datepicker";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

//SVG ICON
import DogyCare from "../../assets/Images/home/first-aid-kit.svg";
import HouseSitting from "../../assets/Images/home/house-siting.svg";
import DogWalking from "../../assets/Images/home/dog-walking-serv-1.svg";
import DropVisit from "../../assets/Images/home/dropvisit.svg";

//img
import arrow from "../../assets/Images/home/Epic-arrow4.png";

//CSS
import "../../assets/css/utilsComponents/appoinment.css";
import "react-datepicker/dist/react-datepicker.css";

//modules
import Heading from "../utils/Heading";

function Appoinment() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    //appoinment section start here
    <section className="appoinment-wrapper">
      <Box className="appoinment-container">
        <Box
          component={"img"}
          src={arrow}
          alt="arrow"
          className="appoinment-arrow"
        />
        <Box className="appoinment-heading-wrapper">
          <Heading color={'white'}>Service Appoinment</Heading>
          <Typography className="appoinment-heading heading-title-globle">
            Book Now An Appointment
          </Typography>
        </Box>
        <Box className="appoinment-form">
          <Box>
            <Typography>I am looking for service of my:</Typography>
            <FormControlLabel
              value="dog"
              control={<Checkbox />}
              label="Dog"
              labelPlacement="end"
            />
            <FormControlLabel
              value="cat"
              control={<Checkbox />}
              label="Cat"
              labelPlacement="end"
            />
          </Box>

          <Box>
            <Typography>What service do you need ?</Typography>
            <FormControl>
              <RadioGroup
                defaultValue="outlined"
                name="radio-buttons-group"
                className="radioBtnGroup"
              >
                <Radio
                  value="3"
                  label="Houese Sitting"
                  variant="outlined"
                  id="houseSiting"
                />
                <Radio
                  value="2"
                  label="Drop In-VisIts"
                  variant="soft"
                  id="dropVisit"
                />
                <Radio
                  value="1"
                  label="Dogy care"
                  variant="solid"
                  id="dogyCare"
                />
                <Radio
                  value=""
                  label="Dog Walking"
                  variant="plain"
                  id="DogWalking"
                />
              </RadioGroup>

              <Box className="appoinment-radio-btn">
                <Box component={"label"} htmlFor="houseSiting">
                  <Box component="img" src={HouseSitting} alt="" />
                  <Typography>House Sitting</Typography>
                </Box>
                <Box component={"label"} htmlFor="dropVisit">
                  <Box component="img" src={DropVisit} alt="" />
                  <Typography>Drop In-VisIts</Typography>
                </Box>
                <Box component={"label"} htmlFor="dogyCare">
                  <Box component="img" src={DogyCare} alt="" />
                  <Typography>Dogy care</Typography>
                </Box>
                <Box component={"label"} htmlFor="DogWalking">
                  <Box component="img" src={DogWalking} alt="" />
                  <Typography>Dog Walking</Typography>
                </Box>
              </Box>
            </FormControl>
          </Box>

          <Box>
            <FormControl className="appoinment-adressInput" fullWidth>
              <Typography>What is your address ?</Typography>
              <TextField
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl className="appoinment-dateRenge">
              <Typography>What dates do you need ?</Typography>
              <Box>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </Box>
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <Typography>What time do you need ?</Typography>
              <Box className="appoinment-timeslot">
                <Box className="appoinment-timeslot-time">6am - 11am</Box>
                <Box className="appoinment-timeslot-time">11am - 3pm</Box>
                <Box className="appoinment-timeslot-time">3pm - 10pm</Box>
              </Box>
            </FormControl>
          </Box>
          <Box className="appoinment-btn">
            <Button className="button-hover-scale">Submit</Button>
          </Box>
        </Box>
      </Box>
    </section>
    // appoinment section end here
  );
}

export default Appoinment;
