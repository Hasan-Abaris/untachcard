
import React from "react";
import { Phone, Mail, MapPin, Share2, UserPlus, Eye } from "lucide-react";
import Image from "next/image";
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
        <div className=" rounded-xl shadow-lg overflow-hidden relative max-w-lg mx-auto text-center p-6" style={{
            backgroundImage: "url('/assets/banner/theme-nine.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
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
