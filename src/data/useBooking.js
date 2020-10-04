import { navigate } from "@reach/router";
import { useState, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import UserContext from "./UserContext";
import moment from "moment";
const useBooking = () => {
  const { handleLoggedInUser, user } = useContext(UserContext);
  const searcher = user.user;
  const [newDeal, setNewDeal] = useState({});
  const [stateError, setError] = useState({ status: false, details: "" });

  const createDatesArray = (startDate, endDate) => {
    var dates = [];

    var currDate = moment(startDate).startOf("day");
    var lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) < 0) {
      dates.push(currDate.clone().toDate());
    }
    const result = dates.map((item) => ({
      key: moment(item)._i,
      value: moment(item).format("M-D-YYYY"),
    }));
    return result;
  };
  /*   const handleCityChange = (value) => {
    setNewUserData((prev) => ({ ...prev, city: value }));
  }; */
  /* 
  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    setNewUserData((prev) => ({
      ...prev,
      availability: { startDate, endDate },
    }));
  }; */

  /* const handlePriceChange = (v) => {
    setNewUserData({ price: v });
  }; */

  const handleNoteChange = (text) => {
    setNewDeal((prev) => ({ ...prev, note: text }));
  };

  /*   const handlePreSubmit = (event) => {
    if (event) {
      setError({ status: false, details: {} });
      signupForm(event, userData);
    }
  }; */
  const handelCreateNewDeal = async (providerId) => {
    const newDealData = {
      provider: providerId,
      searcher: searcher._id,
      time: newDeal,
    };
    for (let i in newDealData) {
      if (!newDealData[i]) {
        setError({ status: true, details: [...stateError.details, i] });
      }
    }
    console.log("newDealData", newDealData);
    try {
      const postedDeal = await (
        await fetch(`${SERVER_ENDPOINT}/deals/`, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(newDealData),
        })
      ).json();
      console.log("postedDeal", postedDeal);
    } catch (err) {
      console.log("postedDeal", err);
      setError("postedDeal", err);
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

  const handleServiceChange = (serviceID) => {
    setNewDeal((prev) => ({ ...prev, service: serviceID }));
  };

  return {
    newDeal,
    createDatesArray,
  };
};

export default useBooking;
