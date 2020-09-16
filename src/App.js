import React from "react";
import "./App.scss";
import Home from "./Components/views/Home";
import Header from "./Components/Elements/Header";
import { GlobalStyle } from "./Components/Styled-Components/GlobalStyle";
import ImageUpload from "./Components/ImageUpload";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
      <ImageUpload />
    </div>
  );
}

export default App;
