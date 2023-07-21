import React from "react";

//css
import "../../assets/css/utilsComponents/package.css";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Heading from "../utils/Heading";

//images
import solowalk from "../../assets/Images/home/solo-walk.png";
import groupWalk from "../../assets/Images/home/group-walk.png";
import arrow from "../../assets/Images/home/Epic-arrow3.png";

function Package({ pricingTabel }) {
  const trandingPlanList = [
    { time: "1 hour", price: "$20 per walk" },
    { time: "45 Mint", price: "$18 per walk" },
    { time: "30 Mint", price: "$15 per walk" },
    { time: "15 Mint", price: "$10 per walk" },
  ];
  return (
    //  package section start here
    <section className="package-wrapper">
      {!pricingTabel ?
      <Box className="package-container1">
        <Box
          className="package-arrow"
          component={"img"}
          src={arrow}
          alt="arrow"
        />
        <Box className="package-heading-container">
          <Box className="package-empty" />
          <Heading>Service Package</Heading>
          <Typography className="package-heading heading-title-globle">
            Flexible and predictable pricing planes for your extended family.
          </Typography>
          <Typography className="package-description">
            We provide group and individual daily dogs walking that are tailored
            to fit you and your dog’s needs. During the dog walking booking,
            your sitter will walk and engage with your dog on a safe.
          </Typography>
          <Box>
            <Button className="package-register-btn button-hover-scale">
              Register Now
            </Button>
          </Box>
        </Box>

        <Box>
          <Box className="package-info-container">
            <Box className="package-plan ">
              <Box className="package-plan-name">
                <Typography>Tranding Plan</Typography>
              </Box>
              <Box className="packageinfo-wrapper">
                <Box className="package-logo-container">
                  <Box
                    component={"img"}
                    src={solowalk}
                    alt="solo walk"
                    height="100%"
                  />
                </Box>
                <Typography className="package-walktype">Solo Walks</Typography>
                <List className="package-listitem">
                  {trandingPlanList.map((item) => (
                    <ListItem>
                      <Typography className="package-time">
                        {item.time}
                      </Typography>
                      <Typography>{item.price}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Box className="package-button-wrapper">
                  <Button className="package-bookbtn package-book-btn-tranding button-hover-scale">
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className="package-plan package-plan2">
              <Box className="package-plan-name package-name2">
                <Typography>Popular Plan</Typography>
              </Box>
              <Box className="packageinfo-wrapper2">
                <Box className="package-logo-container">
                  <Box
                    component={"img"}
                    src={groupWalk}
                    alt="solo walk"
                    height="100%"
                  />
                </Box>
                <Typography className="package-walktype">
                  Group Walks
                </Typography>
                <List className="package-listitem">
                  {trandingPlanList.map((item) => (
                    <ListItem>
                      <Typography className="package-time">
                        {item.time}
                      </Typography>
                      <Typography>{item.price}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Box className="package-button-wrapper">
                  <Button className="package-bookbtn package-book-btn-popular button-hover-scale">
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      :
      <>
      <Typography className="package-heading heading-title-globle package-pricing-table-h1">
          Our Service Package
        </Typography>
      <Box className="package-container-pricing-tabel">
        <Box className="package-plan package-first">
          <Box className="package-plan-name">
            <Typography>Tranding Plan</Typography>
          </Box>
          <Box className="packageinfo-wrapper">
            <Box className="package-logo-container">
              <Box
                component={"img"}
                src={solowalk}
                alt="solo walk"
                height="100%"
              />
            </Box>
            <Typography className="package-walktype">Solo Walks</Typography>
            <List className="package-listitem">
              {trandingPlanList.map((item) => (
                <ListItem>
                  <Typography className="package-time">{item.time}</Typography>
                  <Typography>{item.price}</Typography>
                </ListItem>
              ))}
            </List>
            <Box className="package-button-wrapper">
              <Button className="package-bookbtn package-book-btn-tranding button-hover-scale">
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="package-plan package-plan-middle">
          <Box className="package-plan-name package-name2">
            <Typography>Popular Plan</Typography>
          </Box>
          <Box className="packageinfo-wrapper2">
            <Box className="package-logo-container">
              <Box
                component={"img"}
                src={groupWalk}
                alt="solo walk"
                height="100%"
              />
            </Box>
            <Typography className="package-walktype">Group Walks</Typography>
            <List className="package-listitem">
              {trandingPlanList.map((item) => (
                <ListItem>
                  <Typography className="package-time">{item.time}</Typography>
                  <Typography>{item.price}</Typography>
                </ListItem>
              ))}
            </List>
            <Box className="package-button-wrapper">
              <Button className="package-bookbtn package-book-btn-popular button-hover-scale">
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="package-plan package-right">
          <Box className="package-plan-name">
            <Typography>Tranding Plan</Typography>
          </Box>
          <Box className="packageinfo-wrapper">
            <Box className="package-logo-container">
              <Box
                component={"img"}
                src={solowalk}
                alt="solo walk"
                height="100%"
              />
            </Box>
            <Typography className="package-walktype">Solo Walks</Typography>
            <List className="package-listitem">
              {trandingPlanList.map((item) => (
                <ListItem>
                  <Typography className="package-time">{item.time}</Typography>
                  <Typography>{item.price}</Typography>
                </ListItem>
              ))}
            </List>
            <Box className="package-button-wrapper">
              <Button className="package-bookbtn package-book-btn-tranding button-hover-scale">
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      </>
}
    </section>
    //  package section ends here
  );
}

export default Package;
