
import React from "react";
import { Phone, Mail, MapPin, Share2, UserPlus, Eye } from "lucide-react";
import Image from "next/image";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg overflow-hidden relative max-w-lg mx-auto text-center p-6">
            {/* Views */}
            <div className="absolute top-2 right-2 flex items-center space-x-2 text-sm bg-black/40 text-white px-3 py-1 rounded-lg">
                <Eye size={16} /> <span>Views: {data?.views}</span>
            </div>

            {/* Profile Image */}
            <Image
                src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white mx-auto object-cover"
                width={100}
                height={100}
            />
            {/* <img
                src="/assets/cardPreview/sever-profile.jpg"
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white mx-auto object-cover"
            /> */}

            {/* Info */}
            <h2 className="text-2xl font-bold mt-3">{data?.title} ✅</h2>
            <p className="font-semibold">{data?.sub_title}</p>
            <p className="italic">{data?.description}</p>

            {/* Contact */}
            <div className="mt-4 space-y-2 text-left">
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
            <div className="mt-4 flex justify-around">
                <button className="border px-4 py-2 rounded-lg flex items-center space-x-2">
                    <UserPlus size={16} /> <span>Add to Phone Book</span>
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Share2 size={16} /> <span>Share</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
