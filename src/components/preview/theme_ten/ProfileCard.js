import Image from "next/image";
import React from "react";
import { FaEye, FaUserPlus, FaShareAlt, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 text-center relative max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            {/* Views */}
            <div className="absolute top-3 right-3 flex items-center space-x-2 border px-3 py-1 rounded-full shadow">
                <FaEye />
                <span className="text-sm">Views: 5353</span>
            </div>

            {/* Profile Image */}
            <Image
                src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                alt="profile"
                className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md"
                width={100}
                height={100}
            />


            {/* Name */}
            <h2 className="mt-3 text-xl font-bold flex items-center justify-center gap-1">
                {data?.title} <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-gray-600">{data?.sub_title}</p>
            <p className="mt-2 text-gray-700 text-sm">
                {data?.description}
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-left">
                {social?.mandatory?.mobile && (
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-2xl" />
                        <span>{social.mandatory.mobile}</span>
                    </div>
                )}
                {social?.mandatory?.email && (
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-2xl" />
                        <span>{social.mandatory.email}</span>
                    </div>
                )}

                {social?.mandatory?.mobile && (
                    <div className="flex items-center gap-3">
                        <FaWhatsapp className="text-2xl" />
                        <a
                            href={`https://wa.me/${social.mandatory.mobile.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                )}
                {social?.mandatory?.address && (
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-2xl" />
                        <a
                            href={social.mandatory.address_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {social.mandatory.address}
                        </a>
                    </div>
                )}
                {social?.mandatory?.website && (
                    <div className="flex items-center gap-3">
                        <FaGlobe className="text-2xl" />
                        <a
                            href={social.mandatory.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {social.mandatory.website}
                        </a>
                    </div>
                )}
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
