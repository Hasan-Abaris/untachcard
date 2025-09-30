import React, { useState } from "react";

function Banner() {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    bannerButton: "",
    showBanner: true,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Banner Data Submitted:", formData);
    // You can send this data to your backend API
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">
              Title:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none"
              required
            />
          </div>

          {/* URL */}
          <div>
            <label className="block font-medium mb-1">
              URL:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={formData.url}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">
              Description:<span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter Short Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 h-32 outline-none"
              required
            />
          </div>

          {/* Banner Button */}
          <div>
            <label className="block font-medium mb-1">
              Banner Button:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="bannerButton"
              placeholder="Banner Button"
              value={formData.bannerButton}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 outline-none"
              required
            />
          </div>

          {/* Show Banner */}
          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              name="showBanner"
              checked={formData.showBanner}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600"
            />
            <label className="font-medium">Show Banner</label>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
