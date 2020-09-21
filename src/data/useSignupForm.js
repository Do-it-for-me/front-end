import { useState } from "react";
import { SERVER_ENDPOINT } from "../config";

const useSignUpForm = (callback) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [stateError, setError] = useState({ status: false, details: "" });
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
  const cleanupProviderData = () =>
    setUserData((prev) => ({ ...prev, services: [], availability: {} }));

  const handlePreSubmit = (event) => {
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
      setUserData((prev) => ({ ...user }));
      signupForm(user);
    }
  };
  const signupForm = async (user) => {
    setError({ status: false, details: {} });
    const url = `${SERVER_ENDPOINT}/users/signup`;
    let response;

    try {
      response = await (
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            /*  "Access-Control-Allow-Origin":
            "* ,'http://localhost:3000','http://localhost:3001'",
          "Access-Control-Allow-Headers": "*", */
            //" Accept": "*/*",
          },
          body: JSON.stringify(user),
        })
      ).json();
      //console.log(response.error);
      if (response.status != 201) {
        console.log("response", response);
        let errorDetails = {};
        response.error.details &&
          response.error.details.map(
            (item) => (errorDetails[item.field] = item.message)
          );
        console.log("errorDetails", errorDetails);
        setError({ status: true, details: errorDetails });
      } else {
      }
    } catch (err) {
      console.log("catch Error", err);
      //setError({ status: true, details: err });
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

  return {
    userData,
    stateError,
    handleFieldsChange,
    handleCityChange,
    handlePreSubmit,
    handleServiceChange,
    handleDateChange,
    cleanupProviderData,
  };
};

export default useSignUpForm;
