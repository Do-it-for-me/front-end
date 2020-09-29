import React from "react";
import { Slider } from "antd";
import { StyledPriceSlider } from "../Styled-Components/StyledPriceSlider";
import "antd/dist/antd.css";

function formatter(value) {
  return `${value}€`;
}

export default function PricePicker(props) {
  return (
    <StyledPriceSlider>
      <div className="priceLabel">Max Price</div>
      <Slider
        tipFormatter={formatter}
        max={15}
        defaultValue={props.defaultValue ? props.defaultValue : 9}
        onChange={props.onChange}
      />
    </StyledPriceSlider>
  );
}
