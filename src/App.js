import React from "react";
import { Router } from "@reach/router";

// Components ///////////////
import Home from "./Components/views/Home";
import Header from "./Components/Elements/Header";
import SearchResult from "./Components/views/SearchResult";
import Login from "./Components/views/Login";
import Signup from "./Components/views/Signup";

// Global Style///////////
import { GlobalStyle } from "./Components/Styled-Components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <SearchResult path="/search-result" />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
