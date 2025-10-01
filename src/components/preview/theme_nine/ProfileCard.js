
import React from "react";
import { Phone, Mail, MapPin, Share2, UserPlus, Eye } from "lucide-react";

const ProfileCard = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg overflow-hidden relative max-w-lg mx-auto text-center p-6">
            {/* Views */}
            <div className="absolute top-2 right-2 flex items-center space-x-2 text-sm bg-black/40 text-white px-3 py-1 rounded-lg">
                <Eye size={16} /> <span>Views: 5353</span>
            </div>

            {/* Profile Image */}
            <img
                src="/assets/cardPreview/sever-profile.jpg"
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white mx-auto object-cover"
            />

            {/* Info */}
            <h2 className="text-2xl font-bold mt-3">WAPTechy ✅</h2>
            <p className="font-semibold">CEO and Founder</p>
            <p className="italic">We are WAPTechy Advanced Full Stack Developers.</p>

            {/* Contact */}
            <div className="mt-4 space-y-2 text-left">
                <p className="flex items-center space-x-2">
                    <Phone className="text-yellow-600" size={18} />
                    <span>+91 8888888888</span>
                </p>
                <p className="flex items-center space-x-2">
                    <Mail className="text-yellow-600" size={18} />
                    <span>waptechy@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                    <span className="text-yellow-600">💬</span>
                    <span>WhatsApp Now</span>
                </p>
                <p className="flex items-center space-x-2">
                    <MapPin className="text-yellow-600" size={18} />
                    <span>Silicon Valley, California, USA</span>
                </p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-around">
                <button className="border px-4 py-2 rounded-lg flex items-center space-x-2">
                    <UserPlus size={16} /> <span>Add to Phone Book</span>
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Share2 size={16} /> <span>Share</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
