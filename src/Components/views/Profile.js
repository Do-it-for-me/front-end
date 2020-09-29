import React, { useEffect } from "react";
import { useParams } from "@reach/router";
import { useProfileFetch } from "../../data/useProfileFetch";
import profileImage from "../../images/profileImage.jpg";
// COMPONENTS
import { StyledProfile } from "../Styled-Components/StyledProfile";
import StarRate from "../Elements/StarRate";
const Profile = (props) => {
  const params = useParams();
  const { fetchUser, profile } = useProfileFetch();
  useEffect(() => {
    fetchUser(params.id);
  }, []);
  return (
    <StyledProfile>
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="imageContainer">
            <img alt={profile.fullName} src={profile.image || profileImage} />
            <span>upload Image</span>
          </div>
          <div className="shortInfoContainer">
            <h2>{profile.fullName}</h2>
            <StarRate disabled={true} />
            <div className="addressContainer">
              <p>{profile.street}</p>
              <p>
                {profile.zip} {profile.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
