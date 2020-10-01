import React, { useState, memo, useContext } from "react";
import { StyledUpdateProfile } from "../../Styled-Components/StyledUpdateProfile";
import useUpdateProfile from "../../../data/useUpdateProfile";

import BasicDataUpdate from "./BasicDataUpdate";
const UpdateProfile = memo(({ oldUserData }) => {
  const [basicData, setBasicData] = useState(false);
  const [password, setPassword] = useState(false);
  const [providerData, setProviderData] = useState(false);
  return (
    <StyledUpdateProfile>
      <h2>Update Profile</h2>
      <BasicDataUpdate
      /*         oldUserData={oldUserData}
        handleFieldsChange={handleFieldsChange}
        handleCityChange={handleCityChange}
        handleDateChange={handleDateChange}
        handlePriceChange={handlePriceChange}
        handleBioChange={handleBioChange}
        clearField={clearField}
        handelUpdateProfile={handelUpdateProfile}
        handleServiceChange={handleServiceChange}
        newUserData={newUserData} */
      />
    </StyledUpdateProfile>
  );
});

export default UpdateProfile;
