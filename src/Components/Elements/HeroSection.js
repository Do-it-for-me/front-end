import React from "react";
import { Link } from "@reach/router";

import { StyledHeroSection } from "../Styled-Components/StyledHeroSection";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="heroSection">
        <div className="headlineSection">
          <h2>Find trustworthy people to help with your daily chores</h2>
        </div>
        <div className="searchSection">
          <SelectServices type="Service" />
          <SelectServices type="City" />
          <StyledButton type="primary">
            <Link to="/search-result">
              <div>Search</div>
            </Link>
          </StyledButton>
        </div>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
