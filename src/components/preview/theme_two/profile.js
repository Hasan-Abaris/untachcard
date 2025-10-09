"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

const ProfileCard = ({ data, cardStyles }) => {
  const social = data?.social_options ? JSON.parse(data.social_options) : {};

  // Construct image path safely
  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "/assets/default-avatar.png";

  // WhatsApp & Facebook links
  const whatsappNumber = social?.mandatory?.mobile
    ? `https://wa.me/${social.mandatory.mobile}`
    : null;

  const facebookLink = social?.mandatory?.facebook
    ? social.mandatory.facebook.startsWith("http")
      ? social.mandatory.facebook
      : `https://${social.mandatory.facebook}`
    : null;

  // Dynamic styles
  const styles = {
    container: {
      backgroundColor: cardStyles?.card_bg || "#fff",
      fontFamily: cardStyles?.card_font || "sans-serif",
      color: cardStyles?.card_font_color || "#000",
      borderRadius: "1rem",
      border: `1px solid ${cardStyles?.card_border_color || "#e5e7eb"}`,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    headerBg: {
      background: cardStyles?.header_bg_gradient || "linear-gradient(to right, #2563eb, #8b5cf6)",
    },
    title: {
      color: cardStyles?.header_color || "#1e3a8a",
      fontFamily: cardStyles?.card_font || "sans-serif",
      fontWeight: "bold",
    },
    subtitle: {
      color: cardStyles?.subheader_color || "#3b82f6",
      fontFamily: cardStyles?.card_font || "sans-serif",
      fontWeight: "500",
    },
    text: {
      color: cardStyles?.card_font_color || "#000",
      fontFamily: cardStyles?.card_font || "sans-serif",
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
    icon: {
      color: cardStyles?.icon_color || "#1e40af",
    },
    link: {
      color: cardStyles?.link_color || "#1d4ed8",
      textDecoration: "none",
    },
  };

  return (
    <div className="max-w-md mx-auto relative" style={styles.container}>
      {/* Header Section */}
      <div className="h-32 relative mt-20" style={styles.headerBg}>
        <div
          className="absolute top-2 left-2 px-3 py-1 text-xs rounded-lg backdrop-blur-sm"
          style={{
            backgroundColor: cardStyles?.views_bg || "rgba(255,255,255,0.25)",
            color: cardStyles?.views_text || "#fff",
          }}
        >
          👁️ Views: {data?.views || 0}
        </div>

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
        <div className="mt-6 space-y-3 text-left" style={styles.text}>
          {social?.mandatory?.mobile && (
            <div className="flex items-center gap-3">
              <FaPhone style={styles.icon} />
              <span>{social.mandatory.mobile}</span>
            </div>
          )}
          {social?.mandatory?.email && (
            <div className="flex items-center gap-3">
              <FaEnvelope style={styles.icon} />
              <span>{social.mandatory.email}</span>
            </div>
          )}
          {whatsappNumber && (
            <div className="flex items-center gap-3">
              <FaWhatsapp style={styles.icon} />
              <a href={whatsappNumber} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Message on WhatsApp
              </a>
            </div>
          )}
          {social?.mandatory?.address && (
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt style={styles.icon} />
              <span>{social.mandatory.address}</span>
            </div>
          )}
          {facebookLink && (
            <div className="flex items-center gap-3">
              <FaFacebook style={styles.icon} />
              <a href={facebookLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Visit Facebook
              </a>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Add to Phone Book
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
