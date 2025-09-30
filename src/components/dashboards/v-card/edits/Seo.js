import React, { useState } from "react";

function Seo() {
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
        className="bg-white shadow-md  p-6 w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">
              Seo Title:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border  p-2 outline-none"
              required
            />
          </div>

          {/* URL */}
          <div>
            <label className="block font-medium mb-1">
              Home Title:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="Enter Home Title"
              value={formData.url}
              onChange={handleChange}
              className="w-full border  p-2 outline-none"
              required
            />
          </div>

         
          {/* Banner Button */}
          <div>
            <label className="block font-medium mb-1">
              Meta Keyword:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="bannerButton"
              placeholder="Enter Meta Keyword:"
              value={formData.bannerButton}
              onChange={handleChange}
              className="w-full border  p-2 outline-none"
              required
            />
          </div>
           {/* Banner Button */}
          <div>
            <label className="block font-medium mb-1">
             Meta Description:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="bannerButton"
              placeholder="Enter Meta Description:"
              value={formData.bannerButton}
              onChange={handleChange}
              className="w-full border  p-2 outline-none"
              required
            />
          </div>
           {/* Description */}
          <div className="md:col-span-1">
            <label className="block font-medium mb-1">
              Google Analytics::<span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              placeholder="Google Analytics Code"
              value={formData.description}
              onChange={handleChange}
              className="w-full border  p-2 h-32 outline-none"
              required
            />
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

export default Seo;
