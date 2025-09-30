"use client";
import { useState } from "react";

export const WeddingPortfolio = () => {
    const [activeTab, setActiveTab] = useState("portfolio");

    const tabs = [
        { key: "portfolio", label: "PORTFOLIO (37)" },
        { key: "albums", label: "ALBUMS (1)" },
        { key: "videos", label: "VIDEOS (2)" },
    ];

    const images = [
        "/assets/details/p1.jpeg",
        "/assets/details/p2.jpg",
        "/assets/details/p3.jpeg",
        "/assets/details/p4.jpeg",
        "/assets/details/p5.jpg",
        "/assets/details/p6.webp",
        "/assets/details/p7.jpg",
        "/assets/details/p8.jpeg",
        "/assets/details/p9.jpeg",
        "/assets/details/p10.jpeg",
        "/assets/details/p11.jpeg",
        "/assets/details/p12.jpeg",
    ];

    return (
        <div className="container mx-auto px-4 lg:px-10 mt-8">
            {/* Tabs */}
            <div className="border-b flex space-x-6 text-sm font-semibold">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`pb-2 ${activeTab === tab.key
                            ? "text-pink-600 border-b-2 border-pink-600"
                            : "text-gray-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Gallery */}
            {activeTab === "portfolio" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`portfolio-${i}`}
                            className="w-full h-40 object-cover rounded"
                        />
                    ))}
                </div>
            )}

            {activeTab === "albums" && (
                <div className="mt-6 text-gray-500 text-center">Albums content here...</div>
            )}

            {activeTab === "videos" && (
                <div className="mt-6 text-gray-500 text-center">Videos content here...</div>
            )}

            <div className="flex justify-center mt-6">
                <button className="px-6 py-2 border rounded-full text-pink-600 hover:bg-pink-50">
                    View 25 more
                </button>
            </div>
        </div>
    );
};


