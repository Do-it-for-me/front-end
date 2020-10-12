import React from "react";
import { StyledBasicDataUpdate } from "../../../Styled-Components/StyledBasicDataUpdate";
import PriceField from "./PriceField";
import AvailabilityUpdate from "./AvailabilityUpdate";
import ServicesFieldUpdate from "./ServicesFieldUpdate";

const ServiceProviderDataUpdate = () => {
  return (
    <StyledBasicDataUpdate>
      <ServicesFieldUpdate field="services" />
      <PriceField FieldTitle="Price Per Uhr" field="price" />
      <AvailabilityUpdate FieldTitle="Availability" field="availability" />
    </StyledBasicDataUpdate>
  );
};

export default ServiceProviderDataUpdate;
