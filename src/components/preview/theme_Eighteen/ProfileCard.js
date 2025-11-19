import ShareVCardModal from "@/components/common/shareVCardModal/ShareVCardModal";
import Image from "next/image";
import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGitlab, FaFacebookF, FaTwitter } from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const shareModal = () => {
    setModalData(data);
    setOpen(true);
  };

  const getField = (type) =>
    data?.fields?.find((item) => item.type.toLowerCase() === type.toLowerCase());

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
    <div className="max-w-sm mx-auto font-sans bg-gray-500 text-white rounded-3xl overflow-hidden shadow-2xl">
      {/* Banner + Upper Section (from previous version) */}
      <div className="relative h-48">
        <Image
          src={
            data?.banner?.startsWith("http")
              ? data.banner
              : data?.banner
              ? `/assets/assets/uploads/card-banner/${data.banner}`
        : "/assets/images/banner2.png"   // ← fallback local image
          }
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative -mt-20 px-6 pb-8 text-center">
        <div className="thumb inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black shadow-2xl ring-4 ring-white/20">
            <Image
              src={
                data?.profile?.startsWith("http")
                  ? data.profile
                  : `/assets/assets/uploads/card-profile/${data?.profile || "default.jpg"}`
              }
              alt={data?.title}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="content mt-4">
          <div className="admin-title">
            <h5 className="text-2xl font-bold text-white">{data?.title}</h5>
            <span className="position block text-gray-400 text-sm mt-1">
              {data?.sub_title}
            </span>
          </div>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed px-4">
            {data?.description}
          </p>

          {/* Call / Whatsapp / Mail Buttons */}
          <div className="actions flex justify-center gap-8 my-8">
            {mobile && (
              <div className="action-btn text-center">
                <a
                  href={`tel:${mobile.url.replace(/\D/g, "")}`}
                  className="block w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl"
                  style={{ background: "#A4C639" }}
                >
                  <FaPhoneAlt />
                </a>
                <span className="block text-xs text-gray-400 mt-2">Call</span>
              </div>
            )}
            {mobile && (
              <div className="action-btn text-center">
                <a
                  href={`https://wa.me/${mobile.url.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl"
                  style={{ background: "#25D366" }}
                >
                  <FaWhatsapp />
                </a>
                <span className="block text-xs text-gray-400 mt-2">Whatsapp</span>
              </div>
            )}
            {email && (
              <div className="action-btn text-center">
                <a
                  href={`mailto:${email.url}`}
                  className="block w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl"
                  style={{ background: "#EA4335" }}
                >
                  <FaEnvelope />
                </a>
                <span className="block text-xs text-gray-400 mt-2">Mail</span>
              </div>
            )}
          </div>

          {/* Add to Contact & Share */}
          <div className="more-btns text-center mt-6 flex gap-3 justify-center flex-wrap">
            {Number(data?.show_add_to_phone_book) === 1 && (
              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-xl transition hover:opacity-90"
                style={{ background: "#259FF0" }}
              >
                + Add to Contact
              </button>
            )}
            {Number(data?.show_share) === 1 && (
              <button
                onClick={shareModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-xl transition hover:opacity-90"
                style={{ background: "#259FF0" }}
              >
                Share vCard
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LOWER SECTION - EXACTLY LIKE ADMIN PREVIEW */}
      <div className="page-info-widget px-8 pb-10">
        {mobile && (
          <div className="info-widget flex items-center gap-4 py-4 border-b border-white/10">
            <a
              href={`tel:${mobile.url.replace(/\D/g, "")}`}
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "#FFA4001a" }}
            >
              <FaPhoneAlt style={{ color: "#FFA400" }} />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Phone</span>
              <h5 className="text-white font-medium">
                <a href={`tel:${mobile.url.replace(/\D/g, "")}`}>{mobile.title || mobile.url}</a>
              </h5>
            </div>
          </div>
        )}

        {email && (
          <div className="info-widget flex items-center gap-4 py-4 border-b border-white/10">
            <a
              href={`mailto:${email.url}`}
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "#EA43351a" }}
            >
              <FaEnvelope style={{ color: "#EA4335" }} />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Email</span>
              <h5 className="text-white font-medium break-all">
                <a href={`mailto:${email.url}`}>{email.title || email.url}</a>
              </h5>
            </div>
          </div>
        )}

        {address && (
          <div className="info-widget flex items-center gap-4 py-4 border-b border-white/10">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(address.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "#FF00751a" }}
            >
              <FaMapMarkerAlt style={{ color: "#FF0075" }} />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Address</span>
              <h5 className="text-white font-medium">
                <a href={`https://www.google.com/maps?q=${encodeURIComponent(address.title)}`} target="_blank" rel="noopener noreferrer">
                  {address.title}
                </a>
              </h5>
            </div>
          </div>
        )}

        {website && (
          <div className="info-widget flex items-center gap-4 py-4 border-b border-white/10">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "#914BFA1a" }}
            >
              <FaGlobe style={{ color: "#914BFA" }} />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Website URL</span>
              <h5 className="text-white font-medium">
                <a href={website.url} target="_blank" rel="noopener noreferrer">
                  {website.url}
                </a>
              </h5>
            </div>
          </div>
        )}

        {gitlab && (
          <div className="info-widget flex items-center gap-4 py-4 border-b border-white/10">
            <a
              href={gitlab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gray-900"
            >
              <FaGitlab className="text-white" />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Gitlab</span>
              <h5 className="text-white font-medium">
                <a href={gitlab.url} target="_blank" rel="noopener noreferrer">
                  {gitlab.url}
                </a>
              </h5>
            </div>
          </div>
        )}

        {facebook && (
          <div className="info-widget flex items-center gap-4 py-4 border-b border-white/10">
            <a
              href={facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "#4267B21a" }}
            >
              <FaFacebookF style={{ color: "#4267B2" }} />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Facebook</span>
              <h5 className="text-white font-medium">
                <a href={facebook.url} target="_blank" rel="noopener noreferrer">
                  {facebook.url}
                </a>
              </h5>
            </div>
          </div>
        )}

        {twitter && (
          <div className="info-widget flex items-center gap-4 py-4">
            <a
              href={twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-1 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "#1DA1F21a" }}
            >
              <FaTwitter style={{ color: "#1DA1F2" }} />
            </a>
            <div className="content">
              <span className="title block text-xs text-gray-500">Twitter</span>
              <h5 className="text-white font-medium">
                <a href={twitter.url} target="_blank" rel="noopener noreferrer">
                  {twitter.url}
                </a>
              </h5>
            </div>
          </div>
        )}
      </div>

      <ShareVCardModal isOpen={open} onClose={() => setOpen(false)} data={modalData} theme="dark" />
    </div>
  );
};

export default ProfileCard;