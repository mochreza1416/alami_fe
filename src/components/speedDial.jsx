import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import MenuIcon from "@mui/icons-material/Menu";
import TextsmsIcon from "@mui/icons-material/Textsms";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const actions = [
  { icon: <TextsmsIcon />, name: "Presale Chat" },
  { icon: <LanguageIcon />, name: "Submit Support Tiket" },
  { icon: <DescriptionIcon />, name: "Read Documentation" },
  { icon: <VideoCameraFrontIcon />, name: "Vidio" },
  { icon: <PeopleIcon />, name: "People" },
  { icon: <ShoppingCartIcon />, name: "Shopping Cart" },
];

export default function MenuDial() {
  return (
    <Box>
      <SpeedDial
        sx={{ position: "fixed", top: 3, paddingLeft:2 }}
        ariaLabel="Menu"
        icon={<MenuIcon />}
        direction={"down"}
      >
          
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
