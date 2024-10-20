import React, { useState } from "react";

const Item = ({ item, updateItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedFoodName, setUpdatedFoodName] = useState(item.foodName);
  const [updatedIngredients, setUpdatedIngredients] = useState(item.ingredients);
  const [updatedProcess, setUpdatedProcess] = useState(item.process);
  const [updatedImage, setUpdatedImage] = useState(item.image);

  const handleUpdate = () => {
    updateItem(item.id, {
      foodName: updatedFoodName,
      ingredients: updatedIngredients,
      process: updatedProcess,
      image: updatedImage,
    });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
      {isEditing ? (
        <div>
          <input
            className="border p-2 mb-2 w-full"
            value={updatedFoodName}
            placeholder="Food Name"
            onChange={(e) => setUpdatedFoodName(e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={updatedIngredients}
            placeholder="Ingredients"
            onChange={(e) => setUpdatedIngredients(e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={updatedProcess}
            placeholder="Making"
            onChange={(e) => setUpdatedProcess(e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={updatedImage}
            placeholder="Image URL"
            onChange={(e) => setUpdatedImage(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold">{item.foodName}</h3>
          <p>{item.ingredients}</p>
          <p>{item.process}</p>
          <img src={item.image} alt={item.foodName} className="w-full h-40 object-cover" />
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => deleteItem(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
