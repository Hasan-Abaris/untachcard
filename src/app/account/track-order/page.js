"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const TrackOrder = () => {
  // Dummy order data
  const order = {
    id: "ORD123456",
    date: "Sep 15, 2025",
    status: "Out for Delivery",
    product: "Wedding Photography Package",
    amount: "₹25,000",
    steps: ["Order Placed", "Shipped", "Out for Delivery", "Delivered"],
  };

  // Find current step index
  const currentStepIndex = order.steps.indexOf(order.status);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mt-20 mb-8">
          Track Your Order
        </h1>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto border">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p>
            <span className="font-medium">Order ID:</span> {order.id}
          </p>
          <p>
            <span className="font-medium">Order Date:</span> {order.date}
          </p>
          <p>
            <span className="font-medium">Product:</span> {order.product}
          </p>
          <p>
            <span className="font-medium">Amount:</span> {order.amount}
          </p>
        </div>

        {/* Tracking Progress */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto border mt-10">
          <h2 className="text-xl font-semibold mb-6">Tracking Progress</h2>
          <div className="flex justify-between items-center relative">
            {order.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-1/4">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold 
                  ${
                    index <= currentStepIndex
                      ? "bg-pink-600"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
                {/* Step Label */}
                <p
                  className={`mt-2 text-sm font-medium ${
                    index <= currentStepIndex
                      ? "text-pink-600"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}

            {/* Progress Bar Line */}
            <div className="absolute top-5 left-0 w-full h-1 bg-gray-300 z-0">
              <div
                className="h-1 bg-pink-600 transition-all duration-500"
                style={{
                  width: `${(currentStepIndex / (order.steps.length - 1)) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TrackOrder;
