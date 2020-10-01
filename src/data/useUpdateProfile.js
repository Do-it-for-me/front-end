import { navigate } from "@reach/router";
import { useState, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import UserContext from "./UserContext";

const useUpdateProfile = () => {
  const { handleLoggedInUser } = useContext(UserContext);

  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  /* const [loading, setLoading] = useState(false); */
  const [stateError, setError] = useState({ status: false, details: "" });

  console.log(newUserData);
  /*   const [loggedInUserData, setLoggedInUserData] = useState(); */

  const handleFieldsChange = (e) => {
    setNewUserData((prev) => ({ ...prev, [e.name]: e.value }));
  };

  const handleCityChange = (value) => {
    setNewUserData((prev) => ({ ...prev, city: value }));
  };

  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    setNewUserData((prev) => ({
      ...prev,
      availability: { startDate, endDate },
    }));
  };

  const handlePriceChange = (v) => {
    setNewUserData((prev) => ({ ...prev, price: v }));
  };

  const handleBioChange = (text) => {
    setNewUserData((prev) => ({ ...prev, bio: text }));
  };

  const clearField = (fieldName) => {
    const newState = newUserData;
    newState[fieldName] = "";
    setNewUserData(newState);
  };

  /*   const handlePreSubmit = (event) => {
    if (event) {
      setError({ status: false, details: {} });
      signupForm(event, userData);
    }
  }; */
  const handelUpdateProfile = async (e, id) => {
    if (e) e.preventDefault();
    const updateBody = newUserData;
    for (let i in updateBody) {
      if (!updateBody[i]) {
        delete updateBody[i];
      }
    }
    console.log("updateBody", updateBody);
    try {
      const updatedProfile = await (
        await fetch(`${SERVER_ENDPOINT}/users/${id}`, {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(updateBody),
        })
      ).json();
      console.log("handelUpdateProfile", updatedProfile);
      if (updatedProfile) handleLoggedInUser(true, { ...updatedProfile });
    } catch (err) {
      console.log("handelUpdateProfile", err);
      setError("handelUpdateProfile", err);
    }
  };

  /*   const handelSignupForm = async (event) => {
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
        setUserData({});
        navigate(-1);
      }
    }
  }; */

  const handleServiceChange = (e) => {
    let services = newUserData.services || [];

    if (!services.includes(e.target.name)) {
      services.push(e.target.name);
    } else {
      services = services.filter((item) => item !== e.target.name);
    }
    setNewUserData((prev) => ({ ...prev, services: services }));
  };

  /*   useEffect(() => {
    handleLogout();
  }, [loggedInUserData]); */

  return {
    handleFieldsChange,
    handleCityChange,
    handleDateChange,
    handlePriceChange,
    handleBioChange,
    clearField,
    handelUpdateProfile,
    handleServiceChange,
    newUserData,
  };
};

export default useUpdateProfile;
