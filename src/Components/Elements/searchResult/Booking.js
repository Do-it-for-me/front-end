import React, { useEffect, useContext } from "react";
import SearchResultContext from "../../../data/SearchResultContext";
import { StyledBooking } from "../../Styled-Components/StyledBooking";
import useBooking from "../../../data/useBooking";
import { Select } from "antd";
import moment from "moment";
import { TimePicker } from "antd";
import UserContext from "../../../data/UserContext";
import ErrorMsg from "../shared/ErrorMsg";
const { RangePicker } = TimePicker;

const Booking = ({
  bookingExtend,
  setBookingExtend,
  provider,
  searcher,
  setResponseExtend,
}) => {
  const { handleLoggedInUser, user } = useContext(UserContext);
  const searcherID = user.user && user.user._id;
  // const searcher = searcher && searcher;
  const {
    newDeal,
    createDatesArray,
    handleAddressChange,
    handleServiceChange,
    handleNoteChange,
    handleDateChange,
    handelCreateNewDeal,
    handelTimeChange,
    error,
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
        {error.dealService && <ErrorMsg msg={error.dealService} />}
        <Select
          defaultValue={queryData.homepageService}
          options={provider.services}
          placeholder={"Select a Service"}
          style={{ width: 200 }}
          onChange={(text, v) => handleServiceChange(v)}
        />
      </div>
      <div className="dateContainer">
        {error.dealDate && <ErrorMsg msg={error.dealDate} />}
        <Select
          defaultValue={queryData.date || moment().format("YYYY-MM-DD")}
          placeholder={"Select a date"}
          options={datesArr}
          style={{ width: 200 }}
          onChange={handleDateChange}
        />
      </div>
      <div className="timeContainer">
        {error.time && <ErrorMsg msg={error.time} />}
        <RangePicker
          format={"HH:mm"}
          minuteStep={30}
          style={{ width: 200 }}
          onChange={handelTimeChange}
        />
      </div>
      <div className="addressContainer">
        {error.address && <ErrorMsg msg={error.address} />}
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
          className="BTN cancelBTN"
          onClick={() => setBookingExtend(false)}
        >
          <span>Cancel</span>
        </button>
        <button
          className="BTN sendBTN"
          onClick={() => {
            handelCreateNewDeal(provider._id, setResponseExtend);
          }}
        >
          <span>Send</span>
        </button>
      </div>
    </StyledBooking>
  );
};

export default Booking;
