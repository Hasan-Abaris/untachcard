import Image from "next/image";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
export const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    const getField = (type) =>
        data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());

    const mobile = getField("mobile");
    const email = getField("email");
    const address = getField("address");
    const website = getField("website");
    const facebook = getField("facebook");
    const instagram = getField("instagram");

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
            {data?.image_source === 'local' ?
                <Image
                    src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full border-4 border-white absolute top-14 left-24 transform -translate-x-1/2 translate-y-1/2 bottom-0"
                /> : <Image
                    src={data?.profile}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full border-4 border-white absolute top-14 left-24 transform -translate-x-1/2 translate-y-1/2 bottom-0"
                />}

            <div className="mt-14">
                <h2 className="text-xl font-bold">{data?.title}</h2>
                <p className="text-gray-700">{data?.sub_title}</p>
                <p className="mt-2 text-sm">
                    {data?.description}
                </p>

                <div className="mt-4 space-y-2 text-sm">
                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-2xl text-yellow-400" />
                            <span>{mobile.title}</span>
                        </div>
                    )}

                    {email && (
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-2xl text-yellow-400" />
                            <a
                                href={`mailto:${email.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {email.title}
                            </a>
                        </div>
                    )}

                    {mobile && (
                        <div className="flex items-center gap-3">
                            <FaWhatsapp className="text-2xl text-green-500" />
                            <a
                                href={`https://wa.me/${mobile.url.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    )}
                    {address && (
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-2xl text-yellow-400" />
                            <a
                                href={address.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {address.title}
                            </a>
                        </div>
                    )}
                    {website && (
                        <div className="flex items-center gap-3">
                            <FaGlobe className="text-2xl text-yellow-400" />
                            <a
                                href={website.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {website.url}
                            </a>
                        </div>
                    )}
                    {facebook && (
                        <div className="flex items-center gap-3">
                            <FaFacebookF className="text-2xl text-blue-500" />
                            <a
                                href={facebook.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Facebook
                            </a>
                        </div>
                    )}

                    {instagram && (
                        <div className="flex items-center gap-3">
                            <FaInstagram className="text-2xl text-pink-500" />
                            <a
                                href={instagram.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Instagram
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