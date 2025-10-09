"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const Testimonials = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    if (!data || data.length === 0) return null;
    return (
        <div
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center"
            style={{
                background:
                    data?.card_bg_type === "Image" && data?.card_bg
                        ? `url(${data.card_bg}) center/cover no-repeat`
                        : cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h2 className="text-xl font-bold mb-4">Testimonials</h2>
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
                className="rounded-lg"
            >
                {data.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div
                            className="text-center p-4 rounded-xl h-full flex flex-col items-center"
                            style={{
                                backgroundColor: themeBg,
                                color: fontColor,
                                fontFamily: cardFont,
                            }}
                        >
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
                            <p className="mt-2 text-sm">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
