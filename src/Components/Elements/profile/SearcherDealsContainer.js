import React from "react";
import SearcherDealItem from "./SearcherDealItem";
const SearcherDealsContainer = ({ list }) => {
  console.log(list);
  return (
    <div>{list && list.map((item) => <SearcherDealItem deal={item} />)}</div>
  );
};

export default SearcherDealsContainer;
