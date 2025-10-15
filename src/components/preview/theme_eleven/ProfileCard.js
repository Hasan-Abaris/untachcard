import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
export const ProfileCard = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
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
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto text-center relative backdrop-blur-sm"
            style={{
                backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            {/* Cover Image */}
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
                className="w-full h-32 object-cover rounded-2xl"
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
                className="w-20 h-20 rounded-full border-4 border-white absolute top-14 left-24 transform -translate-x-1/2 translate-y-1/2"
                width={100}
                height={100}
            />


            {/* Card Content */}
            <div className="mt-14">
                <h2 className="text-xl font-bold" style={{ color: fontColor }}>{data?.title}</h2>
                <p className="text-gray-700" style={{ color: fontColor }}>{data?.sub_title}</p>
                <p className="mt-2 text-sm" style={{ color: fontColor }}>{data?.description}</p>

                <div className="mt-4 space-y-2 text-sm text-left">
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
                <div className="flex justify-center mt-4 gap-3">
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
                    theme="theme_eleven/theme_eleven"
                />
            </div>
        </div>
    );
};