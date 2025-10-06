"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    return (
        <div className="w-full bg-black text-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
            {/* Profile Image */}
            <div className="relative">
                <img
                    src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                    alt="profile"
                    className="w-full h-64 object-cover"
                />
                {/* Views */}
                <div className="absolute top-2 right-2 bg-black/70 text-xs px-3 py-1 rounded-md flex items-center gap-2">
                    👁 Views: {data?.views}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="text-lg font-semibold flex items-center gap-1">
                    {data?.title}  <span className="text-blue-500">✔</span>
                </h2>
                <p className="text-sm text-gray-300">{data?.sub_title}</p>
                <p className="mt-2 text-sm text-gray-400">
                    {data?.description}
                </p>

                {/* Contact Info */}
                <div className="mt-5 space-y-3 text-sm">
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
                <div className="mt-6 flex gap-3">
                    <button className="w-1/2 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition">
                        Add to Phone Book
                    </button>
                    <button className="w-1/2 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition">
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard