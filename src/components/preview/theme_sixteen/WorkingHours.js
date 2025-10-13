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
      <div className="text-center text-gray-500 py-10">
        No working hours available.
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="w-16 h-[3px] bg-gray-400 mx-auto mb-2 rounded-full" />
        <h2 className="text-3xl font-semibold text-gray-800">Working Hours</h2>
      </div>

      {/* Hours Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((item, index) => {
          const isClosed =
            item.title?.toLowerCase() === "sunday" ||
            item.description?.toLowerCase().includes("closed");

          return (
            <div
              key={item._id || index}
              className={`group relative bg-white rounded-xl shadow-md p-5 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isClosed ? "opacity-70 bg-gray-100" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 bg-gray-200 p-3 rounded-full group-hover:bg-gray-300 transition">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM19 8H5V6H19V8ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11Z"
                    fill={isClosed ? "#9CA3AF" : "#1F2937"}
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 text-left ml-4">
                <h3
                  className={`text-lg font-semibold ${
                    isClosed ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                {/* Render rich HTML safely */}
                <div
                  className={`text-sm mt-1 leading-relaxed ${
                    isClosed ? "text-gray-400" : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingHoursPage;
