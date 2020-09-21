import React from "react";
import { Router } from "@reach/router";

// Components ///////////////
import Home from "./Components/views/Home";
import Header from "./Components/Elements/Header";
import ImageUpload from "./Components/ImageUpload";
import SearchResult from "./Components/views/SearchResult";
import Login from "./Components/views/Login";
import Signup from "./Components/views/Signup";
import { DateRangePicker } from "./Components/Elements/DateRangePicker";
// Global Style///////////
import { GlobalStyle } from "./Components/Styled-Components/GlobalStyle";
/* function onChange(date, dateString) {
  console.log(date, dateString);
} */
function App() {
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
