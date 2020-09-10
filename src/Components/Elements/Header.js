import React from "react";
import { StyledHeader } from "../Styled-Components/StyledHeader";
const Header = () => {
  return (
    <StyledHeader>
      <div className="navBarContainer">
        <div className="logoContainer">logo</div>
        <div className="navigationContainer">navigation</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
