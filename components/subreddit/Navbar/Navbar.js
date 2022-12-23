import React from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import NavbarWrapper from "./Navbar.style";
import IconButton from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg"
          className="logo"
          alt=""
        />
      </div>
      <div className="center">
        <Searchbar />
      </div>
      <div className="right">
        <Button variant="outlined" className="log-btn">
          LOG IN
        </Button>
        <Button variant="contained" className="sign-btn">
          SIGN UP
        </Button>
        <IconButton className="btn">
          <PermIdentityOutlinedIcon />
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>
    </NavbarWrapper>
  );
};
