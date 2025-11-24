"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductServices = ({ data, cardBg = "#ffffff", fontColor = "#1f2937" }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="max-w-md mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl  text-center mb-8 font-bold"  style={{ color: "#F06A60" }}>
        {data?.section_title || "Our Service"}
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="pb-10"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="bg-white shadow-xl overflow-hidden max-w-xl mx-auto font-sans  ">
              {/* Full Width Image */}
              <div className="relative h-64">
                <Image
                  src={
                    item.image.startsWith("http")
                      ? item.image
                      : `/assets/assets/uploads/product-image/${item.image || "default-service.jpg"}`
                  }
                  alt={item.title || "Service"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
      <div className="pt-[60px] px-[50px] pb-[50px] text-center">
                {/* Service Title - red */}
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#F06A60" }}>
                  {item.title || "Web Development"}
                </h3>

                {/* Description (optional - hidden in your SS but kept for flexibility) */}
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                )}

                {/* Details Button - red */}
                <button
                  onClick={() => {
                    if (!item?.url) return;
                    const finalUrl = item.url.startsWith("http") ? item.url : `https://${item.url}`;
                    window.open(finalUrl, "_blank", "noopener,noreferrer");
                  }}
                  className="inline-block px-8 py-3 bg-red-400 text-white  rounded-full hover:bg-red-400 transition shadow-md"
                  style={{ backgroundColor: "#F06A60" }}
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

export default ProductServices;