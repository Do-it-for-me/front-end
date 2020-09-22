import React from "react";
import { Link } from "@reach/router";
import { StyledNavBarMobile } from "../Styled-Components/StyledNavBarMobile";
import { StyledButton } from "../Styled-Components/StyledButton";
const NavBarMobile = ({ extend, onClick }) => {
  return (
    <StyledNavBarMobile extend={extend}>
      <Link to="/signup">
        <div onClick={onClick}>Signup</div>
      </Link>
      <Link to="/login">
        <div onClick={onClick}>Login</div>
      </Link>
      <StyledButton type="secondary" onClick={onClick}>
        Provide a Service
      </StyledButton>
      <Link to="/">
        <div onClick={onClick}>profile</div>
      </Link>
    </StyledNavBarMobile>
  );
};

export default NavBarMobile;
