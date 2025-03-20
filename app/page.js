"use client";
import Link from "next/link";
import React, { useContext } from "react";
import NewComponent from "./new-component";
import CityComponent from "./city-component";
import CitiesComponent from "./cities-component";
import Address from "./address";
import { CounterContext } from "@/contexts/CounterContext";

let people = [
  {
    name: "John",
    age: 30,
    addresses: [
      { type: "home", street: "123 Main St", city: "Calgary" },
      { type: "vacation", street: "123 Lakeshore Ave", city: "Pigeon Lake" },
    ],
  },
  { name: "Jane", age: 25, addresses: [] },
  { name: "Jack", age: 40 },
  {
    name: "Jill",
    age: 35,
    addresses: [{ type: "home", street: "225 Main St", city: "Calgary" }],
  },
];

export default function Home() {
  const [ageQuery, setAgeQuery] = React.useState(0);
  const { count, setCount } = useContext(CounterContext);
  const [ages, setAges] = React.useState([1, 2, 3]);
  const onAddAge = (age) => {
    setAges([...ages, age]);
  };
  return (
    <>
      <div className="p-5 bg-blue-500 rounded">
        <input
          className="border border-red-500"
          type="number"
          value={ageQuery}
          onChange={(e) => setAgeQuery(parseInt(e.target.value, 10))}
        />
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increase Count
        </button>
        <div>The count is {count}</div>
        <ul>
          {people
            .filter((p) => p.age >= ageQuery)
            .map((person) => (
              <li key={person.name}>
                {person.name} - {person.age}
              </li>
            ))}
        </ul>
        Ages
        <input
          type="number"
          onChange={(e) => onAddAge(parseInt(e.target.value))}
        />
        <ul>
          {ages.map((age) => (
            <li key={age}>{age}</li>
          ))}
        </ul>
      </div>
      <div className="p-5 bg-blue-600 rounded">
        <Address people={people} />
      </div>
      <div className="p-5 bg-blue-700 rounded">Content 3</div>
      <div className="p-5 bg-blue-800 text-white rounded">Content 4</div>
    </>
  );
}
