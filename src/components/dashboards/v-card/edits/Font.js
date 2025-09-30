import React, { useState } from "react";

function Font() {
  const [fontFamily, setFontFamily] = useState("Poppins");
  const [fontSize, setFontSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Font Family:", fontFamily);
    console.log("Font Size:", fontSize);
    // You can add logic to save settings here
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Font Settings</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Font Family */}
        <div>
          <label htmlFor="font_family" className="block text-gray-700 mb-2">
            Font Family:
          </label>
          <select
            id="font_family"
            name="font_family"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-pink-500"
          >
            <option value="Poppins">Default</option>
            <option value="Roboto">Roboto</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Lato">Lato</option>
            <option value="Raleway">Raleway</option>
            <option value="PT Sans">PT Sans</option>
            <option value="Merriweather">Merriweather</option>
            <option value="Prompt">Prompt</option>
            <option value="Work Sans">Work Sans</option>
            <option value="Concert One">Concert One</option>
          </select>
        </div>

        {/* Font Size */}
        <div>
          <label htmlFor="font_size" className="block text-gray-700 mb-2">
            Font Size (px):
          </label>
          <input
            type="number"
            id="font_size"
            name="font_size"
            min="14"
            max="40"
            placeholder="Font size in px"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-pink-500"
          />
        </div>

        {/* Buttons */}
        <div className="lg:col-span-2 flex gap-3">
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Save
          </button>
          <a
            href="https://vcards.infyom.com/admin/vcards"
            className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Discard
          </a>
        </div>
      </form>
    </div>
  );
}

export default Font;
