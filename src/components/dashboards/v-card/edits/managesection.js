import React from "react";

function Managesection() {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Section</h1>
          <p className="text-gray-600 mb-4">This is a placeholder for managing sections. Add your content here.</p>
          <div className="space-y-4">
            {/* Example Section Management UI */}
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
              <span className="text-gray-700">Section 1</span>
              <div className="space-x-2">
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  Delete
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
              <span className="text-gray-700">Section 2</span>
              <div className="space-x-2">
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
              Add New Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Managesection;