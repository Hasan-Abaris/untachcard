"use client";
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import { useState } from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaGlobe,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
} from "react-icons/fa";

const ProfileCard = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    const getField = (type) =>
        data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());
    const mobile = getField("mobile");
    const email = getField("email");
    const address = getField("address");
    const website = getField("website");
    const facebook = getField("facebook");
    const instagram = getField("instagram");

    // 🎯 Dynamic style variables
    // const cardBg =
    //     data?.card_bg_type === "Transparent"
    //         ? "transparent"
    //         : data?.card_bg || "#000";
    // const fontColor = data?.card_font_color || "#fff";
    // const cardFont = data?.card_font || "inherit";
    // const themeBg =
    //     data?.card_theme_bg_type === "Transparent"
    //         ? "transparent"
    //         : data?.card_theme_bg || "#111";

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const shareModal = (data) => {
        setModalData(data);
        setOpen(true);
    };

    return (

        <div
            className="rounded-lg shadow-md text-center max-w-md mx-auto relative overflow-hidden"
            style={{
                background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            {/* 🔹 Banner Section */}
            <div
                className="h-28 relative"
                style={{
                    background:
                        themeBg !== "transparent"
                            ? themeBg
                            : "linear-gradient(90deg, #ec4899, #db2777)",
                }}
            >
                <div
                    className="absolute left-1 top-1 px-3 py-1 text-xs rounded-lg"
                    style={{
                        background: fontColor,
                        color: cardBg === "transparent" ? "#000" : cardBg,
                        fontWeight: "bold",
                    }}
                >
                    Views: {data?.views}
                </div>

                <div className="absolute inset-x-0 -bottom-12 flex justify-center">
                    <Image
                        src={
                            data?.image_source === "local"
                                ? `/assets/assets/uploads/card-profile/${data?.profile}`
                                : data?.profile
                        }
                        alt="Profile"
                        width={100}
                        height={100}
                        className="rounded-full border-4"
                        style={{ borderColor: fontColor }}
                    />
                </div>
            </div>

            {/* 🔹 Info Section */}
            <div className="pt-16 pb-6 px-6">
                <h2 className="text-2xl font-semibold" style={{ color: fontColor }}>{data?.title}</h2>
                <p className="text-sm opacity-80" style={{ color: fontColor }}>{data?.sub_title}</p>
                <p className="mt-2 opacity-70" style={{ color: fontColor }}>{data?.description}</p>

                {/* 🔹 Contact Fields */}
                <div className="mt-6 space-y-4 text-left">
                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaPhone style={{ color: fontColor }} className="text-xl" />
                            <span>{mobile.title}</span>
                        </div>
                    )}

                    {email && (
                        <div className="flex items-center gap-3">
                            <FaEnvelope style={{ color: fontColor }} className="text-xl" />
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
                            <FaWhatsapp style={{ color: fontColor }} className="text-xl" />
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
                            <FaMapMarkerAlt style={{ color: fontColor }} className="text-xl" />
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
                            <FaGlobe style={{ color: fontColor }} className="text-xl" />
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
                            <FaFacebookF style={{ color: fontColor }} className="text-xl" />
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
                            <FaInstagram style={{ color: fontColor }} className="text-xl" />
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

                {/* 🔹 Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    {data?.show_add_to_phone_book === "1" && (
                        <button
                            className="px-4 py-2 border rounded-md"
                            style={{
                                borderColor: fontColor,
                                color: fontColor,
                            }}
                        >
                            Add to Phone Book
                        </button>
                    )}

                    {data?.show_share === "1" && (
                        <button
                            type="button"
                            className="px-4 py-2 border rounded-md"
                            onClick={() => shareModal(data)}
                            style={{
                                borderColor: fontColor,
                                color: fontColor,
                            }}
                        >
                            Share
                        </button>
                    )}
                </div>
            </div>

            {/* 🔹 Share Modal */}
            <ShareVCardModal
                isOpen={open}
                onClose={() => setOpen(false)}
                data={modalData}
                theme={data?.theme_name || "theme_default"}
            />
        </div>


    );
};

export default ProfileCard;
