import * as React from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const BoxMenu = (props) => {
  return (
    <Box
      sx={{
        display: props.dis ? props.dis : { xs: "none", md: "inline-flex" }, //props.dis = "inline-flex" ? "inline-flex" :
        flexDirection: "column",
        bgcolor: "background.paper",
        border: "1px solid blue",
        borderRadius: "10px",
        marginRight: "20px",
        boxShadow: 10,
        m: 2,
      }}
    >
      <Tooltip  title="Presale Chat" placement="left-start">
        <Button>
          <TextsmsIcon />
        </Button>
      </Tooltip>
      <Divider sx={{ background: "blue" }} />
      <Tooltip  title="Submit Support Tiket" placement="left-start">
      <Button>
        <LanguageIcon />
      </Button>
      </Tooltip>
      <Divider sx={{ background: "blue" }} />
      <Tooltip  title="Read Documentation" placement="left-start">
      <Button>
        <DescriptionIcon />
      </Button>
      </Tooltip>
      <Divider sx={{ background: "blue" }} />
      <Tooltip  title="Vidio" placement="left-start">
      <Button>
        <VideoCameraFrontIcon />
      </Button>
      </Tooltip>
      <Divider sx={{ background: "blue" }} />
      <Tooltip  title="People" placement="left-start">
      <Button>
        <PeopleIcon />
      </Button>
      </Tooltip>
      <Divider sx={{ background: "blue" }} />
      <Tooltip  title="Shopping Cart" placement="left-start">
      <Button>
        <ShoppingCartIcon />
      </Button>
      </Tooltip>
    </Box>
  );
};

export default BoxMenu;
