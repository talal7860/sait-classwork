"use client";

import { useEffect, useState } from "react";

const HelloPage = () => {
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  const onPatchRequest = async (e) => {
    e.preventDefault();
    fetch(`/api/hello/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const onDeleteRequest = async (e) => {
    e.preventDefault();
    fetch(`/api/hello/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div>
      <h1>Hello Page</h1>
      <p>This is the hello page.</p>
      <p>Data from API: {data ? JSON.stringify(data) : "Loading..."}</p>

      <p>Patch Request</p>
      <input
        onChange={(e) => setId(e.target.value)}
        type="number"
        placeholder="Enter a user id"
        id="number"
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter a name"
        id="name"
      />
      <button onClick={onPatchRequest}>Patch</button>

      <p>Delete Request</p>
      <input
        onChange={(e) => setId(e.target.value)}
        type="number"
        placeholder="Enter a user id"
        id="number"
      />
      <button onClick={onDeleteRequest}>Delete</button>
    </div>
  );
};
export default HelloPage;
