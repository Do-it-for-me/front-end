import React from "react";

import { StyledHome } from "../Styled-Components/StyledHome";
import { HeroSection } from "../Elements/HeroSection";

const Home = () => {
  return (
    <StyledHome>
      <HeroSection />
      {/* <div className="heroSection">
        <div className="headlineSection">
          <h2>Find trustworthy people to help with your daily chores</h2>
        </div>
        <div className="searchSection">
          <SelectServices options={services} type="Service" />
          <SelectServices options={cities} type="City" />

          <StyledButton type="primary">
            <Link to="/search-result">
              <div>Search</div>
            </Link>
          </StyledButton>
        </div>
      </div> */}
      <div className="infoSection">
        <div className="infoItem">INFO ITEM</div>
        <div className="infoItem">INFO ITEM</div>
        <div className="infoItem">INFO ITEM</div>
      </div>
    </StyledHome>
  );
};

export default Home;
