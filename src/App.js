import React, { useState, useEffect, useMemo } from "react";
import { Router } from "@reach/router";

// Components ///////////////
import Home from "./Components/views/Home";
import Header from "./Components/Elements/header/Header";
import SearchResult from "./Components/views/SearchResult";
import Profile from "./Components/views/Profile";
import Login from "./Components/views/Login";
import Signup from "./Components/views/Signup";
import ServicesToggler from "./Components/Elements/home/ServicesToggler";
import CardContainer from "./Components/Elements/searchResult/CardContainer";

import HeadlineSection from "./Components/Elements/home/HeadlineSection";

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
      const user = JSON.parse(existingUsers);
      if (user) {
        handleLoggedInUser(true, user);
      } else {
        handleLoggedInUser(false, undefined);
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

            <Profile path="/:id" />
            <CardContainer path="/cardContainer" />
            <ServicesToggler path="/test1" />
          </Router>
          <GlobalStyle />
        </>
      </SearchResultContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
