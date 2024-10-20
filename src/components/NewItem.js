import React, { useState } from "react";

function NewItem({ addItem }) {
  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [process, setProcess] = useState("");
  const [imageurl, setImageURL] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation
    if (!foodName) newErrors.foodName = "Food name is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!process) newErrors.process = "Process is required";
    if (!imageurl) newErrors.imageurl = "Image URL is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const foodItem = {
        id: Date.now().toString(),
        foodName,
        ingredients,
        process,
        imageurl,
      };

      addItem(foodItem);
      // Reset form
      setFoodName("");
      setIngredients("");
      setProcess("");
      setImageURL("");
      setErrors({});
    }
  };

  return (
    <div>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Food Name"
            className={`border p-2 w-full ${errors.foodName ? 'border-red-500' : ''}`}
            value={foodName}
            onChange={(e) => {
              setFoodName(e.target.value);
              if (errors.foodName) setErrors((prev) => ({ ...prev, foodName: '' }));
            }}
            required
          />
          {errors.foodName && <span className="text-red-500">{errors.foodName}</span>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Ingredients"
            className={`border p-2 w-full ${errors.ingredients ? 'border-red-500' : ''}`}
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
              if (errors.ingredients) setErrors((prev) => ({ ...prev, ingredients: '' }));
            }}
            required
          />
          {errors.ingredients && <span className="text-red-500">{errors.ingredients}</span>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Process"
            className={`border p-2 w-full ${errors.process ? 'border-red-500' : ''}`}
            value={process}
            onChange={(e) => {
              setProcess(e.target.value);
              if (errors.process) setErrors((prev) => ({ ...prev, process: '' }));
            }}
            required
          />
          {errors.process && <span className="text-red-500">{errors.process}</span>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            className={`border p-2 w-full ${errors.imageurl ? 'border-red-500' : ''}`}
            value={imageurl}
            onChange={(e) => {
              setImageURL(e.target.value);
              if (errors.imageurl) setErrors((prev) => ({ ...prev, imageurl: '' }));
            }}
            required
          />
          {errors.imageurl && <span className="text-red-500">{errors.imageurl}</span>}
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
