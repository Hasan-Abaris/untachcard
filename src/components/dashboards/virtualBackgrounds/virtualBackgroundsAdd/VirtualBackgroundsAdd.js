"use client";
import React, { useState } from "react";

const VirtualBackgroundsAdd = () => {
    const [frontPreview, setFrontPreview] = useState(null);
    const [backPreview, setBackPreview] = useState(null);

    const handleImageChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (type === "front") setFrontPreview(ev.target.result);
                else setBackPreview(ev.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Virtual Backgrounds Add Custom
                    </h1>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Preview Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full h-56 border rounded shadow-md flex items-center justify-center bg-white">
                        {frontPreview ? (
                            <img
                                src={frontPreview}
                                alt="Front Preview"
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <span className="text-gray-400">Front Preview</span>
                        )}
                    </div>
                    <div className="w-full h-56 border rounded shadow-md flex items-center justify-center bg-white">
                        {backPreview ? (
                            <img
                                src={backPreview}
                                alt="Back Preview"
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <span className="text-gray-400">Back Preview</span>
                        )}
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Select Size */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                                Select Size<span className="text-red-500">*</span>
                            </label>
                            <select className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200">
                                <option>Horizontal</option>
                                <option>Vertical</option>
                            </select>
                        </div>

                        {/* vCard Name */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                                vCard Name<span className="text-red-500">*</span>
                            </label>
                            <select className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200">
                                <option>Select vCard</option>
                            </select>
                        </div>

                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                First Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Last Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Occupation */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Enter Occupation<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Occupation"
                                className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Location<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Location"
                                className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Phone<span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md text-gray-600">
                                    +91
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="w-full border rounded-r-md p-2 focus:ring focus:ring-indigo-200"
                                />
                            </div>
                        </div>

                        {/* Website */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">
                                Website<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Website URL"
                                className="w-full border rounded-md p-2 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Upload Images */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium mb-3">
                                Add E-card: <span className="text-red-500">*</span>
                            </label>
                            <div className="flex space-x-4">
                                {/* Front Image */}
                                <label className="w-24 h-24 border-2 border-dashed rounded flex items-center justify-center cursor-pointer">
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, "front")}
                                    />
                                    <span className="text-gray-400">Front</span>
                                </label>

                                {/* Back Image */}
                                <label className="w-24 h-24 border-2 border-dashed rounded flex items-center justify-center cursor-pointer">
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, "back")}
                                    />
                                    <span className="text-gray-400">Back</span>
                                </label>
                            </div>
                        </div>
                    </form>

                    {/* Buttons */}
                    <div className="flex space-x-4 mt-6">
                        <button className="px-6 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Download
                        </button>
                        <button className="px-6 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90">
                            Discard
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VirtualBackgroundsAdd;
