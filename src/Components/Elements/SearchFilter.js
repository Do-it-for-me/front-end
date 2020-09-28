import React from "react";
import { StyledSearchFilter } from "../Styled-Components/StyledSearchFilter";
import SelectServices from "./SelectServices";
import OneDatePicker from "./OneDatePicker";
import { StyledButton } from "../Styled-Components/StyledButton";
import { Link } from "@reach/router";
import PriceSlider from "./PriceSlider";
import StarRate from "./StarRate";

export default function SearchFilter({ extend, onClick }) {
  return (
    <StyledSearchFilter extend={extend}>
      <SelectServices type="Service" />
      <SelectServices type="City" />
      <OneDatePicker />
      <PriceSlider />
      <StarRate />
      <Link to="/search-result">
        <StyledButton type="primary">
          <div>Search</div>
        </StyledButton>
      </Link>
    </StyledSearchFilter>
  );
}
