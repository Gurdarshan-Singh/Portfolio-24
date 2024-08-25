// // src/FloatingImages.js

// import React from "react";
// import "./styles.css";
// import { Typography } from "@mui/material";
// import {Container} from "@mui/material";

// const Animated = ({ images, backgroundImage }) => {
//   return (

//     <div className="floating-images-container">
//     <Container maxWidth="x-lg" sx={{
//         }}>
//       {backgroundImage && (
//         <img
//           src={backgroundImage}
//           alt="background"
//           className="background-image"
//         />
//       )}
//       <div className="text-content">
//         <Typography
//           variant="h2"
//           component="div"
//           sx={{
//             flexGrow: 1,
//             display: "flex",
//             justifyContentL: "flex-start",
//             fontFamily: "Montserrat, sans-serif",
//             fontWeight: "600",
//             marginTop: "350px",
//             marginLeft: "80px",
//           }}
//         >
//           Hi, I am Gurdarshan Singh
//         </Typography>
//         <Typography
//           variant="h4"
//           component="div"
//           sx={{
//             flexGrow: 1,
//             display: "flex",
//             justifyContentL: "flex-start",
//             fontFamily: "Montserrat, sans-serif",
//             fontWeight: "500",
//             marginLeft: "80px",
//           }}
//         >
//           I am a Software Developer
//         </Typography>
//       </div>
//       </Container>
//     </div>
//   );
// };

// export default Animated;
// src/FloatingImages.js

import React from "react";
import "./styles.css";
import { Typography, Container } from "@mui/material";

const Animated = ({ images, backgroundImage }) => {
  return (
    <div className="floating-images-container">
    {backgroundImage && (
          <img
            src={backgroundImage}
            alt="background"
            className="background-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
        )}
      <Container
        maxWidth="x-lg"
        sx={{
          position: 'relative',
          height: '100vh', // Ensure container covers the viewport height
          padding: { xs: '16px', sm: '24px', md: '32px' }, // Responsive padding
        }}
      >
        
        <div className="text-content">
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              marginTop: { xs: '100px', sm: '150px', md: '350px' }, // Responsive margin
              marginLeft: { xs: '16px', sm: '32px', md: '80px' }, // Responsive margin
              textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
              fontSize: { xs: '2rem', md: '4rem' }, // Responsive font size
            }}
          >
            Hi, I am Gurdarshan Singh
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              marginLeft: { xs: '16px', sm: '32px', md: '80px' }, // Responsive margin
              textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
              fontSize: { xs: '1.5rem', md: '2.5rem' }, // Responsive font size
            }}
          >
            I am a Software Developer
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Animated;
