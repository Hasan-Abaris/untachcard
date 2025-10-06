
"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const Testimonials = ({ data }) => {
    if (!data || data.length === 0) return null
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 text-center max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4">Testimonials</h3>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div className="text-center p-4 bg-gray-900 rounded-xl h-full flex flex-col items-center">
                            <img
                                src={item.image}
                                alt={item.title || "client"}
                                className="w-20 h-20 rounded-full mx-auto object-cover"
                            />
                            <h3 className="mt-2 font-semibold">{item.title}</h3>
                            <div className="flex justify-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < item.rating ? "text-yellow-400" : "text-gray-500"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-400 mt-2 text-sm">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
