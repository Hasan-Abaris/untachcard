import React from "react";
import { User, Image, Phone, Mail, MapPin, Globe, Linkedin, MoreHorizontal, Briefcase } from "lucide-react";

const features = [
    { icon: <User size={28} />, label: "Name" },
    { icon: <Image size={28} />, label: "Photo" },
    { icon: <Phone size={28} />, label: "Phones" },
    { icon: <Mail size={28} />, label: "Emails" },
    { icon: <Briefcase size={28} />, label: "Work & Title" },
    { icon: <MapPin size={28} />, label: "Address" },
    { icon: <Globe size={28} />, label: "Website" },
    { icon: <Linkedin size={28} />, label: "Social Media" },
    { icon: <MoreHorizontal size={28} />, label: "And Many More" },
];

const CardFeatures = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 bg-white gap-10 max-w-7xl mx-auto w-full">
            {/* Left side: Features */}
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-10 tracking-wide uppercase text-center lg:text-left">
                    Card Features
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg bg-gray-50 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <div className="text-gray-700 mb-2">{feature.icon}</div>
                            <span className="text-sm font-medium text-gray-700 text-center">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side: Image */}
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                <img
                    src="/assets/banner/features.png"
                    alt="Phone Preview"
                    className="w-60 sm:w-72 md:w-80 lg:w-96 rounded-xl shadow-xl"
                />
            </div>
        </div>
    );
};

export default CardFeatures;