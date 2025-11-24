"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Testimonials = ({ data }) => {
  if (!data || data.length === 0) return null;

  const sectionTitle = data?.section_title || data?.title || "Testimonial";

  return (
    <div className="max-w-md mx-auto">
      {/* Header: Title + Purple Arrows */}
      <div className="text-center items-center justify-between mb-8">
        <h2 className="text-2xl  text-red-400 font-bold">{sectionTitle}</h2>

        
      </div>

      {/* Testimonial Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={data.length > 1}
        navigation={{
          prevEl: ".testi-prev",
          nextEl: ".testi-next",
        }}
        className="pb-6"
      >
        {data.map((item) => (
          <SwiperSlide key={item._id || item.id}>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="flex flex-col items-center">
                {/* Client Avatar */}
                <div className="relative w-24 h-24 mb-5">
                  <Image
                    src={
                      item.image?.startsWith("http")
                        ? item.image
                        : `/assets/assets/uploads/testimonial-image/${item.image || "default-avatar.jpg"}`
                    }
                    alt={item.title || "Client"}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-red-400">
                  {item.title || "Lorenzo Insigne"}
                </h3>

                {/* Star Rating (4.5 style from screenshot) */}
                <div className="flex gap-1 my-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${
                        star <= 4
                          ? "text-orange-400"
                          : star === 5 && item.rating >= 4.5
                          ? "text-orange-400"
                          : "text-orange-200"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-red-400 text-sm leading-relaxed italic mt-4 max-w-sm">
                  {item.description ||
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;