"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const Gallery = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) return null;

  const images = data.map((item) => ({
    src: item.url.startsWith("http") ? item.url : `/assets/assets/uploads/gallery-image/${item.url}`,
    title: item.title || "",
  }));

  return (
    <div className="max-w-md mx-auto">
      {/* Section Title + Purple Arrows */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl  text-blue-600">
          {data?.section_title || "Gallery"}
        </h2>

        {/* Custom Purple Navigation */}
        <div className="flex gap-2">
          <button className="gallery-prev w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md hover:bg-purple-700 transition">
            ←
          </button>
          <button className="gallery-next w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-md hover:bg-purple-700 transition">
            →
          </button>
        </div>
      </div>

      {/* Gallery Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={data.length > 1}
        navigation={{
          prevEl: ".gallery-prev",
          nextEl: ".gallery-next",
        }}
        pagination={{ clickable: true }}
        className="pb-10"
        breakpoints={{
          640: { slidesPerView: 1.3, spaceBetween: 20 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <div className="relative h-80">
                <Image
                  src={image.src}
                  alt={image.title || `Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images}
        plugins={[]}
        carousel={{ finite: images.length <= 1 }}
        render={{
          buttonPrev: images.length <= 1 ? () => null : undefined,
          buttonNext: images.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
};

export default Gallery;