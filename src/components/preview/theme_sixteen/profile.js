"use client";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ProfileCard({ data }) {
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

  const fields = data?.fields || [];
  const findField = (name) => fields.find((f) => f.label?.toLowerCase() === name?.toLowerCase());

  const phone = social?.mandatory?.mobile || findField("phone")?.value || "";
  const altPhone = findField("alt_phone")?.value || "";
  const email = social?.mandatory?.email || findField("email")?.value || "";
  const altEmail = findField("alt_email")?.value || "";
  const address = social?.mandatory?.address || findField("address")?.value || "";
  const birthday = findField("birthday")?.value || "";
  const facebook = social?.mandatory?.facebook || findField("facebook")?.value || "";
  const instagram = findField("instagram")?.value || "";
  const linkedin = findField("linkedin")?.value || "";
  const whatsapp = social?.mandatory?.mobile || findField("whatsapp")?.value || phone;

  const bannerSrc = data?.banner || "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/covers/24892/banner.png";
  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/profiles/24891/logo.png";

  const whatsappNumber = whatsapp ? `https://wa.me/${whatsapp}` : null;

  const socialLinks = [
    { icon: FaFacebook, link: facebook },
    { icon: FaInstagram, link: instagram },
    { icon: FaLinkedin, link: linkedin },
    { icon: FaWhatsapp, link: whatsappNumber },
  ];

  const contactCards = [
    { icon: FaEnvelope, label: email, link: `mailto:${email}` },
    { icon: FaEnvelope, label: altEmail, link: altEmail ? `mailto:${altEmail}` : null },
    { icon: FaPhone, label: phone, link: `tel:${phone}` },
    { icon: FaPhone, label: altPhone, link: altPhone ? `tel:${altPhone}` : null },
    { icon: FaMapMarkerAlt, label: address },
    { icon: FaWhatsapp, label: birthday }, // Birthday with icon
  ];

  return (
    <div className="bg-gray-200 rounded-lg shadow-md max-w-4xl mx-auto border border-gray-300 overflow-hidden relative">
      {/* Header with Icon */}
      <div className="flex items-center p-4 bg-white">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-20">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 6H13V14H11V6ZM11 16H13V18H11V16Z" fill="black"/>
        </svg>
        <h2 className="text-xl font-semibold text-gray-700">Mary Adren</h2>
        <span className="ml-2 text-gray-500 text-sm">Corporate Lawyer</span>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center -mt-12">
        <div className="relative bg-white p-1 rounded-full border-4 border-white shadow-md">
          <Image
            src={profileSrc}
            alt={data?.title || "Profile"}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Description */}
      <div className="p-6 text-center">
        <p className="text-gray-700 text-sm leading-relaxed">
          A Corporate Lawyer specializes in business law and provides legal guidance companies on a wide range of matters. Their primary role is to ensure that a business complies with all legal and regulatory requirements while helping it achieve its commercial goals. Corporate lawyers draft and review contracts, negotiate deals, manage mergers and acquisitions, and advise on corporate governance, intellectual property, and labor issues.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-6">
        {socialLinks.map(
          (s, i) =>
            s.link && (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <s.icon className="text-gray-700 text-lg" />
              </a>
            )
        )}
      </div>
    </div>
  );
}