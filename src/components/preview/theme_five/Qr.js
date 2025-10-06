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
    <div className="flex flex-col items-center p-6 space-y-4">
      {/* QR Code Image */}
      <img 
        src={qrUrl} 
        alt="UPI QR Code" 
        className="border rounded-lg shadow-md"
      />

      {/* Download Button */}
      <button
        onClick={downloadQR}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download QR Code
      </button>
    </div>
  );
}

export default Qr;
