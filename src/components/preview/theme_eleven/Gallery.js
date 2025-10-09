"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Gallery = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!data || data.length === 0) return null;

    return (
        <div
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto backdrop-blur-lg"
            style={{
                background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h2 className="text-lg font-semibold mb-4 text-center">Gallery</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded-lg overflow-hidden shadow-sm">
                            <img
                                src={item?.url}
                                alt={item?.title || "gallery"}
                                className="rounded-lg cursor-pointer w-full h-64 object-cover"
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setOpen(true);
                                }}
                            />
                            {item.title && (
                                <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                    {item.title}
                                </span>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={data.map((item) => ({ src: item.url }))}
                index={currentIndex}
            />
        </div>
    );
};