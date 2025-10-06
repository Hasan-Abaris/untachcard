"use client";
import {
    FaLeaf,
    FaInfinity,
    FaMoneyBillWave,
    FaIdBadge,
    FaInfoCircle,
    FaStar,
} from "react-icons/fa";

const benefits = [
    { icon: <FaLeaf size={48} className="text-orange-500 size-40" />, title: "Paperless" },
    { icon: <FaInfinity size={48} className="text-orange-500 size-40" />, title: "Unlimited Usage" },
    { icon: <FaMoneyBillWave size={48} className="text-orange-500 size-40" />, title: "Economy on Printing" },
    { icon: <FaIdBadge size={48} className="text-orange-500 size-40" />, title: "Contact-less" },
    { icon: <FaInfoCircle size={48} className="text-orange-500 size-40" />, title: "Extended Information" },
    { icon: <FaStar size={48} className="text-orange-500 size-40" />, title: "Wow Effect" },
];

export default function ProductsSection() {
    return (
        <section id="products" className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-6xl md:text-6xl font-bold text-gray-800 mb-12 uppercase">
                    Benefits
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {benefits.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f9f9f9] text-black rounded-[10px] p-[40px] capitalize w-full max-w-[408px] text-center text-[18px] font-medium mx-auto border border-[#055160] flex flex-col items-center justify-center hover:shadow-xl transition duration-300"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-700 uppercase tracking-wide">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
