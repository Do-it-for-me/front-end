import React from "react";
import { useState, useEffect } from "react";

import ProvideService from "../Elements/ProvideService";
import SelectServices from "../Elements/SelectServices";
import { StyledSignupForm } from "../Styled-Components/StyledSignupForm";
import { StyledButton } from "../Styled-Components/StyledButton";
import { Checkbox } from "antd";

import useSignupForm from "../../data/useSignupForm";

export const SignupForm = () => {
  const [extendProvider, setExtendProvider] = useState(false);
  const {
    userData,
    handleFieldsChange,
    handleCityChange,

    handleSubmit,
  } = useSignupForm();
  return (
    <StyledSignupForm>
      <input
        value={userData.firstName || ""}
        onChange={(e) => handleFieldsChange(e.target)}
        type="text"
        name="firstName"
        required
        placeholder="First Name"
      />
      <input
        value={userData.lastName || ""}
        onChange={(e) => handleFieldsChange(e.target)}
        type="text"
        name="lastName"
        required
        placeholder="Last Name"
      />
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
      <input
        value={userData.street || ""}
        onChange={(e) => handleFieldsChange(e.target)}
        type="text"
        name="street"
        required
        placeholder="Street and House Number"
      />
      <div className="city">
        <SelectServices
          handleCityChange={(v) => handleCityChange(v)}
          type="city"
          name="city"
        />
        <input
          value={userData.zip || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          placeholder="Zip Code"
          type="text"
          name="zip"
        />
      </div>
      <Checkbox
        checked={extendProvider}
        onChange={() => setExtendProvider(!extendProvider)}
      >
        Provide Services
      </Checkbox>
      {extendProvider ? <ProvideService /> : ""}
      <StyledButton type="primary">Submit</StyledButton>
    </StyledSignupForm>
  );
};

export default SignupForm;
