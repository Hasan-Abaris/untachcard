import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
export const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto text-center relative" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            {/* Cover Image */}
            <img
                src={`/assets/assets/uploads/card-banner/${data?.banner}`}
                alt="cover"
                className="w-full h-32 object-cover rounded-2xl"
            />

            {/* Profile Image */}
            <img
                src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                alt="profile"
                className="w-20 h-20 rounded-full border-4 border-white absolute top-14 left-24 transform -translate-x-1/2 translate-y-1/2 bottom-0"
            />

            <div className="mt-14">
                <h2 className="text-xl font-bold">{data?.title}</h2>
                <p className="text-gray-700">{data?.sub_title}</p>
                <p className="mt-2 text-sm">
                    {data?.description}
                </p>

                <div className="mt-4 space-y-2 text-sm">
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

                <div className="flex justify-center mt-4 gap-3">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-white hover:text-black transition">
                        Add to Phone Book
                    </button>
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-white hover:text-black transition">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};