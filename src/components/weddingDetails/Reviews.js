"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import UploadModal from "./ModalReview/ModalReview";

const Reviews = () => {
    const [rating, setRating] = useState(0);

    const [open, setOpen] = useState(false);

    return (
        <div className="container bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-4">
                Reviews for DLS Forest Vines Resort <span className="text-gray-500">(3)</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Left Side - Rating Distribution */}
                <div>
                    <h3 className="text-sm font-medium mb-2">Rating Distribution</h3>

                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>5</span>
                        <div className="flex-1 mx-2 bg-gray-200 h-3 rounded">
                            <div className="bg-green-500 h-3 rounded w-2/3"></div>
                        </div>
                        <span className="text-sm text-gray-600">2 reviews</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>4</span>
                        <div className="flex-1 mx-2 bg-gray-200 h-3 rounded"></div>
                        <span className="text-sm text-gray-600">0 reviews</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>3</span>
                        <div className="flex-1 mx-2 bg-gray-200 h-3 rounded"></div>
                        <span className="text-sm text-gray-600">0 reviews</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>2</span>
                        <div className="flex-1 mx-2 bg-gray-200 h-3 rounded"></div>
                        <span className="text-sm text-gray-600">0 reviews</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <input type="checkbox" className="mr-2" />
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>1</span>
                        <div className="flex-1 mx-2 bg-gray-200 h-3 rounded">
                            <div className="bg-red-500 h-3 rounded w-1/3"></div>
                        </div>
                        <span className="text-sm text-gray-600">1 review</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        Last Review Updated on 17 May 2025
                    </p>
                </div>

                {/* Right Side - Review Form */}
                <div>
                    <h3 className="text-sm font-medium mb-3">Review DLS Forest Vines Resort</h3>
                    <p className="text-sm font-medium mb-2">Rate Vendor*</p>
                    <div className="flex space-x-1 mb-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <button
                                key={num}
                                onClick={() => setRating(num)}
                                className={`w-6 h-6 border rounded ${rating >= num ? "bg-pink-500 border-pink-500" : "bg-white"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    <textarea
                        className="w-full border rounded-md p-2 text-sm mb-3 focus:ring focus:ring-pink-200"
                        rows="5"
                        placeholder="Tell us about your experience*"
                    ></textarea>

                    <input
                        className="w-full border rounded-md p-2 text-sm mb-3 focus:ring focus:ring-pink-200"
                        placeholder="How much did you spend on this vendor?"
                    />

                    <div className="flex items-center justify-between">
                        <button type="button" className="px-4 py-2 text-sm border rounded-md" onClick={() => setOpen(true)}>
                            Add Photos
                        </button>
                        <button className="px-6 py-2 text-sm bg-pink-500 text-white rounded-md hover:bg-pink-600">
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t pt-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                            <p className="font-semibold">Deepti Sharma</p>
                            <div className="flex items-center text-green-600 text-sm font-medium">
                                <span className="mr-1">★ 5.0</span>
                            </div>
                            <p className="text-xs text-gray-500">Reviewed 4 months ago</p>
                        </div>
                    </div>

                    <h4 className="font-medium text-lg mb-2">
                        A Magical Wedding Experience at DLS Forest Vines, Corbett! 🌿 💍
                    </h4>

                    <p className="text-sm text-gray-700">
                        I recently attended a wedding at DLS Forest Vines, and I must say — it was nothing short of spectacular!
                        It was also my first trip to Corbett, and this resort made it truly unforgettable.
                        From the beautifully done decor to the delicious food and warm hospitality, everything was top-notch.
                    </p>

                    <div className="mt-4">
                        <p className="font-medium text-sm mb-1">Recommended for:</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">🍽️ Amazing Food</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🥘 Hospitality</span>
                            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">🏖️ Poolside Area</span>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <img src="/images/wedding1.jpg" alt="Wedding 1" className="rounded-md" />
                        <img src="/images/wedding2.jpg" alt="Wedding 2" className="rounded-md" />
                    </div>
                </div>
            </div>
            <UploadModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default Reviews;
