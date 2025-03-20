"use client";
import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <CounterDisplay count={count} />
      <NewCounterDisplay count={count} />
      <IncreaseCountComponent setCount={setCount} />
    </div>
  );
}

const IncreaseCountComponent = ({ setCount }) => {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
  );
};

function CounterDisplay({ count }) {
  return (
    <div>
      <div>The count is {count}</div>
    </div>
  );
}

const NewCounterDisplay = ({ count }) => {
  return (
    <div>
      <div>The count in new component is {count}</div>
    </div>
  );
};

export default Counter;
