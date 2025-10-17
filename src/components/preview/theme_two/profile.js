"use client";

import Image from "next/image";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Eye } from "lucide-react";
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";

const ProfileCard = ({ data, cardStyles }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Function to get field by type
  const getField = (type) =>
    data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());

  const mobile = getField("mobile");
  const email = getField("email");
  const address = getField("address");
  const website = getField("website");
  const facebook = getField("facebook");
  const instagram = getField("instagram");

  const renderIcon = (iconName) => {
    if (!iconName) return <FaIcons.FaLink style={{ color: cardStyles?.icon_color }} />;
    if (FaIcons[iconName]) {
      const IconComponent = FaIcons[iconName];
      return <IconComponent style={{ color: cardStyles?.icon_color }} />;
    }
    return <FaIcons.FaLink style={{ color: cardStyles?.icon_color }} />;
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

  const styles = {
    container: {
      ...bgStyle,
      fontFamily: data?.card_font || "sans-serif",
      color: data?.card_font_color || "#000",
      borderRadius: "1rem",
      border: `1px solid ${cardStyles?.card_border_color || "#e5e7eb"}`, // border color unchanged
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    headerBg: {
      background: cardStyles?.header_bg_gradient || "linear-gradient(to right, #2563eb, #8b5cf6)",
    },
    title: {
      color: cardStyles?.header_color || "#1e3a8a",
      fontFamily: data?.card_font || "sans-serif",
      fontWeight: "bold",
    },
    subtitle: {
      color: cardStyles?.subheader_color || "#3b82f6",
      fontFamily: data?.card_font || "sans-serif",
      fontWeight: "500",
    },
    text: {
      color: data?.card_font_color || "#000",
      fontFamily: data?.card_font || "sans-serif",
    },
    button: {
      backgroundColor: cardStyles?.button_bg || "#f3f4f6",
      color: cardStyles?.button_font_color || "#111827",
      border: `1px solid ${cardStyles?.button_border_color || "#d1d5db"}`,
      padding: "8px 16px",
      borderRadius: "6px",
      fontSize: "0.875rem",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    link: {
      color: cardStyles?.link_color || "#1d4ed8",
      textDecoration: "none",
    },
    icon: {
      color: cardStyles?.icon_color || "#1e40af",
    },
  };

  const shareModal = (data) => {
    setModalData(data);
    setOpen(true);
  };

  return (
    <div className="max-w-md mx-auto relative mt-5" style={styles.container}>
      {/* Header Section */}
      <div className="h-32 relative" style={styles.headerBg}>
        {Number(data?.show_card_view_count_on_a_card) === 1 && (
          <div
            className="absolute top-2 left-2 px-3 py-1 text-xs rounded-lg backdrop-blur-sm flex items-center gap-1"
            style={{
              backgroundColor: cardStyles?.views_bg || "rgba(255,255,255,0.25)",
              color: cardStyles?.views_text || "#fff",
            }}
          >
            <Eye size={14} /> Views: {data?.views || 0}
          </div>
        )}

        <div className="absolute inset-x-0 -bottom-12 flex justify-center">
          <Image
            src={profileSrc}
            alt={data?.title || "Profile"}
            width={110}
            height={110}
            className="rounded-full border-4 border-white shadow-lg object-cover bg-gray-100"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-16 px-6 pb-6 text-center">
        <h2 style={styles.title}>{data?.title}</h2>
        <p style={styles.subtitle}>{data?.sub_title}</p>

        {data?.description && (
          <p className="mt-3 text-sm leading-relaxed" style={styles.text}>
            {data.description}
          </p>
        )}

        {/* Contact / Social Info */}
        <div className="mt-6 space-y-3 text-left">
          {[mobile, email, address, website, facebook, instagram].map(
            (field, idx) =>
              field && (
                <div key={idx} className="flex items-center gap-3">
                  {renderIcon(field.icon)}
                  <a
                    href={field.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {field.title}
                  </a>
                </div>
              )
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {Number(data?.show_add_to_phone_book) === 1 && (
            <button
              style={styles.button}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Add to Phone Book
            </button>
          )}
          {Number(data?.show_share) === 1 && (
            <button
              style={styles.button}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              onClick={() => shareModal(data)}
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
