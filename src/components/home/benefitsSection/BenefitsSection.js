
"use client";
import { FaLeaf, FaInfinity, FaMoneyBillWave, FaIdBadge, FaInfoCircle, FaStar } from "react-icons/fa";

const benefits = [
    { icon: <FaLeaf size={48} className="text-orange-500" />, title: "Paperless" },
    { icon: <FaInfinity size={48} className="text-orange-500" />, title: "Unlimited Usage" },
    { icon: <FaMoneyBillWave size={48} className="text-orange-500" />, title: "Economy on Printing" },
    { icon: <FaIdBadge size={48} className="text-orange-500" />, title: "Contact-less" },
    { icon: <FaInfoCircle size={48} className="text-orange-500" />, title: "Extended Information" },
    { icon: <FaStar size={48} className="text-orange-500" />, title: "Wow Effect" },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Benefits
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 flex flex-col items-center justify-center text-center border border-gray-200 hover:border-orange-400"
                        >
                            {item.icon}
                            <h3 className="mt-4 text-lg font-semibold text-gray-700 uppercase tracking-wide">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

