"use client";

import React from "react";

const EnquiryForm = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Enquiry Form</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Mobile"
                        autoComplete="off"
                        className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    rows="4"
                    className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
