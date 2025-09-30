import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // for password toggle

function Advance() {
  const [formData, setFormData] = useState({
    password: "",
    customCss: "",
    customJs: "",
    removeBranding: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Advance Settings:", formData);
    // Call API here
  };

  // Handle discard
  const handleDiscard = () => {
    setFormData({
      password: "",
      customCss: "",
      customJs: "",
      removeBranding: false,
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl"
      >
        {/* Password */}
        <div className="mb-6 relative">
          <label className="block font-medium mb-1">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 outline-none pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOffIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Custom CSS */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Custom CSS:</label>
          <textarea
            name="customCss"
            placeholder="Enter Custom Css"
            value={formData.customCss}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 h-28 outline-none"
          />
        </div>

        {/* Custom JS */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Custom JS:</label>
          <textarea
            name="customJs"
            placeholder="Enter Custom Js"
            value={formData.customJs}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 h-28 outline-none"
          />
        </div>

        {/* Remove branding */}
        <div className="flex items-center mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="removeBranding"
              checked={formData.removeBranding}
              onChange={handleChange}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-indigo-500 relative transition">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                  formData.removeBranding ? "translate-x-5" : ""
                }`}
              />
            </div>
            <span className="ml-3 text-gray-700">Remove branding</span>
          </label>
          <span className="ml-2 text-gray-400 cursor-pointer" title="Remove branding info">
            ⓘ
          </span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleDiscard}
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}

export default Advance;
