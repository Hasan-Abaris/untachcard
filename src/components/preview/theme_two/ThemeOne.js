"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ProfileCard({ card }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  if (!card) return <p className="text-center mt-10">Loading card...</p>;

  let socialOptions = { mandatory: {}, optional: { icon: [], text: [], url: [] } };
  try {
    if (card.social_options) socialOptions = JSON.parse(card.social_options);
  } catch (e) {
    console.error("Invalid social_options JSON", e);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-0 overflow-hidden">
        {/* Header / Banner */}
        <div
          className="px-4 pt-16 pb-4 bg-gray-800 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(https://onlineparttimejobs.in/uploads/${card.banner})`,
          }}
        >
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button
              className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
              disabled
            >
              <i className="fas fa-eye mr-1"></i> Views: {card.views}
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
              >
                <i className="fa fa-language mr-1"></i> Language
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

          {/* Profile Image & Name */}
          <div className="flex items-end">
            <div className="mr-3">
              <img
                src={`https://onlineparttimejobs.in/uploads/${card.profile}`}
                alt={card.title}
                className="rounded w-24 h-24 object-cover border-2 border-white"
              />
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white">{card.title}</h4>
              <p className="text-sm text-gray-300">{card.sub_title}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <h6 className="px-4 py-5 text-gray-600 text-center">{card.description}</h6>

        {/* Contact Info */}
        <div className="py-4 px-4">
          <ul className="space-y-2">
            {socialOptions.mandatory.email && (
              <li>
                <a
                  href={`mailto:${socialOptions.mandatory.email}`}
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                    <i className="far fa-envelope text-gray-600"></i>
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
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                    <i className="fas fa-mobile-alt text-gray-600"></i>
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
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                    <i className="fas fa-map-marker-alt text-gray-600"></i>
                  </span>
                  <h6 className="text-gray-700">{socialOptions.mandatory.address}</h6>
                </a>
              </li>
            )}

            {/* Optional Social Links */}
            {socialOptions.optional?.url?.map((url, idx) => (
              <li key={idx}>
                <a
                  href={url}
                  target="_blank"
                  className="flex items-center p-2 rounded hover:bg-gray-50"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                    <i className={socialOptions.optional.icon[idx]}></i>
                  </span>
                  <h6 className="text-gray-700">{socialOptions.optional.text[idx]}</h6>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Phonebook / Share */}
        <div className="py-4 px-4 flex justify-center space-x-2">
          <a
            id="download-file"
            download={`${card.title}.vcf`}
            href="#"
            className="px-4 py-2 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100 flex-1 justify-center"
          >
            <i className="fas fa-download mr-2"></i> Add to Phone Book
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100 flex-1 justify-center"
            onClick={() => alert("Share modal would open here")}
          >
            <i className="fas fa-share-alt mr-2"></i> Share
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
