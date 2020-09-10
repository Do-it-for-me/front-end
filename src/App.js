import React from "react";
import "./App.scss";
import Home from "./Components/views/Home";
import Header from "./Components/Elements/Header"
import {GlobalStyle} from "./Components/Styled-Components/GlobalStyle"
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle/>
    </div>
  );
}

export default App;
