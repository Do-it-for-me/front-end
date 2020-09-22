import React, { memo, useEffect, useRef } from "react";
import { useOptionsFetch } from "../../data/useOptionsFetch";

import DateRangePicker from "../Elements/DateRangePicker";
import { StyledProvideService } from "../Styled-Components/StyledProvideService";

const ProvideService = memo((props) => {
  const [{ services }] = useOptionsFetch();
  useEffect(() => {
    return () => {
      props.cleanupProviderData();
    };
  }, []);
  return (
    <StyledProvideService>
      <div className="serviceContainer">
        <h2>Services</h2>
        <div>
          {services.map((item) => (
            <div key={item._id} className="serviceItem">
              <input
                type="checkbox"
                key={item._id}
                name={item._id}
                onChange={props.handleServiceChange}
              />
              <label htmlFor={item._id}>{item.value} </label>
            </div>
          ))}
        </div>
      </div>
      <div className="availabilityContainer">
        <h2>Availability</h2>
        <DateRangePicker
          onChange={props.handleDateChange}
          value={props.value}
        />
      </div>
    </StyledProvideService>
  );
});

export default ProvideService;
