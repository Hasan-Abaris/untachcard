
import Image from "next/image";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    return (
        <div className="bg-black rounded-lg shadow-md text-center text-white max-w-md mx-auto relative overflow-hidden">
            <div className="bg-pink-600 h-28 relative">
                <div className="absolute left-1 top-1 bg-pink-700 px-3 py-1 text-xs rounded-lg">
                    Views: {data?.views}
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

            <div className="pt-16 pb-6 px-6">
                <h2 className="text-2xl font-semibold"> {data?.title} ✅</h2>
                <p className="text-sm text-gray-300">{data?.sub_title}</p>
                <p className="mt-2 text-gray-400">
                    {data?.description}
                </p>

                <div className="mt-6 space-y-4 text-left">
                    {social?.mandatory?.mobile && (
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-2xl" />
                            <span>{social.mandatory.mobile}</span>
                        </div>
                    )}
                    {social?.mandatory?.email && (
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-2xl" />
                            <span>{social.mandatory.email}</span>
                        </div>
                    )}

                    {social?.mandatory?.mobile && (
                        <div className="flex items-center gap-3">
                            <FaWhatsapp className="text-2xl" />
                            <a
                                href={`https://wa.me/${social.mandatory.mobile.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    )}
                    {social?.mandatory?.address && (
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-2xl" />
                            <a
                                href={social.mandatory.address_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {social.mandatory.address}
                            </a>
                        </div>
                    )}
                    {social?.mandatory?.website && (
                        <div className="flex items-center gap-3">
                            <FaGlobe className="text-2xl" />
                            <a
                                href={social.mandatory.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {social.mandatory.website}
                            </a>
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    <button className="px-4 py-2 border rounded-md">
                        Add to Phone Book
                    </button>
                    <button className="px-4 py-2 border rounded-md">Share</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
