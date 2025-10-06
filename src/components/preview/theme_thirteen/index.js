"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaPhone,
  FaEnvelope,
  FaLink,
  FaInstagram,
} from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const social = data?.social_options ? JSON.parse(data.social_options) : {};

  const profileSrc = data?.profile
    ? `/assets/assets/uploads/card-profile/${data.profile}`
    : "/assets/default-avatar.png";

  return (
    <div className="bg-gradient-to-b from-orange-200 to-orange-300 max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg font-sans">
      {/* Cover image */}
      <div className="relative h-40 w-full">
        <Image
          src="/assets/bg-cover.jpg" // You can replace with your cover image
          alt="cover"
          fill
          className="object-cover"
        />
        {/* Profile Image */}
        <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
          <Image
            src={profileSrc}
            alt={data?.title || "Profile"}
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-16 pb-8 px-6 text-center bg-orange-100">
        <h2 className="text-xl font-bold text-gray-800">{data?.title}</h2>
        <p className="italic text-gray-600">{data?.sub_title}</p>

        <hr className="my-3 border-orange-400 w-20 mx-auto" />

        {data?.description && (
          <p className="text-gray-700 text-sm leading-relaxed">
            {data.description}
          </p>
        )}

        {/* Social / Contact */}
        <div className="mt-6 space-y-3 text-left">
          {social?.mandatory?.facebook && (
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2">
              <FaFacebookF className="text-orange-500" />
              <span>Facebook</span>
            </div>
          )}
          {social?.mandatory?.mobile && (
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2">
              <FaPhone className="text-orange-500" />
              <span>{social.mandatory.mobile}</span>
            </div>
          )}
          {social?.mandatory?.email && (
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2">
              <FaEnvelope className="text-orange-500" />
              <span>{social.mandatory.email}</span>
            </div>
          )}
          {social?.mandatory?.website && (
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2">
              <FaLink className="text-orange-500" />
              <a
                href={social.mandatory.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                {social.mandatory.website}
              </a>
            </div>
          )}
          {social?.mandatory?.instagram && (
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2">
              <FaInstagram className="text-orange-500" />
              <span>Follow me @{social.mandatory.instagram}</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-orange-600">
            <span>📇</span> Add to Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
