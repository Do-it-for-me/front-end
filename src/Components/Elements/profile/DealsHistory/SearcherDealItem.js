import React, { useState } from "react";
import moment from "moment";
import { StyledSearcherDealItem } from "../../../Styled-Components/StyledSearcherDealItem";
import { Rate } from "antd";
import useFetchDeals from "../../../../data/useFetchDeals";
const SearcherDealItem = ({ deal, setChange }) => {
  const [rateValue, setRateValue] = useState(0);
  const handleRateChange = (v) => {
    setRateValue(v);
  };

  const { handleCancelDeal, handelRateProvider } = useFetchDeals();
  return (
    <StyledSearcherDealItem>
      <div className="userDataContainer">
        <h4>{deal.provider.fullName} </h4>
        <h4>{deal.dealService.value}</h4>
        <h4>
          {moment(deal.dealDate).format("YYYY-MM-DD")} at {deal.time[0]} -{" "}
          {deal.time[1]}
        </h4>

        <h4>{deal.price ? (deal.price, "$/h") : "free"}</h4>
      </div>
      <div className="actionsContainer">
        {deal.canceled ? (
          <p className="canceled">canceled</p>
        ) : deal.approved ? (
          <>
            <p className="approved">approved</p>
            {moment(deal.dealDate).format("YYYY-MM-DD") >=
              moment().format("YYYY-MM-DD") || deal.rated ? (
              <div className="rate">
                <button
                  title="rating is only possible after service date"
                  disabled
                  className="rateBTN"
                >
                  rate provider
                </button>
              </div>
            ) : (
              <div className="rate">
                <Rate
                  value={rateValue}
                  allowClear
                  allowHalf
                  disabled={deal.rated}
                  onChange={(v) => setRateValue(v)}
                />
                <div className="RateButtonContainer">
                  <button onClick={() => setRateValue(0)} className="clearBTN ">
                    clear
                  </button>
                  <button
                    onClick={() => {
                      handelRateProvider(
                        deal._id,
                        deal.provider._id,
                        rateValue
                      );
                      setChange("ds");
                    }}
                    disabled={rateValue ? false : true}
                    className="rateBTN"
                  >
                    rate provider
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <p className="pending">pending</p>
            <div className="BTNContainer">
              <button
                onClick={() => {
                  handleCancelDeal(deal._id);
                  setChange("ladj");
                }}
                className="cancel"
              >
                cancel deal
              </button>
            </div>
          </>
        )}
      </div>
    </StyledSearcherDealItem>
  );
};

export default SearcherDealItem;

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
