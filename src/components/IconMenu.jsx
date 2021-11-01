import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
// import BoxMenu from "./BoxMenu";
import { Menu } from "@mui/material";

import TextsmsIcon from "@mui/icons-material/Textsms";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Divider } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const IconMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu 
       a
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Tooltip title="Presale Chat" placement="left-start">
          <Button>
            <TextsmsIcon />
          </Button>
        </Tooltip>
        <Divider sx={{ background: "blue" }} />
        <Tooltip title="Submit Support Tiket" placement="left-start">
          <Button>
            <LanguageIcon />
          </Button>
        </Tooltip>
        <Divider sx={{ background: "blue" }} />
        <Tooltip title="Read Documentation" placement="left-start">
          <Button>
            <DescriptionIcon />
          </Button>
        </Tooltip>
        <Divider sx={{ background: "blue" }} />
        <Tooltip title="Vidio" placement="left-start">
          <Button>
            <VideoCameraFrontIcon />
          </Button>
        </Tooltip>
        <Divider sx={{ background: "blue" }} />
        <Tooltip title="People" placement="left-start">
          <Button>
            <PeopleIcon />
          </Button>
        </Tooltip>
        <Divider sx={{ background: "blue" }} />
        <Tooltip title="Shopping Cart" placement="left-start">
          <Button>
            <ShoppingCartIcon />
          </Button>
        </Tooltip>
      </Menu>
    </Box>
  );
};

export default IconMenu;
