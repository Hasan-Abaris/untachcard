"use client";
import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Storage = () => {
    // Example data
    const total = 400;
    const used = 359;
    const unused = total - used;

    const pieData = [
        { name: "Used Storage", value: used },
        { name: "Unused Storage", value: unused },
    ];

    const COLORS = ["#6366F1", "#E0E7FF"]; // purple + light purple

    // Storage Used details (right side)
    const storageDetails = [
        {
            section: "vCards", items: [
                { label: "Products", size: "16.54 MB", percent: "4.14%" },
                { label: "Services", size: "33.56 MB", percent: "8.39%" },
                { label: "Testimonials", size: "50.18 MB", percent: "12.54%" },
                { label: "Social Icon", size: "0.00 MB", percent: "0.00%" },
                { label: "Blogs", size: "40.66 MB", percent: "10.17%" },
                { label: "Gallery", size: "70.81 MB", percent: "17.70%" },
                { label: "Profile And Cover", size: "25.54 MB", percent: "6.39%" },
            ]
        },
        {
            section: "WhatsApp Store", items: [
                { label: "Products", size: "109.97 MB", percent: "27.49%" },
                { label: "Product Category", size: "3.11 MB", percent: "0.78%" },
                { label: "Profile And Cover", size: "8.79 MB", percent: "2.20%" },
            ]
        },
        {
            section: "Setting", items: [
                { label: "PWA", size: "0.03 MB", percent: "0.01%" },
                { label: "Avatar", size: "0.10 MB", percent: "0.02%" },
            ]
        },
    ];

    return (

        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Storage
                    </h1>
                </div>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Section */}
                    <div className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-lg font-semibold mb-4">Storage Overview</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={0}
                                    outerRadius={90}
                                    paddingAngle={1}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Legend */}
                        <div className="flex justify-center gap-6 mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded bg-indigo-500"></span>
                                Used Storage
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded bg-indigo-100"></span>
                                Unused Storage
                            </div>
                        </div>

                        {/* Storage Bar */}
                        <div className="mt-6">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-indigo-500 h-2 rounded-full"
                                    style={{ width: `${(used / total) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-right text-sm mt-2 text-gray-600">
                                {used} MB / {total} MB
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-lg font-semibold mb-4">Storage Used</h2>
                        <div className="space-y-6 text-sm">
                            {storageDetails.map((section, i) => (
                                <div key={i}>
                                    <p className="font-medium mb-2">{section.section}</p>
                                    {section.items.map((item, j) => (
                                        <div
                                            key={j}
                                            className="flex justify-between text-gray-700 mb-1"
                                        >
                                            <span>{item.label}</span>
                                            <span>
                                                {item.size}{" "}
                                                <span className="text-gray-500">{item.percent}</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Storage;
