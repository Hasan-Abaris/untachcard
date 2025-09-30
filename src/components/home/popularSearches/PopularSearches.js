"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PopularSearches = () => {
    const searches = [
        { img: "/assets/banner/ps1.jpg", title: "Bridal Wear" },
        { img: "/assets/banner/ps2.jpg", title: "Bridal Makeup" },
        { img: "/assets/banner/ps3.jpg", title: "Photographers" },
        { img: "/assets/banner/ps4.jpg", title: "Invitations" },
        { img: "/assets/banner/ps5.jpg", title: "Catering Services" },
        { img: "/assets/banner/ps6.jpg", title: "Wedding Decor" },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-pink-600 via-white to-pink-600">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                    Popular Searches
                </h2>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    navigation
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                >
                    {searches.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="font-medium text-gray-800 text-lg">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PopularSearches;
