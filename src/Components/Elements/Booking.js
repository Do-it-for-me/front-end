import React, { useEffect, useContext } from "react";
import SearchResultContext from "../../data/SearchResultContext";
import { StyledBooking } from "../Styled-Components/StyledBooking";
import useBooking from "../../data/useBooking";
import { Select } from "antd";
import moment from "moment";
import { TimePicker } from "antd";
import UserContext from "../../data/UserContext";
import ErrorMsg from "../Elements/ErrorMsg";
const { RangePicker } = TimePicker;

const Booking = ({ bookingExtend, setBookingExtend, provider, searcher }) => {
  const { handleLoggedInUser, user } = useContext(UserContext);
  const searcherID = user.user._id;
  const {
    newDeal,
    createDatesArray,
    handleAddressChange,
    handleServiceChange,
    handleNoteChange,
    handleDateChange,
    handelCreateNewDeal,
    handelTimeChange,
    stateError,
  } = useBooking();
  const datesArr = createDatesArray(
    provider.availability.startDate,
    provider.availability.endDate
  );
  const { queryData } = useContext(SearchResultContext);

  return (
    <StyledBooking bookingExtend={bookingExtend}>
      <h2 className="title">BOOKING</h2>
      <h2>{provider.fullName}</h2>
      <div className="serviceContainer">
        {stateError.status && stateError.details.service && (
          <ErrorMsg msg={stateError.details.service} />
        )}
        <Select
          defaultValue={queryData.homepageService}
          options={provider.services}
          placeholder={"Select a Service"}
          style={{ width: 200 }}
          onChange={handleServiceChange}
        />
      </div>
      <div className="dateContainer">
        {stateError.status && stateError.details.date && (
          <ErrorMsg msg={stateError.details.date} />
        )}
        <Select
          defaultValue={queryData.date || moment().format("M-D-YYYY")}
          placeholder={"Select a date"}
          options={datesArr}
          style={{ width: 200 }}
          onChange={handleDateChange}
        />
      </div>
      <div className="timeContainer">
        {stateError.status && stateError.details.time && (
          <ErrorMsg msg={stateError.details.time} />
        )}
        <RangePicker
          format={"HH:mm"}
          minuteStep={30}
          style={{ width: 200 }}
          onChange={handelTimeChange}
        />
      </div>
      <div className="addressContainer">
        {stateError.status && stateError.details.address && (
          <ErrorMsg msg={stateError.details.address} />
        )}
        <input
          type="text"
          value={newDeal.address || ""}
          placeholder={`${searcher.street}, ${searcher.city}`}
          onChange={(e) => handleAddressChange(e.target.value)}
        />
      </div>
      <div className="noteContainer">
        <textarea
          placeholder="Add a note"
          onChange={(e) => handleNoteChange(e.target.value)}
        />
      </div>
      <div className="BTNContainer">
        <button
          className="BTN sendBTN"
          onClick={() => {
            setBookingExtend(false);
            handelCreateNewDeal(provider._id);
          }}
        >
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
