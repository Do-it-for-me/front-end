import React, { useState, useContext } from "react";
import SearchResultContext from "../../data/SearchResultContext";
//console.log(SearchResultContext.Provider);
const SearchResult = () => {
  const { providers } = useContext(SearchResultContext);
  console.log("providers", providers);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>SEARCH RESULT</h1>
      <div className="SearchResult">
        {providers &&
          providers.map((item) => <h1 key={new Date()}>{item.firstName}</h1>)}
      </div>
    </>
  );
};

export default SearchResult;
