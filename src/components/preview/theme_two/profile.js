"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  if (!data) return <p className="text-center mt-10">Loading card...</p>;

  // Parse social_options safely
  let socialOptions = { mandatory: {} };
  try {
    if (data.social_options && data.social_options.trim() !== "") {
      socialOptions = JSON.parse(data.social_options);
    }
  } catch (e) {
    console.error("Invalid social_options JSON", e);
  }

  // Merge API fields into socialOptions.mandatory if available
  if (data.fields?.length) {
    data.fields.forEach((field) => {
      switch (field.type) {
        case "mobile":
          socialOptions.mandatory.mobile = field.title;
          break;
        case "email":
          socialOptions.mandatory.email = field.title;
          break;
        case "address":
          socialOptions.mandatory.address = field.title;
          socialOptions.mandatory.address_url = field.url;
          break;
        case "whatsapp":
          socialOptions.mandatory.whatsapp = field.title;
          break;
        case "facebook":
          socialOptions.mandatory.facebook = field.url || field.title;
          break;
        default:
          break;
      }
    });
  }

  // Fallback if mandatory info missing
  socialOptions.mandatory = {
    mobile: socialOptions.mandatory.mobile || "+91 9876543210",
    email: socialOptions.mandatory.email || "demo@gmail.com",
    address: socialOptions.mandatory.address || "Demo City, India",
    address_url: socialOptions.mandatory.address_url || "#",
    facebook: socialOptions.mandatory.facebook || "https://facebook.com/demo",
    whatsapp: socialOptions.mandatory.whatsapp || null,
  };

  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "/default-profile.png";

  const bannerUrl = data?.banner
    ? `https://onlineparttimejobs.in/uploads/${data.banner}`
    : "/default-banner.jpg";

  // Links
  const whatsappLink = socialOptions.mandatory.whatsapp
    ? `https://wa.me/${socialOptions.mandatory.whatsapp.replace(/\D/g, "")}`
    : null;

  const facebookLink = socialOptions.mandatory.facebook.startsWith("http")
    ? socialOptions.mandatory.facebook
    : `https://${socialOptions.mandatory.facebook}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden relative mt-20">
        {/* Header / Banner */}
        <div
          className="px-4 pt-8 pb-12 bg-gray-800 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        >
          {/* Profile image */}
          <div className="absolute inset-x-0 -bottom-12 flex justify-center">
            <Image
              src={profileSrc}
              alt={data.title ?? "Profile"}
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
          </div>

          {/* Views & Language */}
          <div className="absolute top-4 right-4 flex space-x-2 z-10 mb-20">
            <button
              className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center bg-white/20 text-white backdrop-blur-md"
              disabled
            >
              👁 Views: {data.views || 0}
            </button>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center bg-white/20 text-white backdrop-blur-md"
              >
                🌐 Language
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  {["English", "Hindi", "Italian", "Spanish", "French", "Arabic"].map(
                    (lang) => (
                      <a
                        key={lang}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {lang}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-12 pb-6 text-center">
          <h4 className="text-xl font-bold">{data.title}</h4>
          <p className="text-sm text-gray-500">{data.sub_title}</p>
        </div>

        {/* Description */}
        <h6 className="px-4 pb-4 text-gray-600 text-center">{data.description}</h6>

        {/* Contact Info */}
        <div className="py-4 px-4">
          <ul className="space-y-2">
            {socialOptions.mandatory.email && (
              <li>
                <a
                  href={`mailto:${socialOptions.mandatory.email}`}
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mr-3">
                    <FaEnvelope className="text-gray-600" />
                  </span>
                  <h6 className="text-gray-700">{socialOptions.mandatory.email}</h6>
                </a>
              </li>
            )}
            {socialOptions.mandatory.mobile && (
              <li>
                <a
                  href={`tel:${socialOptions.mandatory.mobile}`}
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mr-3">
                    <FaPhone className="text-gray-600" />
                  </span>
                  <h6 className="text-gray-700">{socialOptions.mandatory.mobile}</h6>
                </a>
              </li>
            )}
            {socialOptions.mandatory.address && (
              <li>
                <a
                  href={socialOptions.mandatory.address_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mr-3">
                    <FaMapMarkerAlt className="text-gray-600" />
                  </span>
                  <h6 className="text-gray-700">{socialOptions.mandatory.address}</h6>
                </a>
              </li>
            )}
            {whatsappLink && (
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mr-3">
                    <FaWhatsapp className="text-green-500" />
                  </span>
                  <h6 className="text-gray-700">Message on WhatsApp</h6>
                </a>
              </li>
            )}
            {facebookLink && (
              <li>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                    <FaFacebook className="text-blue-600" />
                  </span>
                  <h6 className="text-gray-700">Facebook</h6>
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Add to Phonebook / Share */}
        <div className="py-4 px-4 flex justify-center space-x-2">
          <a
            id="download-file"
            download={`${data.title}.vcf`}
            href="#"
            className="px-4 py-2 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100 flex-1 justify-center"
          >
            <i className="fas fa-download mr-2"></i> Add to Phone Book
          </a>
          <button
            className="px-4 py-2 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100 flex-1 justify-center"
            onClick={() => alert("Share modal would open here")}
          >
            <i className="fas fa-share-alt mr-2"></i> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
