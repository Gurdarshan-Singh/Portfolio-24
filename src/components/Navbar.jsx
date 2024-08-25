import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import './styles.css'

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex:100 }}>
        <AppBar position="fixed" sx={{backgroundColor:"#e5e5e5", color:"black"}}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContentL: "flex-start",
                fontFamily: "Montserrat, sans-serif",
                fontWeight:"700",
                fontSize:"1rem"
              }}
              
            >
             GURDARSHAN SINGH
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Newsletter</Button>
            <Button color="inherit"><strong>Resume</strong></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
