// src/FloatingImages.js

import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";

const Animated = ({ images, backgroundImage }) => {
  return (
    <div className="floating-images-container">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
      )}
      <div className="text-content">
        <Typography
          variant="h2"
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContentL: "flex-start",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            marginTop: "350px",
            marginLeft: "80px",
          }}
        >
          Hi, I am Gurdarshan Singh
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContentL: "flex-start",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            marginLeft: "80px",
          }}
        >
          I am a Software Developer
        </Typography>
      </div>
    </div>
  );
};

export default Animated;
