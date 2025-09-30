"use client";
import React, { useState } from "react";

const OrderNFCbuy = ({ isOpen, onClose, order }) => {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen) return null;

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 relative flex flex-col md:flex-row gap-6">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ✕
                </button>

                {/* Left: Product Image */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={order.image}
                        alt={order.productName}
                        className="rounded-lg shadow-md max-h-72 object-contain"
                    />
                </div>

                {/* Right: Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {order.name}
                        </h2>
                        <p className="text-sm text-purple-500 mt-1">
                            {order.description || "Autem reprehenderit"}
                        </p>
                        <p className="text-lg font-bold text-blue-600 mt-2">
                            {order.amount}
                        </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 mt-4">
                        <button
                            onClick={handleDecrease}
                            className="w-10 h-10 border rounded text-lg font-semibold hover:bg-gray-100"
                        >
                            −
                        </button>
                        <span className="text-lg font-medium">{quantity}</span>
                        <button
                            onClick={handleIncrease}
                            className="w-10 h-10 border rounded text-lg font-semibold hover:bg-gray-100"
                        >
                            +
                        </button>
                    </div>

                    {/* Buy Now Button */}
                    <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg shadow-md transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderNFCbuy;
