import { useState, useEffect } from "react";
import { SERVER_ENDPOINT } from "../config";

export const useFetchDeals = () => {
  const [deals, setDeals] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchDeals = async () => {
    setError(false);
    setLoading(true);
    try {
      const dealsArray = await (
        await fetch(`${SERVER_ENDPOINT}/deals`, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      console.log(dealsArray);
      setDeals(dealsArray);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  return { deals, fetchDeals };
};

export default useFetchDeals;
