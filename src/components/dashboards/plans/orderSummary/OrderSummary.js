
"use client";
import React from "react";
import { CreditCard } from "lucide-react";

const OrderSummary = () => {
    const plan = {
        name: "Medium",
        type: "Monthly",
        price: 49,
    };

    const vat = (plan.price * 0.1).toFixed(2);
    const total = (plan.price + parseFloat(vat)).toFixed(2);

    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Order Summary
                    </h1>
                </div>
            </div>
            <div className=" bg-gray-50 flex items-center justify-center pb-10 px-4 ">
                <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 w-full max-w-xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-2 bg-pink-600 rounded-full"></span>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                            Order Summary
                        </h2>
                    </div>

                    <p className="text-gray-500 mb-6 text-sm md:text-base">
                        Check your order and select your payment method from the options below.
                    </p>

                    {/* Table Section */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-3 text-sm font-semibold text-gray-600 border-b border-gray-200 pb-2">
                            <span>Plan</span>
                            <span className="text-center">Payment Type</span>
                            <span className="text-right">Price</span>
                        </div>

                        <div className="grid grid-cols-3 text-sm text-gray-800 pt-3">
                            <span>{plan.name}</span>
                            <span className="text-center">{plan.type}</span>
                            <span className="text-right">${plan.price}</span>
                        </div>
                    </div>

                    {/* VAT & Total */}
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-gray-700 text-sm md:text-base mb-2">
                            <span className="font-medium">VAT (10%)</span>
                            <span>+ ${vat}</span>
                        </div>

                        <div className="flex justify-between items-center font-semibold text-gray-900 text-base md:text-lg">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>

                    {/* Pay Now Button */}
                    <div className="mt-8 flex justify-end">
                        <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all">
                            <CreditCard size={18} />
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSummary;
