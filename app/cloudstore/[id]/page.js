import React from "react"
import { getItem } from "../_services/shopping-list-service";

const CloudStore = async ({ params }) => {
  const { id } = await params;
  const item = await getItem(id);
  return (
    <div>
      <h1><b>Item Detail</b></h1>
      {item && (
        <div>
          <b>Name:</b> {item.name}
          <br />
          <b>Category:</b> {item.cateogry}
          <br />
          <b>Price:</b> {item.price}
        </div>
      )}
    </div>
  );
}

export default CloudStore;
