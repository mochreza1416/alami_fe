import React from "react";
import { Container, Box, AppBar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="relative"
      color="transparent"
      sx={{ top: "auto", bottom: 0, marginTop:"20px" }}
    >
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" >
            <Typography variant="h5" textAlign="center" fontFamily="cursive">
              Catering service in new york
            </Typography>
            <Typography variant="h4" textAlign="center" fontFamily="sans-serif">
              We specialize in corporate and private events
            </Typography>
            <Typography variant="h6" textAlign="center" fontFamily="serif">
              With 20 years of experience, we promise you the freshest, local
              ingredients, hand-crafted cooking sprinkled with our unique
              whimsical elegance and exceptional service.
            </Typography>
          </Box>
          <Box textAlign="center" pt={{ xs: 2, sm: 4 }} pb={{ xs: 2, sm: 0 }}>
            Alami &reg; {new Date().getFullYear()} Created by Moch Reza J A
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Footer;
