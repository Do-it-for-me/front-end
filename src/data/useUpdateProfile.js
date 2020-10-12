import moment from "moment"
import { useState, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import UserContext from "./UserContext";
import { useProfileFetch } from "../data/useProfileFetch";
const useUpdateProfile = () => {
  const { handleLoggedInUser } = useContext(UserContext);
  const { fetchUser } = useProfileFetch();

  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  /* const [loading, setLoading] = useState(false); */
  const [stateError, setError] = useState({ status: false, details: "" });

  /*   const [loggedInUserData, setLoggedInUserData] = useState(); */

  const handleFieldsChange = (e) => {
    setNewUserData((prev) => ({ ...prev, [e.name]: e.value }));
  };

  const handleCityChange = (value) => {
    setNewUserData((prev) => ({ ...prev, city: value }));
  };

  const handleDateChange = (dates) => {
    let [startDate, endDate] = dates
    startDate = moment(startDate).format("YYYY-MM-DD")
    endDate = moment(startDate).format("YYYY-MM-DD")
    setNewUserData((prev) => ({
      ...prev,
      availability: { startDate, endDate },
    }));
  };

  const handlePriceChange = (v) => {
    setNewUserData({ price: v });
  };

  const handleBioChange = (text) => {
    setNewUserData((prev) => ({ ...prev, bio: text }));
  };

  const clearField = (fieldName) => {
    const newState = newUserData;
    newState[fieldName] = "";
    setNewUserData(newState);
  };

  const handelUpdateProfile = async (e, id) => {
    if (e) e.preventDefault();
    const updateBody = newUserData;
    for (let i in updateBody) {
      if (!updateBody[i]) {
        if (i === "price") continue;
        delete updateBody[i];
      }
    }

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
      console.log(updatedProfile);
      if (updatedProfile) fetchUser(id);
    } catch (err) {
      setError("handelUpdateProfile", err);
    }
  };

  const handleServiceChange = (e) => {
    let services = newUserData.services || [];

    if (!services.includes(e.target.name)) {
      services.push(e.target.name);
    } else {
      services = services.filter((item) => item !== e.target.name);
    }
    setNewUserData((prev) => ({ ...prev, services: services }));
  };

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
    setNewUserData,
  };
};

export default useUpdateProfile;
