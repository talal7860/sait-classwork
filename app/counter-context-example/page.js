"use client";

import React, { useContext } from "react";

import { CounterContext } from "@/contexts/CounterContext";

const ChildComponent = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <div>The count is {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default ChildComponent;
