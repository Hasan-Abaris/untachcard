
import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

const ProfileCard = ({ data }) => {
    const social = data?.social_options ? JSON.parse(data.social_options) : {};
    console.log(data?.fields);

    const getField = (type) =>
        data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());

    const mobile = getField("mobile");
    const email = getField("email");
    const address = getField("address");
    const website = getField("website");
    const facebook = getField("facebook");
    const instagram = getField("instagram");

    return (
        <div className="bg-black rounded-lg shadow-md text-center text-white max-w-md mx-auto relative overflow-hidden">
            <div className="bg-pink-600 h-28 relative">
                <div className="absolute left-1 top-1 bg-pink-700 px-3 py-1 text-xs rounded-lg">
                    Views: {data?.views}
                </div>
                <div className="absolute inset-x-0 -bottom-12 flex justify-center">
                    {data?.image_source === 'local' ?
                        <Image
                            src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                            alt="Profile"
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white"
                        /> : <Image
                            src={data?.profile}
                            alt="Profile"
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white"
                        />}
                </div>
            </div>

            <div className="pt-16 pb-6 px-6">
                <h2 className="text-2xl font-semibold"> {data?.title} ✅</h2>
                <p className="text-sm text-gray-300">{data?.sub_title}</p>
                <p className="mt-2 text-gray-400">
                    {data?.description}
                </p>

                <div className="mt-6 space-y-4 text-left">

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
