import React, { useEffect } from "react";
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
function App() {
  /*   useEffect(() => {
    const fetch = async () => {
      let response;
      try {
        response = await (
          await fetch("http://localhost:3000/api/users/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              /*  "Access-Control-Allow-Origin":
        "* ,'http://localhost:3000','http://localhost:3001'",
      "Access-Control-Allow-Headers": "*", */
  //" Accept": "*/*",

  /*          credentials: "same-origin",
            body: JSON.stringify({
              role: "user",
              firstName: "Test",
              lastName: "Amer",
              email: "wafi.amer.317@gmail.com",
              password: "Super!secret21",
              street: "Leipzig",
              city: "Leipzig",
              zip: "04177",
            }),
          })
        ).json();
        console.log(response);
      } catch (err) {
        console.log("catch Error", err);
        //setError({ status: true, details: err });
      }
    };
    fetch();
  }, []); */
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
