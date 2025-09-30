"use client";
import React from "react";
import { FaGlobe, FaFacebook, FaReddit, FaYoutube, FaWhatsapp, FaTiktok, FaInstagram, FaTumblr, FaLinkedin, FaPinterest, FaSnapchat, FaTwitter } from "react-icons/fa";

function Socialmedia() {
  const fields = [
    { label: "WebSite URL", icon: <FaGlobe className="text-blue-500" /> },
    { label: "Twitter URL", icon: <FaTwitter className="text-black" /> },
    { label: "Facebook URL", icon: <FaFacebook className="text-blue-600" /> },
    { label: "Instagram URL", icon: <FaInstagram className="text-pink-500" /> },
    { label: "Reddit URL", icon: <FaReddit className="text-orange-500" /> },
    { label: "Tumblr URL", icon: <FaTumblr className="text-black" /> },
    { label: "Youtube URL", icon: <FaYoutube className="text-red-600" /> },
    { label: "LinkedIn URL", icon: <FaLinkedin className="text-blue-700" /> },
    { label: "WhatsApp URL", icon: <FaWhatsapp className="text-green-500" /> },
    { label: "Pinterest URL", icon: <FaPinterest className="text-red-500" /> },
    { label: "Tiktok URL", icon: <FaTiktok className="text-black" /> },
    { label: "Snapchat", icon: <FaSnapchat className="text-yellow-500" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <p className="mb-6 text-gray-600 text-sm">
        <strong>Note:</strong>{" "}
        Uploaded icon name should be <code>&quot;WeChat.png&quot;</code> / <code>&quot;Tumbler.png&quot;</code> / <code>&quot;XXX.png&quot;</code>, while downloading .vcf file that name will be used as label.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">{field.icon}</div>
            <input
              type="text"
              placeholder={field.label}
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-start space-x-4 mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Save
        </button>
        <button className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600">
          Discard
        </button>
      </div>
    </div>
  );
}

export default Socialmedia;
