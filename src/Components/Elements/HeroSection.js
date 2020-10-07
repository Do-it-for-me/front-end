import React from "react";
import { Link } from "@reach/router";

import { StyledHeroSection } from "../Styled-Components/StyledHeroSection";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";
import InfoSection from "../Elements/InfoSection";
import useSearchProviders from "../../data/useSearchProviders";

import HeadlineSection from "../Elements/HeadlineSection";

export const HeroSection = () => {
  const {
    handleServiceChange,
    handleCityChange,
    handlePreFetchSearchForm,
    searchData,
  } = useSearchProviders();

  return (
    <StyledHeroSection>
      <div className="heroSection">
        <div className="headlineSection">
          <HeadlineSection />
        </div>
        {/* <div className="searchSection"> */}
        <form className="searchSection">
          <SelectServices
            type="Service"
            onChange={(string, v) => handleServiceChange(v)}
            name="Service"
          />
          <SelectServices
            onChange={(string, v) => handleCityChange(v)}
            type="city"
            name="city"
          />
          <StyledButton
            onClick={() => handlePreFetchSearchForm()}
            type="primary"
          >
            <Link to="/search-result">
              <div>Search</div>
            </Link>
          </StyledButton>
        </form>
        {/*    </div> */}
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
