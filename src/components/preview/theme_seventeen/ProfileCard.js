import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaGitlab, FaFacebookF, FaTwitter } from "react-icons/fa";

const ProfileCard = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const shareModal = (cardData) => {
    setModalData(cardData);
    setOpen(true);
  };

  // Helper to get specific field
  const getField = (type) =>
    data?.fields?.find((item) => item.type.toLowerCase() === type.toLowerCase());

  const mobile = getField("mobile");
  const email = getField("email");
  const address = getField("address");
  const website = getField("website");
  const gitlab = getField("gitlab");
  const facebook = getField("facebook");
  const twitter = getField("twitter");

  // VCF download (Add to Contact)
  const downloadVCard = () => {
    const fullName = data?.title || "Contact";
    const phone = mobile?.url?.replace(/\D/g, "") || "";
    const mail = email?.url || "";

    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${fullName}
N:${fullName};;;
TEL;TYPE=CELL:${phone}
EMAIL:${mail}
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
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto font-sans"
      style={{ background: cardBg || "#ffffff", color: fontColor || "#333333", fontFamily: cardFont || "inherit" }}
    >
     {/* Banner */}
<div className="relative h-32">
  <Image
    src={
      data?.banner?.startsWith("http")
        ? data.banner
        : data?.banner
        ? `/assets/assets/uploads/card-banner/${data.banner}`
        : "/assets/images/banner.png"   // ← fallback local image
    }
    alt="Banner"
    fill
    className="object-cover"
  />
</div>


      {/* Profile Picture (overlapping) */}
      <div className="relative flex justify-center -mt-12 z-10">
        <div className="relative w-28 h-28 rounded-full border-8 border-white shadow-lg overflow-hidden">
          <Image
            src={
              data?.profile?.startsWith("http")
                ? data.profile
                : `/assets/assets/uploads/card-profile/${data?.profile || "default-profile.jpg"}`
            }
            alt="Profile"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mt-4 px-6">
        <h2 className="text-2xl font-bold" style={{ color: fontColor }}>
          {data?.title}
        </h2>
        <p className="text-sm opacity-75" style={{ color: fontColor }}>
          {data?.sub_title}
        </p>
        <p className="mt-3 text-sm leading-relaxed opacity-70" style={{ color: fontColor }}>
          {data?.description || "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"}
        </p>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex justify-center gap-6 my-6">
        {mobile && (
          <a
            href={`tel:${mobile.url.replace(/\D/g, "")}`}
            className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          >
            <FaPhone className="text-white text-xl" />
          </a>
        )}
        {mobile && (
          <a
            href={`https://wa.me/${mobile.url.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email.url}`}
            className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 transition"
          >
            <FaEnvelope className="text-white text-xl" />
          </a>
        )}
      </div>

      {/* Main Action Buttons */}
      <div className="flex justify-center gap-3 px-2 mb-8">
        {Number(data?.show_add_to_phone_book) === 1 && (
          <button
            onClick={downloadVCard}
            className="flex-1 py-3 px-4 rounded-full bg-red-600 text-white font-medium shadow-md hover:bg-red-700 transition flex items-center justify-center gap-2"
          >
            <span className="text-xl">+</span> Add to Contact
          </button>
        )}
        {Number(data?.show_share) === 1 && (
          <button
            onClick={() => shareModal(data)}
            className="flex-1 py-3 px-6 rounded-full bg-red-600 text-white font-medium shadow-md hover:bg-red-700 transition flex items-center justify-center gap-2"
          >
            <span>↗</span> Share vCard
          </button>
        )}
      </div>

      {/* Contact Details List */}
      <div className="px-8 pb-8 space-y-5 text-left">
        {mobile && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <FaPhone className="text-purple-600" />
            </div>
            <div>
              <p className="text-xs opacity-60">Phone</p>
              <p className="font-medium" style={{ color: fontColor }}>{mobile.title || mobile.url}</p>
            </div>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
              <FaEnvelope className="text-pink-600" />
            </div>
            <div>
              <p className="text-xs opacity-60">Email</p>
              <p className="font-medium break-all" style={{ color: fontColor }}>{email.title || email.url}</p>
            </div>
          </div>
        )}

        {address && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
              <FaMapMarkerAlt className="text-pink-600" />
            </div>
            <div>
              <p className="text-xs opacity-60">Address</p>
              <p className="font-medium" style={{ color: fontColor }}>{address.title}</p>
            </div>
          </div>
        )}

        {website && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
              <FaGlobe className="text-gray-700" />
            </div>
            <div>
              <p className="text-xs opacity-60">Website URL</p>
              <a href={website.url} target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: fontColor }}>
                {website.url}
              </a>
            </div>
          </div>
        )}

        {gitlab && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
              <FaGitlab className="text-gray-700" />
            </div>
            <div>
              <p className="text-xs opacity-60">Gitlab</p>
              <a href={gitlab.url} target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: fontColor }}>
                {gitlab.url}
              </a>
            </div>
          </div>
        )}

        {facebook && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FaFacebookF className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs opacity-60">Facebook</p>
              <a href={facebook.url} target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: fontColor }}>
                {facebook.url}
              </a>
            </div>
          </div>
        )}

        {twitter && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
              <FaTwitter className="text-sky-600" />
            </div>
            <div>
              <p className="text-xs opacity-60">Twitter</p>
              <a href={twitter.url} target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: fontColor }}>
                {twitter.url}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Share Modal */}
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