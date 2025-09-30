"use client";
import { useState } from "react";
import { FaStar, FaPhoneAlt, FaRegHeart, FaShareAlt } from "react-icons/fa";

const WeddingDetails = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        guests: "",
        functions: "",
        type: "",
        time: "",
    });

    return (
        <div className="w-full bg-gray-50 py-6 mt-18">
            <div className="container mx-auto px-4 lg:px-10 grid lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src="/assets/details/img1.jpg"
                        alt="Venue"
                        className="w-full h-72 object-cover"
                    />

                    <div className="p-4">
                        <h2 className="text-2xl font-semibold">DLS Forest Vines Resort</h2>
                        <p className="text-sm text-gray-500">
                            Jim Corbett, Uttarakhand (View on Map)
                        </p>
                        <p className="text-xs text-gray-400">
                            THE FOREST VINES I RESORTS, khushalpur choi, Ramnagar, Uttarakhand, India
                        </p>

                        {/* Rating + Contact */}
                        <div className="flex items-center mt-3 space-x-4">
                            <span className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-sm">
                                <FaStar className="mr-1" /> 3.5
                            </span>
                            <span className="text-gray-500 text-sm">3 reviews</span>
                            <button className="flex items-center text-pink-600 text-sm">
                                <FaPhoneAlt className="mr-1" /> Contact
                            </button>
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-6 mt-4 text-sm">
                            <button className="flex items-center text-gray-600 hover:text-pink-600">
                                <img src="/assets/photos.png" alt="" className="w-4 mr-1" /> 37 Photos
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-pink-600">
                                <FaRegHeart className="mr-1" /> Shortlist
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-pink-600">
                                Write a Review
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-pink-600">
                                <FaShareAlt className="mr-1" /> Share
                            </button>
                        </div>

                        {/* Areas Available */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Areas Available (2)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border rounded-lg p-4">
                                    <h4 className="font-medium">Banquet Hall</h4>
                                    <p className="text-sm text-gray-500">250 Seating | 350 Floating</p>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <h4 className="font-medium">Lawn</h4>
                                    <p className="text-sm text-gray-500">550 Seating | 650 Floating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    {/* Prices */}
                    <div>
                        <h4 className="font-semibold">Local Price</h4>
                        <p className="text-sm mt-2">
                            <span className="text-pink-600 font-semibold">₹1500</span> per plate (Veg)
                        </p>
                        <p className="text-sm">
                            <span className="text-pink-600 font-semibold">₹1700</span> per plate (Non-Veg)
                        </p>
                    </div>

                    <div className="bg-pink-50 rounded-lg p-3 mt-4">
                        <h4 className="font-semibold text-gray-800">Destination Price</h4>
                        <p className="text-lg font-bold text-pink-600">₹7.50 Lakhs</p>
                        <p className="text-xs text-gray-500">/day for 42 rooms (incl. Rooms + 3 Meals + Venue)</p>
                    </div>

                    {/* Form */}
                    <form className="mt-6 space-y-3">
                        <input
                            type="text"

                            className="w-full border rounded px-3 py-2 text-sm"
                            placeholder="Enter Name"
                        />
                        <input
                            type="text"

                            className="w-full border rounded px-3 py-2 text-sm"
                            placeholder="Enter Mobile"
                        />
                        <input
                            type="email"

                            className="w-full border rounded px-3 py-2 text-sm"
                            placeholder="Enter Email"
                        />
                        <input
                            type="date"

                            className="w-full border rounded px-3 py-2 text-sm"
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="number"

                                className="w-full border rounded px-3 py-2 text-sm"
                                placeholder="No Of Guests"
                            />
                            <input
                                type="number"

                                className="w-full border rounded px-3 py-2 text-sm"
                                placeholder="No Of Rooms"
                            />
                        </div>

                        {/* Function Type */}
                        <div>
                            <label className="text-sm font-medium">Function Type</label>
                            <div className="flex space-x-4 mt-1 text-sm">
                                <label>
                                    <input type="radio" name="type" defaultChecked /> Pre-Wedding
                                </label>
                                <label>
                                    <input type="radio" name="type" /> Wedding
                                </label>
                            </div>
                        </div>

                        {/* Function Time */}
                        <div>
                            <label className="text-sm font-medium">Function Time</label>
                            <div className="flex space-x-4 mt-1 text-sm">
                                <label>
                                    <input type="radio" name="time" defaultChecked /> Evening
                                </label>
                                <label>
                                    <input type="radio" name="time" /> Day
                                </label>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-4">
                            <button
                                type="button"
                                className="w-1/2 bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                            >
                                Send Message
                            </button>
                            <button
                                type="button"
                                className="w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                            >
                                View Contact
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                        >
                            Check Availability & Prices
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WeddingDetails;
