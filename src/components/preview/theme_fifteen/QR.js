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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative">
      {/* QR Code Label */}
      <div className="absolute top-6 left-6 bg-pink-200 text-pink-800 px-4 py-2 rounded-lg font-semibold">
        QR Code
      </div>

      {/* Profile Image and QR Code Container */}
      <div className="flex items-center justify-center space-x-8">
        {/* Profile Image */}
        <div className="w-32 h-32 bg-blue-200 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/128" // Replace with actual profile image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <img
            src={qrUrl}
            alt="UPI QR Code"
            className="w-40 h-40 object-contain"
          />
        </div>
      </div>

 

      {/* Download Button */}
      <div className="mt-8">
        <button
          onClick={downloadQR}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl hover:from-blue-600 hover:to-blue-800 transition font-semibold shadow-lg"
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