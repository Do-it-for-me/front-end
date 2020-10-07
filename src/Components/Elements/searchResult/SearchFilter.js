import React, { useContext } from "react";
import { StyledSearchFilter } from "../../Styled-Components/StyledSearchFilter";
import SelectServices from "../forms/SelectServices";
import OneDatePicker from "../shared/DateRangePicker";
import { StyledButton } from "../../Styled-Components/StyledButton";
import { Link } from "@reach/router";
import PriceSlider from "./PriceSlider";
import StarRate from "../shared/StarRate";
import useSearchProviders from "../../../data/useSearchProviders";
import SearchResultContext from "../../../data/SearchResultContext";
export default function SearchFilter({ extend, invertExtend }) {
  const handleClick = () => {
    handlePreFetchSearchForm();
    invertExtend();
  };
  const { queryData } = useContext(SearchResultContext);

  const { homepageService, homepageCity } = queryData;

  const {
    handleServiceChange,
    handleCityChange,
    handlePreFetchSearchForm,
    handleDateChange,
    handlePriceChange,
    handleRateChange,
    searchData,
  } = useSearchProviders();
  return (
    <StyledSearchFilter extend={extend}>
      <SelectServices
        placeholder={homepageService}
        type="Service"
        onChange={(string, v) => handleServiceChange(v)}
      />
      <SelectServices
        type="City"
        placeholder={homepageCity}
        onChange={(string, v) => handleCityChange(v)}
      />
      <OneDatePicker onChange={(date, string) => handleDateChange(string)} />
      <PriceSlider onChange={(v) => handlePriceChange(v)} />
      <div>
        <div className="rateLabel">Minimum Rate</div>
        <StarRate onChange={handleRateChange} defaultValue={0} />
      </div>
      <Link to="/search-result">
        <StyledButton type="primary">
          <div onClick={() => handleClick()}>Search</div>
        </StyledButton>
      </Link>
    </StyledSearchFilter>
  );
}
