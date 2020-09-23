import React from "react";
import { StyledSignupForm } from "../Styled-Components/StyledSignupForm";
import { StyledButton } from "../Styled-Components/StyledButton";
import ErrorMsg from "../Elements/ErrorMsg";
import useSignupForm from "../../data/useSignupForm";
import UserContext from "../../data/UserContext";
export const LoginForm = () => {
  const {
    userData,
    stateError,
    handleFieldsChange,
    loggedInUserData,
    handleLoginForm,
  } = useSignupForm();

  return (
    <UserContext.Consumer>
      {({ handleLoggedInUser }) => (
        <StyledSignupForm>
          <form onSubmit={(e) => handleLoginForm(e, handleLoggedInUser)}>
            {stateError.status && (
              <ErrorMsg msg={stateError.details.emailPassword} />
            )}
            <input
              value={userData.email || ""}
              onChange={(e) => handleFieldsChange(e.target)}
              type="email"
              name="email"
              required
              placeholder="Email Address"
            />
            <input
              value={userData.password || ""}
              onChange={(e) => handleFieldsChange(e.target)}
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            <StyledButton type="primary">Submit</StyledButton>
          </form>
        </StyledSignupForm>
      )}
    </UserContext.Consumer>
  );
};

export default LoginForm;
