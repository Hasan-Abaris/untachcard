"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductServices = ({ data, cardStyles, viewMoreUrl }) => {
  if (!data || data.length === 0)
    return <p className="text-center mt-10">No products found</p>;

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

  const fontStyle = {
    fontFamily: cardStyles?.card_font || "sans-serif",
    color: cardStyles?.card_font_color || "#000000",
  };

  return (
    <div className="pt-4 px-4 mt-0 flex flex-col items-center justify-center">
      <div className="vcard__product mt-3 pb-6 mb-5 w-full max-w-6xl" style={bgStyle}>
        <h4
          className="vcard__heading text-center text-2xl font-semibold mb-6"
          style={{ color: cardStyles?.title_color || fontStyle.color }}
        >
          Products
        </h4>

        {/* Center Swiper */}
        <div className="w-full flex justify-center">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".prev-arrow",
              nextEl: ".next-arrow",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={true} // CENTER the slides
            className="product-slider relative"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center w-auto" // auto width for centering
              >
                <div
                  className="card product-card border-0 rounded-lg shadow-lg overflow-hidden relative max-w-sm"
                  style={{ ...fontStyle }}
                >
                  <div className="product-profile relative h-52 w-full">
                    <Image
                      src={
                        item?.image
                          ? item.image.startsWith("http")
                            ? item.image
                            : `/uploads/${item.image}`
                          : "/default-product.jpg"
                      }
                      alt={item.title || "Product"}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {item.price && (
                      <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                        Price: {item.price}
                      </span>
                    )}
                    {item.tag && (
                      <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-semibold">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="product-details p-4">
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                    {item.url && (
                      <button
                        className="mt-3 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Arrows */}
        <button className="prev-arrow absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl">
          &#8592;
        </button>
        <button className="next-arrow absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl">
          &#8594;
        </button>

        {/* View More */}
        {viewMoreUrl && (
          <div className="text-center mt-8">
            <a
              href={viewMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              View More Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductServices;
