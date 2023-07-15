import { Box } from "@mui/material";
import React from "react";

//css
import "../../../assets/css/contect/branchInfo.css";

//module
import BarnchInfoModule from "../../module/BarnchInfoModule";

//images
import Image1 from "../../../assets/Images/utils/contact1.jpg";
import Image2 from "../../../assets/Images/utils/contact2.jpg";
import Image3 from "../../../assets/Images/utils/contact3.jpg";

const data = [
  {
    profile: Image1,
    name: "Las Vegas",
    description: "3164 N Delaware RD Milan, Indiana(IN), 47031",
    email: "test@bitwit.com",
    dayOff: "Saturday - Sunday",
  },
  {
    profile: Image2,
    name: "New York",
    description: "418 W 130th St #61 New York",
    email: "test@bitwit.com",
    dayOff: "Saturday - Sunday",
  },
  {
    profile: Image3,
    name: "Washington DC",
    description: "University Place, Washington(WA), 98467",
    email: "test@bitwit.com",
    dayOff: "Saturday - Sunday",
  },
];

function BranchDetails() {
  return (
    <>
      <Box className="branch-details-wrapper">
        <Box className="branch-container">
          {data.map((item) => (
            <BarnchInfoModule branch={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default BranchDetails;
