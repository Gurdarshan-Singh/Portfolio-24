import React from 'react'
import { Typography } from "@mui/material";
import {Container} from "@mui/material";

export default function Card({title, body, children}) {
    return (
        <Container maxWidth="lg" sx={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom:'20px'
        }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              {title}
            </Typography>
            <Typography variant="body1" >
             {body}
             {children}
            </Typography>
        </Container>
      );
}
