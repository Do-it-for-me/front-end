import React from "react";
import { useOptionsFetch } from "../../data/useOptionsFetch";
import useSignupForm from "../../data/useSignupForm";
import DateRangePicker from "../Elements/DateRangePicker";
import { StyledProvideService } from "../Styled-Components/StyledProvideService";

const ProvideService = () => {
  const [{ services }] = useOptionsFetch();
  const { handleServiceChange } = useSignupForm();
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
                onChange={(e) => handleServiceChange(e)}
              />
              <label htmlFor={item._id}>{item.value} </label>
            </div>
          ))}
        </div>
      </div>
      <div className="availabilityContainer">
        <h2>Availability</h2>
        <DateRangePicker />
      </div>
    </StyledProvideService>
  );
};

export default ProvideService;
