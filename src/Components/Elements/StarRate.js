import React from "react";
import { StyledStarRate } from "../Styled-Components/StyledStarRate";
import { Rate } from "antd";

export default function StarRate(props) {
  return (
    <StyledStarRate>
      <Rate
        allowHalf
        onChange={props.onChange}
        defaultValue={2.5}
        disabled={props.disabled}
      />
    </StyledStarRate>
  );
}
