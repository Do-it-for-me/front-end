import React from "react";
import { Link } from "@reach/router";
import { StyledNavBarMobile } from "../Styled-Components/StyledNavBarMobile";
import { StyledButton } from "../Styled-Components/StyledButton";
import UserContext from "../../data/UserContext";
import useSignUpForm from "../../data/useSignupForm";
import { StyledProfileIcon } from "../Styled-Components/StyledProfileIcon";

const NavBarMobile = ({ extend, unExtend }) => {
  const { loggedInUserData, handleLogout } = useSignUpForm();

  return (
    <UserContext.Consumer>
      {({ user, handleLoggedInUser }) => (
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
          <Link
            onClick={unExtend}
            to={`/${user.user ? user.user._id : "login"}`}
          >
            <StyledProfileIcon
              image={user.user ? user.user.image : null}
              logged={user.logged}
              mobile
            />
          </Link>
        </StyledNavBarMobile>
      )}
    </UserContext.Consumer>
  );
};

export default NavBarMobile;
