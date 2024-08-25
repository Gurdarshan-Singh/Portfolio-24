import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1DXSVA5rOVnB7hbdDP4gPaT9ZLfI5HQNg/view?usp=sharing";
  const [drawer, setDrawer] = useState(false);

  const toggle = (open) => () => {
    setDrawer(open);
  };

  // Downloades Resume from Drive
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Gurdarshan_Singh_Resume.pdf"; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: 100 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#e5e5e5", color: "black" }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContentL: "flex-start",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              GURDARSHAN SINGH
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggle(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button color="inherit">About</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Newsletter</Button>
              <Button color="inherit" onClick={handleClick}>
                <strong>Resume</strong>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={toggle(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggle(false)}
            onKeyDown={toggle(false)}
          >
            <List>
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Newsletter" />
              </ListItem>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Resume" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
export default Navbar;
