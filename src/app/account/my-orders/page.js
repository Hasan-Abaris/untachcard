"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const MyOrders = () => {
  // Dummy orders data
  const orders = [
    {
      id: "ORD12345",
      date: "2025-09-15",
      status: "Delivered",
      total: "₹15,000",
      items: 3,
    },
    {
      id: "ORD12346",
      date: "2025-09-12",
      status: "Processing",
      total: "₹8,500",
      items: 2,
    },
    {
      id: "ORD12347",
      date: "2025-09-05",
      status: "Cancelled",
      total: "₹5,000",
      items: 1,
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">My Orders</h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-pink-100 text-pink-700">
                <th className="px-4 py-3 border">Order ID</th>
                <th className="px-4 py-3 border">Date</th>
                <th className="px-4 py-3 border">Items</th>
                <th className="px-4 py-3 border">Total</th>
                <th className="px-4 py-3 border">Status</th>
                <th className="px-4 py-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-pink-50">
                  <td className="px-4 py-3 border">{order.id}</td>
                  <td className="px-4 py-3 border">{order.date}</td>
                  <td className="px-4 py-3 border">{order.items}</td>
                  <td className="px-4 py-3 border">{order.total}</td>
                  <td
                    className={`px-4 py-3 border font-semibold ${order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Processing"
                        ? "text-orange-500"
                        : "text-red-600"
                      }`}
                  >
                    {order.status}
                  </td>
                  <td className="px-4 py-3 border">
                    <button className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyOrders;
