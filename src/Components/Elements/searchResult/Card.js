import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import { BROWSER_ENDPOINT } from "../../../config";
import { StyledCard } from "../../Styled-Components/StyledCard";
import StarRate from "../shared/StarRate";
import Booking from "./Booking";
import DealResponse from "./DealResponse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../../data/UserContext";
const Card = (props) => {
  const [extend, setExtend] = useState(false);
  const [bookingExtend, setBookingExtend] = useState(false);
  const [responseExtend, setResponseExtend] = useState(false);
  const data = props.data;
  const { user } = useContext(UserContext);
  const searcher = user.user;
  const handelBookingExtend = () => {
    if (searcher && searcher._id) {
      setBookingExtend(true);
    } else {
      navigate(`${BROWSER_ENDPOINT}/login`, { booking: true });
    }
  };

  return (
    <StyledCard extend={extend} image={data.image || ""}>
      <DealResponse
        searcherId={searcher._id}
        responseExtend={responseExtend}
        setResponseExtend={setResponseExtend}
        setBookingExtend={setBookingExtend}
      />
      <Booking
        setResponseExtend={setResponseExtend}
        searcher={searcher ? searcher : undefined}
        provider={data}
        bookingExtend={bookingExtend}
        setBookingExtend={setBookingExtend}
      />
      <div className="profilePic"></div>

      <div className="infoSection">
        <div className="ratePrice">
          <StarRate disabled={true} value={data.rate} />{" "}
          <span>({String(data.rateCounter)})</span>
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
            <span className="more" onClick={() => setExtend(!extend)}>
              <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow" />{" "}
            </span>
            {data.bio}
          </p>
        </div>
        <div className="__buttonContainer">
          <button className="contact">
            <span>Contact</span>
          </button>
          <button onClick={() => handelBookingExtend()} className="book">
            <span>Book</span>
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
