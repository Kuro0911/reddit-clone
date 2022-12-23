import React from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import NavbarWrapper from "./Navbar.style";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="left">Logo</div>
      <div className="center">
        <Searchbar />
      </div>
      <div className="right">Account</div>
    </NavbarWrapper>
  );
};
