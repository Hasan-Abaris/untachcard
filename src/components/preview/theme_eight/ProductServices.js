"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import Image from "next/image";
const ProductServices = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    if (!data || data.length === 0) return null;
    return (
        <div
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto"
            style={{ background: themeBg, color: fontColor, fontFamily: cardFont }}
        >
            <h2 className="text-center font-semibold text-lg mb-4" >{data?.section_title || "Products and Services"}</h2>

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
                            style={{ background: cardBg, color: fontColor, fontFamily: cardFont }}
                        >
                            <div className="relative">
                                <Image
                                    src={
                                        item.image.startsWith("http")
                                            ? item.image
                                            : `/assets/assets/uploads/product-image/${item.image}`
                                    }
                                    alt={item.title || "Product"}
                                    width={600}
                                    height={300}
                                    className="rounded-lg object-cover"
                                />
                                {item.tag && (
                                    <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs" style={{ background: fontColor, color: cardBg }}>
                                        {item.tag}
                                    </span>
                                )}
                                {item.price && (
                                    <span className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs" style={{ background: `${fontColor}80`, color: cardBg }}>
                                        Price: {item.price}
                                    </span>
                                )}
                            </div>

                            <h4 className="mt-4 text-lg font-semibold" style={{ color: fontColor }}>{item.title}</h4>
                            <p className="text-sm mt-2 line-clamp-3" style={{ color: fontColor }}>
                                {item.description}
                            </p>

                            <button
                                className="mt-3 px-4 py-2 rounded-md transition"
                                style={{ border: `1px solid ${fontColor}`, color: fontColor, fontFamily: cardFont }}
                                onClick={() => {
                                    if (!item?.url) return;
                                    const finalUrl = item.url.startsWith("http") ? item.url : `https://${item.url}`;
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
