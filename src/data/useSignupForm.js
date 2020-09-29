import { redirectTo } from "@reach/router";
import { useState, useContext } from "react";
import { SERVER_ENDPOINT, BROWSER_ENDPOINT } from "../config";
import UserContext from "./UserContext";
const useSignUpForm = () => {
  const { handleLoggedInUser } = useContext(UserContext);

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [stateError, setError] = useState({ status: false, details: "" });
  const [loggedInUserData, setLoggedInUserData] = useState();
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

  /*   const handlePreSubmit = (event) => {
    if (event) {
      setError({ status: false, details: {} });
      signupForm(event, userData);
    }
  }; */

  const handelSignupForm = async (event) => {
    if (event) {
      setError({ status: false, details: {} });
      event.preventDefault();
      const url = `${SERVER_ENDPOINT}/users/signup`;
      let response;
      try {
        response = await (
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(userData),
          })
        ).json();
        /*       console.log("fetched"); */

        if (response.status != 201) {
          let errorDetails = {};
          if (response.error && response.error.details)
            response.error.details.map(
              (item) => (errorDetails[item.field] = item.message)
            );

          setError({ status: true, details: errorDetails });
        }
      } catch (err) {
        console.log("catch Error", err);
      }
      console.log("handelSignupForm-response", response);
      if (response && response._id) {
        handleLoggedInUser(true, { ...response });
        window.location = BROWSER_ENDPOINT;
      }
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
  const handleLogout = (callback) => {
    console.log("logout");
    handleLoggedInUser(false, null);
    window.localStorage.removeItem("loggedUser");
  };
  /*   useEffect(() => {
    handleLogout();
  }, [loggedInUserData]); */
  const handleLoginForm = async (e) => {
    if (e) {
      e.preventDefault();
      setError({ status: false, details: {} });
      const url = `${SERVER_ENDPOINT}/users/login`;
      const user = { email: userData.email, password: userData.password };
      let response;
      try {
        response = await (
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(user),
          })
        ).json();

        if (response.error) {
          setError({
            status: true,
            details: { emailPassword: response.error.message },
          });
        }

        //window.localStorage.setItem("loggedUser", JSON.stringify(response));
        // window.location = BROWSER_ENDPOINT;
      } catch (err) {
        console.log("catch Error", err);
      }

      if (response && response._id) {
        handleLoggedInUser(true, { ...response });
        window.location = BROWSER_ENDPOINT;
      }
    }
  };

  return {
    userData,
    stateError,
    handleLogout,
    handleFieldsChange,
    handleCityChange,
    handleServiceChange,
    handleDateChange,
    cleanupProviderData,
    loggedInUserData,
    handleLoginForm,
    handelSignupForm,
  };
};

export default useSignUpForm;
