import React from "react";
import { Link } from "@reach/router";

import { StyledHeroSection } from "../Styled-Components/StyledHeroSection";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";

import { useOptionsFetch } from "../../data/useOptionsFetch";

export const HeroSection = () => {
  const [
    { services, cities, loading, error },
    fetchOptions,
  ] = useOptionsFetch();
  return (
    <StyledHeroSection>
      <div className="heroSection">
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
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
