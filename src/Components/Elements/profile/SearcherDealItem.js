import React from "react";
import moment from "moment";
import { StyledSearcherDealItem } from "../../Styled-Components/StyledSearcherDealItem";
const SearcherDealItem = ({ deal }) => {
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
        {deal.approved && deal.canceled ? (
          <p>rate</p>
        ) : (
          <button className="cancel">cancel deal</button>
        )}
      </div>
    </StyledSearcherDealItem>
  );
};

export default SearcherDealItem;
