import React from "react";
import { Link } from "@reach/router";

import { StyledHeroSection } from "../Styled-Components/StyledHeroSection";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";
import InfoSection from "../Elements/InfoSection";
import useSearchProviders from "../../data/useSearchProviders";

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
          <h2>Find trustworthy people to help with your daily chores</h2>
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
      {/*   <InfoSection /> */}
    </StyledHeroSection>
  );
};

export default HeroSection;
