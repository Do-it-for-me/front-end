import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import { BROWSER_ENDPOINT } from "../../config";
import { StyledCards } from "../Styled-Components/StyledCards";
import StarRate from "./StarRate";
import Booking from "./Booking";
import DealResponse from "./DealResponse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../data/UserContext";
const Cards = (props) => {
  const [extend, setExtend] = useState(false);
  const [bookingExtend, setBookingExtend] = useState(false);
  const [responseExtend, setResponseExtend] = useState(false);
  const data = props.data;
  const { user } = useContext(UserContext);
  const searcher = user.user;
  const handelBookingExtend = () => {
    if (searcher._id) {
      setBookingExtend(true);
    } else {
      navigate(`${BROWSER_ENDPOINT}/login`, { booking: true });
    }
  };

  return (
    <StyledCards extend={extend} image={props.image || ""}>
      <DealResponse
        responseExtend={responseExtend}
        setResponseExtend={setResponseExtend}
        setBookingExtend={setBookingExtend}
      />
      <Booking
        setResponseExtend={setResponseExtend}
        searcher={searcher}
        provider={data}
        bookingExtend={bookingExtend}
        setBookingExtend={setBookingExtend}
      />
      <div className="profilePic"></div>

      <div className="infoSection">
        <div className="ratePrice">
          <StarRate disabled={true} />
          <div className="price">{data.price || 0}€/h</div>
        </div>
        <div className="nameContainer">
          <h3>{data.fullName}</h3>
          {/* <p className="fee">{data.price}</p> */}
        </div>
        <div className="servicesContainer">
          <div className="skills">
            |
            {data.services.map((item) => (
              <p key={item._id} className="skill">
                {" "}
                {item.value}|
              </p>
            ))}
          </div>
          {/* <p className="note">{data.note}</p> */}
          <p className="bioText">
            {data.bio}
            <span className="more" onClick={() => setExtend(!extend)}>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow" />{" "}
            </span>
            Hello mr. Wafi, I would like Hello mr. Wafi, I would like Hello mr.
            Wafi, I would like Hello mr. Wafi, I would like Hello mr. Wafi, I
            would like Hello mr. Wafi, I would like Hello mr. Wafi, I would like
            Hello mr. Wafi, I would like Hello mr. Wafi, I would like Hello mr.
            Wafi, I would like Hello mr. Wafi, I would like Hello mr. Wafi, I
            would like Hello mr. Wafi, I would like Hello mr. Wafi, I would like
            Hello mr. Wafi, I would like Hello mr. Wafi, I would like Hello mr.
            Wafi, I would like Hello mr. Wafi, I would like Hello mr. Wafi, I
            would like Hello mr. Wafi, I would like Hello mr. Wafi, I would like
            Hello mr. Wafi, I would like Hello mr. Wafi, I would like Hello mr.
            Wafi, I would like
          </p>
        </div>
        <div className="__buttonContainer">
          <button onClick={() => handelBookingExtend()} className="book">
            <span>Book</span>
          </button>
          <button className="contact">
            <span>Contact</span>
          </button>
        </div>
      </div>
    </StyledCards>
  );
};

export default Cards;
