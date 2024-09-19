import React from "react";
import Item from "./Item";

function ItemList({ items, updateItem, deleteItem }) {
  if (items.length === 0) {
    return <h3 className="text-center">No Recipes Added Yet!</h3>;
  }

  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
