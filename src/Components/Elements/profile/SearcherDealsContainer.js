import React from "react";
import SearcherDealItem from "./SearcherDealItem";
import { StyledDealsContainer } from "../../Styled-Components/StyledDealsContainer";
const SearcherDealsContainer = ({ list, setChange }) => {
  return (
    <StyledDealsContainer>
      <h2 className="searchersTitle">Your Deals as Searcher</h2>
      {list &&
        list.map((item) => (
          <SearcherDealItem key={item._id} setChange={setChange} deal={item} />
        ))}
    </StyledDealsContainer>
  );
};

export default SearcherDealsContainer;
