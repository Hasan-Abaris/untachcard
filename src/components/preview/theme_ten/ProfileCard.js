import Image from "next/image";
import React from "react";
import { FaEye, FaUserPlus, FaShareAlt, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaInstagram, FaFacebookF } from "react-icons/fa";

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
            {data?.image_source === 'local' ?
                <Image
                    src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md"
                /> : <Image
                    src={data?.profile}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md"
                />}

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
