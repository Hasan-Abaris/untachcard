
"use client";
import Link from 'next/link';
import React from 'react'
const cards = [
    {
        front: "/assets/dasgboardsideImage/Front.png",
        back: "/assets/dasgboardsideImage/Back1.png",
    },
    {
        front: "/assets/dasgboardsideImage/Front2.png",
        back: "/assets/dasgboardsideImage/back2.png",
    },
    {
        front: "/assets/dasgboardsideImage/Front3.png",
        back: "/assets/dasgboardsideImage/back3.png",
    },
    {
        front: "/assets/dasgboardsideImage/front4.png",
        back: "/assets/dasgboardsideImage/back4.png",
    },
];
const VirtualBackgrounds = () => {
    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Virtual Backgrounds
                    </h1>
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"

                        />
                        <svg
                            className="absolute left-3 top-2.5 text-gray-400 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>
                    </div>
                    <Link href="/dashboards/virtualBackgrounds/virtualBackgroundsAdd" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
                        Add Custom
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="group [perspective:1000px]">
                            <div className="relative w-full h-56 sm:h-72 lg:h-64 xl:h-72 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                                {/* Front */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
                                    <img
                                        src={card.front}
                                        alt="Front"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <img
                                        src={card.back}
                                        alt="Back"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default VirtualBackgrounds