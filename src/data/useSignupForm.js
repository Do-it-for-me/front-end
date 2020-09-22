import { useState } from "react";
import { SERVER_ENDPOINT } from "../config";

const useSignUpForm = (callback) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [stateError, setError] = useState({ status: false, details: "" });
  const [loggedInUserData, setLoggedInUserData] = useState(null);
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
      setError({ status: false, details: {} });
      /*       const user = {
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
      setUserData(userData); */
      signupForm(event, userData);
    }
  };
  const signupForm = async (e, user) => {
    setError({ status: false, details: {} });
    e.preventDefault();
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
          credentials: "same-origin",
          body: JSON.stringify(user),
        })
      ).json();
      console.log("fetched");
      //console.log(response.error);
      if (response.status !== 201) {
        //console.log("response", response);
        let errorDetails = {};
        response.error.details &&
          response.error.details.map(
            (item) => (errorDetails[item.field] = item.message)
          );
        console.log("cookies", await response.cookie);
        setError({ status: true, details: errorDetails });
      }
    } catch (err) {
      console.log("catch Error", err);
      //setError({ status: true, details: err });
    }
    setLoggedInUserData({ ...response });
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
    loggedInUserData,
  };
};

export default useSignUpForm;
