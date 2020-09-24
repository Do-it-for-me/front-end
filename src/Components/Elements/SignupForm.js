import React from "react";
import { useState, useEffect } from "react";

import ProvideService from "../Elements/ProvideService";
import SelectServices from "../Elements/SelectServices";
import { StyledSignupForm } from "../Styled-Components/StyledSignupForm";
import { StyledButton } from "../Styled-Components/StyledButton";
import ErrorMsg from "../Elements/ErrorMsg";
import useSignupForm from "../../data/useSignupForm";
import UserContext from "../../data/UserContext";
export const SignupForm = () => {
  const {
    userData,
    stateError,
    cleanupProviderData,
    handleFieldsChange,
    handleCityChange,
    handelSignupForm,
    handleServiceChange,
    handleDateChange,
  } = useSignupForm();
  const [extendProvider, setExtendProvider] = useState(false);
  console.log(
    "STATE-ERROR!!!",
    stateError.details.firstName,
    stateError.status
  );

  return (
    <StyledSignupForm>
      <form onSubmit={(e) => handelSignupForm(e)}>
        {stateError.status && stateError.details.firstName && (
          <ErrorMsg msg={stateError.details.firstName} />
        )}
        <input
          value={userData.firstName || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="text"
          name="firstName"
          required
          placeholder="First Name"
        />
        {stateError.status && stateError.details.lastName && (
          <ErrorMsg msg={stateError.details.lastName} />
        )}
        <input
          value={userData.lastName || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="text"
          name="lastName"
          required
          placeholder="Last Name"
        />
        {stateError.status && stateError.details.email && (
          <ErrorMsg msg={stateError.details.email} />
        )}
        <input
          value={userData.email || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="email"
          name="email"
          required
          placeholder="Email Address"
        />
        {stateError.status && stateError.details.password && (
          <ErrorMsg msg={stateError.details.password} />
        )}
        <input
          value={userData.password || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        {stateError.status && stateError.details.street && (
          <ErrorMsg msg={stateError.details.street} />
        )}
        <input
          value={userData.street || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          type="text"
          name="street"
          required
          placeholder="Street and House Number"
        />
        {stateError.status && stateError.details.city && (
          <ErrorMsg msg={stateError.details.city} />
        )}
        {stateError.status && stateError.details.zip && (
          <ErrorMsg msg={stateError.details.zip} />
        )}
        <div className="city">
          <SelectServices
            handleCityChange={(v) => handleCityChange(v)}
            type="city"
            name="city"
            required="true"
          />

          <input
            value={userData.zip || ""}
            onChange={(e) => handleFieldsChange(e.target)}
            placeholder="Zip Code"
            type="text"
            name="zip"
          />
        </div>

        <div className="provider">
          <input
            type="checkbox"
            name="provider"
            checked={extendProvider}
            onChange={() => setExtendProvider(!extendProvider)}
          />
          <label htmlFor="provider">Provide Services </label>
        </div>
        {stateError.status && stateError.details.availability && (
          <ErrorMsg msg={stateError.details.availability} />
        )}
        {extendProvider ? (
          <ProvideService
            handleServiceChange={handleServiceChange}
            handleDateChange={handleDateChange}
            cleanupProviderData={cleanupProviderData}
          />
        ) : (
          ""
        )}
        <StyledButton type="primary">Submit</StyledButton>
      </form>
    </StyledSignupForm>
  );
};

export default SignupForm;
