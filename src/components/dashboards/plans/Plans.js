
"use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "MEDIUM",
        price: 49,
        period: "Monthly",
        features: [
            { label: "10 vCard", available: true },
            { label: "Unlimited Contact/Custom Fields", available: true },
            { label: "Products and Services", available: false },
            { label: "Unlimited Portfolio", available: true },
            { label: "Unlimited Testimonials", available: true },
            { label: "Gallery", available: false },
            { label: "Custom Sections", available: false },
            { label: "10 Team Member", available: true },
            { label: "QR Code", available: true },
            { label: "Hide Branding", available: false },
            { label: "Enquiry Form", available: false },
            { label: "Support", available: false },
            { label: "No Ads", available: false },
            { label: "Custom JS, CSS", available: false },
            { label: "Search Engine Indexing", available: true },
            { label: "Multiple Themes", available: false },
            { label: "Custom Domain", available: false },
            { label: "Custom Card URL", available: false },
        ],
        buttonText: "SUBSCRIBE →",
        highlight: false,
    },
    {
        name: "LARGE",
        price: 99,
        period: "One Time",
        features: [
            { label: "Unlimited vCard", available: true },
            { label: "Unlimited Contact/Custom Fields", available: true },
            { label: "Unlimited Products and Services", available: true },
            { label: "Unlimited Portfolio", available: true },
            { label: "Unlimited Testimonials", available: true },
            { label: "Unlimited Gallery", available: true },
            { label: "Unlimited Custom Sections", available: true },
            { label: "Unlimited Team Member", available: true },
            { label: "QR Code", available: true },
            { label: "Hide Branding", available: true },
            { label: "Enquiry Form", available: true },
            { label: "Support", available: true },
            { label: "No Ads", available: true },
            { label: "Custom JS, CSS", available: true },
            { label: "Search Engine Indexing", available: true },
            { label: "Multiple Themes", available: true },
            { label: "Custom Domain", available: true },
            { label: "Custom Card URL", available: true },
            { label: "Verification Badge", available: true },
        ],
        buttonText: "RENEW PLAN →",
        highlight: true,
    },
];

const Plans = () => {
    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Our Pricing Plans
                    </h1>
                </div>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex flex-col items-center py-16 px-4">
                {/* <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
                Our Pricing Plans
            </h2> */}

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${plan.highlight
                                ? "bg-gradient-to-b from-pink-500 to-rose-600 text-white"
                                : "bg-white text-gray-900"
                                }`}
                        >
                            <div className="p-8 flex flex-col items-center text-center">
                                <h3
                                    className={`uppercase text-lg tracking-widest font-semibold ${plan.highlight ? "text-pink-100" : "text-pink-600"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <div className="my-4 flex flex-col items-center">
                                    <span className="text-5xl font-extrabold">
                                        ${plan.price}
                                    </span>
                                    <span
                                        className={`text-sm mt-1 ${plan.highlight ? "text-pink-100" : "text-gray-500"
                                            }`}
                                    >
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="w-full mt-6 space-y-3 text-left">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-sm md:text-base"
                                        >
                                            {feature.available ? (
                                                <CheckCircle
                                                    className={`w-5 h-5 ${plan.highlight
                                                        ? "text-white"
                                                        : "text-green-500"
                                                        }`}
                                                />
                                            ) : (
                                                <XCircle
                                                    className={`w-5 h-5 ${plan.highlight
                                                        ? "text-pink-200"
                                                        : "text-red-400"
                                                        }`}
                                                />
                                            )}
                                            <span
                                                className={
                                                    feature.available
                                                        ? ""
                                                        : plan.highlight
                                                            ? "opacity-70"
                                                            : "text-gray-400 line-through"
                                                }
                                            >
                                                {feature.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    className={`mt-8 w-full py-3 rounded-full font-semibold text-sm tracking-wide transition ${plan.highlight
                                        ? "bg-white text-pink-600 hover:bg-pink-50"
                                        : "bg-pink-600 text-white hover:bg-pink-700"
                                        }`}
                                    href="/dashboards/plans/orderSummary/1"
                                >
                                    {plan.buttonText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Plans;
