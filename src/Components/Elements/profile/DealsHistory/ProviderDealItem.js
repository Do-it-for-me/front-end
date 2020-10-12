import React, { useState } from "react";
import moment from "moment";
import { StyledSearcherDealItem } from "../../../Styled-Components/StyledSearcherDealItem";
import { Rate } from "antd";
import useFetchDeals from "../../../../data/useFetchDeals";
const ProviderDealItem = ({ deal }) => {
  const [rateValue, setRateValue] = useState(0);
  const handleRateChange = (v) => {
    setRateValue(v);
  };
console.log(deal)
  const { handleCancelDeal, handleConfirmDeal } = useFetchDeals();
  return (
    <StyledSearcherDealItem>
      <div className="userDataContainer">
        <h4>{deal.searcher && deal.searcher.fullName} </h4>
        <h4>{deal.searcher && deal.dealService.value}</h4>
        <h4>
          {moment(deal.dealDate).format("YYYY-MM-DD")} at {deal.time[0]} -{" "}
          {deal.time[1]}
        </h4>

        <h4>{deal.provider.price ? (`${deal.provider.price} $/h`) : "free"}</h4>
      </div>
      <div className="actionsContainer">
        {deal.canceled ? (
          <p className="canceled"> canceled</p>
        ) : deal.approved ? (
          <p className="approved"> approved</p>
        ) : (
          <>
            <p className="pending">pending</p>
            <div className="BTNContainer">
              <button
                onClick={() => {
                  handleCancelDeal(deal._id);
                  /*                   setChange(change + 1); */
                }}
                className="cancel"
              >
                reject
              </button>
              <button
                onClick={() => {
                  handleConfirmDeal(deal._id);
                  /*        setChange(change + 1); */
                }}
                className="confirm"
              >
                confirm
              </button>
            </div>
          </>
        )}
      </div>
    </StyledSearcherDealItem>
  );
};

export default ProviderDealItem;

/* 
{<div className="rate">
<Rate
  allowHalf

  disabled={deal.rated}
  onChange={handleRateChange}
/>
<button
  onClick={() => {
    handelRateProvider(deal._id, deal.provider._id, rateValue);
    setChange("ds");
  }}
  disabled={rateValue ? false : true}
  className="rateBTN"
>
  rate provider
</button>
</div>} */
