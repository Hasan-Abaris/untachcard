"use client";

import { useState } from "react";

export default function NewVcardTabs() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Tabs Header */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-6">
          {[
            { id: "basic", label: "Basic Details" },
            { id: "personal", label: "Personal Details" },
            { id: "other", label: "Other Configurations" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* BASIC DETAILS TAB */}
      {activeTab === "basic" && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Basic Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* URL Alias */}
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">
                URL Alias <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value="BEAITY-ATTCK"
                  readOnly
                  className="w-full border rounded-md px-3 py-2 bg-gray-100"
                />
                <button
                  type="button"
                  className="ml-2 bg-purple-500 text-white px-3 py-2 rounded"
                >
                  ↻
                </button>
              </div>
            </div>

            {/* vCard Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                vCard Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter vCard Name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-medium mb-1">Occupation</label>
              <input
                type="text"
                placeholder="Enter Occupation"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows="4"
                placeholder="Enter Description"
                className="w-full border rounded-md px-3 py-2"
              />
              <button
                type="button"
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                AI Description
              </button>
            </div>

            {/* Cover Type */}
            <div>
              <label className="block text-sm font-medium mb-1">Cover Type</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>Image</option>
                <option>Video</option>
              </select>
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium mb-1">Profile Image</label>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="w-full border rounded-md px-3 py-2"
              />
              <p className="text-xs text-gray-500">
                Allowed file types: png, jpg, jpeg
              </p>
            </div>

            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium mb-1">Cover Image</label>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="w-full border rounded-md px-3 py-2"
              />
              <p className="text-xs text-gray-500">
                Allowed file types: png, jpg, jpeg
              </p>
            </div>

            {/* Favicon Image */}
            <div>
              <label className="block text-sm font-medium mb-1">Favicon Image</label>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="w-full border rounded-md px-3 py-2"
              />
              <p className="text-xs text-gray-500">
                Allowed file types: png, jpg, jpeg
              </p>
            </div>
          </form>

          {/* Save / Discard Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setActiveTab("personal")}
            >
              Save & Next
            </button>
            <button
              type="button"
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* PERSONAL DETAILS TAB */}
      {activeTab === "personal" && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Personal Details</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First + Last Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Email + Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <div className="flex">
                <span className="px-3 py-2 bg-gray-100 border rounded-l-md text-gray-600">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="flex-1 border rounded-r-md px-3 py-2"
                />
              </div>
            </div>

            {/* Alternate Email + Alternate Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Alternate Email</label>
              <input
                type="email"
                placeholder="Enter Alternate Email"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Alternate Phone</label>
              <div className="flex">
                <span className="px-3 py-2 bg-gray-100 border rounded-l-md text-gray-600">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Alternate Phone"
                  className="flex-1 border rounded-r-md px-3 py-2"
                />
              </div>
            </div>

            {/* Location + Location Type */}
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter Your Location"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Select Location Type</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>Link</option>
                <option>Text</option>
              </select>
            </div>

            {/* Location URL + Date of Birth */}
            <div>
              <label className="block text-sm font-medium mb-1">Location URL</label>
              <input
                type="text"
                placeholder="Enter Your Location URL"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Company + Made By */}
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Made By</label>
              <input
                type="text"
                placeholder="Enter Creator Name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Made By URL + Job Title */}
            <div>
              <label className="block text-sm font-medium mb-1">Made By URL</label>
              <input
                type="text"
                placeholder="Enter Made By URL"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Job Title</label>
              <input
                type="text"
                placeholder="Enter Job Title"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </form>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setActiveTab("other")}
            >
              Save & Next
            </button>
            <button
              type="button"
              className="bg-purple-600 text-white px-4 py-2 rounded"
              onClick={() => setActiveTab("basic")}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* OTHER CONFIGURATIONS TAB */}
      {activeTab === "other" && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Other Configurations</h2>
          <p className="text-gray-600">
            Add your custom configurations here (like social links, themes, etc.)
          </p>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => alert("Form Submitted!")}
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-purple-600 text-white px-4 py-2 rounded"
              onClick={() => setActiveTab("personal")}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
