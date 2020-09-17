import React from "react";

import {StyledHome }from "../Styled-Components/StyledHome"

import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";
import InfoSection from "../Elements/InfoSection.js";
import Cards from "../Elements/Cards.js";
import { useOptionsFetch } from "../../data/useOptionsFetch";

const Home = () => {
  const [
    { services, cities, loading, error },
    fetchOptions,
  ] = useOptionsFetch();

  return (
    <StyledHome>
      <div className="heroSection">
        <div className="headlineSection">
          <h2>Find trustworthy people to help with your daily chores</h2>
        </div>
        <div className="searchSection">
          <SelectServices options={services} type="Service" />
          <SelectServices options={cities} type="City" />
          <StyledButton type="primary">Search</StyledButton>
        </div>
      </div>
      
      <InfoSection/>
     
    </StyledHome>
  );
};

export default Home;
