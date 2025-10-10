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
    <div className="bg-white rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-200 overflow-hidden font-sans p-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center mt-15">
        <Image
          src={profileSrc}
          alt={data?.title || "Profile"}
          width={120}
          height={120}
          className="rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* Name / Subtitle / Company */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          {data?.title} {data?.verified && <span className="text-green-500">✔️</span>}
        </h2>
        {data?.sub_title && <p className="text-teal-700 mt-1">{data.sub_title}</p>}
        {data?.company && <p className="text-gray-700">{data.company}</p>}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-3 text-gray-700">
        {socialLinks.map(
          (s, i) =>
            s.link && (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
                <s.icon size={24} />
              </a>
            )
        )}
      </div>

      {/* Description */}
      {data?.description && (
        <p className="mt-4 text-center text-gray-600 text-sm leading-relaxed">
          {data.description}
        </p>
      )}

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {contactCards.map(
          (c, i) =>
            c.label && (
              <div
                key={i}
                className="flex items-center gap-3 bg-green-50 rounded-full px-4 py-3 justify-center"
              >
                <c.icon className="text-green-700" />
                {c.link ? (
                  <a href={c.link} className="text-sm hover:underline">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-sm">{c.label}</span>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
