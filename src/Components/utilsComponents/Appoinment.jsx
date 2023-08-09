import React, { useState } from "react";

import DatePicker from "react-datepicker";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
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
  const [formData, setFormData] = useState({
    pets: [],
    service: [],
    address: "",
    startDate: Date.now(),
    endDate: Date.now()
  });

  console.log(formData);

  function handleChange(e) {
    switch (e.target.name) {
      case "label":
        if (e.target.checked) {
          setFormData((old) => ({
            ...old,
            pets: [...old.pets, e.target.value],
          }));
        } else {
          setFormData((old) => ({
            ...old,
            pets: old.pets.filter((item) => item !== e.target.value),
          }));
        }
        break;
      case "service":
        if (e.target.checked) {
          setFormData((old) => ({
            ...old,
            service: [...old.service, e.target.value],
          }));
        } else {
          setFormData((old) => ({
            ...old,
            service: old.service.filter((item) => item !== e.target.value),
          }));
        }
        break;
      default:
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    }
  };

  function handleDate(date,name){
    setFormData({
      ...formData,
      [name]:date
    })
  }

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
          <Heading color={"white"}>Service Appoinment</Heading>
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
              onChange={handleChange}
              name="label"
            />
            <FormControlLabel
              value="cat"
              control={<Checkbox />}
              label="Cat"
              labelPlacement="end"
              onChange={handleChange}
              name="label"
            />
          </Box>

          <Box>
            <Typography>What service do you need ?</Typography>
            <FormControl>
              <Box className="radioBtnGroup">
                <FormControlLabel
                  value="Houese Sitting"
                  control={<Checkbox id="houseSiting" />}
                  // label="Houese Sitting"
                  // labelPlacement="end"
                  onChange={handleChange}
                  name="service"
                />
                <FormControlLabel
                  value="Drop In-VisIts"
                  control={<Checkbox id="dropVisit" />}
                  label="Drop In-VisIts"
                  labelPlacement="end"
                  onChange={handleChange}
                  name="service"
                />
                <FormControlLabel
                  value="Dogy care"
                  control={<Checkbox id="dogyCare" />}
                  label="Dogy care"
                  labelPlacement="end"
                  onChange={handleChange}
                  name="service"
                />
                <FormControlLabel
                  value="Dog Walking"
                  control={<Checkbox id="DogWalking" />}
                  label="Dog Walking"
                  labelPlacement="end"
                  onChange={handleChange}
                  name="service"
                />
              </Box>
              <Box className="appoinment-radio-btn">
                <Box
                  component={"label"}
                  htmlFor="houseSiting"
                  className={
                    formData.service.includes("Houese Sitting") &&
                    "appoinment-radio-btn-active"
                  }
                >
                  <Box component="img" src={HouseSitting} alt="" />
                  <Typography>House Sitting</Typography>
                </Box>
                <Box
                  component={"label"}
                  htmlFor="dropVisit"
                  className={
                    formData.service.includes("Drop In-VisIts") &&
                    "appoinment-radio-btn-active"
                  }
                >
                  <Box component="img" src={DropVisit} alt="" />
                  <Typography>Drop In-VisIts</Typography>
                </Box>
                <Box
                  component={"label"}
                  htmlFor="dogyCare"
                  className={
                    formData.service.includes("Dogy care") &&
                    "appoinment-radio-btn-active"
                  }
                >
                  <Box component="img" src={DogyCare} alt="" />
                  <Typography>Dogy care</Typography>
                </Box>
                <Box
                  component={"label"}
                  htmlFor="DogWalking"
                  className={
                    formData.service.includes("Dog Walking") &&
                    "appoinment-radio-btn-active"
                  }
                >
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
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl className="appoinment-dateRenge">
              <Typography>What dates do you need ?</Typography>
              <Box>
                <DatePicker
                  selected={formData.startDate}
                  onChange={(date)=>handleDate(date,"startDate")}
                  dateFormat="dd/MM/yyyy"
                  
                />
                <DatePicker
                  selected={formData.endDate}
                  onChange={(date)=>handleDate(date,"endDate")}
                  dateFormat="dd/MM/yyyy"
                />
              </Box>
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <Typography>What time do you need ?</Typography>
              <Box className="appoinment-timeslot">
                <RadioGroup
                  name="time"
                  onChange={handleChange}
                  className="radioBtnGroup"
                >
                  <Radio value="6am-11am" id="6am-11am" />
                  <Radio value="11am-3pm" id="11am-3pm" />
                  <Radio value="3pm-10pm" id="3pm-10pm" />
                </RadioGroup>
                <Box
                  component={"label"}
                  htmlFor="6am-11am"
                  className={` appoinment-timeslot-time ${
                    formData.time === "6am-11am" && "appoinment-timeslot-active"
                  }`}
                >
                  6am - 11am
                </Box>
                <Box
                  component={"label"}
                  htmlFor="11am-3pm"
                  className={` appoinment-timeslot-time ${
                    formData.time === "11am-3pm" && "appoinment-timeslot-active"
                  }`}
                >
                  11am - 3pm
                </Box>
                <Box
                  component={"label"}
                  htmlFor="3pm-10pm"
                  className={` appoinment-timeslot-time ${
                    formData.time === "3pm-10pm" && "appoinment-timeslot-active"
                  }`}
                >
                  3pm - 10pm
                </Box>
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
