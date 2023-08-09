import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

//icon
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

//css
import "../../../assets/css/doctor/listDoctor.css";

const image =
  "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=";

function ListDoctors() {
  return (
    <>
      <Box>
        <Typography textAlign={"center"} fontSize={"35px"} fontWeight={"600"}>
          Available Doctors
        </Typography>
        <Box className="dr-list-wrapper">
          <Grid container spacing={4}>
            <DRProfile/>
            <DRProfile/>
            <DRProfile/>
            <DRProfile/>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ListDoctors;


function DRProfile (){
  return(
    <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card className="dr-profile-card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={image}
                    alt="green iguana"
                    height={"250px"}
                    width={"100%"}
                  />
                  <CardContent>
                    <Typography  variant="h5" component="div" color="text.secondary">
                      Dr. Kiran Sharma
                    </Typography>
                    <Rating name="dr-rating" readOnly value={5} gutterBottom size="small"/>

                    <Typography variant="body2" gutterBottom color="text.secondary">
                     <span><WorkspacePremiumIcon fontSize="small"/></span> B.V.Sc & A.H, M.V.Sc Veterinary Surgery & Radiology, PhD.
                      Scholar
                    </Typography>
                    <Typography  variant="body2" color="text.secondary" gutterBottom>
                  <span><BusinessCenterIcon fontSize="small"/></span>  6+ years of professional experience
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
  )
}