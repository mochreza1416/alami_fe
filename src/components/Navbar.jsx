import * as React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  styled,
  alpha,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";
import CustomizedMenus from "./MenuPortfolio";
import Menu from "./Menu";
import IconMenu from "./IconMenu";
import { Link } from "react-router-dom";
// import MenuDial from "./speedDial";

const useStyle = makeStyles((Theme) => ({
  margin: {
    marginRight: 200,
  },
}));

const AlamiWeb2 = styled("div")(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const AlamiWeb = styled("div")(({ theme }) => ({
  //   flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const AlamiMobile = styled("div")(({ theme }) => ({
  //   flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  // width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const clasess = useStyle();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <AlamiWeb2>
          <Typography variant="h6" className={clasess.margin}>
            Web
          </Typography>
        </AlamiWeb2>
        <AlamiWeb>
          <Link to="/Demos" style={{ textDecoration: "none" }}>
            <Menu menu="Demos" />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Menu menu="Pages" />
          </Link>
        </AlamiWeb>
        <AlamiWeb>
          <Link to="/Portfolio" style={{ textDecoration: "none" }}>
            <CustomizedMenus menu="Portfolio" />
          </Link>
        </AlamiWeb>
        <AlamiMobile>
          <Typography variant="h6">Mobile</Typography>
        </AlamiMobile>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {/* <AlamiMobile>
          <MenuDial />
        </AlamiMobile> */}
        <AlamiMobile>
          <IconMenu />
        </AlamiMobile>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
