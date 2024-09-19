import React, { useState } from "react";

function NewItem({addItem}) {
  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [process, setProcess] = useState("");
  const [imageurl, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(foodName && ingredients && process && imageurl){
      const foodItem = {
        id: Date.now().toString(),
        foodName,
        ingredients,
        process,
        imageurl
      }

      addItem(foodItem);
      setFoodName("");
      setIngredients("");
      setProcess("");
      setImageURL("");
    }
  }


  return (
    <div>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Food Name"
            className="border p-2 w-full"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Ingredients"
            className="border p-2 w-full"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Process"
            className="border p-2 w-full"
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            className="border p-2 w-full"
            value={imageurl}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default NewItem;
