"use client";
import React, { useState } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const RefundPage = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    amount: "",
    reason: "",
    upi: "",
  });

  const [refunds, setRefunds] = useState([
    {
      id: 1,
      orderId: "ORD12345",
      amount: "₹5,000",
      reason: "Venue booking cancellation",
      status: "Pending",
      date: "15 Sep 2025",
    },
    {
      id: 2,
      orderId: "ORD98765",
      amount: "₹2,000",
      reason: "Photographer not available",
      status: "Approved",
      date: "05 Sep 2025",
    },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRefund = {
      id: refunds.length + 1,
      orderId: formData.orderId,
      amount: `₹${formData.amount}`,
      reason: formData.reason,
      status: "Pending",
      date: new Date().toLocaleDateString("en-IN"),
    };

    setRefunds([newRefund, ...refunds]);
    setFormData({ orderId: "", amount: "", reason: "", upi: "" });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10 mt-20">
        <h1 className="text-2xl font-bold mb-6">Refund Request</h1>

        {/* Refund Request Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Submit Refund Request</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Order ID</label>
              <input
                type="text"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Refund Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Reason for Refund</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="3"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">UPI ID / Bank Details</label>
              <input
                type="text"
                name="upi"
                value={formData.upi}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Refund History */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-xl font-semibold p-4">Refund History</h2>
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="p-3">{r.date}</td>
                  <td className="p-3">{r.orderId}</td>
                  <td className="p-3">{r.amount}</td>
                  <td className="p-3">{r.reason}</td>
                  <td
                    className={`p-3 font-semibold ${
                      r.status === "Approved"
                        ? "text-green-600"
                        : r.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {r.status}
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

export default RefundPage;
