"use client";
import React from "react";

const InquiriesDetails = ({ isOpen, onClose, inquiry }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">Inquiry Details</h2>
                <hr className="my-4" />

                {/* Inquiry Info */}
                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                    <p>
                        <span className="font-semibold">vCard Name :</span>{" "}
                        {inquiry.vcardName}
                    </p>
                    <p>
                        <span className="font-semibold">Name:</span> {inquiry.name}
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> {inquiry.email}
                    </p>
                    <p>
                        <span className="font-semibold">Phone:</span> {inquiry.phone}
                    </p>
                    <p>
                        <span className="font-semibold">Message:</span> {inquiry.message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InquiriesDetails;
