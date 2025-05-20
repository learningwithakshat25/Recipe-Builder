import React, { useState, useEffect } from "react";

const unitsList = ["Gram(gm)", "Kilogram(kg)", "Mili litre(ml)","Litre(l)","Table Spoon(tb)", "Cups"];

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    description: "",
    quantity: "",
    unit: "gm",
  });

  // 🔄 Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) {
      setRecipes(JSON.parse(saved));
    }
  }, []);

  //  Save to localStorage whenever recipes change
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add or update recipe
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.quantity) return;

    if (form.id) {
      // Update
      setRecipes(recipes.map((r) => (r.id === form.id ? { ...form } : r)));
    } else {
      // Add new
      setRecipes([...recipes, { ...form, id: Date.now() }]);
    }

    // Reset form
    setForm({ id: null, name: "", description: "", quantity: "", unit: "gm" });
  };

  // Edit recipe
  const handleEdit = (recipe) => {
    setForm(recipe);
  };

  // Delete recipe
  const handleDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <div className="h-full p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">🍽️ Recipe Manager (with localStorage)</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Recipe Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="p-2 border rounded"
        />
        <select
          name="unit"
          value={form.unit}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          {unitsList.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="col-span-full md:col-span-1 bg-[#DE752E] text-white rounded p-2 hover:bg-[#de5d2e]"
        >
          {form.id ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-4 relative"
          >
            <h2 className="text-lg font-bold">{recipe.name}</h2>
            <p className="text-sm text-gray-600">{recipe.description}</p>
            <p className="mt-2 font-medium">
              Quantity: {recipe.quantity} {recipe.unit}
            </p>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(recipe)}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
