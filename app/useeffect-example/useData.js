"use client";
import React, { useEffect } from "react";

const useData = () => {
  const [data, setData] = React.useState([]);
  const [squares, setSquares] = React.useState([]);
  useEffect(() => {
    setData([1, 2, 3]);
  }, []);

  useEffect(() => {
    setSquares(data.map((d) => d ** 2));
  }, [data]);

  return {
    data,
    squares,
    setData,
  };
};

export default useData;
