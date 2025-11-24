"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
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
  const [modalData, setModalData] = useState(null);
  const shareModal = async (data) => {
    setModalData(data);
    setOpen(true);
  };

  const renderIcon = (iconName) => {
    if (!iconName) return <FaIcons.FaLink style={{ color: fontColor }} />;
    if (FaIcons[iconName]) {
      const IconComponent = FaIcons[iconName];
      return (
        <IconComponent style={{ color: fontColor }} className="text-2xl" />
      );
    }
    if (iconName.startsWith("fa")) {
      return (
        <i className={`${iconName} text-2xl`} style={{ color: fontColor }} />
      );
    }
    return <FaIcons.FaLink style={{ color: fontColor }} className="text-2xl" />;
  };
  return (
    <div
      className="w-full bg-black text-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto"
      style={{
        background: cardBg,
        color: fontColor,
        fontFamily: cardFont,
      }}
    >
      {/* Profile Image */}
      <div className="relative">
        <img
          src={
            data?.profile?.startsWith("http")
              ? data.profile
              : `/assets/assets/uploads/card-profile/${
                  data?.profile || "default-profile.jpg"
                }`
          }
          alt="profile"
          className="w-full h-64 object-cover"
        />
        {/* Views */}
        <div
          className="absolute top-2 right-2 bg-black/70 text-xs px-3 py-1 rounded-md flex items-center gap-2"
          style={{
            background: "gray",
            // color: cardBg === "transparent" ? "#000" : cardBg,
            // fontWeight: "bold",
          }}
        >
          {data?.show_card_view_count_on_a_card === 1 && (
            <span>Views: {data?.views}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2
          className="text-lg font-semibold flex items-center gap-1"
          style={{ color: fontColor }}
        >
          {data?.title} <span className="text-blue-500">✔</span>
        </h2>
        <p className="text-sm text-gray-300" style={{ color: fontColor }}>
          {data?.sub_title}
        </p>
        <div
          className="mt-4 text-gray-600 text-sm leading-relaxed px-4"
          dangerouslySetInnerHTML={{
            __html: data?.description || "Lorem Ipsum...",
          }}
        />

        {/* Contact Info */}
        <div className="mt-5 space-y-3 text-sm">
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
        <div className="mt-6 justify-center flex gap-3">
          {
            Number(data?.show_add_to_phone_book) === 1 && (
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

                  const blob = new Blob([vcard], {
                    type: "text/vcard;charset=utf-8",
                  });
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
                  border: "1px solid black",
                  color: fontColor,
                  fontFamily: cardFont,
                }}
              >
                📇 Add to Phone Book
              </button>
            )
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
          {Number(data?.show_share) === 1 && (
            <button
              type="button"
              className="px-4 py-2 rounded-lg transition cursor-pointer"
              style={{
                // backgroundColor: cardBg,
                border: "1px solid black",
                color: fontColor,
                fontFamily: cardFont,
              }}
              onClick={() => shareModal(data)}
            >
              Share
            </button>
          )}
        </div>
        <ShareVCardModal
          isOpen={open}
          onClose={() => setOpen(false)}
          data={modalData}
          theme={data?.theme_name || "theme_default"}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
