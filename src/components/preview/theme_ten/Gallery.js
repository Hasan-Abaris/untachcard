"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!data || data.length === 0) return null;
    return (
        <div
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
            style={{
                backgroundImage: "url('/assets/banner/theme-ten.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h3 className="font-bold text-lg mb-4 text-center">Gallery</h3>

            {/* Swiper Carousel */}
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
                        <img
                            src={
                                item?.url?.startsWith("http")
                                    ? item.url
                                    : `/assets/assets/uploads/gallery/${item?.url}`
                            }
                            alt={item?.title || "Gallery Image"}
                            className="rounded-lg cursor-pointer w-full h-64 object-cover border border-white/20 hover:opacity-90 transition"
                            onClick={() => {
                                setCurrentIndex(index);
                                setOpen(true);
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={data.map((item) => ({
                    src: item?.url?.startsWith("http")
                        ? item.url
                        : `/assets/assets/uploads/gallery/${item?.url}`,
                }))}
                index={currentIndex}
            />
        </div>
    );
};

export default Gallery;
