import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

//css
import "../../assets/css/module/detailsPackage.css";

function DetailsPackage({list,heading}) {
  return (
    <Box className="details-package-wrapper">
      <Typography className="details-package-heading">{heading}</Typography>
      <List className='details-package-list'>
        {
          list?.map(item=>(
            <ListItem className='details-package-list-item'><span>{item.name}</span> {item.price}</ListItem>
          ))
        }
       
      </List>
    </Box>
  )
}

export default DetailsPackage
