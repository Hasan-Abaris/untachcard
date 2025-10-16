import Image from "next/image";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Eye } from "lucide-react";
import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";

const ProfileCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Function to get field by type
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

  const bannerSrc =
    data?.banner?.startsWith("http")
      ? data.banner
      : `/assets/assets/uploads/card-banner/${data?.banner || "default-banner.jpg"}`;

  const bgStyle =
    data?.card_bg_type === "Color"
      ? { backgroundColor: data.card_bg }
      : data?.card_bg_type === "Image"
      ? {
          backgroundImage: `url(${data.card_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  const fontStyle = {
    fontFamily: data?.card_font || "sans-serif",
    color: data?.card_font_color || "#000000",
  };

  const shareModal = (data) => {
    setModalData(data);
    setOpen(true);
  };

  return (
    <div
      className="rounded-2xl shadow-2xl max-w-md mx-auto overflow-hidden relative border mt-5"
      style={{ ...bgStyle, ...fontStyle, borderColor: "#ddd" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-auto text-black overflow-hidden relative font-sans border border-gray-200">
        {/* Header Section */}
        <div className="h-32 relative">
          {Number(data?.show_card_view_count_on_a_card) === 1 && (
            <div className="absolute top-2 left-2 bg-white/20 px-3 py-1 text-xs rounded-lg backdrop-blur-sm flex items-center gap-1">
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
        <div
          className="pt-16 px-6 pb-6 text-center"
          style={{
            fontFamily: data?.card_font || "sans-serif",
            color: data?.card_font_color || "#000000",
          }}
        >
          <h2
            className="text-2xl font-bold"
            style={{
              color: data?.title_color || data?.card_font_color || "#000000",
            }}
          >
            {data?.title}
          </h2>
          <p
            className="mt-1 font-medium"
            style={{
              color: data?.sub_title_color || data?.card_font_color || "#3B82F6",
            }}
          >
            {data?.sub_title}
          </p>
          {data?.description && (
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{
                color: data?.description_color || data?.card_font_color || "#374151",
              }}
            >
              {data.description}
            </p>
          )}

          {/* Contact / Social Info */}
          <div className="mt-6 space-y-3 text-left">
            {[mobile, email, address, website, facebook, instagram].map(
              (field, idx) =>
                field && (
                  <div key={idx} className="flex items-center gap-3">
                    {renderIcon(field.icon)}
                    <a
                      href={field.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: data?.card_font_color || "#000000" }}
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
              <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-900 hover:text-white transition">
                Add to Phone Book
              </button>
            )}
            {Number(data?.show_share) === 1 && (
              <button
                className="px-4 py-2 border rounded-md text-sm hover:bg-gray-900 hover:text-white transition"
                onClick={() => shareModal(data)}
              >
                Share
              </button>
            )}
          </div>
        </div>
      </div>

      <ShareVCardModal
        isOpen={open}
        onClose={() => setOpen(false)}
        data={modalData}
        theme="theme_one/theme_one"
      />
    </div>
  );
};

export default ProfileCard;
