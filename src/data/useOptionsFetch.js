import { useState, useEffect } from "react";
import { SERVICES_ENDPOINT, CITIES_ENDPOINT } from "../config";

export const useOptionsFetch = () => {
  const [services, setServices] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchOptions = async () => {
    setError(false);
    setLoading(true);
    try {
      const servicesArray = await (await fetch(SERVICES_ENDPOINT)).json();
      const servicesArr = servicesArray.filter((item) => {
        return { value: item.value };
      });
      setServices(servicesArr);

      const citiesArray = await (await fetch(CITIES_ENDPOINT)).json();
      const CitiesArr = citiesArray.Germany.map((item, index) => {
        return {
          key: index,
          value: item,
        };
      });

      setCities(CitiesArr);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return [{ services, cities, loading, error }, fetchOptions];
};
