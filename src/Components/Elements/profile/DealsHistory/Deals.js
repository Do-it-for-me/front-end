import React, { useEffect, memo, useState, useContext } from "react";
import useFetchDeals from "../../../../data/useFetchDeals";
import DealsContext from "../../../../data/DealsContext";
import SearcherDealsContainer from "./SearcherDealsContainer";
import ProviderDealsContainer from "./ProviderDealsContainer";
import { StyledDeals } from "../../../Styled-Components/StyledDeals";

const Deals = ({ deals }) => {
  console.log("deals", deals);
  return (
    <StyledDeals>
      {/*  <button onClick={handleChange}>change</button> */}
      <SearcherDealsContainer
        list={deals && deals.searcherList}
        /*         setChange={setChange}
        change={change} */
      />
      <ProviderDealsContainer
        list={deals && deals.providerList}
        /*         setChange={setChange}
        change={change} */
      />
    </StyledDeals>
  );
};

export default Deals;
