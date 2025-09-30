"use client";
import React from "react";

const ProductOrdersDetails = ({ isOpen, onClose, order }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">Product Order Details</h2>
                <hr className="my-4" />

                {/* Order Info in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-gray-700 text-sm sm:text-base">
                    <div>
                        <p className="font-semibold">Product Name:</p>
                        <p>{order.productName}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Name:</p>
                        <p>{order.name}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Email:</p>
                        <p>{order.email}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Phone:</p>
                        <p>{order.phone}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Payment Type:</p>
                        <p>{order.paymentType}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Amount:</p>
                        <p>{order.amount}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Address:</p>
                        <p>{order.address}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Ordered At:</p>
                        <p>{order.orderedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOrdersDetails;
