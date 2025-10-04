import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook } from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const social = data?.social_options ? JSON.parse(data.social_options) : {};
  return (
    <div className="bg-black rounded-xl shadow-lg max-w-md mx-auto text-white overflow-hidden relative font-sans">
      {/* Header */}
      <div className="bg-red-900 h-32 relative">
        <div className="absolute top-2 left-2 bg-red-800 px-3 py-1 text-xs rounded-lg">
          Views: {data?.views || 0}
        </div>
        <div className="absolute inset-x-0 -bottom-12 flex justify-center">
          <Image
            src={`/assets/assets/uploads/card-profile/${data?.profile}`}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-6 pb-6 text-center">
        <h2 className="text-2xl font-bold">{data?.title}</h2>
        <p className="text-blue-400 mt-1">{data?.sub_title}</p>
        <p className="mt-2 text-gray-300">{data?.description}</p>

        {/* Social Section */}
        <div className="mt-6 space-y-3 text-left">
          {social?.mandatory?.mobile && (
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <span>{social.mandatory.mobile}</span>
            </div>
          )}
          {social?.mandatory?.email && (
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <span>{social.mandatory.email}</span>
            </div>
          )}
          {social?.mandatory?.mobile && (
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-xl" />
              <span>WP</span>
            </div>
          )}
          {social?.mandatory?.address && (
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl" />
              <span>{social.mandatory.address}</span>
            </div>
          )}
          {social?.mandatory?.facebook && (
            <div className="flex items-center gap-3">
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-800">
            Add to Phone Book
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-800">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
