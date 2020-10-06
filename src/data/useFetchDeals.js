import { useState, useEffect } from "react";
import { SERVER_ENDPOINT } from "../config";

export const useFetchDeals = () => {
  const [deals, setDeals] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleConfirmDeal = async (dealId) => {
    try {
      const confirmedDeal = await (
        await fetch(`${SERVER_ENDPOINT}/deals/${dealId}/confirm`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();

      if (confirmedDeal) {
      }
    } catch (err) {
      setError(err);
    }
  };

  const handelRateProvider = async (dealID, providerID, rateValue) => {
    const rate = String(rateValue);
    try {
      const ratedUser = await (
        await fetch(`${SERVER_ENDPOINT}/users/${providerID}/rate`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ dealId: dealID, rate: rate }),
        })
      ).json();

      if (ratedUser) {
        console.log(ratedUser);
      }
    } catch (err) {
      setError("handelUpdateProfile", err);
    }
  };

  const handleCancelDeal = async (dealId) => {
    try {
      const canceledDeals = await (
        await fetch(`${SERVER_ENDPOINT}/deals/${dealId}/cancel`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();

      if (canceledDeals) {
        console.log(canceledDeals);
      }
    } catch (err) {
      setError("handelUpdateProfile", err);
    }
  };

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

      setDeals(dealsArray);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  return {
    deals,
    fetchDeals,
    handleCancelDeal,
    handelRateProvider,
    handleConfirmDeal,
  };
};

export default useFetchDeals;
