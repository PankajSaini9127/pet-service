import { Box } from "@mui/system";
import React from "react";

import "../../assets/css/utilsComponents/news.css";
import { Button, Typography } from "@mui/material";

import Arrow from "../../assets/Images/home/Epic-arrow05 (1).png";


//module
import Heading from "../utils/Heading";
import NewsArticle from "../module/NewsArticle";
import { news } from "../../dummyData/News";


function News() {
  return (
    // news section start from here
    <section>
      <Box className="news-wrapper">
        <Heading>Latest News</Heading>
        <Box className="news-heading-container">
          <Box
            className="news-heading-arrow"
            component={"img"}
            src={Arrow}
            alt="profile"
          />
          <Box>
            <Typography className="heading-title-globle news-heading">Pet Articles</Typography>
          </Box>
          <Box className="news-explore-btn">
            <Button className="button-hover-scale">View All Blog</Button>
          </Box>
        </Box>
        <Typography className="news-description">
          Pet Food pet supplies gimme five puppy cage food feathers.
        </Typography>

        <Box className="news-article-container">
          {news && news.map((info) => <NewsArticle news={info} />)}
        </Box>
      </Box>
    </section>
    // news section end from here
  );
}

export default News;
