import React, { useEffect } from "react";
import useFetchDeals from "../../../data/useFetchDeals";
import SearcherDealsContainer from "./SearcherDealsContainer";
const Deals = () => {
  const { deals, fetchDeals } = useFetchDeals();
  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div>
      <SearcherDealsContainer list={deals.searcherList} />
      <SearcherDealsContainer list={deals.providerList} />
    </div>
  );
};

export default Deals;
