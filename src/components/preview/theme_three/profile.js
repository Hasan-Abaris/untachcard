"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

const ProfileCard = ({ data }) => {
  if (!data) return null;

  // 1️⃣ Initialize contact
  let contact = {
    mobile: null,
    email: null,
    address: null,
    facebook: null,
  };

  // 2️⃣ Try parsing social_options
  try {
    if (data?.social_options && data.social_options.trim() !== "") {
      const social = JSON.parse(data.social_options);
      if (social.mandatory) contact = { ...contact, ...social.mandatory };
    }
  } catch {}

  // 3️⃣ If missing, use fields from API
  if (data?.fields?.length > 0) {
    data.fields.forEach((f) => {
      if (f.type === "mobile") contact.mobile = f.title;
      if (f.type === "email") contact.email = f.title;
      if (f.type === "address") contact.address = f.title;
      if (f.type === "facebook") contact.facebook = f.url || f.title;
    });
  }

  // 4️⃣ Only fallback to demo if nothing exists
  if (!contact.mobile && !contact.email && !contact.address) {
    contact = {
      mobile: "+91 9876543210",
      email: "demo@gmail.com",
      address: "Demo City, India",
      facebook: "https://facebook.com/demo",
    };
  }

  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "/assets/default-avatar.png";

  const whatsappNumber = contact.mobile
    ? `https://wa.me/${contact.mobile}`
    : null;

  const facebookLink = contact.facebook
    ? contact.facebook.startsWith("http")
      ? contact.facebook
      : `https://${contact.facebook}`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-auto text-black overflow-hidden relative font-sans border border-gray-200 mt-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative mt-15">
        {data?.views && (
          <div className="absolute top-2 left-2 bg-white/20 text-white px-3 py-1 text-xs rounded-lg backdrop-blur-sm">
            👁️ Views: {data.views}
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

      {/* Content */}
      <div className="pt-16 px-6 pb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {data?.title || "Demo Name"}
        </h2>
        <p className="text-blue-500 mt-1 font-medium">
          {data?.sub_title || "Demo Title"}
        </p>
        {data?.description && (
          <p className="mt-3 text-gray-700 leading-relaxed text-sm">
            {data.description}
          </p>
        )}

        {/* Contact Info */}
        <div className="mt-6 space-y-3 text-left text-gray-800">
          {contact.mobile && (
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600" />
              <span>{contact.mobile}</span>
            </div>
          )}
          {contact.email && (
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>{contact.email}</span>
            </div>
          )}
          {whatsappNumber && (
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href={whatsappNumber}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Message on WhatsApp
              </a>
            </div>
          )}
          {contact.address && (
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-700" />
              <span>{contact.address}</span>
            </div>
          )}
          {facebookLink && (
            <div className="flex items-center gap-3">
              <FaFacebook className="text-blue-600" />
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Visit Facebook
              </a>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-4 py-2 border border-gray-400 rounded-md text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200">
            Add to Phone Book
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-md text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
