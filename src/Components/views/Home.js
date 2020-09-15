import React from "react";

import { StyledHome } from "../Styled-Components/StyledHome";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";

const services = [
  {
    value: "Dog Walking",
  },
  {
    value: "Plants Watering",
  },
  {
    value: "Dog Sitting",
  },
];

const cities = [
  {
    value: "Berlin",
  },
  {
    value: "Leipzig",
  },
  {
    value: "Damascus",
  },
];

const Home = () => {
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
      <div className="infoSection">
        <div className="infoItem">INFO ITEM</div>
        <div className="infoItem">INFO ITEM</div>
        <div className="infoItem">INFO ITEM</div>
      </div>
    </StyledHome>
  );
};

export default Home;
