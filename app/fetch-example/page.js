"use client";
import { UserContext } from "@/contexts/UserContext";
import React, { useContext } from "react";
import { auth } from "./_utils/access-secret";

const SampleChildComponent = ({ children }) => {
  return <div>{children}</div>;
};

export default function FetchExample() {
  const [data, setData] = React.useState([]);
  const { user } = useContext(UserContext);
  console.log("AUTH_FRONTEND", auth());
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      const json = await response.json();
      setData(json);
      console.log("JSON", json);
    } catch (err) {
      console.log(err.message || err);
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <SampleChildComponent>
        <h1>
          <b>Fetch Data Example</b>
        </h1>
      </SampleChildComponent>
      <button onClick={fetchData}>Fetch Data</button>
      <div>Set User: Name: {user?.name}</div>
      <div>
        List of phones
        {data?.map((d) => (
          <div key={`data-${d.id}`}>
            Name: {d.name}
            {d.data && (
              <>
                <br />
                features:
                <br />
                {d.data.color && <>Color: {d.data.color}</>}
                <br />
                {d.data.capacity && <>Capacity: {d.data.capacity}</>}
              </>
            )}
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
