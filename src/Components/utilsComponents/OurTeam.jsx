import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";

//css
import "../../assets/css/utilsComponents/ourTeam.css";

//utilis
import Heading from "../utils/Heading";



//component
import TeamMember from "../module/TeamMember";
import { Link } from "react-router-dom";



function OurTeam({ members, exprience }) {
  return (
    <>
      <section className="our-team-wrapper">
        {!exprience && (
          <Box className="our-team-heading">
            <Typography className="heading-title-globle">
              Our Awesome Team
            </Typography>
            <Typography className="our-team-sub-heading">
              Booking a dog walker with EpicPaws is easy and safe in three easy
              steps.
            </Typography>
          </Box>
          
        )}

        <Box className="team-details-wrapper">
          {exprience && (
            <Box className="our-exprience-team-heading">
              <Heading>Exprience Team</Heading>
              <Typography className="heading-title-globle">
                Meet Our Experienced Dog Trainers
              </Typography>
              <Typography className="our-exprience-sub-heading">
                Pet Food pet supplies gimme five puppy cage food feathers food
                heel feathers running pet gate walk lazy dog Spike.
              </Typography>
              <Link to={'/booking'}>
              <Button className="exprience-team-book-btn button-hover-scale">
                Book A Dog Walker
              </Button>
              </Link>
            </Box>
          )}

          {members && members.map((member) => <TeamMember member={member} />)}
        </Box>
      </section>
      <Divider className="team-divider" />
    </>
  );
}

export default OurTeam;
