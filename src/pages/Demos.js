import React from "react";
import { Container, Box, Typography, Paper, Button } from "@mui/material";
import Image from "../assets/images/masakan.jpeg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Demos = () => {
  return (
    <Paper style={{ backgroundImage: `url(${Image})` }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" >
            <Typography variant="h5" textAlign="center" fontFamily="cursive">
              Catering should be an experience
            </Typography>
            <Typography variant="h4" textAlign="center" fontFamily="sans-serif">
              We use only the finest and freshest ingredients
            </Typography>
            <Typography variant="h6" textAlign="center" fontFamily="serif">
              At sway catering we know that food is an important part of life.
              if the meal is not perfect, your event cannot be perfect
            </Typography>
            <Button variant="contained">Request a Quote<KeyboardArrowRightIcon/></Button>
          </Box>
          
        </Container>
      </Box>
    </Paper>
  );
};

export default Demos;
