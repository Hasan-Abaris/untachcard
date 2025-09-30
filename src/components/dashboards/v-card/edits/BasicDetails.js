"use client";

export default function BasicDetails() {
  return (
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
  );
}
