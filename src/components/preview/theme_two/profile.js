"use client";

import Image from "next/image";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Eye } from "lucide-react";
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";

// Beautified & modernized UI — logic unchanged
const ProfileCard = ({ data, cardStyles }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getField = (type) =>
    data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());

  const mobile = getField("mobile");
  const email = getField("email");
  const address = getField("address");
  const website = getField("website");
  const facebook = getField("facebook");
  const instagram = getField("instagram");

  const renderIcon = (iconName) => {
    if (!iconName) return <FaIcons.FaLink className="text-xl" style={{ color: cardStyles?.icon_color }} />;
    if (FaIcons[iconName]) {
      const IconComponent = FaIcons[iconName];
      return <IconComponent className="text-xl" style={{ color: cardStyles?.icon_color }} />;
    }
    return <FaIcons.FaLink className="text-xl" style={{ color: cardStyles?.icon_color }} />;
  };

  const profileSrc =
    data?.profile?.startsWith("http")
      ? data.profile
      : `/assets/assets/uploads/card-profile/${data?.profile || "default-profile.jpg"}`;

  const bannerSrc =
    data?.banner?.startsWith("http")
      ? data.banner
      : `/assets/assets/uploads/card-banner/${data?.banner || "default-banner.jpg"}`;

  const bgStyle =
    data?.card_bg_type === "Color"
      ? { backgroundColor: data.card_bg }
      : data?.card_bg_type === "Image"
      ? {
          backgroundImage: `url(${data.card_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  const shareModal = (data) => {
    setModalData(data);
    setOpen(true);
  };

  return (
    <div
      className="max-w-md mx-auto mt-6 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
      style={{
        ...bgStyle,
        fontFamily: data?.card_font || "sans-serif",
        color: data?.card_font_color || "#000",
        border: `1px solid ${cardStyles?.card_border_color || "#e5e7eb"}`,
      }}
    >
      {/* HEADER */}
      <div
        className="h-36 relative flex items-center justify-center"
        style={{ background: cardStyles?.header_bg_gradient || "linear-gradient(to right, #2563eb, #8b5cf6)" }}
      >
        {Number(data?.show_card_view_count_on_a_card) === 1 && (
          <div
            className="absolute top-3 left-3 px-3 py-1 text-xs rounded-xl backdrop-blur-md flex items-center gap-1 shadow-sm"
            style={{
              backgroundColor: cardStyles?.views_bg || "rgba(255,255,255,0.25)",
              color: cardStyles?.views_text || "#fff",
            }}
          >
            <Eye size={14} /> Views: {data?.views || 0}
          </div>
        )}

        <div className="absolute -bottom-14">
          <Image
            src={profileSrc}
            alt={data?.title || "Profile"}
            width={130}
            height={130}
            className="rounded-full border-4 border-white shadow-lg object-cover bg-gray-100"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-20 pb-8 px-6 text-center">
        <h2 className="text-2xl font-bold tracking-wide" style={{ color: cardStyles?.header_color }}>
          {data?.title}
        </h2>
        <p className="text-sm font-medium mt-1" style={{ color: cardStyles?.subheader_color }}>
          {data?.sub_title}
        </p>

      

{data?.description && (
  <div
    className="mt-4 text-sm leading-relaxed opacity-90"
    dangerouslySetInnerHTML={{ __html: data.description }}
  />
)}


        {/* FIELDS */}
        <div className="mt-6 space-y-3 text-left">
          {[mobile, email, address, website, facebook, instagram].map(
            (field, idx) =>
              field && (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/40 px-4 py-2 rounded-lg shadow-sm backdrop-blur-sm hover:bg-white/60 transition"
                >
                  {renderIcon(field.icon)}
                  <a
                    href={field.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                    style={{ color: cardStyles?.link_color || "#1d4ed8" }}
                  >
                    {field.title}
                  </a>
                </div>
              )
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          {Number(data?.show_add_to_phone_book) === 1 && (
            <button
              className="px-5 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition active:scale-95"
              style={{
                backgroundColor: cardStyles?.button_bg,
                color: cardStyles?.button_font_color,
                border: `1px solid ${cardStyles?.button_border_color}`,
              }}
            >
              Add to Phone Book
            </button>
          )}

          {Number(data?.show_share) === 1 && (
            <button
              onClick={() => shareModal(data)}
              className="px-5 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition active:scale-95"
              style={{
                backgroundColor: cardStyles?.button_bg,
                color: cardStyles?.button_font_color,
                border: `1px solid ${cardStyles?.button_border_color}`,
              }}
            >
              Share
            </button>
          )}
        </div>
      </div>

      <ShareVCardModal
        isOpen={open}
        onClose={() => setOpen(false)}
        data={modalData}
        theme="theme_two/theme_two"
      />
    </div>
  );
};

export default ProfileCard;
