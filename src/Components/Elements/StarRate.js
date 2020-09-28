import React from "react";
import { StyledStarRate } from "../Styled-Components/StyledStarRate";
import { Rate } from "antd";

export default function StarRate() {
  return (
    <StyledStarRate>
      <div className="rateLabel">Minimum Rate</div>
      <Rate allowHalf defaultValue={2.5} />
    </StyledStarRate>
  );
}
