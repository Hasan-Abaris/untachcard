import React from "react";

const Payment = ({ data }) => {
  if (!data) {
    return (
      <div className="text-center text-gray-500">
        No payment information available
      </div>
    );
  }

  return (
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-center text-white">{data.title}</h3>
      <div
        className="text-center text-gray-800"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};

export default Payment;
