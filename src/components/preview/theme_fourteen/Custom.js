"use client";
import React from "react";

const Custom = ({ data = [] }) => {
  // Filter out Working Hours and Payment
  const filteredData = data.filter(
    (item) => item.title !== "Working Hours" && item.title !== "Payment"
  );

  if (!filteredData.length) {
    return (
      <p className="text-gray-400 text-center mt-6">
        No custom sections available.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 py-6 bg-gray-100">
      {filteredData.map((item, index) => (
        <div
          key={item._id || index}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition relative overflow-hidden"
        >
          {/* Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 opacity-30 -z-10 rounded-2xl"></div>

          {/* Section Title */}
          <h4 className="text-3xl font-bold text-gray-800 text-center mb-6">
            {item.title || "Untitled Section"}
          </h4>

          {/* Section Description */}
          <div
            className="text-gray-700 text-center"
            dangerouslySetInnerHTML={{ __html: item.description || "No description available" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Custom;
