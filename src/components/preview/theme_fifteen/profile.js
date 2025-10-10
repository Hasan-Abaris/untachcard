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
    <div className="bg-blacl rounded-3xl shadow-2xl max-w-4xl mx-auto border border-gray-200 overflow-hidden relative ">
      {/* Pink Banner Area */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-24 relative overflow-hidden mt-22">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      {/* Profile Image - Overlapping Banner */}
      <div className="flex justify-center -mt-12">
        <div className="relative bg-white p-2 rounded-full border-4 border-white shadow-xl">
          <Image
            src={profileSrc}
            alt={data?.title || "Profile"}
            width={140}
            height={140}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mt-4 px-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {data?.title} {data?.verified && <span className="text-green-500">✔️</span>}
        </h2>
        {data?.sub_title && (
          <p className="text-xl font-semibold text-gray-700 mt-2">{data.sub_title}</p>
        )}
        {data?.company && <p className="text-gray-600 mt-1">{data.company}</p>}
      </div>

      {/* Description */}
      {data?.description && (
        <div className="px-6 mt-4 mb-6">
          <p className="text-gray-700 text-sm leading-relaxed text-center max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>
      )}

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
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <s.icon className="text-white text-lg" />
              </a>
            )
        )}
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 pb-6">
        {[
          { icon: FaEnvelope, label: email, title: "Email", link: `mailto:${email}` },
          { icon: FaEnvelope, label: altEmail, title: "Alternate Email", link: altEmail ? `mailto:${altEmail}` : null },
          { icon: FaPhone, label: phone, title: "Mobile Number", link: `tel:${phone}` },
          { icon: FaPhone, label: altPhone, title: "Alternate Mobile Number", link: altPhone ? `tel:${altPhone}` : null },
        ].map(
          (c, i) =>
            c.label && (
              <div
                key={i}
                className="bg-white border border-pink-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{c.title}</p>
                  {c.link ? (
                    <a href={c.link} className="text-sm font-medium text-gray-800 hover:text-pink-600">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-gray-800">{c.label}</span>
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}