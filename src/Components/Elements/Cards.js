import React, { useState } from "react";
import { StyledCards } from "../Styled-Components/StyledCards";
import StarRate from "./StarRate";

const Cards = (props) => {
  const [extend, setExtend] = useState(false);
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
      <div className="profilePic">
        <StarRate disabled={true} />
      </div>
      <div className="infoSection">
        <div className="__namePriceContainer">
          <h3>{data.fullName}</h3>
          <p className="fee">{data.price}</p>
        </div>
        <div className="__container">
          {data.services.map((item) => (
            <p key={item._id} className="skills">
              {" "}
              {item.value}
            </p>
          ))}
          {/* <p className="note">{data.note}</p> */}
          <p className="bioText">
            {data.bio}
            <span className="more" onClick={() => setExtend(!extend)}>
              ^
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
          <button className="viewProfile">
            <span>View Profile</span>
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
