"use client";

import React from "react";
import Facts from "./facts";

const DogExample = () => {
  const [showFacts, setShowFacts] = React.useState(true);

  return (
    <div>
      <h2>Dog Fact</h2>
      {showFacts && <Facts />}
      <button onClick={() => setShowFacts(!showFacts)}>
        {showFacts ? "Hide Facts" : "Show Facts"}
      </button>
    </div>
  );
};

export default DogExample;
