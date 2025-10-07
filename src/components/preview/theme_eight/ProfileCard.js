
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";

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
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null)
    const shareModal = async (data) => {
        setModalData(data)
        setOpen(true)
    }
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
            {/* Cover Image */}
            <div className="relative">
                <div className="absolute left-1 top-1 bg-pink-700 px-3 py-1 text-xs rounded-lg">
                    Views: {data?.views}
                </div>
                <Image
                    src={`/assets/assets/uploads/card-banner/${data?.banner}`}
                    alt="cover"
                    className="w-full h-40 object-cover"
                    width={100}
                    height={100}
                />
                <div className="absolute -bottom-12 left-6">
                    <Image
                        src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                        alt="profile"
                        className="w-24 h-24 rounded-full border-4 border-black"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            {/* Info */}
            <div className="pt-14 px-6 pb-6 text-center">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                    {data?.title} <span className="text-blue-400">✔</span>
                </h2>
                {/* <p className="text-gray-400">{data?.title}</p> */}
                <p className="text-sm text-gray-300">{data?.sub_title}</p>
                <p className="mt-2 text-gray-400">
                    {data?.description}
                </p>

                {/* Contact */}
                <div className="mt-6 space-y-3 text-left">
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
                <div className="flex gap-3 justify-center mt-6">
                    <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                        Add to Phone Book
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700" onClick={() => shareModal(data)}>
                        Share
                    </button>
                </div>
            </div>
            <ShareVCardModal
                isOpen={open}
                onClose={() => setOpen(false)}
                data={modalData}
                theme="theme_eight/theme_eight"
            />
        </div>
    );
};

export default ProfileCard;
