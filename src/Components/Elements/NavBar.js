import React from "react";
import { StyledNavBar } from "../Styled-Components/StyledNavBar";
import { StyledButton } from "../Styled-Components/StyledButton";
const NavBar = (props) => {
  return (
    <StyledNavBar>
      <div>Signup</div>
      <div>Login</div>
      <StyledButton type="secondary">Provide a Service</StyledButton>
      <div>profile</div>
    </StyledNavBar>
  );
};

export default NavBar;
