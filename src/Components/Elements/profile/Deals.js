import React, { useEffect, memo, useState } from "react";
import useFetchDeals from "../../../data/useFetchDeals";
import SearcherDealsContainer from "./SearcherDealsContainer";
import ProviderDealsContainer from "./ProviderDealsContainer";
import { StyledDeals } from "../../Styled-Components/StyledDeals";
const Deals = () => {
  const [change, setChange] = useState(false);
  const { deals, fetchDeals } = useFetchDeals();
  useEffect(() => {
    fetchDeals();
  }, [change]);
  const { searcherList, providerList } = deals;
  return (
    <StyledDeals>
      {/*  <button onClick={handleChange}>change</button> */}
      <SearcherDealsContainer list={searcherList} setChange={setChange} />
      <ProviderDealsContainer list={providerList} setChange={setChange} />
    </StyledDeals>
  );
};

export default Deals;
