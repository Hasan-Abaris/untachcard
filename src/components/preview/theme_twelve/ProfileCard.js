"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    const getField = (type) =>
        data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());

    const mobile = getField("mobile");
    const email = getField("email");
    const address = getField("address");
    const website = getField("website");
    const facebook = getField("facebook");
    const instagram = getField("instagram");
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
                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-2xl text-yellow-400" />
                            <span>{mobile.title}</span>
                        </div>
                    )}

                    {email && (
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-2xl text-yellow-400" />
                            <a
                                href={`mailto:${email.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {email.title}
                            </a>
                        </div>
                    )}

                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaWhatsapp className="text-2xl text-green-500" />
                            <a
                                href={`https://wa.me/${mobile.url.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    )}
                    {address && (
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-2xl text-yellow-400" />
                            <a
                                href={address.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {address.title}
                            </a>
                        </div>
                    )}
                    {website && (
                        <div className="flex items-center gap-3">
                            <FaGlobe className="text-2xl text-yellow-400" />
                            <a
                                href={website.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {website.url}
                            </a>
                        </div>
                    )}
                    {facebook && (
                        <div className="flex items-center gap-3">
                            <FaFacebookF className="text-2xl text-blue-500" />
                            <a
                                href={facebook.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Facebook
                            </a>
                        </div>
                    )}

                    {instagram && (
                        <div className="flex items-center gap-3">
                            <FaInstagram className="text-2xl text-pink-500" />
                            <a
                                href={instagram.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Instagram
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