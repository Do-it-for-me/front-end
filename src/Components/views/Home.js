import React from "react";

import { StyledHome } from "../Styled-Components/StyledHome";
import { StyledButton } from "../Styled-Components/StyledButton";

const Home = () => {
  return (
    <StyledHome>
      <div className="heroSection">
        <div className="headlineSection">
          <h2>Find trustworthy people to help with your daily chores</h2>
        </div>
        <div className="searchSection">
          <StyledButton type="primary">Search</StyledButton>
        </div>
      </div>
      <div className="infoSection">
        <div className="infoItem">INFO ITEM</div>
        <div className="infoItem">INFO ITEM</div>
        <div className="infoItem">INFO ITEM</div>
      </div>
    </StyledHome>
  );
};

export default Home;
