"use client";

import React from "react";

export default function Qr() {
  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay";

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Your UPI QR Code
      </h1>

      {/* QR Code Card */}
      <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center space-y-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1">
        <img
          src={qrUrl}
          alt="UPI QR Code"
          className="border-2 border-gray-200 rounded-2xl shadow-md w-52 h-52 object-contain"
        />
        <p className="text-gray-600 text-center text-lg">
          Scan this QR code to pay via UPI
        </p>
        <button
          onClick={downloadQR}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl hover:from-blue-600 hover:to-blue-800 transition font-semibold shadow-lg"
        >
          Download QR Code
        </button>
      </div>

      <footer className="mt-12 text-gray-500">
        &copy; {new Date().getFullYear()} My Technology. All rights reserved.
      </footer>
    </div>
  );
}
