"use client";
import React from "react";

const Custom = ({ data }) => {
  // Filter out Working Hours and Payment
  const filteredData = (data || []).filter(
    (item) => item.title !== "Working Hours" && item.title !== "Payment"
  );

  if (!filteredData.length) {
    return <p className="text-gray-400 text-center mt-4">No services available.</p>;
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-black rounded-lg shadow-lg p-6">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-gray-800"></h4>
        </div>

        {/* Services Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-black">
                <th className="border border-gray-300 p-3 text-white">Title</th>
                <th className="border border-gray-300 p-3 text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item._id || index}
                  className={index % 2 === 0 ? "bg-black" : ""}
                >
                  <td className="border border-gray-300 p-3 text-white">{item.title}</td>
                  <td
                    className="border border-gray-300 p-3 text-white"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Custom;
