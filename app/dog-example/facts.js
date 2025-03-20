"use-client";
import React, { useState, useEffect } from "react";

const Facts = () => {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(5);

  async function fetchFacts() {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/facts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFacts(data.data);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    let timerInterval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    const interval = setInterval(() => {
      clearInterval(timerInterval);
      setTimer(5);
      timerInterval = setInterval(() => {
        setTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
      fetchFacts();
    }, 5000);
    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, []); // Run the effect only once after the initial render

  if (error)
    return (
      <div>
        <h2>Dog Fact</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <>
      Fetching data in {timer} seconds...
      {facts.length > 0 ? (
        <ul>
          {facts.map((fact) => (
            <li key={fact.id}>{fact.attributes.body}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Facts;
