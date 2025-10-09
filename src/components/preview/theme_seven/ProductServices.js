"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
const ProductServices = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    if (!data || data.length === 0) return null;
    return (

        <div
            className="rounded-lg p-4 shadow-md max-w-md mx-auto"
            style={{
                background: cardBg || "#000",
                color: fontColor || "#fff",
            }}
        >
            <h3 className="font-semibold mb-3 text-center text-lg" style={{ color: fontColor }}>
                Products and Services
            </h3>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="rounded-xl p-4 shadow-md"
                            style={{
                                background:
                                    cardBg === "transparent"
                                        ? "rgba(0,0,0,0.5)"
                                        : cardBg || "#111",
                                color: fontColor || "#fff",
                            }}
                        >
                            <div className="relative">
                                <Image
                                    src={
                                        item.image?.startsWith("http")
                                            ? item.image
                                            : `https://res.cloudinary.com/uploads/${item.image}`
                                    }
                                    alt={item.title}
                                    width={600}
                                    height={300}
                                    className="rounded-lg object-cover w-full h-auto"
                                />

                                {item.tag && (
                                    <span
                                        className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold"
                                        style={{
                                            background: fontColor || "#fff",
                                            color: cardBg || "#000",
                                        }}
                                    >
                                        {item.tag}
                                    </span>
                                )}

                                {item.price && (
                                    <span
                                        className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs"
                                        style={{
                                            background:
                                                cardBg === "transparent"
                                                    ? "rgba(0,0,0,0.7)"
                                                    : fontColor || "#000",
                                            color:
                                                cardBg === "transparent"
                                                    ? "#fff"
                                                    : cardBg || "#fff",
                                        }}
                                    >
                                        Price: {item.price}
                                    </span>
                                )}
                            </div>

                            <h4 className="mt-4 text-lg font-semibold" style={{ color: fontColor }}>{item.title}</h4>
                            <p className="text-sm mt-2 opacity-80 line-clamp-3" style={{ color: fontColor }}>
                                {item.description}
                            </p>

                            <button
                                className="mt-3 px-4 py-2 border rounded-md transition"
                                style={{
                                    borderColor: fontColor || "#fff",
                                    color: fontColor || "#fff",
                                }}
                                onClick={() => {
                                    if (!item?.url) return;
                                    const finalUrl = item.url.startsWith("http")
                                        ? item.url
                                        : `https://${item.url}`;
                                    window.open(finalUrl, "_blank", "noopener,noreferrer");
                                }}
                            >
                                Enquiry →
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default ProductServices;
