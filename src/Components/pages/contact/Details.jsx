import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

//css
import "../../../assets/css/contect/details.css";

function Details() {
  return (
    <Box className="details-wrapper">
      <Box className="details-container">
        <Box className="details-form-container">
          <Typography className="details-form-heading">Dog walking services</Typography>
          <Typography className="details-form-description">
            Your email address will not be published. Required fields are marked *
          </Typography>
          <Box component={"form"}>
            <Box className="details-form-fields-wrapper">
            <FormControl className="details-form-field details-form-feed">
              <TextField
                variant="standard"
                name="name"
                type="text"
                placeholder="Name *"
                required
                InputProps={{
                    disableUnderline:true
                }}
              />
            </FormControl>
            <FormControl className="details-form-field details-form-feed">
              <TextField
              variant="standard"
                name="email"
                type="email"
                placeholder="Email *"
                required
                InputProps={{
                    disableUnderline:true
                }}
              />
            </FormControl>
            <FormControl className="details-form-field details-form-feed">
              <TextField
              variant="standard"
                name="subject"
                type="text"
                placeholder="Subject *"
                required
                InputProps={{
                    disableUnderline:true
                }}
              />
            </FormControl>
            </Box>

            <FormControl className="details-form-field" fullWidth>
              <TextField
              variant="standard"
                name="message"
                type="text"
                placeholder="Your Message *"
                required
                multiline
                minRows={11}
                InputProps={{
                    disableUnderline:true
                }}
                fullWidth
              />
            </FormControl>

            <Button className="details-form-submit-btn button-hover-scale">
                Subimt Now
            </Button>
          </Box>
        </Box>

        <Box className="details-map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3525504.0322902733!2d77.61369541250001!3d30.35450132063722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689405054259!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
