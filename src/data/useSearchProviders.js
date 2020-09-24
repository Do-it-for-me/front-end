import { useState, useContext } from "react";
import { SERVER_ENDPOINT, BROWSER_ENDPOINT } from "../config";
import SearchResultContext from "./SearchResultContext";
//import UserContext from "./UserContext";
const useSearchProviders = () => {
  //const { handleLoggedInUser } = useContext(UserContext);
  const { handleSetProvider } = useContext(SearchResultContext);
  const [searchData, setSearchData] = useState({});
  const [loading, setLoading] = useState(false);
  const [stateError, setError] = useState({ status: false, details: "" });

  const handleCityChange = (v, string) => {
    setSearchData((prev) => ({ ...prev, city: v.value }));
  };
  const handleServiceChange = (v, string) => {
    setSearchData((prev) => ({ ...prev, service: v }));
  };

  const handleFetchSearchForm = async (e) => {
    const servicesQuery = () =>
      searchData.services ? `services=${searchData.services._id}&` : "";
    const cityQuery = () => (searchData.city ? `city=${searchData.city}&` : "");
    if (e) {
      e.preventDefault();
      setError({ status: false, details: {} });
      const url = () =>
        `${SERVER_ENDPOINT}/users?${servicesQuery()}${cityQuery()}`;

      let response;
      try {
        setLoading(true);
        setError(false);
        response = await (
          await fetch(url(), {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          })
        ).json();
        if (response.error) {
          setError({
            status: true,
            details: { emailPassword: response.error.message },
          });
        }
        setLoading(false);
        //window.localStorage.setItem("loggedUser", JSON.stringify(response));
        // window.location = BROWSER_ENDPOINT;
      } catch (err) {
        console.log("catch Error", err);
      }
      console.log("response", response, typeof response);
      console.log("res", response);

      handleSetProvider(response);
      /*         window.location = "http://localhost:3001/search-result"; */

      /*       if (response && response._id) {
        handleLoggedInUser(true, { ...response });
        window.location = BROWSER_ENDPOINT;
      } */
    }
  };

  return {
    searchData,
    handleServiceChange,
    handleCityChange,
    handleFetchSearchForm,
  };
};

export default useSearchProviders;
