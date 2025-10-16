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
            className="rounded-lg p-4 shadow-md max-w-md mx-auto"
            style={{
                background: cardBg || "#000",
                color: fontColor || "#fff",
            }}
        >
            <h3
                className="font-semibold mb-3 text-center text-lg"
                style={{ color: fontColor || "#fff" }}
            >
                Testimonials
            </h3>

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
                        <div
                            className="text-center p-4 rounded-xl h-full flex flex-col items-center transition-transform hover:scale-[1.02]"
                            style={{ background: cardBg, color: fontColor, fontFamily: cardFont }}
                        >
                            <img
                                src={
                                    item?.image?.startsWith("http")
                                        ? item.image
                                        : `https://res.cloudinary.com/uploads/${item.image}`
                                }
                                alt={item.title || "client"}
                                className="w-20 h-20 rounded-full mx-auto object-cover border-2"

                            />

                            <h3
                                className="mt-2 font-semibold"
                                style={{ color: fontColor || "#fff" }}
                            >
                                {item.title}
                            </h3>

                            <div className="flex justify-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5"
                                        style={{
                                            color:
                                                i < item.rating
                                                    ? "#FFD700"
                                                    : fontColor
                                                        ? `${fontColor}55`
                                                        : "#555",
                                        }}
                                    />
                                ))}
                            </div>

                            <p
                                className="mt-2 text-sm italic"
                                style={{
                                    color: fontColor
                                        ? `${fontColor}cc`
                                        : "#ccc",
                                }}
                            >
                                “{item.description}”
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Testimonials;
