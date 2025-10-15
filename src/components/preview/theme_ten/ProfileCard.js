import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaUserPlus, FaShareAlt, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaInstagram, FaFacebookF } from "react-icons/fa";
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
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null)
    const shareModal = async (data) => {
        setModalData(data)
        setOpen(true)
    }

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
            className="rounded-xl shadow-lg p-6 text-center relative max-w-lg mx-auto"
            style={{
                backgroundImage: "url('/assets/banner/theme-ten.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            {/* Views */}
            <div className="absolute top-3 right-3 flex items-center space-x-2 border px-3 py-1 rounded-full shadow bg-white/70 backdrop-blur-sm">
                <FaEye />
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

            {/* Profile Image */}
            <Image
                src={
                    data?.profile?.startsWith("http")
                        ? data.profile
                        : `/assets/assets/uploads/card-profile/${data?.profile || "default-profile.jpg"}`
                }
                alt="Profile"
                width={100}
                height={100}
                className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md"
            />


            {/* Name */}
            <h2 className="mt-3 text-xl font-bold flex items-center justify-center gap-1">
                {data?.title} <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-gray-600">{data?.sub_title}</p>
            <p className="mt-2 text-gray-700 text-sm">{data?.description}</p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-left">
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

            {/* Buttons */}
            <div className="flex justify-center mt-6 gap-3">
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

            <ShareVCardModal
                isOpen={open}
                onClose={() => setOpen(false)}
                data={modalData}
                theme="theme_ten/theme_ten"
            />
        </div>
    );
};

export default ProfileCard;
