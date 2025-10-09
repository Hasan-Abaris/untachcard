"use client";
import React from "react";

function Qr() {
  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay";

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Your UPI QR Code</h1>

      {/* QR Code Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-2xl transition">
        <img 
          src={qrUrl} 
          alt="UPI QR Code" 
          className="border rounded-xl shadow-md w-48 h-48 object-contain"
        />
        <p className="text-gray-600 text-center">Scan this QR code to pay via UPI</p>
        <button
          onClick={downloadQR}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
}

export default Qr;
