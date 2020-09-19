import { useState } from "react";

const useSignUpForm = (callback) => {
  const [userData, setUserData] = useState({});

  const handleFieldsChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.name]: e.value }));
  };
  const handleCityChange = (value) => {
    setUserData((prev) => ({ ...prev, city: value }));
  };
  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    setUserData((prev) => ({ ...prev, availability: { startDate, endDate } }));
  };
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const user = {
        ...userData,
        address: {
          city: userData.city,
          street: userData.street,
          zip: userData.zip,
        },
      };
      delete user.street;
      delete user.city;
      delete user.zip;
      console.log("USER", user);
    }
  };

  const handleServiceChange = (e) => {
    let services = userData.services || [];

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
    handleDateChange,
  };
};

export default useSignUpForm;
