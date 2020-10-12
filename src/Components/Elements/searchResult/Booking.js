import React, {  useContext } from "react";
import SearchResultContext from "../../../data/SearchResultContext";
import { StyledBooking } from "../../Styled-Components/StyledBooking";
import useBooking from "../../../data/useBooking";
import { Select } from "antd";
import moment from "moment";
import { TimePicker } from "antd";
import UserContext from "../../../data/UserContext";
import DealResponse from "./DealResponse";
import ErrorMsg from "../shared/ErrorMsg";
const { RangePicker } = TimePicker;


const {Option} = Select
const Booking = ({
  bookingExtend,
  setBookingExtend,
  provider,
  searcher,
  responseExtend,
  setResponseExtend,
  rejectExtend,
  setRejectExtend,
}) => {
  const {  user } = useContext(UserContext);
  const searcherID = user.user && user.user._id;

  const {
    newDeal,
    setNewDeal,
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
      {!error.status && (
        <DealResponse
          responseExtend={responseExtend}
          setResponseExtend={setResponseExtend}
          setBookingExtend={setBookingExtend}
          message={error && error.serverError ? error.serverError : ""}
          setNewDeal={setNewDeal}
          setRejectExtend={setRejectExtend}
          rejectExtend={rejectExtend}
        />
      )}

      <h2 className="title">BOOKING</h2>
      <h2>{provider.fullName}</h2>
      <div className="serviceContainer">
        {error.dealService && <ErrorMsg msg={error.dealService} />}
        <Select
          defaultValue={queryData.homepageService}
          options={provider.services}
          placeholder={"Select a Service"}
          style={{ width: 200 }}
          value={newDeal.dealService}
          onChange={(text, v) => handleServiceChange(v)}
      />
      </div>
      <div className="dateContainer">
        {error.dealDate && <ErrorMsg msg={error.dealDate} />}
        <Select
          defaultValue={queryData.date /* ||todayDate */ }
          placeholder={"Select a date"}
          /* options={datesArr} */
          style={{ width: 200 }}
          onChange={handleDateChange}
        >{datesArr.map(item=><Option key={item} value={item}>{item}</Option>)}</Select>
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
          placeholder={searcher&&`${searcher.street}, ${searcher.city}`}
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
          onClick={() =>handelCreateNewDeal(provider._id, setResponseExtend)}
        >
          <span>Send</span>
        </button>
      </div>
    </StyledBooking>
  );
};

export default Booking;
