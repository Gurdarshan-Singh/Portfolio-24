import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import './styles.css'

const Navbar = () => {
  const resumeUrl = "https://drive.google.com/file/d/1DXSVA5rOVnB7hbdDP4gPaT9ZLfI5HQNg/view?usp=sharing";

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Gurdarshan_Singh_Resume.pdf"; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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
            <Button color="inherit" onClick={handleClick}><strong>Resume</strong></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
