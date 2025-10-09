"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductServices = ({ data, cardStyles }) => {
  // cardStyles can contain dynamic styling from API like card_bg, card_font, card_font_color
  console.log("ProductServices data:", data);
  console.log("ProductServices dynamic styles:", cardStyles);

  if (!data || data.length === 0)
    return <p className="text-white text-center mt-15">No products found</p>;

  // Dynamic background style
  const bgStyle =
    cardStyles?.card_bg_type === "Color"
      ? { backgroundColor: cardStyles.card_bg }
      : cardStyles?.card_theme_bg_type === "Image"
      ? {
          backgroundImage: `url(/assets/assets/uploads/card-background/${cardStyles.card_theme_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  // Dynamic font style
  const fontStyle = {
    fontFamily: cardStyles?.card_font || "sans-serif",
    color: cardStyles?.card_font_color || "#000000",
  };

  return (
    <div
      className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
      style={{ ...bgStyle, ...fontStyle }}
    >
      <h3
        className="font-bold text-lg mb-4"
        style={{ color: cardStyles?.title_color || fontStyle.color }}
      >
        Products and Services
      </h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-transparent rounded-xl p-4 shadow-md"
              style={{ fontFamily: fontStyle.fontFamily, color: fontStyle.color }}
            >
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
