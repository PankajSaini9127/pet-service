import React from "react";

//css
import "../../../assets/css/home/specification.css";
import { Box } from "@mui/material";

//images
import img1 from "../../../assets/Images/home/heart-paw.svg";
import img2 from "../../../assets/Images/home/medal.svg";
import img3 from "../../../assets/Images/home/walking-dog.svg";

//module
import SpecificationModule from "../../module/SpecificationModule";

const specification = [
  {
    image: img1,
    title: "Safe",
    desciption:
      "Your dog will be walked in a safe, open space & will return home happy and tired.",
  },
  {
    image: img2,
    title: "Tailored",
    desciption:
      "We are experts at tailoring and each walk to dog’s individual need dog.",
  },
  {
    image: img3,
    title: "Social",
    desciption:
      "We'll help your dog grow through soclisation and learn how to start explore.",
  }
];

function Specification() {
  return (
    <section className="specification-wrapper">
      <Box className="specification-container">
        {specification.map((item) => (
          <SpecificationModule item={item}/>
        ))}
      </Box>
    </section>
  );
}

export default Specification;
