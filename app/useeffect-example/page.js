"use client";
import React from "react";
import useData from "./useData";

const UseeffectExample = () => {
  const [text, setText] = React.useState("");
  const { data, squares, setData } = useData();

  return (
    <>
      <div className="p-5 bg-blue-500 rounded">
        Data
        {data.map((d) => (
          <div key={`data-${d}`}>{d}</div>
        ))}
      </div>
      <div className="p-5 bg-blue-500 rounded">
        Squares
        {squares.map((s) => (
          <div key={`squares-${s}`}>{s}</div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData(text.split(","));
        }}
      >
        <textarea
          style={{ borderColor: "black", borderWidth: "1px" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseeffectExample;
