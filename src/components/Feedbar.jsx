import React from "react";
import { Container} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Switch, Route } from "react-router-dom";
import pageRoutes from "../config/router" 

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: 100,
    minHeight: 450
  },
}));
const Feedbar = () => {
  const clasess = useStyle();
  return (
    <Container className={clasess.container}>
      <Switch>
        {pageRoutes.map((data, i) => {
          return <Route key={i} path={data.path} component={data.component} />;
        })}
      </Switch>
    </Container>
  );
};

export default Feedbar;
