import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

const Menu = (props) => {
  return (
    <Button
      id="demo-customized-button"
      aria-controls="demo-customized-menu"
      aria-haspopup="true"
      variant="contained"
      disableElevation
      endIcon={<KeyboardArrowDownIcon />}
    >
      {props.menu}
    </Button>
  );
};

export default Menu;
