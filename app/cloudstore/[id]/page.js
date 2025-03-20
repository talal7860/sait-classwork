import React from "react"
import { getItem } from "../_services/shopping-list-service";
import ItemDetail from "../ItemDetail";

const CloudStore = async ({ params }) => {
  const { id } = await params;
  const item = await getItem(id);
  return (
    <div>
      {item && (
        <ItemDetail {...item} />
      )}
    </div>
  );
}

export default CloudStore;
