import React, { useEffect, useContext } from "react";
import SearchResultContext from "../../data/SearchResultContext";
import { StyledBooking } from "../Styled-Components/StyledBooking";
import useBooking from "../../data/useBooking";
import { Select } from "antd";
import moment from "moment";
import { TimePicker } from "antd";
const { RangePicker } = TimePicker;

const Booking = ({ bookingExtend, setBookingExtend, provider }) => {
  const { newDeal, createDatesArray } = useBooking();
  const datesArr = createDatesArray(
    provider.availability.startDate,
    provider.availability.endDate
  );
  const { queryData } = useContext(SearchResultContext);
  console.log(datesArr);
  /*   useEffect(() => {}, bookingExtend);
   */ return (
    <StyledBooking bookingExtend={bookingExtend}>
      <h2 className="title">BOOKING</h2>
      <h2>{provider.fullName}</h2>
      <div className="serviceContainer">
        <h3>Service</h3>
        <Select
          defaultValue={queryData.homepageService || ""}
          options={provider.services}
          style={{ width: 200 }}
        />
      </div>
      <div className="dateContainer">
        <h3>date</h3>
        <Select
          defaultValue={queryData.date || moment().format("M-D-YYYY")}
          options={datesArr}
          style={{ width: 200 }}
        />
      </div>
      <div className="timeContainer">
        <h3>time</h3>
        <RangePicker format={"HH:mm"} minuteStep={30} style={{ width: 200 }} />
      </div>
      <div className="BTNContainer">
        <button className="BTN sendBTN" onClick={() => setBookingExtend(false)}>
          <span>Send</span>
        </button>
        <button
          className="BTN cancelBTN"
          onClick={() => setBookingExtend(false)}
        >
          <span>Cancel</span>
        </button>
      </div>
    </StyledBooking>
  );
};

export default Booking;
