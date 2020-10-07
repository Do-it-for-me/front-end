import { useState, useEffect } from "react";
import { SERVER_ENDPOINT } from "../config";

export const useProfileFetch = () => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);

  const fetchUser = async (id) => {
    setError(false);
    /*     setLoading(true); */
    try {
      const profile = await (
        await fetch(`${SERVER_ENDPOINT}/users/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      if (profile) setProfile(profile);
    } catch (err) {
      setError(err);
    }
  };
  return { fetchUser, profile };
};
