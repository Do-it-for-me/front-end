import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "@reach/router";
import { useProfileFetch } from "../../data/useProfileFetch";
import profileImage from "../../images/profileImage.jpg";

/* import { Link } from "@reach/router"; */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
// COMPONENTS
import { StyledProfile } from "../Styled-Components/StyledProfile";
import { StyledButton } from "../Styled-Components/StyledButton";
import StarRate from "../Elements/shared/StarRate";
import ImageUpload from "../Elements/profile/ImageUpload";
import UpdateProfile from "../Elements/profile/UpdateProfile/UpdateProfile";
import Deals from "../Elements/profile/DealsHistory/Deals";
import UserContext from "../../data/UserContext";

const Profile = ({ refresh, setRefresh }) => {
  const { user } = useContext(UserContext);

  const [imageUpload, setImageUpload] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  const params = useParams();
  const location = useLocation();

  const { fetchUser, profile } = useProfileFetch();

  useEffect(() => {
    console.log("profilerender", user);
    fetchUser(params.id);
    setRefresh(true);
    if (location.state && location.state.provideAService)
      setUpdateProfile(true);
  }, [user, imageUpload]);
  useEffect(() => {
    setRefresh(true);
    if (location.state && location.state.provideAService)
      setUpdateProfile(true);
  }, []);

  return (
    <StyledProfile>
      {imageUpload && (
        <div className="ImageUploadComponentContainer">
          <div className="uploadImageComponent">
            <span
              onClick={() => setImageUpload(!imageUpload)}
              className="close"
            >
              X
            </span>
            <ImageUpload
              onClick={() => setImageUpload(!imageUpload)}
              id={params.id}
            />
          </div>
          <div className="ImageUploadComponentBG"> </div>
        </div>
      )}
      {updateProfile && (
        <div className="profileUpdateContainer">
          <div className="profileUpdateBG"> </div>
          <div className="signupFormContainer">
            <span onClick={() => setUpdateProfile(false)} className="close">
              X
            </span>
            <UpdateProfile />
          </div>
        </div>
      )}
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="imageContainer">
            <img
              alt={profile.fullName}
              src={profile.image ? profile.image : profileImage}
            />
            <span
              onClick={() => setImageUpload(!imageUpload)}
              title="upload image"
              className="uploadImageIcon"
            >
              {<FontAwesomeIcon icon={faCloudUploadAlt} />}
            </span>
          </div>
          <div className="shortInfoContainer">
            <h2 className="name">{profile.fullName}</h2>
            <div className="addressContainer">
              <h3>{profile.street}</h3>
              <h3>
                {profile.zip} {profile.city}
              </h3>
            </div>
            <div className="rateContainer">
              <StarRate value={Number(profile.rate)} disabled={true} />{" "}
              <span className="ratersQuantity">
                ({String(profile.rateCounter)})
              </span>
            </div>
            <StyledButton onClick={() => setUpdateProfile(true)} type="danger">
              Edit Profile
            </StyledButton>
          </div>
        </div>
        <div className="profileBody">
          <div className="servicesContainer">
            <div className="services">
              {profile.services &&
                profile.services.map((item) => (
                  <span key={item._id} className="service">
                    {item.value}
                  </span>
                ))}
              {profile.availability && profile.availability.startDate ? (
                <>
                  <span className="date">
                    <strong>FROM :</strong> {profile.availability.startDate}
                  </span>
                  <span className="date">
                    <strong>UNTIL :</strong> {profile.availability.endDate}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="bioContainer">
            <p>{profile.bio}</p>
          </div>
          <Deals />
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
