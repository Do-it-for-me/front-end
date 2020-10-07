import React from "react";
import { Link } from "@reach/router";

import { StyledHeroSection } from "../Styled-Components/StyledHeroSection";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";

import HeadlineSection from "../Elements/HeadlineSection";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="heroSection">
        <div className="headlineSection">
          <HeadlineSection />
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
      <div className="doubleDownIcon-container">
        <a href="#InfoSection">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
