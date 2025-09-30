


"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const galleryItems = [
    {
        img: "/assets/banner/g1.jpeg",
        title: "Outfits",
    },
    {
        img: "/assets/banner/g2.jpg",
        title: "Blouse Designs",
    },
    {
        img: "/assets/banner/g3.jpg",
        title: "Wedding Sarees",
    },
    {
        img: "/assets/banner/g4.webp",
        title: "Mehndi Designs",
    },
    {
        img: "/assets/banner/g4.jpg",
        title: "Wedding Jewellery",
    },
];

const GalleryLook = () => {
    return (
        <section className="py-10 px-4 md:px-10 bg-gradient-to-r from-pink-600 via-white to-pink-600">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Gallery to Look for
            </h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {galleryItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                            <div className="overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-medium">{item.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default GalleryLook;
