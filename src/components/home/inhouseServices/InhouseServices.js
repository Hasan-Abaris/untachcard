"use client";

import Image from "next/image";

const services = [
    {
        id: 1,
        title: "Wedsta",
        description: "WMG At Home, Family Makeup Services",
        image: "/assets/banner/w1.webp",
    },
    {
        id: 2,
        title: "Genie Services",
        description: "Plan your dream wedding in your budget",
        image: "/assets/banner/w2.jpg",
    },
    {
        id: 3,
        title: "Venue Booking Service",
        description: "Best Price Guaranteed",
        image: "/assets/banner/w3.jpg",
    },
];

const InhouseServices = () => {
    return (
        <section className="bg-gradient-to-r from-pink-600 via-white to-pink-600 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                    Wedding Spot Inhouse Services
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-56 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                                <button className="mt-5 px-6 py-2 border border-pink-600 text-pink-600 rounded-md hover:bg-pink-600 hover:text-white transition-colors duration-300">
                                    Know More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InhouseServices;
