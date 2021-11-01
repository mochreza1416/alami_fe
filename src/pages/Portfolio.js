import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import SliderSkill from "../components/SliderSkill";
import ChartSkill from "../components/ChartSkill";
import StandardImageList from "../components/ImageList"

const Portfolio = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <StandardImageList />
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <MediaCard />
              </Grid>
              <Grid item md={6} xs={12}>
                <MediaCard />
              </Grid>
              <Grid item md={6} xs={12}>
                <MediaCard />
              </Grid>
              <Grid item md={6} xs={12}>
                <MediaCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <MediaCard />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <ChartSkill />
          </Grid>
          <Grid item md={3} xs={12}>
            <ChartSkill />
          </Grid>
          <Grid item md={3} xs={12}>
            <ChartSkill />
          </Grid>
          <Grid item md={3} xs={12}>
            <ChartSkill />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <SliderSkill nilai="75" nama="Creativity" />
          </Grid>
          <Grid item md={6} xs={12}>
            <SliderSkill nilai="90" nama="PHP" />
          </Grid>
          <Grid item md={6} xs={12}>
            <SliderSkill nilai="48" nama="Cooking" />
          </Grid>
          <Grid item md={6} xs={12}>
            <SliderSkill nilai="62" nama="Marketing" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Portfolio;
