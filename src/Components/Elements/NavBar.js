import React, { useContext } from "react";
import { Link } from "@reach/router";
import { StyledNavBar } from "../Styled-Components/StyledNavBar";
import { StyledButton } from "../Styled-Components/StyledButton";
import { StyledProfileIcon } from "../Styled-Components/StyledProfileIcon";
import useSignUpForm from "../../data/useSignupForm";
import UserContext from "../../data/UserContext";
const NavBar = () => {
  const { user, handleLoggedInUser } = useContext(UserContext);
  console.log(user);
  const { handleLogout } = useSignUpForm();
  return (
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
      <Link to={`/${user._id || "login"}`}>
        <StyledProfileIcon
          image={user.user ? user.user.image : null}
          logged={user.logged}
        />
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
