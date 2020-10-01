import React, { useState, memo, useContext } from "react";
import { StyledUpdateProfile } from "../../Styled-Components/StyledUpdateProfile";
import useUpdateProfile from "../../../data/useUpdateProfile";
import PasswordUpdate from "./PasswordUpdate";
import BasicDataUpdate from "./BasicDataUpdate";

const UpdateProfile = memo(({ oldUserData }) => {
  const [navigator, setNavigator] = useState("basic");

  return (
    <StyledUpdateProfile>
      <h2>Update Profile</h2>
      <div className="updateProfileContainer">
        <div className="updateProfileNavigator">
          <button onClick={() => setNavigator("basic")}>
            Basic Profile Data
          </button>
          <button onClick={() => setNavigator("password")}>Password</button>
          <button onClick={() => setNavigator("provider")}>
            Services Provider Data
          </button>
        </div>
        <div className="dataContainer">
          {navigator === "basic" && <BasicDataUpdate />}
          {navigator === "password" && <PasswordUpdate />}
        </div>
      </div>
    </StyledUpdateProfile>
  );
});

export default UpdateProfile;
