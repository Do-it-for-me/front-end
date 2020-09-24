import React, { useState, useContext } from "react";
import SearchResultContext from "../../data/SearchResultContext";
const SearchResult = () => {
  const [providers, setProviders] = useState([]);

  let handleSetProvider = (array) => {
    setProviders(array);
  };
  const contextProvidersValue = {
    providersArray: providers,
    handleSetProvider: handleSetProvider,
  };
  return (
    <SearchResultContext.Provider value={contextProvidersValue}>
      <h1>SEARCH RESULT</h1>
      <div className="SearchResult">
        {providers && providers.map((item) => <h1 key={new Date()}>{item}</h1>)}
      </div>
    </SearchResultContext.Provider>
  );
};

export default SearchResult;
