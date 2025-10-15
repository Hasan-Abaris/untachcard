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
import * as FaIcons from "react-icons/fa";

const ProfileCard = ({ data, themeBg, cardBg, fontColor, cardFont }) => {

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

    const renderIcon = (iconName) => {
        if (!iconName) return <FaIcons.FaLink style={{ color: fontColor }} />;
        if (FaIcons[iconName]) {
            const IconComponent = FaIcons[iconName];
            return <IconComponent style={{ color: fontColor }} className="text-2xl" />;
        }
        if (iconName.startsWith("fa")) {
            return <i className={`${iconName} text-2xl`} style={{ color: fontColor }} />;
        }
        return <FaIcons.FaLink style={{ color: fontColor }} className="text-2xl" />;
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
                        background: "gray"
                        // color: cardBg === "transparent" ? "#000" : cardBg,
                        // fontWeight: "bold",  
                    }}
                >
                    {data?.show_card_view_count_on_a_card === 1 && (
                        <span>Views: {data?.views}</span>
                    )}
                </div>
                <Image
                    src={
                        data?.banner?.startsWith("http")
                            ? data.banner
                            : `/assets/assets/uploads/card-banner/${data?.banner || "default-banner.jpg"}`
                    }
                    alt="cover"
                    className="w-full h-40 object-cover"
                    width={100}
                    height={100}
                />

                <div className="absolute inset-x-0 -bottom-12 flex justify-center">
                    <Image
                        src={
                            data?.profile?.startsWith("http")
                                ? data.profile
                                : `/assets/assets/uploads/card-profile/${data?.profile || "default-profile.jpg"}`
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
                    {data?.fields?.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            {renderIcon(item.icon)}
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                                style={{ color: fontColor }}
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>

                {/* 🔹 Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    {Number(data?.show_add_to_phone_book) === 1 &&

                        <button
                            onClick={() => {
                                const fullName = data?.title || "My vCard";
                                const phone = mobile?.url || "";
                                const mail = email?.url || "";

                                // ✅ Correct VCF structure
                                const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${fullName}
N:${fullName}
TEL;TYPE=CELL,VOICE:${phone}
EMAIL;TYPE=INTERNET:${mail}
END:VCARD
`.trim();

                                const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
                                const url = URL.createObjectURL(blob);

                                const a = document.createElement("a");
                                a.href = url;
                                a.download = `${fullName.replace(/\s+/g, "_")}.vcf`;
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);

                                // Cleanup
                                setTimeout(() => URL.revokeObjectURL(url), 2000);
                            }}
                            className="px-4 py-2 rounded-lg transition cursor-pointer"
                            style={{
                                border: '1px solid black',
                                color: fontColor,
                                fontFamily: cardFont,
                            }}
                        >
                            📇 Add to Phone Book
                        </button>
                        // <button
                        //     className="px-4 py-2 rounded-lg transition cursor-pointer"
                        //     style={{
                        //         // backgroundColor: cardBg,
                        //         border: '1px solid black',
                        //         color: fontColor,
                        //         fontFamily: cardFont,
                        //     }}
                        // >
                        //     Add to Phone Book
                        // </button>

                    }
                    {Number(data?.show_share) === 1 && <button
                        type="button"
                        className="px-4 py-2 rounded-lg transition cursor-pointer"
                        style={{
                            // backgroundColor: cardBg,
                            border: '1px solid black',
                            color: fontColor,
                            fontFamily: cardFont,
                        }}
                        onClick={() => shareModal(data)}
                    >
                        Share
                    </button>}
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
