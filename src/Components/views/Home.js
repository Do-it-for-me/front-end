import React from "react";

import {StyledHome }from "../Styled-Components/StyledHome"

import image2 from "../../images/image 2.png";
import image4 from "../../images/image 4.png";
import image7 from "../../images/image 7.png";
import { StyledButton } from "../Styled-Components/StyledButton";
import SelectServices from "../Elements/SelectServices";
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
      <div className="infoSection">
        <div className="infoItem">
        <img src={image2} alt="image2" className="image2" width="225px"/>
        <p>As a Service Provider you can specify the skills you have or the services you might provide for others, either for free or for a reasonable fee</p>
        </div>
        <div className="infoItem">
        <img src={image4} alt="image4" className="image4" width="150px"/>
        <p className="text2">Find a trusted service provider to help you take care of your home or pets while you are away or help you do something at home </p>
        </div>
        <div className="infoItem">
        <img src={image7} alt="image7" className="image7" width="200px"/>
        <p>Both parties can benefit from this deal, one provides time and skills, and one provides money or at least a thank you</p>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
