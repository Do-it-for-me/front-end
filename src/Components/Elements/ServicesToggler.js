import React, { useState, useEffect, useRef } from "react";
import { useOptionsFetch } from "../../data/useOptionsFetch";
const options = [
  { _id: "5f60941ac6dfc22c43d40fbc", value: "dog walking", __v: 0 },
  { _id: "5f609431c6dfc22c43d40fbd", value: "plant watering", __v: 0 },
  { _id: "5f609441c6dfc22c43d40fbe", value: "dog sitting", __v: 0 },
];
const ServicesToggler = () => {
  const [options] = useOptionsFetch();
  const { services } = options;
  const [count, setCount] = useState(0);
  console.log(count, services);

  const [countInTimeout, setCountInTimeout] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count < services.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 1000);
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount("Timeout called!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <span>{options[count] && options[count].value}</span>;
};

export default ServicesToggler;
