import React from 'react';

const AddItems = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = e.target.recipeName.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const recipeDetails = e.target.recipeDetails.value;
    const file = e.target.file.files ? e.target.file.files[0] : null;
    console.log(name, category, price, recipeDetails, file);
  };

  return (
    <form
      className="w-[80%] mx-auto p-6 bg-gray-100 shadow-lg rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="recipeName"
          className="block text-sm font-semibold text-gray-700"
        >
          Recipe Name
        </label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          placeholder='Enter Recipe Name'
          className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a Category</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-semibold text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder='Enter Price'
            className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="recipeDetails"
          className="block text-sm font-semibold text-gray-700"
        >
          Recipe Details
        </label>
        <textarea
          id="recipeDetails"
          name="recipeDetails"
          rows={4}
          className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="file"
          className="block text-sm font-semibold text-gray-700"
        >
          Choose File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default AddItems;
