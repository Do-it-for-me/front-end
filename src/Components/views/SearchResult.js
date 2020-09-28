import React, { useState, useContext } from "react";
import SearchResultContext from "../../data/SearchResultContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import SearchFilter from "../Elements/SearchFilter";
import Cards from "../Elements/Cards";
import { StyledButton } from "../Styled-Components/StyledButton";
import { Link } from "@reach/router";
import { StyledSearchResult } from "../Styled-Components/StyledSearchResult";
import CardContainer from "../Elements/CardContainer";
//console.log(SearchResultContext.Provider);
const SearchResult = () => {
  /* const { providers } = useContext(SearchResultContext); */
  const [extend, setExtend] = useState(false);
  const invertExtend = () => {
    setExtend(!extend);
  };
  /* console.log("providers", providers); */
  return (
    <StyledSearchResult extend={extend}>
      <StyledButton
        className="filter-btn"
        type="secondary"
        extend={extend}
        onClick={invertExtend}
      >
        <Link to="/search-result">
          <div>
            Search Filters <FontAwesomeIcon icon={faAngleDoubleDown} />
          </div>
        </Link>
      </StyledButton>
      <SearchFilter extend={extend} onClick={invertExtend} />
      <CardContainer />
      {/* <h1>SEARCH RESULT</h1> */}
      {/* <div className="SearchResult">
        {providers &&
          providers.map((item) => <h1 key={new Date()}>{item.firstName}</h1>)}
      </div> */}
    </StyledSearchResult>
  );
};

export default SearchResult;
