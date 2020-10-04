import React, { useState } from "react";
import { StyledCards } from "../Styled-Components/StyledCards";
import StarRate from "./StarRate";
import Booking from "./Booking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  const [extend, setExtend] = useState(false);
  const [bookingExtend, setBookingExtend] = useState(false);
  const data = props.data;

  /* {
    fullName: "John Doe",
    fee: `${13}€/h`,
    skills: ["Dog walking", "Dog sitting", "Plants watering."],
    note: "Aged & Special Need Pet Care.",
    aboutText: "Service provider can say something about themselves, it is up to them how much they say, but in the sake of building trust, the more the better..."
  } */

  return (
    <StyledCards extend={extend} image={props.image || ""}>
      <Booking
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
          <button onClick={() => setBookingExtend(true)} className="book">
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
