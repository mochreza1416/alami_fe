import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BoxMenu from "./BoxMenu";

const useStyle = makeStyles((theme) => ({
  container: {
    position: "fixed",
    paddingTop: 100,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  dev: {
    marginBottom: 25,
  },
}));
const Rightbar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <BoxMenu />
    </Container>
  );
};

export default Rightbar;
