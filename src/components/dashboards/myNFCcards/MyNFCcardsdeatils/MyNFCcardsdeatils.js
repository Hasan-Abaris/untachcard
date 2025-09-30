import React from "react";

const MyNFCcardsdeatils = ({ isOpen, onClose, order }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    NFC Card Order Details
                </h2>
                <hr className="mb-6" />

                {/* 2 Columns Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-700 text-sm sm:text-base">
                    <div>
                        <p className="font-semibold">User Name:</p>
                        <p>{order.userName}</p>
                    </div>
                    <div>
                        <p className="font-semibold">NFC Card Type:</p>
                        <p>{order.nfcCardType}</p>
                    </div>

                    <div>
                        <p className="font-semibold">vCard:</p>
                        <p className="text-blue-600 hover:underline cursor-pointer">
                            {order.vCard}
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold">Company Name:</p>
                        <p>{order.companyName}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Shipping Address:</p>
                        <p>{order.address}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Order Status:</p>
                        <span className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-600">
                            {order.orderStatus}
                        </span>
                    </div>

                    <div>
                        <p className="font-semibold">Created At:</p>
                        <p>{order.createdAt}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Payment Status:</p>
                        <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-600">
                            {order.paymentStatus}
                        </span>
                    </div>

                    <div>
                        <p className="font-semibold">Payment Type:</p>
                        <p>{order.paymentType}</p>
                    </div>
                </div>

                {/* Order Summary + Logo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {/* Order Summary Box */}
                    <div className="border rounded-lg p-4 shadow-sm">
                        <h3 className="font-semibold mb-3">Order Summary</h3>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Price per NFC Card:</span>
                            <span>{order.pricePerCard}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Quantity:</span>
                            <span>{order.quantity}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Subtotal:</span>
                            <span>{order.subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Tax(0%):</span>
                            <span>{order.tax}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-base">
                            <span>Grand Total:</span>
                            <span>{order.total}</span>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-col items-start md:items-end justify-center">
                        <p className="font-semibold mb-2">Logo:</p>
                        <img
                            src={order.logo}
                            alt="Logo"
                            className="w-28 h-28 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNFCcardsdeatils;
