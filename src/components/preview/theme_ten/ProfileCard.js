import React from "react";
import { FaEye, FaUserPlus, FaShareAlt } from "react-icons/fa";

const ProfileCard = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 text-center relative max-w-lg mx-auto">
            {/* Views */}
            <div className="absolute top-3 right-3 flex items-center space-x-2 border px-3 py-1 rounded-full shadow">
                <FaEye />
                <span className="text-sm">Views: 5353</span>
            </div>

            {/* Profile Image */}
            <img
                src="https://i.pravatar.cc/150?img=47"
                alt="profile"
                className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md"
            />

            {/* Name */}
            <h2 className="mt-3 text-xl font-bold flex items-center justify-center gap-1">
                WAPTechy <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-gray-600">CEO and Founder</p>
            <p className="mt-2 text-gray-700 text-sm">
                We are WAPTechy Advanced Full Stack Developers.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-left">
                <p className="font-bold">📞 +918888888888</p>
                <p className="text-blue-600 font-semibold">📧 waptechy@gmail.com</p>
                <p className="font-semibold">💬 WhatsApp Now</p>
                <p className="font-semibold">📍 Silicon Valley, California, USA</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center mt-6 gap-3">
                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    <FaUserPlus /> Add to Phone Book
                </button>
                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    <FaShareAlt /> Share
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
