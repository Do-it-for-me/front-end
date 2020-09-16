import React from "react";
import { Link } from "@reach/router";
import { StyledNavBar } from "../Styled-Components/StyledNavBar";
import { StyledButton } from "../Styled-Components/StyledButton";
const NavBar = (props) => {
  return (
    <StyledNavBar>
      <Link to="/signup">
        <div>Signup</div>
      </Link>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <StyledButton type="secondary">Provide a Service</StyledButton>
      <Link to="/">
        <div>profile</div>
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
