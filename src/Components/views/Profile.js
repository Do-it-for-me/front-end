import React, { useEffect } from "react";
import { useParams } from "@reach/router";
import { useProfileFetch } from "../../data/useProfileFetch";

const Profile = (props) => {
  const params = useParams();
  const { fetchUser, profile } = useProfileFetch();
  useEffect(() => {
    fetchUser(params.id);
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>{profile.firstName}</p>
    </div>
  );
};

export default Profile;
