import React from "react";
import {StyledCards } from "../Styled-Components/StyledCards";


const Cards = () => {

  const data = {
    fullName: "John Doe",
    fee: `${13}€/h`,
    skills: ["Dog walking", "Dog sitting", "Plants watering."],
    note: "Aged & Special Need Pet Care.",
    aboutText: "Service provider can say something about themselves, it is up to them how much they say, but in the sake of building trust, the more the better..."
  }

  return (
    <StyledCards>
    
      <div className="profilePic"></div>
      <div className="__namePriceContainer">
        <h3 >{data.fullName}</h3>
        <p className="fee">{data.fee}</p>
      </div>
      <div className="__container">
        <p className="skills">{data.skills}</p>
        <p className="note">{data.note}</p>
        <p className="text">{data.aboutText}</p>
      </div>
    
      <div className="__buttonContainer">
        <button className="viewProfile"><span>View Profile</span></button>
        <button className="contact"><span>Contact</span></button>
      </div>
    
    </StyledCards>
  );
};

export default Cards;