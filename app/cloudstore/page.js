"use client";

import React, { useEffect } from "react";
import { getItems, addItem } from "./_services/shopping-list-service";
import Link from "next/link";

const CloudStore = () => {
  const [items, setItems] = React.useState([]);
  const [item, setItem] = React.useState("");
  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
    });
  }, []);
  return (
    <div>
      <h1>Cloud Store</h1>
      <p>Cloud Store is a place where you can store your files in the cloud.</p>

      <b>Shopping List</b>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`/cloudstore/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ol>

      <input
        type="text"
        placeholder="item name"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // Add item
          addItem({ name: item }).then(() => {
            setItem("");
            getItems().then((items) => {
              setItems(items);
            });
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default CloudStore;
