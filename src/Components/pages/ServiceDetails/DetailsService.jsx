import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import Heading from "../../utils/Heading";

//css
import "../../../assets/css/serviceDetails/detailsService.css";

//images
import image from "../../../assets/Images/service/matt-nelson.jpg";

//module
import DetailsPackage from "../../module/DetailsPackage";

const essentialList = [
  {
    name: "Puppy Training",
    price: "100$",
  },
  {
    name: "Chewing & Teething",
    price: " 150$",
  },
  {
    name: "Digging & More",
    price: " 120$",
  },
  {
    name: "Fun games",
    price: " 75$",
  },
  { name: "Pet Taxi", price: " 300$" },
];

const completeList = [
  {
    name: "Private Lessons",
    price: "100$",
  },
  {
    name: "Sitting Services",
    price: " 180$",
  },
  {
    name: "Overnight Pet Care",
    price: "250$",
  },
  {
    name: "Fun games",
    price: " 75$",
  },
  { name: "Veterinary Services", price: " 300$" },
  { name: "Dog Grooming", price: "170$" },
];

function DetailsService() {
  return (
    <>
      <Box className="service-details-wrapper">
        <Box className="service-details-conteiner-left">
          <Heading>Our Services</Heading>
          <Typography className="service-details-heading-h1">
            Initial interview Meet and Greet with the Owners
          </Typography>
          <Typography className="service-details-h5">
            FREE for bookings of 4 or more visits. For bookings of 3 or less
            visits, the meet and greet is $15. It is strongly recommended you
            leave a key on file if you are a regular client.
          </Typography>
          <DetailsPackage list={essentialList} heading={"Essentials Package"} />
          <DetailsPackage list={completeList} heading={"Complete Package"} />
        </Box>
        <Box>
          <Box
            component={"img"}
            src={image}
            alt="image"
            className="service-details-image"
          />
          <Typography className="service-details-h5 service-details-h5-margin">
            Our pet sitters are all experienced in walking dogs of all sizes and
            breed. We have adopted the strategy of respected dog psychologist.
            At your complimentary meet and greet we will learn how to mimic you
            whilst.
          </Typography>

          <Box component="form">
            <Box className="service-details-field1">
              <FormControl className="service-form-field">
                <TextField
                  fullWidth
                  variant="standard"
                  type="text"
                  name="name"
                  placeholder="Name"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
              <FormControl className="service-form-field">
                <TextField
                  fullWidth
                  variant="standard"
                  type="text"
                  name="name"
                  placeholder="Email"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Box>
            <FormControl fullWidth className="service-form-field">
              <TextField
                fullWidth
                variant="standard"
                type="text"
                name="name"
                placeholder="Name Of Subject"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className="service-form-field">
              <TextField
                fullWidth
                multiline
                minRows={6}
                variant="standard"
                type="text"
                name="name"
                placeholder="Your Message"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </FormControl>
            <Button className="service-form-submit-btn button-hover-scale">Submit Now</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailsService;
