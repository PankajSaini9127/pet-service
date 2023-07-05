import { Box, MenuItem } from "@mui/material";

export function Home_list({className}){

  
    return (
      <Box className={className}>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Box>
    )
}