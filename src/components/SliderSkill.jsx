import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderLabel(props) {
  return (
    <Box
      textAlign="left"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Grid container spacing={2} justify="center">
        <Grid xs={8}>
          <Slider
            size="medium"
            aria-label="Always visible"
            defaultValue={props.nilai}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
            color="secondary"
            component="span"
          />
          <Typography
            id="input-slider"
            gutterBottom
            component={"span"}
          >
            {props.nama}
          </Typography>
        </Grid>
        <Grid xs={4} paddingLeft="20px">
          <Typography
            id="nilai"
            variant="h5"
            component={"span"}
          >
            {props.nilai + " %"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
