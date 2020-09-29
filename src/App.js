import React, { useState, useEffect, useMemo } from "react";
import { Router } from "@reach/router";

// Components ///////////////
import Home from "./Components/views/Home";
import Header from "./Components/Elements/Header";
import ImageUpload from "./Components/ImageUpload";
import SearchResult from "./Components/views/SearchResult";
import Profile from "./Components/views/Profile";
import Login from "./Components/views/Login";
import Signup from "./Components/views/Signup";

import CardContainer from "./Components/Elements/CardContainer";

// Global Style///////////
import { GlobalStyle } from "./Components/Styled-Components/GlobalStyle";
/* function onChange(date, dateString) {
  console.log(date, dateString);
} */

import SearchResultContext from "./data/SearchResultContext";
import UserContext from "./data/UserContext";

function App() {
  //LoggedIn User Context
  const [loggedInUser, setLoggedInUser] = useState({});
  const handleLoggedInUser = (logged, user) => {
    setLoggedInUser({ logged: logged, user: { ...user } });
  };
  const contextValue = {
    user: loggedInUser,
    handleLoggedInUser: handleLoggedInUser,
  };

  //searchProviders Context
  const [providers, setProviders] = useState([]);
  const [queryData, setQueryData] = useState({});
  const stateSetter = (array) => {
    setProviders(array);
  };
  console.log("querydata from app.js", queryData);
  const searchResultContextValue = {
    providers,
    stateSetter,
    queryData,
    setQueryData,
  };

  useEffect(() => {
    if (loggedInUser.user && loggedInUser.user._id) {
      window.localStorage.setItem(
        "loggedUser",
        JSON.stringify(loggedInUser.user)
      );
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (document.cookie.includes("loggedIn=true")) {
      const existingUsers = window.localStorage.getItem("loggedUser");
      //console.log("existingUsers", typeof existingUsers, existingUsers);

      if (existingUsers != "undefined") {
        const user = JSON.parse(existingUsers);

        handleLoggedInUser(true, user);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={contextValue}>
      <SearchResultContext.Provider value={searchResultContextValue}>
        <>
          <Header />

          <Router>
            <Home path="/" />
            <SearchResult path="/search-result" />
            <Login path="/login" />
            <Signup path="/signup" />
            <ImageUpload path="/test" />
            <Profile path="/:id" />
            <CardContainer path="/cardContainer" />
            {/*         <DateRangePicker onChange={onChange} path="/test1" /> */}
          </Router>
          <GlobalStyle />
        </>
      </SearchResultContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
