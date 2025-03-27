"use client";

import React from "react";

const ItemDetail = ({ name, category, price }) => {
  return (
    <div>
      <h1>
        <b>Item Detail</b>
      </h1>
      <div>
        <b>Name:</b> {name}
        <br />
        <b>Category:</b> {category}
        <br />
        <b>Price:</b> {price}
      </div>
    </div>
  );
};

export default ItemDetail;
