import React from "react";
import ProviderDealItem from "./ProviderDealItem";
import { StyledDealsContainer } from "../../../Styled-Components/StyledDealsContainer";
const ProviderDealsContainer = ({ list, setChange }) => {
  return (
    <StyledDealsContainer>
      <h2 className="providersTitle">Your Deals as Provider</h2>
      {list &&
        list.map((item) => (
          <ProviderDealItem key={item._id} setChange={setChange} deal={item} />
        ))}
    </StyledDealsContainer>
  );
};

export default ProviderDealsContainer;
