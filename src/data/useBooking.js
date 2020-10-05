import { navigate } from "@reach/router";
import { useState, useContext } from "react";
import { SERVER_ENDPOINT } from "../config";
import UserContext from "./UserContext";
import moment from "moment";
import SearchResultContext from "./SearchResultContext";
import { counter } from "@fortawesome/fontawesome-svg-core";

const useBooking = () => {
  const { queryData } = useContext(SearchResultContext);
  const initialDate = queryData.date || moment().format("YYYY-MM-DD");
  const { handleLoggedInUser, user } = useContext(UserContext);
  const searcher = user.user;
  const [newDeal, setNewDeal] = useState({});
  const [error, setError] = useState({});

  const createDatesArray = (startDate, endDate) => {
    let dates = [];

    let currDate = moment(startDate).startOf("day");
    let lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) < 0) {
      dates.push(currDate.clone().toDate());
    }
    const result = dates.map((item) => ({
      key: moment(item)._i,
      value: moment(item).format("YYYY-MM-DD"),
    }));
    return result;
  };

  const handleDateChange = (value, id) => {
    setNewDeal((prev) => ({ ...prev, date: id.value }));
  };

  const handleAddressChange = (text) => {
    setNewDeal((prev) => ({ ...prev, address: text }));
  };

  const handleNoteChange = (text) => {
    setNewDeal((prev) => ({ ...prev, note: text }));
  };

  const handleServiceChange = (value) => {
    setNewDeal((prev) => ({ ...prev, service: value._id }));
  };
  const handelTimeChange = (time, timeString) => {
    setNewDeal((prev) => ({ ...prev, time: timeString }));
  };

  const handelCreateNewDeal = async (providerId, callBack) => {
    try {
      //create fetch body
      const newDealData = {
        provider: providerId,
        time: newDeal.time,
        address: newDeal.address || `${searcher.street}, ${searcher.city}`,
        dealDate: newDeal.date || initialDate,
        note: newDeal.note,
        dealService: newDeal.service || queryData.services,
      };
      /*  console.log(newDealData); */
      for (let i in newDealData) {
        if (!newDealData[i]) {
          console.log(i);
          if (i === "note") continue;
          setError({ [i]: "must be filled" });
          throw new Error([i], "must be filled");
        }
      }

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
      if (postedDeal._id && !error.status) {
        callBack(true);
        setNewDeal({});
      }
    } catch (err) {
      console.log(err);
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

      }

      if (response && response._id) {
        handleLoggedInUser(true, { ...response });
        setUserData({});
        navigate(-1);
      }
    }
  }; */

  return {
    newDeal,
    createDatesArray,
    handleAddressChange,
    handleServiceChange,
    handleNoteChange,
    handleDateChange,
    handelCreateNewDeal,
    handelTimeChange,
    error,
  };
};

export default useBooking;
