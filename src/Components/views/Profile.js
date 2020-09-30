import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import { useProfileFetch } from "../../data/useProfileFetch";
import profileImage from "../../images/profileImage.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
// COMPONENTS
import { StyledProfile } from "../Styled-Components/StyledProfile";
import StarRate from "../Elements/StarRate";
import ImageUpload from "../Elements/ImageUpload";
const Profile = (props) => {
  const [imageUpload, setImageUpload] = useState(true);
  const params = useParams();
  const { fetchUser, profile } = useProfileFetch();
  useEffect(() => {
    fetchUser(params.id);
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
      <div className="profileContainer">
        <div className="uploadImageContainer"></div>
        <div className="profileHeader">
          <div className="imageContainer">
            <img alt={profile.fullName} src={profile.image || profileImage} />
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
              <span className="ratersQuantity">(23)</span>
            </div>
            <div className="services">
              {profile.services &&
                profile.services.map((item) => (
                  <span className="service">{item.value}</span>
                ))}
              {profile.availability ? (
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
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
