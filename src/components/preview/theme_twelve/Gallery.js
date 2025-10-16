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
        <div className="rounded-lg p-4 shadow-md max-w-md mx-auto"
            style={{
                background: cardBg || "#000",
                color: fontColor || "#fff",
            }}>
            <h3 className="font-semibold mb-3" style={{ color: fontColor || "#fff" }}>Gallery</h3>
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
                                    : `https://res.cloudinary.com/uploads/${item.url}`
                            }
                            alt="gallery"
                            className="rounded-lg cursor-pointer w-full h-64 object-cover"
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
                slides={data.map((item) => ({ src: item.url }))}
                index={currentIndex}
            />
        </div>
    );
};

export default Gallery;
