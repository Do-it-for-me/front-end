import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import SearchFilter from "../Elements/SearchFilter";
import Cards from "../Elements/Cards";
import { StyledButton } from "../Styled-Components/StyledButton";
import { Link } from "@reach/router";
import { StyledSearchResult } from "../Styled-Components/StyledSearchResult";

const SearchResult = () => {
  const [extend, setExtend] = useState(false);
  const invertExtend = () => {
    console.log("clicked");
    setExtend(!extend);
  };
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
    </StyledSearchResult>
  );
};

export default SearchResult;
