import React from "react";
import { StyledHeader } from "../Styled-Components/StyledHeader";
import logo from "../../images/Logo.png";
const Header = () => {
  return (
    <StyledHeader>
      <div className="navBarContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigationContainer">navigation</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
