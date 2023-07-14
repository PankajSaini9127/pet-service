import { Box } from "@mui/system";
import React from "react";

import "../../../assets/css/home/news.css";
import { Button, Typography } from "@mui/material";

//img
import news1 from "../../../assets/Images/home/epicpaws-blog4.jpg";
import news2 from "../../../assets/Images/home/epicpaws-blog6.jpg";
import news3 from "../../../assets/Images/home/epicpaws-blog8.jpg";
import Arrow from "../../../assets/Images/home/Epic-arrow05 (1).png";

//module
import NewsArticle from "../../module/NewsArticle";
import Heading from "../../utils/Heading";

const news = [
  {
    image: news1,
    title: "Get Paid To Walk Dogs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a voluptatibus similique molestias, sunt deleniti....",
  },
  {
    image: news2,
    title: "What Dose A Dog Walker Do ?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a voluptatibus similique molestias, sunt deleniti....",
  },
  {
    image: news3,
    title: "Walk your best doggy friend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a voluptatibus similique molestias, sunt deleniti....",
  },
];

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
