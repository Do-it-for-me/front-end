import React from "react";
import { StyledStarRate } from "../Styled-Components/StyledStarRate";
import { Rate } from "antd";

export default function StarRate(props) {
  return (
    <StyledStarRate {...props}>
      <div className="rateLabel">Minimum Rate</div>
      <Rate
        allowHalf
        disabled={props.disabled}
        onChange={props.onChange}
        defaultValue={2.5}
      />
    </StyledStarRate>
  );
}
