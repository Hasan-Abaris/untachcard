"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const ThemeOne = () => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchCard = async () => {
      try {
       
        const res = await axios.get(
          "https://onlineparttimejobs.in/api/card/details/Zabi"
        );

        if (res.data.success && res.data.data.length > 0) {
          setCard(res.data.data[0]); // API returns array
        }
      } catch (err) {
        console.error("Error fetching card:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading card...</p>;
  if (!card) return <p className="text-center mt-10">No card found</p>;

  let socialOptions = { mandatory: {}, optional: { icon: [], text: [], url: [] } };
  try {
    if (card.social_options) socialOptions = JSON.parse(card.social_options);
  } catch (e) {
    console.error("Invalid social_options JSON", e);
  }

  // Dynamic styles
  const cardStyles = {
    background:
      card.card_bg_type === "Color"
        ? card.card_bg
        : card.card_bg_type === "Transparent"
        ? "transparent"
        : `url(https://onlineparttimejobs.in/uploads/${card.card_bg}) center/cover no-repeat`,
    color: card.card_font_color || "#000000",
    fontFamily: card.card_font || "inherit",
  };

  return (
    <div
      className="max-w-md mx-auto shadow-lg rounded-lg p-6 mt-8"
      style={cardStyles}
    >
      <div className="card-block">
        <div className="flex justify-end mb-4">
          <div className="relative">
            <button
              className="mr-2 px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
              disabled
            >
              <i className="fas fa-eye mr-1"></i> Views: {card?.views ?? 0}
            </button>
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
              >
                <i className="fa fa-language mr-1"></i> Language
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg dropdown-menu">
                  {["English", "Hindi", "Italian", "Spanish", "French", "Arabic"].map(
                    (lang) => (
                      <a
                        key={lang}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
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

       {/* Profile */}
<div className="flex justify-center mb-4">
  <img
    src="assets/assets/uploads/card-profile/1724767535-ishbf.PNG" // hardcoded image
    className="rounded-full w-24 h-24 object-cover"
    alt="Profile"
  />
</div>


        {/* Name & Title */}
        <h5 className="text-center text-xl font-semibold">
          {card?.title ?? "No Name"}
        </h5>
        <h6 className="text-center">{card?.sub_title ?? "No Title"}</h6>
        <hr className="my-4" />
        <h6 className="text-center">{card?.description ?? ""}</h6>
        <hr className="my-4" />

        {/* Contact Info */}
        <ul className="space-y-2">
          {socialOptions.mandatory.email && (
            <li>
              <a
                href={`mailto:${socialOptions.mandatory.email}`}
                className="flex items-center p-2 rounded hover:bg-gray-50"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="far fa-envelope"></i>
                </span>
                <h6>{socialOptions.mandatory.email}</h6>
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
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <h6>{socialOptions.mandatory.mobile}</h6>
              </a>
            </li>
          )}
          {socialOptions.mandatory.mobile && (
            <li>
              <a
                href={`https://wa.me/${socialOptions.mandatory.mobile.replace(/\D/g, "")}`}
                target="_blank"
                className="flex items-center p-2 rounded hover:bg-gray-50"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="fab fa-whatsapp"></i>
                </span>
                <h6>WhatsApp</h6>
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
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <h6>{socialOptions.mandatory.address}</h6>
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
                <h6>{socialOptions.optional.text[idx]}</h6>
              </a>
            </li>
          ))}
        </ul>

        {/* Add to Phonebook / Share */}
        <hr className="my-4" />
        <div className="flex justify-center space-x-2">
          <a
            id="download-file"
            download={`${card?.title ?? "card"}.vcf`}
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
};

export default ThemeOne;
