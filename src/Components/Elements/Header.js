import React, { useState } from "react";
import { Link } from "@reach/router";
import { StyledHeader } from "../Styled-Components/StyledHeader";
import NavBar from "../Elements/NavBar";
import BurgerMenuIcon from "../Elements/BurgerMenuIcon";
import NavBarMobile from "../Elements/NavBarMobile";
import logo from "../../images/Logo.png";

const Header = () => {
  const [extend, setExtend] = useState(false);
  const invertExtend = () => {
    setExtend(!extend);
  };
  const unExtend = () => {
    setExtend(false);
  };
  return (
    <StyledHeader>
      <div className="navBarContainer">
        <div onClick={() => setExtend(false)} className="logoContainer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigationContainer">
          <NavBar loggedInUserData />
          <NavBarMobile extend={extend} unExtend={unExtend} />
          <BurgerMenuIcon extend={extend} onClick={invertExtend} />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
