"use client";
import React from "react";

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
    <div className="flex flex-col items-center space-y-6 p-6">
      {sections.map((item, index) => (
        <div
          key={item._id || index}
          className="bg-white text-black rounded-2xl shadow-lg p-6 max-w-md w-full hover:shadow-2xl transition"
        >
          <h2 className="text-center font-semibold text-lg mb-4">{item.title}</h2>
          <div
            className="text-center space-y-2 text-gray-700"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkingHoursPage;
