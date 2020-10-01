import React, { useContext } from "react";
import { Link } from "@reach/router";
import { StyledNavBarMobile } from "../Styled-Components/StyledNavBarMobile";
import { StyledButton } from "../Styled-Components/StyledButton";
import UserContext from "../../data/UserContext";
import useSignUpForm from "../../data/useSignupForm";
import { StyledProfileIcon } from "../Styled-Components/StyledProfileIcon";

const NavBarMobile = ({ extend, unExtend }) => {
  const { handleLogout } = useSignUpForm();
  const { user, handleLoggedInUser } = useContext(UserContext);
  return (
    <StyledNavBarMobile extend={extend}>
      {user.logged ? (
        <>
          <Link
            onClick={() => {
              handleLogout(handleLoggedInUser);
              unExtend();
            }}
            to="/"
          >
            <div>Logout</div>
          </Link>
        </>
      ) : (
        <>
          <Link onClick={unExtend} to="/signup">
            <div>Signup</div>
          </Link>
          <Link onClick={unExtend} to="/login">
            <div>Login</div>
          </Link>
        </>
      )}
      <StyledButton type="secondary" onClick={unExtend}>
        Provide a Service
      </StyledButton>
      <Link onClick={unExtend} to={`/${user.logged ? user.user._id : "login"}`}>
        <StyledProfileIcon
          image={user.user ? user.user.image : null}
          logged={user.logged}
          mobile
        />
      </Link>
    </StyledNavBarMobile>
  );
};

export default NavBarMobile;
