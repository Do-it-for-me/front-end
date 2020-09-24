import React, { useState, useContext } from "react";
import { SERVER_ENDPOINT, BROWSER_ENDPOINT } from "../config";
import SearchResultContext from "./SearchResultContext";

//import UserContext from "./UserContext";
const useSearchProviders = () => {
  //const { handleLoggedInUser } = useContext(UserContext);
  const { stateSetter } = useContext(SearchResultContext);
  console.log("handleSetProvider", stateSetter);
  const [searchData, setSearchData] = useState({});
  const [loading, setLoading] = useState(false);
  const [stateError, setError] = useState({ status: false, details: "" });

  const handleCityChange = (v, string) => {
    setSearchData((prev) => ({ ...prev, city: v.value }));
  };
  const handleServiceChange = (v, string) => {
    setSearchData((prev) => ({ ...prev, services: v._id }));
  };

  const handlePreFetchSearchForm = (e) => {
    console.log("handlePreFetchSearchForm");
    if (e) {
      e.preventDefault();
      handleFetchSearchForm();
    }
  };

  const handleFetchSearchForm = async (e) => {
    const servicesQuery = () =>
      searchData.services ? `services=${searchData.services}&` : "";
    const cityQuery = () => (searchData.city ? `city=${searchData.city}&` : "");
    //if (e) {

    setError({ status: false, details: {} });
    const url = `${SERVER_ENDPOINT}/users?${servicesQuery()}${cityQuery()}`;
    const fetchURL = url.slice(0, -1);
    console.log(fetchURL);
    let response;
    try {
      setLoading(true);
      setError(false);
      response = await (
        await fetch(fetchURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      console.log("response", response);
      stateSetter(response);
      if (response.error) {
        setError({
          status: true,
          details: { message: response.error.message },
        });
      }

      setLoading(false);
    } catch (err) {
      console.log("catch Error", err);
    }
  };

  return {
    searchData,
    handleServiceChange,
    handleCityChange,
    handlePreFetchSearchForm,
  };
};

export default useSearchProviders;
