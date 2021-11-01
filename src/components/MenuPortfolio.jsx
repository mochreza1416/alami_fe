import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      marginRight: 300,
    },
  })
);

export default function CustomizedMenus(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {props.menu}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem>
          <MenuItem onClick={handleClose}>Grid Minimal</MenuItem>
          <MenuItem onClick={handleClose}>Masonry minimal</MenuItem>
          <MenuItem onClick={handleClose}>Grid Detailed</MenuItem>
        </MenuItem>
        <MenuItem>
          <MenuItem onClick={handleClose}>2 columns</MenuItem>
          <MenuItem onClick={handleClose}>2 columns</MenuItem>
          <MenuItem onClick={handleClose}>2 columns</MenuItem>
        </MenuItem>
        <MenuItem>
          <MenuItem onClick={handleClose}>3 columns</MenuItem>
          <MenuItem onClick={handleClose}>3 columns</MenuItem>
          <MenuItem onClick={handleClose}>3 columns</MenuItem>
        </MenuItem>
        <MenuItem>
          <MenuItem onClick={handleClose}>4 columns</MenuItem>
          <MenuItem onClick={handleClose}>4 columns</MenuItem>
          <MenuItem onClick={handleClose}>4 columns</MenuItem>
        </MenuItem>
        <MenuItem>
          <MenuItem onClick={handleClose}>Full Width</MenuItem>
          <MenuItem onClick={handleClose}>Full Width</MenuItem>
          <MenuItem onClick={handleClose}>Full Width</MenuItem>
        </MenuItem>
      </Menu>
    </div>
  );
}
