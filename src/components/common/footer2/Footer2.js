"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer2 = () => {
    return (
        <footer className="relative bg-gray-900 text-white py-12">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left - Logo + About */}
                <div>
                    <div className="font-bold text-xl">iTap Cards</div>
                    {/* <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="h-12 mb-4"
                    /> */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Infotree Computers LLC provides IT solutions with excellence
                        and innovation. We aim to deliver reliable technology
                        services for businesses worldwide.
                    </p>
                </div>

                {/* Middle - Address */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300 text-sm">
                       InfoTree Computers LLC, A 504,  Al Zahra Techno Centre,  Khaled Bin Waleed Street,  Bur Dubai, UAE
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                        Email: <a href="mailto:info@itapcards.com" className="hover:underline">info@itapitsolutions.com</a>
                    </p>
                    <p className="text-gray-300 text-sm">Call: +97 1- 527092174</p>
                </div>

                {/* Right - Social Icons */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-sky-500 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} © 2025 Wedding Spot Designed By <Link href="https://www.abarissoftech.com/" target="blank"> Abaris Softech</Link>.
            </div>
        </footer>
    )
}

export default Footer2