import React, { useState, memo, useEffect } from "react";
import { useParams, useLocation } from "@reach/router";
import { StyledUpdateProfile } from "../../../Styled-Components/StyledUpdateProfile";
import useUpdateProfile from "../../../../data/useUpdateProfile";
import PasswordUpdate from "./PasswordUpdate";
import BasicDataUpdate from "./BasicDataUpdate";
import ServiceProviderDataUpdate from "./ServiceProviderDataUpdate";

const UpdateProfile = memo(({ oldUserData }) => {
  const [navigator, setNavigator] = useState("basic");
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.provideAService)
      setNavigator("provider");
  }, []);
  return (
    <StyledUpdateProfile>
      <h2>Update Profile</h2>
      <div className="updateProfileContainer">
        <div className="updateProfileNavigator">
          <button
            className={navigator === "basic" ? "active" : ""}
            onClick={() => setNavigator("basic")}
          >
            Basic Profile Data
          </button>
          <button
            className={navigator === "password" ? "active" : ""}
            onClick={() => setNavigator("password")}
          >
            Password
          </button>
          <button
            className={navigator === "provider" ? "active" : ""}
            onClick={() => setNavigator("provider")}
          >
            Services Provider Data
          </button>
        </div>
        <div className="dataContainer">
          {navigator === "basic" && <BasicDataUpdate />}
          {navigator === "password" && <PasswordUpdate />}
          {navigator === "provider" && <ServiceProviderDataUpdate />}
        </div>
      </div>
    </StyledUpdateProfile>
  );
});

export default UpdateProfile;
