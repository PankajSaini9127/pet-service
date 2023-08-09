import { Box, Button, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React from "react";

//css
import "../../../assets/css/profilePage/userProfile.css";
import { useSelector } from "react-redux";



function UserProfile() {
  const {auth} = useSelector(s=>s);
  console.log(auth)

  const data = [
    {key:"Name",value:auth.data.name},
    {key:"Email",value:auth.data.email},
    {key:"Mobile",value:auth.data.mobile},
    {key:"City",value:auth.data.city},
    {key:"State",value:auth.data.state}
  ];
  return (
    <>
      <Box className="user-profile-wrapper">
        <Box className="user-profile-container">
          <Typography className="user-heading">User Information</Typography>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {
            data.map(item=>(
              <TableRow
              key={item.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,margin:"auto"}}
            >
              <TableCell component="th" scope="row">
              {item.key}:
              </TableCell>
              <TableCell align="right">
                <Typography textAlign={"left"} className="user-profile-text">{item.value}</Typography>
                </TableCell>
            </TableRow>
            ))
          }
           
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default UserProfile;
