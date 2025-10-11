"use client";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const WorkingHoursPage = ({ data }) => {
  // Normalize data: ensure it's always an array
  const sections = data
    ? Array.isArray(data)
      ? data
      : [data]
    : [];

  if (sections.length === 0) {
    return (
      <div className="text-center text-gray-500 p-6">
        No working hours available.
      </div>
    );
  }

  return (
    <div className="px-4 py-10 bg-gray-50">
      {/* Heading */}
      <h4 className="text-2xl font-semibold text-center text-gray-800 pb-6 border-b border-gray-200 relative">
        <span className="bg-pink-200 text-pink-800 px-4 py-1 rounded-lg">
          Business Hours
        </span>
      </h4>

      {/* Card List */}
      <div className="flex flex-col items-center space-y-4 mt-6">
        {sections.map((item, index) => (
          <div
            key={item._id || index}
            className={`w-full max-w-md bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden ${
              item.title === "Friday" ? "border-2 border-purple-500" : ""
            } ${item.title === "Sunday" ? "bg-red-50" : ""}`}
          >
            <div className="p-4 flex items-center space-x-4">
              {/* Icon */}
              <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                <FaRegCalendarAlt className="text-xl" />
              </div>

              {/* Title and Description */}
              <div className="flex-1 text-center">
                <h2
                  className={`font-semibold text-gray-800 ${
                    item.title === "Sunday" ? "text-red-600" : ""
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingHoursPage;