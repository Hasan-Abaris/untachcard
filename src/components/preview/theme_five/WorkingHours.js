"use client";
import React from "react";

const WorkingHours = ({ data }) => {
  if (!data) {
    return (
      <div className="text-center text-gray-500 p-6">
        No working hours available.
      </div>
    );
  }

  return (
    <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-center font-semibold text-lg mb-4 text-white">{data.title}</h2>
      <div
        className="text-center space-y-2"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};

export default WorkingHours;
