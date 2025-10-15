
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";

const ProfileCard = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    // const social = data?.social_options ? JSON.parse(data.social_options) : {};
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
            className="rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto"
            style={{ background: cardBg, color: fontColor, fontFamily: cardFont }}
        >
            {/* Cover Image */}
            <div className="relative">
                <div
                    className="absolute left-1 top-1 px-3 py-1 text-xs rounded-lg"
                    style={{
                        background: "gray",
                        // color: fontColor,
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

                <div className="absolute -bottom-12 left-6">
                    <Image
                        src={
                            data?.profile?.startsWith("http")
                                ? data.profile
                                : `/assets/assets/uploads/card-profile/${data?.profile || "default-profile.jpg"}`
                        }
                        alt="profile"
                        className="w-24 h-24 rounded-full border-4"
                        width={100}
                        height={100}
                        style={{ borderColor: fontColor }}
                    />
                </div>
            </div>

            {/* Info */}
            <div className="pt-14 px-6 pb-6 text-center">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-2" style={{ color: fontColor }}>
                    {data?.title} <span className="text-blue-400">✔</span>
                </h2>
                <p className="text-sm opacity-80" style={{ color: fontColor }}>{data?.sub_title}</p>
                <p className="mt-2 opacity-70" style={{ color: fontColor }}>{data?.description}</p>

                {/* Contact */}
                {/* <div className="mt-6 space-y-3 text-left">
                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaPhone style={{ color: fontColor }} className="text-2xl" />
                            <span>{mobile.title}</span>
                        </div>
                    )}

                    {email && (
                        <div className="flex items-center gap-3">
                            <FaEnvelope style={{ color: fontColor }} className="text-2xl" />
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
                            <FaWhatsapp style={{ color: fontColor }} className="text-2xl" />
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
                            <FaMapMarkerAlt style={{ color: fontColor }} className="text-2xl" />
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
                            <FaGlobe style={{ color: fontColor }} className="text-2xl" />
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
                            <FaFacebookF style={{ color: fontColor }} className="text-2xl" />
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
                            <FaInstagram style={{ color: fontColor }} className="text-2xl" />
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
                </div> */}

                <div className="mt-6 space-y-3 text-left">
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
                <div className="flex gap-3 justify-center mt-6">
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
