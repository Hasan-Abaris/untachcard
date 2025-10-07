"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductServices = ({ data }) => {
  console.log("ProductServices data:", data);

  if (!data || data.length === 0)
    return <p className="text-white text-center mt-15">No products found</p>;

  return (
    <div
      className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto"
      style={{
        backgroundImage: "url('/assets/banner/theme-ten.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="font-bold text-lg mb-4">Products and Services</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-transparent rounded-xl p-4 shadow-md">
              <div className="relative">
                <Image
                  src={
                    item?.image
                      ? item.image.startsWith("http")
                        ? item.image
                        : `/uploads/${item.image}`
                      : "/default-product.jpg"
                  }
                  alt={item.title || "Product"}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
                {item.tag && (
                  <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded text-xs">
                    {item.tag}
                  </span>
                )}
                {item.price && (
                  <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                    Price: {item.price}
                  </span>
                )}
              </div>

              <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {item.description}
              </p>

              {item.url && (
                <button
                  className="mt-3 px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
                  onClick={() => {
                    const finalUrl = item.url.startsWith("http")
                      ? item.url
                      : `https://${item.url}`;
                    window.open(finalUrl, "_blank", "noopener,noreferrer");
                  }}
                >
                  Enquiry →
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductServices;
