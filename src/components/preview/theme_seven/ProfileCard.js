
import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="bg-black rounded-lg shadow-md text-center text-white max-w-md mx-auto relative overflow-hidden">
            <div className="bg-pink-600 h-28 relative">
                <div className="absolute left-1 top-1 bg-pink-700 px-3 py-1 text-xs rounded-lg">
                    Views: 5352
                </div>
                <div className="absolute inset-x-0 -bottom-12 flex justify-center">
                    <Image
                        src="/assets/cardPreview/sever-profile.jpg"
                        alt="Profile"
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-white"
                    />
                </div>
            </div>

            <div className="pt-16 pb-6 px-6">
                <h2 className="text-2xl font-semibold">WAPTechy ✅</h2>
                <p className="text-sm text-gray-300">CEO and Founder</p>
                <p className="mt-2 text-gray-400">
                    We are WAPTechy Advanced Full Stack Developers.
                </p>

                <div className="mt-6 space-y-4 text-left">
                    <p>📱 +918888888888</p>
                    <p>✉ waptechy@gmail.com</p>
                    <p>💬 WhatsApp Now</p>
                    <p>📍 Silicon Valley, California, USA</p>
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
