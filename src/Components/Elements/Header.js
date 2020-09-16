import React from "react";
import { Link } from "@reach/router";

import { StyledHeader } from "../Styled-Components/StyledHeader";
import NavBar from "../Elements/NavBar";

import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="navBarContainer">
        <div className="logoContainer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigationContainer">
          <NavBar />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
