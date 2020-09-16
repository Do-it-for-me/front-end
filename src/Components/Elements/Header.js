import React from "react";
import { StyledHeader } from "../Styled-Components/StyledHeader";
import logo from "../../images/Logo.png";
import NavBar from "../Elements/NavBar";
const Header = () => {
  return (
    <StyledHeader>
      <div className="navBarContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigationContainer">
          <NavBar />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
