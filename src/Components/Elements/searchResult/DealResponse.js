import React from "react";
import { Link } from "@reach/router";
import { StyledDealResponse } from "../../Styled-Components/StyledDealResponse";

const DealResponse = ({
  searcherId,
  responseExtend,
  setResponseExtend,
  setBookingExtend,
}) => {
  return (
    <StyledDealResponse responseExtend={responseExtend}>
      <h2>CONFIRMATION</h2>
      <div className="responseContainer">
        <h3>
          Your request has been sent. This service provider will respond to you
          request as soon as possible. You always can review your deals in your
          <Link to={`/${searcherId}`}>profile page</Link>
        </h3>
      </div>
      <div className="BTNContainer">
        <button
          onClick={() => {
            setResponseExtend(false);
            setBookingExtend(false);
          }}
          className="BTN cancelBTN"
        >
          <span>OK</span>
        </button>
      </div>
    </StyledDealResponse>
  );
};

export default DealResponse;