"use client";
import React from "react";
import { useSetAtom } from "jotai";
import { citiesAtom } from "./atoms";

const SampleChildComponent = ({ children }) => {
  return <div>{children}</div>;
};

function CityComponent() {
  const setCities = useSetAtom(citiesAtom);
  const [value, setValue] = React.useState("");
  const [jsonRes, setJsonRes] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("DO you want to add this city?")) {
      setCities((cities) => [...cities, value]);
    }
  };

  const fetchValues = async () => {
    setLoading(true);
    // fetch('https://jsonplaceholder.typicode.com/todos/222')
    //   .then(response => response.json())
    //   .then(json => setJsonRes(json))
    //   .catch(err => alert('Something\'s not right'))
    //   .finally(() => setLoading(false))
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      const json = await response.json();
      setJsonRes(json);
    } catch (err) {
      console.log(err.message || err);
      alert("Something's not right");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SampleChildComponent>
        <h1>City Component</h1>
      </SampleChildComponent>
      Enter City
      <form onSubmit={onSubmit}>
        <input
          style={{ color: "black" }}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add City</button>
      </form>
      {loading ? <div>Loading...</div> : null}
      <button onClick={fetchValues}>Fetch Values</button>
      {jsonRes ? (
        <ul>
          <li>User ID: {jsonRes.userId}</li>
          <li>Title: {jsonRes.title}</li>
          <li>Completed: {jsonRes.completed ? "Yes" : "No"}</li>
        </ul>
      ) : (
        <div>No response yet!</div>
      )}
    </div>
  );
}

export default CityComponent;
