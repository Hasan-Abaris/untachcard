import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaGitlab,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const shareModal = () => {
    setModalData(data);
    setOpen(true);
  };

  const getField = (type) =>
    data?.fields?.find(
      (item) => item.type.toLowerCase() === type.toLowerCase()
    );

  const mobile = getField("mobile");
  const email = getField("email");
  const address = getField("address");
  const website = getField("website");
  const gitlab = getField("gitlab");
  const facebook = getField("facebook");
  const twitter = getField("twitter");

  const downloadVCard = () => {
    const fullName = data?.title || "Contact";
    const phone = mobile?.url?.replace(/\D/g, "") || "";
    const mail = email?.url || "";

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
N:${fullName};;;
TEL;TYPE=CELL:${phone}
EMAIL:${mail}
END:VCARD`.trim();

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fullName.replace(/\s+/g, "_")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-xl mx-auto font-sans bg-gray-50  overflow-hidden shadow-xl">
      {/* Red Header Banner */}
      <div className="relative h-32 bg-red-400">
        {/* <Image
          src={
            data?.banner?.startsWith("http")
              ? data.banner
              : data?.banner
              ? `/assets/assets/uploads/card-banner/${data.banner}`
              : "/assets/images/default-red-banner.jpg"
          }
          alt="Banner"
          fill
          className="object-cover opacity-70"
        /> */}
      </div>

      {/* Profile Picture Overlapping Header */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 rounded-b-full">
        <div className="w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden relative">
          <Image
            src={
              data?.profile?.startsWith("http")
                ? data.profile
                : `/assets/assets/uploads/card-profile/${
                    data?.profile || "default.jpg"
                  }`
            }
            alt={data?.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content - Clean & Thin */}
      <div className="pt-[60px] px-[50px] pb-[50px] text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {data?.title || "Mike Obey"}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          {data?.sub_title || "Manager"}
        </p>
<div
  className="mt-4 text-gray-600 text-sm leading-relaxed px-4"
  dangerouslySetInnerHTML={{
    __html: data?.description || "Lorem Ipsum..."
  }}
/>


        {/* Quick Action Buttons */}
        <div className="flex justify-center gap-8 my-10">
          {mobile && (
            <div className="text-center">
              <a
                href={`tel:${mobile.url.replace(/\D/g, "")}`}
                className="w-14 h-14 rounded-full bg-lime-500 flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                <FaPhoneAlt className="text-white text-xl" />
              </a>
              <span className="block text-xs text-gray-600 mt-2">Call</span>
            </div>
          )}
          {mobile && (
            <div className="text-center">
              <a
                href={`https://wa.me/${mobile.url.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
              <span className="block text-xs text-gray-600 mt-2">Whatsapp</span>
            </div>
          )}
          {email && (
            <div className="text-center">
              <a
                href={`mailto:${email.url}`}
                className="w-14 h-14 rounded-full bg-red-400 flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                <FaEnvelope className="text-white text-xl" />
              </a>
              <span className="block text-xs text-gray-600 mt-2">Mail</span>
            </div>
          )}
        </div>

        {/* Red Action Buttons */}
        <div className="flex justify-center gap-2 mt-6">
          {Number(data?.show_add_to_phone_book) === 1 && (
            <button
              onClick={downloadVCard}
              className="flex-1 py-2 px-6 rounded-full bg-red-400 text-white font-medium shadow-md hover:bg-red-700 transition flex items-center justify-center gap-2"
            >
              + Add to Contact
            </button>
          )}
          {Number(data?.show_share) === 1 && (
            <button
              onClick={shareModal}
              className="flex-1 py-2 px-6 rounded-full bg-red-400 text-white font-medium shadow-md hover:bg-red-400 transition flex items-center justify-center gap-2"
            >
              Share vCard
            </button>
          )}
        </div>
      </div>

      {/* Contact Info Section - Light & Clean */}
      <div className="px-6 pb-10 space-y-5 text-left border-t border-gray-200 pt-6">
        {mobile && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <FaPhoneAlt className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="font-medium text-gray-900">
                {mobile.title || mobile.url}
              </p>
            </div>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <FaEnvelope className="text-pink-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="font-medium text-gray-900 break-all">
                {email.title || email.url}
              </p>
            </div>
          </div>
        )}

        {address && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <FaMapMarkerAlt className="text-red-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Address</p>
              <p className="font-medium text-gray-900">{address.title}</p>
            </div>
          </div>
        )}

        {website && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <FaGlobe className="text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Website URL</p>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline"
              >
                {website.url}
              </a>
            </div>
          </div>
        )}

        {gitlab && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <FaGitlab className="text-gray-700" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Gitlab</p>
              <a
                href={gitlab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline"
              >
                {gitlab.url}
              </a>
            </div>
          </div>
        )}

        {facebook && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <FaFacebookF className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Facebook</p>
              <a
                href={facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline"
              >
                {facebook.url}
              </a>
            </div>
          </div>
        )}

        {twitter && (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
              <FaTwitter className="text-sky-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Twitter</p>
              <a
                href={twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline"
              >
                {twitter.url}
              </a>
            </div>
          </div>
        )}
      </div>

      <ShareVCardModal
        isOpen={open}
        onClose={() => setOpen(false)}
        data={modalData}
        theme="light"
      />
    </div>
  );
};

export default ProfileCard;
