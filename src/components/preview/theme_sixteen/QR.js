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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 relative">
      {/* QR Code Label */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 border-b border-gray-300 pb-2 relative">
        <span className="bg-white px-4">QR Code</span>
      </h2>

      {/* QR Code Container */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-4">
        {/* Globe Icon */}
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="black"/>
        </svg>

        {/* QR Code and Text */}
        <div className="flex-1">
          <img
            src={qrUrl}
            alt="QR Code"
            className="w-32 h-32 object-contain rounded"
          />
          <p className="text-gray-600 text-sm mt-2">
            Scan to Contact<br />
            Point your phone camera at the QR code to quickly add our contact information. You can also use the Add to Contacts button below for fast saving.
          </p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <button
          onClick={downloadQR}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          Add to Contacts
        </button>
      </div>
    </div>
  );
}