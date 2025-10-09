"use client";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function ProfileCard({ data }) {
  // ✅ Handle social_options safely
  let social = {};
  try {
    if (data?.social_options && data.social_options.trim() !== "") {
      social =
        typeof data.social_options === "string"
          ? JSON.parse(data.social_options)
          : data.social_options;
    }
  } catch (e) {
    console.error("Invalid social_options", e);
  }

  // ✅ Extract fields (backup if social_options empty)
  const fields = data?.fields || [];
  const findField = (name) =>
    fields.find((f) => f.label?.toLowerCase() === name?.toLowerCase());

  const phone =
    social?.mandatory?.mobile || findField("phone")?.value || "";
  const email =
    social?.mandatory?.email || findField("email")?.value || "";
  const address =
    social?.mandatory?.address || findField("address")?.value || "";
  const facebook =
    social?.mandatory?.facebook || findField("facebook")?.value || "";
  const whatsapp =
    social?.mandatory?.mobile ||
    findField("whatsapp")?.value ||
    phone;

  // Fallback images
  const bannerSrc =
    data?.banner ||
    "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/covers/24892/banner.png";
  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/profiles/24891/logo.png";

  // Links
  const whatsappNumber = whatsapp ? `https://wa.me/${whatsapp}` : null;
  const facebookLink = facebook
    ? facebook.startsWith("http")
      ? facebook
      : `https://${facebook}`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-auto border border-gray-200 relative font-sans overflow-visible">
      {/* Banner Section */}
      <div className="relative h-32 sm:h-40 bg-gray-200 mt-18">
        <Image
          src={bannerSrc}
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-2 left-2 bg-white/20 text-black px-3 py-1 text-xs rounded-lg backdrop-blur-sm">
          👁️ Views: {data?.views || 0}
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute left-1/2 mt-2 transform -translate-x-1/2">
        <Image
          src={profileSrc}
          alt={data?.title || "Profile"}
          width={110}
          height={110}
          className="rounded-full border-4 border-white shadow-lg object-cover bg-gray-100"
        />
      </div>

      {/* Content Section */}
      <div className="pt-20 px-6 pb-10 text-center">
        {/* Name + Subtitle */}
        <h2 className="text-2xl font-bold text-gray-900">{data?.title}</h2>
        <p className="text-blue-500 mt-1 font-medium">{data?.sub_title}</p>

        {/* Description */}
        {data?.description && (
          <p className="mt-3 text-gray-700 leading-relaxed text-sm">
            {data.description}
          </p>
        )}

        {/* Contact / Social Info */}
        <div className="mt-6 space-y-3 text-left text-gray-800">
          {phone && (
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600" />
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>{email}</span>
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
          {address && (
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-700" />
              <span>{address}</span>
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
        <div className="mt-6 flex justify-center gap-4">
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
}
