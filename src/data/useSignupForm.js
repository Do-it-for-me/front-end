import React, { useState } from "react";

const useSignUpForm = (callback) => {
  const [userData, setUserData] = useState({});

  const handleFieldsChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.name]: e.value }));
  };
  const handleCityChange = (value) => {
    setUserData((prev) => ({ ...prev, city: value }));
  };
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleServiceChange = (e) => {
    let services = userData.services || [];
    console.log(e.target);
    if (!services.includes(e.target.name)) {
      services.push(e.target.name);
    } else {
      services = services.filter((item) => item !== e.target.name);
    }
    setUserData((prev) => ({ ...prev, services: services }));
  };
  console.log(userData);
  return {
    userData,
    handleFieldsChange,
    handleCityChange,
    handleSubmit,
    handleServiceChange,
  };
};

export default useSignUpForm;
