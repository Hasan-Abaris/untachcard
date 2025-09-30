"use client";
import React, { useState } from "react";

function Services() {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [showSlider, setShowSlider] = useState(false);

  const handleOpenNav = () => {
    console.log("Sidebar toggle clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Sidebar Toggle */}
        <button
          type="button"
          className="btn px-2 py-2 text-gray-600 hover:text-gray-900 focus:outline-none md:hidden"
          onClick={handleOpenNav}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
            />
          </svg>
        </button>

        {/* Table Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex justify-end items-center gap-4">
            <div className="flex items-center">
              <label
                className="mr-4 text-sm font-medium text-gray-700"
                htmlFor="vcard-services-slider-view"
              >
                Display Images with Slider
              </label>
              <input
                id="vcard-services-slider-view"
                className="form-check-input h-5 w-10 appearance-none rounded-full bg-gray-300 checked:bg-blue-600 checked:before:translate-x-5 before:absolute before:top-0.5 before:left-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all checked:before:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="checkbox"
                role="switch"
                checked={showSlider}
                onChange={(e) => setShowSlider(e.target.checked)}
              />
            </div>
            <button
              type="button"
              className="btn bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md"
              data-bs-toggle="modal"
              data-bs-target="#addServiceModal"
            >
              Add Service
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                  Icon
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                  Service URL
                </th>
                <th className="px-4 py-2 text-center text-gray-600 font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                  No Data Available
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="mb-4 md:mb-0 flex items-center">
            <span className="mr-3 text-gray-600 text-lg">Show</span>
            <select
              id="table-perPage"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="text-gray-600 text-lg">
            Showing <strong>0</strong> results
          </div>
        </div>

        {/* Modals (Add/Edit/Show) */}
        {/* Add your modal code here if needed */}
      </div>
    </div>
  );
}

export default Services;