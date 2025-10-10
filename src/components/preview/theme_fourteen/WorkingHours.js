"use client";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

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
      <h4 className="text-3xl font-semibold text-center text-gray-800 pb-6 border-b border-gray-200">
        Business Hours
      </h4>

      {/* Card List */}
      <div className="flex flex-col items-center space-y-6 mt-8">
        {sections.map((item, index) => (
          <div
            key={item._id || index}
            className="w-full max-w-md bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>

            <div className="p-6 flex flex-col items-center">
              {/* Icon */}
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mb-4">
                <FaRegClock className="text-2xl" />
              </div>

              {/* Title */}
              <h2 className="font-semibold text-lg text-gray-800 mb-3 text-center">
                {item.title}
              </h2>

              {/* Description (HTML) */}
              <div
                className="text-center text-gray-600 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingHoursPage;
