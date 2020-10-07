import React, { useContext } from "react";
import { StyledCardContainer } from "../../Styled-Components/StyledCardContainer";
import SearchResultContext from "../../../data/SearchResultContext";
import Card from "./Card";

const CardContainer = () => {
  const { providers } = useContext(SearchResultContext);
  return (
    <StyledCardContainer>
      {providers.length ? (
        providers.map((item) => <Card key={item._id} data={item} />)
      ) : (
        <div>no result</div>
      )}
      {/* {providers &&
        providers.map((item) => <Cards key={new Date()} data={item} />)}
      {providers &&
        providers.map((item) => <Cards key={new Date()} data={item} />)}
      {providers &&
        providers.map((item) => <Cards key={new Date()} data={item} />)}
      {providers &&
        providers.map((item) => <Cards key={new Date()} data={item} />)} */}
    </StyledCardContainer>
  );
};

export default CardContainer;