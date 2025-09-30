"use client";
import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Link from "next/link";

const NewVcardPage = () => {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    occupation: "",
    description: "",
    coverType: "Image",
    coverImage: "",
    profileImage: "",
    faviconImage: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">New vCard</h1>
       
       <Link href="/Dashboard/vcards">
        <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-200 cursor-pointer">
          Back
        </button>
        </Link>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        {/* URL Alias + Occupation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              URL Alias: <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mt-1 border rounded-md">
              <input
                type="text"
                placeholder="my-vCard-page-url"
                className="flex-1 px-3 py-2 rounded-l-md outline-none"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
              />
              <button className="bg-indigo-500 text-white px-3 py-2 rounded-r-md hover:bg-indigo-600">
                <FiRefreshCcw />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Occupation:
            </label>
            <input
              type="text"
              placeholder="Enter Occupation"
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
              value={formData.occupation}
              onChange={(e) =>
                setFormData({ ...formData, occupation: e.target.value })
              }
            />
          </div>
        </div>

        {/* vCard Name */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            vCard Name: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter vCard Name"
            className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            placeholder="Enter Description of Your vCard"
            rows="4"
            className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        {/* Cover Type + Image Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Type:
            </label>
            <select
              className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
              value={formData.coverType}
              onChange={(e) =>
                setFormData({ ...formData, coverType: e.target.value })
              }
            >
              <option>Image</option>
              <option>Color</option>
              <option>Gradient</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Image:
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full border rounded-md"
              onChange={(e) =>
                setFormData({ ...formData, coverImage: e.target.files[0] })
              }
            />
            <p className="text-xs text-gray-500 mt-1">
              Allowed file types: png, jpg, jpeg.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image:
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full border rounded-md"
              onChange={(e) =>
                setFormData({ ...formData, profileImage: e.target.files[0] })
              }
            />
            <p className="text-xs text-gray-500 mt-1">
              Allowed file types: png, jpg, jpeg.
            </p>
          </div>
        </div>

        {/* Favicon Image */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Favicon Image:
          </label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 w-full border rounded-md"
            onChange={(e) =>
              setFormData({ ...formData, faviconImage: e.target.files[0] })
            }
          />
          <p className="text-xs text-gray-500 mt-1">
            Allowed file types: png, jpg, jpeg.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600">
            Save & Next
          </button>
          <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewVcardPage;
