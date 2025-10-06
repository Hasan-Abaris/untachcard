"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  if (!data) return <p className="text-center mt-10">Loading card...</p>;

  // safe parse
  let socialOptions = { mandatory: {}, optional: { icon: [], text: [], url: [] } };
  try {
    if (data.social_options) socialOptions = JSON.parse(data.social_options);
  } catch (e) {
    console.error("Invalid social_options JSON", e);
  }

  // Use the exact local path you provided; fallback to a default in /public
  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "/default-profile.png";

  // banner (keeps your existing remote banner, fallback to local)
  const bannerUrl = data?.banner
    ? `https://onlineparttimejobs.in/uploads/${data.banner}`
    : "/default-banner.jpg";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Header / Banner */}
        <div
          className="px-4 pt-8 pb-12 bg-gray-800 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        >
          {/* Profile image centered and overlapping the banner (as you requested) */}
          <div className="absolute inset-x-0 -bottom-12 flex justify-center">
            <Image
              src={profileSrc}
              alt={data.title ?? "Profile"}
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
              // If you're doing a static export (next export) you may need unoptimized
              // unoptimized
            />
          </div>

          {/* Views + Language (placed in the top-right) */}
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button
              className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center bg-white/20 text-white backdrop-blur-md"
              disabled
            >
              👁 Views: {data.views}
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

        {/* Because the profile image overlaps the banner, add some top padding here */}
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
            {socialOptions.mandatory.address_url && (
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
