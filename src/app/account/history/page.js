"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const History = () => {
  // Dummy RMA / refund requests data
  const rmaHistory = [
    {
      id: "RMA1001",
      orderId: "ORD12345",
      date: "2025-09-15",
      reason: "Damaged item",
      status: "Approved",
      refundAmount: "₹1,500",
    },
    {
      id: "RMA1002",
      orderId: "ORD12346",
      date: "2025-09-10",
      reason: "Wrong product",
      status: "Pending",
      refundAmount: "₹850",
    },
    {
      id: "RMA1003",
      orderId: "ORD12347",
      date: "2025-09-05",
      reason: "Late delivery",
      status: "Rejected",
      refundAmount: "₹0",
    },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">RMA / Refund History</h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-pink-100 text-pink-700">
                <th className="px-4 py-3 border">RMA ID</th>
                <th className="px-4 py-3 border">Order ID</th>
                <th className="px-4 py-3 border">Date</th>
                <th className="px-4 py-3 border">Reason</th>
                <th className="px-4 py-3 border">Refund Amount</th>
                <th className="px-4 py-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {rmaHistory.map((item, index) => (
                <tr key={index} className="hover:bg-pink-50">
                  <td className="px-4 py-3 border">{item.id}</td>
                  <td className="px-4 py-3 border">{item.orderId}</td>
                  <td className="px-4 py-3 border">{item.date}</td>
                  <td className="px-4 py-3 border">{item.reason}</td>
                  <td className="px-4 py-3 border">{item.refundAmount}</td>
                  <td
                    className={`px-4 py-3 border font-semibold ${
                      item.status === "Approved"
                        ? "text-green-600"
                        : item.status === "Pending"
                        ? "text-orange-500"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
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

export default History;
