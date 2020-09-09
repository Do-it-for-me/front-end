import React from "react";
import "./App.scss";
import Home from "./Components/Layout/Home";
import {GlobalStyle} from "./Components/Styled-Components/GlobalStyle"
function App() {
  return (
    <div className="App">
      <Home />
      <GlobalStyle/>
    </div>
  );
}

export default App;
