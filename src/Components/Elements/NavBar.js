import React from "react";
import { Link } from "@reach/router";
import { StyledNavBar } from "../Styled-Components/StyledNavBar";
import { StyledButton } from "../Styled-Components/StyledButton";
import useSignUpForm from "../../data/useSignupForm";
import UserContext from "../../data/UserContext";
const NavBar = () => {
  const { handleLogout } = useSignUpForm();
  return (
    <UserContext.Consumer>
      {({ user, handleLoggedInUser }) => (
        <StyledNavBar>
          {user.logged ? (
            <>
              <Link onClick={() => handleLogout(handleLoggedInUser)} to="/">
                <div>Logout</div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup">
                <div>Signup</div>
              </Link>
              <Link to="/login">
                <div>Login</div>
              </Link>
            </>
          )}
          <StyledButton type="secondary">Provide a Service</StyledButton>
          <Link to="/">
            <div>profile</div>
          </Link>
        </StyledNavBar>
      )}
    </UserContext.Consumer>
  );
};

export default NavBar;
