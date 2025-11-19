"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Portfolio = ({ data }) => {
  if (!data || data.length === 0) return null;

  const openLink = (url) => {
    if (url) {
      const finalUrl = url.startsWith("http") ? url : `https://${url}`;
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Section Title + Custom Purple Arrows */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold  text-black">
          {data?.section_title || "Projects"}
        </h2>

        {/* Custom Purple Navigation Buttons */}
        <div className="flex gap-2">
          <button className="portfolio-prev w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center shadow-md hover:bg-red-400 transition">
            ←
          </button>
          <button className="portfolio-next w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center shadow-md hover:bg-red-400 transition">
            →
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".portfolio-prev",
          nextEl: ".portfolio-next",
        }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Full Width Image with Title Overlay */}
              <div className="relative h-80">
                <Image
                  src={
                    item.image?.startsWith("http")
                      ? item.image
                      : `/assets/assets/uploads/portfolio-image/${item.image || "default.jpg"}`
                  }
                  alt={item.title || "Project"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Dark Overlay + Title at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {item.title || "Ecommerce Website"}
                  </h3>
                </div>
              </div>

              {/* Details Button - Centered Purple */}
              <div className="p-8 pt-6 text-center">
                <button
                  onClick={() => openLink(item.url)}
                  className="inline-block px-10 py-3 bg-red-400 text-white font-medium rounded-full hover:bg-purple-700 transition shadow-lg"
                >
                  Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;