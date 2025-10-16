"use client";

import Image from "next/image";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Eye } from "lucide-react";
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";

const ProfileCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Get field by type
  const getField = (type) =>
    data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());

  const mobile = getField("mobile");
  const email = getField("email");
  const address = getField("address");
  const website = getField("website");
  const facebook = getField("facebook");
  const instagram = getField("instagram");

  const renderIcon = (iconName) => {
    if (!iconName) return <FaIcons.FaLink className="text-xl" />;
    if (FaIcons[iconName]) {
      const IconComponent = FaIcons[iconName];
      return <IconComponent className="text-xl" />;
    }
    return <FaIcons.FaLink className="text-xl" />;
  };

  const profileSrc =
    data?.profile?.startsWith("http")
      ? data.profile
      : `/assets/assets/uploads/card-profile/${data?.profile || "default-profile.jpg"}`;

  const shareModal = (data) => {
    setModalData(data);
    setOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-auto text-black overflow-hidden relative font-sans border border-gray-200 mt-5">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative ">
        {Number(data?.show_card_view_count_on_a_card) === 1 && (
          <div className="absolute top-2 left-2 bg-white/20 text-white px-3 py-1 text-xs rounded-lg backdrop-blur-sm flex items-center gap-1">
            <Eye size={14} /> Views: {data?.views || 0}
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

      {/* Content Section */}
      <div className="pt-16 px-6 pb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{data?.title}</h2>
        <p className="text-blue-500 mt-1 font-medium">{data?.sub_title}</p>
        {data?.description && (
          <p className="mt-3 text-gray-700 leading-relaxed text-sm">{data.description}</p>
        )}

        {/* Contact / Social Info */}
        <div className="mt-6 space-y-3 text-left text-gray-800">
          {[mobile, email, address, website, facebook, instagram].map(
            (field, idx) =>
              field && (
                <div key={idx} className="flex items-center gap-3">
                  {renderIcon(field.icon)}
                  <a
                    href={field.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-700"
                  >
                    {field.title}
                  </a>
                </div>
              )
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {Number(data?.show_add_to_phone_book) === 1 && (
            <button className="px-4 py-2 border border-gray-400 rounded-md text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200">
              Add to Phone Book
            </button>
          )}
          {Number(data?.show_share) === 1 && (
            <button
              className="px-4 py-2 border border-gray-400 rounded-md text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-200"
              onClick={() => shareModal(data)}
            >
              Share
            </button>
          )}
        </div>
      </div>

      <ShareVCardModal
        isOpen={open}
        onClose={() => setOpen(false)}
        data={modalData}
        theme="theme_four/theme_four"
      />
    </div>
  );
};

export default ProfileCard;
