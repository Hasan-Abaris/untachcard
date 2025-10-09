import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
export const ProfileCard = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
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
        <div
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto text-center relative backdrop-blur-sm"
            style={{
                background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            {/* Cover Image */}
            {data?.banner && (
                <img
                    src={`/assets/assets/uploads/card-banner/${data?.banner}`}
                    alt="cover"
                    className="w-full h-32 object-cover rounded-2xl"
                />
            )}

            {/* Profile Image */}
            {data?.image_source === "local" ? (
                <Image
                    src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full border-4 border-white absolute top-14 left-24 transform -translate-x-1/2 translate-y-1/2"
                />
            ) : (
                <Image
                    src={data?.profile}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full border-4 border-white absolute top-14 left-24 transform -translate-x-1/2 translate-y-1/2"
                />
            )}

            {/* Card Content */}
            <div className="mt-14">
                <h2 className="text-xl font-bold" style={{ color: fontColor }}>{data?.title}</h2>
                <p className="text-gray-700" style={{ color: fontColor }}>{data?.sub_title}</p>
                <p className="mt-2 text-sm" style={{ color: fontColor }}>{data?.description}</p>

                <div className="mt-4 space-y-2 text-sm text-left">
                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-2xl text-yellow-400" />
                            <span style={{ color: fontColor }}>{mobile.title}</span>
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
                                style={{ color: fontColor }}
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
                                style={{ color: fontColor }}
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
                                style={{ color: fontColor }}
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
                                style={{ color: fontColor }}
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
                                style={{ color: fontColor }}
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
                                style={{ color: fontColor }}
                            >
                                Instagram
                            </a>
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex justify-center mt-4 gap-3">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-white hover:text-black transition">
                        Add to Phone Book
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 border rounded-lg text-sm hover:bg-white hover:text-black transition"
                        onClick={() => shareModal(data)}
                    >
                        Share
                    </button>
                </div>

                <ShareVCardModal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    data={modalData}
                    theme="theme_eleven/theme_eleven"
                />
            </div>
        </div>
    );
};