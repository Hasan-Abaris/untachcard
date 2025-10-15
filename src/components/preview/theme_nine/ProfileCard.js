
import React, { useState } from "react";
import { Phone, Mail, MapPin, Share2, UserPlus, Eye } from "lucide-react";
import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
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
            className="rounded-xl shadow-lg overflow-hidden relative max-w-lg mx-auto text-center p-6"
            style={{
                backgroundImage: "url('/assets/banner/theme-nine.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            {/* Views */}
            <div className="absolute top-2 right-2 flex items-center space-x-2 text-sm bg-black/40 text-white px-3 py-1 rounded-lg">
                <Eye size={16} /> {data?.show_card_view_count_on_a_card === 1 && (
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
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white mx-auto object-cover"
                width={100}
                height={100}
            />

            {/* Info */}
            <h2 className="text-2xl font-bold mt-3" style={{ color: fontColor, fontFamily: cardFont }}>
                {data?.title} ✅
            </h2>
            <p className="font-semibold" style={{ color: fontColor, fontFamily: cardFont }}>
                {data?.sub_title}
            </p>
            <p className="italic" style={{ color: fontColor, fontFamily: cardFont }}>
                {data?.description}
            </p>

            {/* Contact */}
            <div className="mt-4 space-y-2 text-left">
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
            <div className="mt-4 flex justify-around">
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

            <ShareVCardModal isOpen={open} onClose={() => setOpen(false)} data={modalData} theme="theme_nine/theme_nine" />
        </div>
    );
};

export default ProfileCard;
