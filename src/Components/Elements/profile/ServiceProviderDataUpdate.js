import React, { useState, memo } from "react";
import { StyledBasicDataUpdate } from "../../Styled-Components/StyledBasicDataUpdate";
import PriceField from "./PriceField";
import AvailabilityUpdate from "./AvailabilityUpdate";
import ServicesFieldUpdate from "./ServicesFieldUpdate";
import useUpdateProfile from "../../../data/useUpdateProfile";
const ServiceProviderDataUpdate = () => {
  const { handleServiceChange } = useUpdateProfile();
  return (
    <StyledBasicDataUpdate>
      <ServicesFieldUpdate field="services" />
      <PriceField FieldTitle="Price Per Uhr" field="price" />
      <AvailabilityUpdate FieldTitle="Availability" field="availability" />
    </StyledBasicDataUpdate>
  );
};

export default ServiceProviderDataUpdate;
