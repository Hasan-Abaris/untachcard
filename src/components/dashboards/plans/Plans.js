
"use client";
import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { base_url } from "@/server";
import Loader from "@/components/common/loader/Loader";

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
    const [loader, setLoader] = useState(false)
    const [planData, setPlanData] = useState([])

    const planget = async () => {
        // setLoader(true)
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`${base_url}card-plans/public`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            setPlanData(res?.data?.data || []);
        } catch (error) {

        }
    }

    useEffect(() => {
        planget()
    }, [])

    const getPlanFeatures = (plan) => {
        const features = Object.entries(plan.modules || {}).map(([key, value]) => ({
            label: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
            available: value,
        }));

        console.log(features);


        return features;
    };

    return (
        <>
            {loader && <Loader />}
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
                    {planData?.map((plan, index) => {
                        const features = getPlanFeatures(plan);
                        const isHighlighted = plan.price > 0 && plan.price === Math.max(...plans.map(p => p.price));

                        return (
                            <div
                                key={plan._id}
                                className={`rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${isHighlighted
                                    ? "bg-gradient-to-b from-pink-500 to-rose-600 text-white"
                                    : "bg-white text-gray-900"
                                    }`}
                            >
                                <div className="p-8 flex flex-col items-center text-center">
                                    <h3
                                        className={`uppercase text-lg tracking-widest font-semibold ${isHighlighted ? "text-pink-100" : "text-pink-600"
                                            }`}
                                    >
                                        {plan.title}
                                    </h3>

                                    <div className="my-4 flex flex-col items-center">
                                        <span className="text-5xl font-extrabold">
                                            ₹{plan.price}
                                        </span>
                                        <span
                                            className={`text-sm mt-1 ${isHighlighted ? "text-pink-100" : "text-gray-500"
                                                }`}
                                        >
                                            {plan.billing_type}
                                        </span>
                                    </div>

                                    <ul className="w-full mt-6 space-y-3 text-left">
                                        {features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-sm md:text-base"
                                            >
                                                {feature.available ? (
                                                    <CheckCircle
                                                        className={`w-5 h-5 ${isHighlighted ? "text-white" : "text-green-500"
                                                            }`}
                                                    />
                                                ) : (
                                                    <XCircle
                                                        className={`w-5 h-5 ${isHighlighted ? "text-pink-200" : "text-red-400"
                                                            }`}
                                                    />
                                                )}
                                                <span
                                                    className={
                                                        feature.available
                                                            ? ""
                                                            : isHighlighted
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
                                        className={`mt-8 w-full py-3 rounded-full font-semibold text-sm tracking-wide transition ${isHighlighted
                                            ? "bg-white text-pink-600 hover:bg-pink-50"
                                            : "bg-pink-600 text-white hover:bg-pink-700"
                                            }`}
                                        href={`/dashboards/plans/orderSummary/${plan?._id}`}
                                    >
                                        Choose Plan
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Plans;
