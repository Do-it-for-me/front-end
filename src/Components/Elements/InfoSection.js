import React from "react";
import { StyledInfoSection } from "../Styled-Components/StyledInfoSection";

import image2 from "../../images/providerInfoIcon.png";
import image4 from "../../images/image 4.png";
import image7 from "../../images/image 7.png";

const InfoSection = () => {
  return (
    <StyledInfoSection>
      <div className="infoItem">
        <img src={image2} alt="image2" className="image2" width="175px" />
        <p>
          As a Service Provider you can specify the skills you have or the
          services you might provide for others, either for free or for a
          reasonable fee
        </p>
      </div>
      <div className="infoItem">
        <img src={image4} alt="image4" className="image4" width="125px" />
        <p className="text2">
          Find a trusted service provider to help you take care of your home or
          pets while you are away or help you do something at home{" "}
        </p>
      </div>
      <div className="infoItem">
        <img src={image7} alt="image7" className="image7" width="150px" />
        <p>
          Both parties can benefit from this deal, one provides time and skills,
          and one provides money or at least a thank you
        </p>
      </div>
    </StyledInfoSection>
  );
};

export default InfoSection;
