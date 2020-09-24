import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

// Components ///////////////
import Home from "./Components/views/Home";
import Header from "./Components/Elements/Header";
import ImageUpload from "./Components/ImageUpload";
import SearchResult from "./Components/views/SearchResult";
import Login from "./Components/views/Login";
import Signup from "./Components/views/Signup";

// Global Style///////////
import { GlobalStyle } from "./Components/Styled-Components/GlobalStyle";
/* function onChange(date, dateString) {
  console.log(date, dateString);
} */
import UserContext from "./data/UserContext";
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const handleLoggedInUser = (logged, user) => {
    setLoggedInUser({ logged: logged, user: user });
  };
  const contextValue = {
    user: loggedInUser,
    handleLoggedInUser: handleLoggedInUser,
  };

  useEffect(() => {
    console.log(loggedInUser.user);
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
      <Header />

      <Router>
        <Home path="/" />
        <SearchResult path="/search-result" />
        <Login path="/login" />
        <Signup path="/signup" />
        <ImageUpload path="/test" />
        {/*         <DateRangePicker onChange={onChange} path="/test1" /> */}
      </Router>
      <GlobalStyle />
    </UserContext.Provider>
  );
}

export default App;
