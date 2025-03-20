"use client";

import React from "react";

export const CounterContext = React.createContext(0);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

