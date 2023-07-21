import { Box, Button, Typography } from '@mui/material'
import React from 'react'

//css
import "../../../assets/css/notFound.css";
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='not-found-page'>
        <Box>
            <Typography className="not-found-h2">404 Not Found</Typography>
            <Typography className='not-found-h3'>Sorry, this page does not exist!</Typography>
            <Typography className="not-found-h6">The link you clicked might be corrupted, or the page may have been removed.</Typography>
            <Link to={"/"}>
                <Button className='back-to-home-btn'>
                    Back To Home
                </Button>
            </Link>
        </Box>
      
    </section>
  )
}

export default NotFound
