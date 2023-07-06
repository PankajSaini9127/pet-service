import { Box, Button, Typography } from "@mui/material";
import React from "react";

import "../../assets/css/module/newsArticle.css";

function NewsArticle({ news }) {
  return (
    // news article start here
    <Box className="news-article-wrapper">
      <Box className="news-article-img-conrtainer">
        <Box
          component={"img"}
          src={news.image}
          alt="news"
          className="news-article-image"
        />
        <Box className="news-article-overlay">
          <Box>
            <Button className="news-article-btn-readmore">Read More</Button>
          </Box>
        </Box>
      </Box>
      <Typography className="news-article-date">
        06 Jul,2023 | 0 Comments
      </Typography>
      <Typography className="news-article-title">
       {news.title}
      </Typography>
      <Typography className="news-article-description">
       {news.description}
      </Typography>
    </Box>
    // news article end here
  );
}

export default NewsArticle;
