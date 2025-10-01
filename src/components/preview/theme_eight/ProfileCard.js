
import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ProfileCard = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
            {/* Cover Image */}
            <div className="relative">
                <img
                    src="/assets/cardPreview/eight-cover.jpg"
                    alt="cover"
                    className="w-full h-40 object-cover"
                />
                <div className="absolute -bottom-12 left-6">
                    <img
                        src="/assets/cardPreview/sever-profile.jpg"
                        alt="profile"
                        className="w-24 h-24 rounded-full border-4 border-black"
                    />
                </div>
            </div>

            {/* Info */}
            <div className="pt-14 px-6 pb-6 text-center">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                    WAPTechy <span className="text-blue-400">✔</span>
                </h2>
                <p className="text-gray-400">CEO and Founder</p>
                <p className="mt-3">
                    We are WAPTechy Advanced Full Stack Developers.
                </p>

                {/* Contact */}
                <div className="mt-6 space-y-3 text-left">
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-2xl" /> <span>+918888888888</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-2xl" /> <span>waptechy@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaWhatsapp className="text-2xl" /> <span>WhatsApp Now</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-2xl" />{" "}
                        <span>Silicon Valley, California, USA</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 justify-center mt-6">
                    <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                        Add to Phone Book
                    </button>
                    <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
