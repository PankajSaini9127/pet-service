import React from "react";

//css
import "../../../assets/css/home/ourTeam.css";
import { Box, Divider, Typography } from "@mui/material";

//img
import member1 from "../../../assets/Images/members/member1.jpeg";
import member2 from "../../../assets/Images/members/member2.jpeg";
import member3 from "../../../assets/Images/members/member3.jpeg";
import member4 from "../../../assets/Images/members/members-4.jpg";

//component
import TeamMember from "../../module/TeamMember";

const members = [
  {
    name: "Laura Gallagher",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    profile: member1,
  },
  {
    name: "Jennifer Lopaz",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    profile: member2,
  },
  {
    name: "Irren Brooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    profile: member3,
  },
  {
    name: "Kimora Sheppard",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    profile: member4,
  },
];

function OurTeam() {
  return (
    <>
    <section className="our-team-wrapper">
      <Box className="our-team-heading">
        <Typography className="heading-title-globle">
          Our Awesome Team
        </Typography>
        <Typography className="our-team-sub-heading">
          Booking a dog walker with EpicPaws is easy and safe in three easy
          steps.
        </Typography>
      </Box>
      <Box className="team-details-wrapper">
        {members.map((member) => (
          <TeamMember member={member} />
        ))}
       
      </Box>
     
    </section>
     <Divider className="team-divider"/>
     </>
  );
}

export default OurTeam;
