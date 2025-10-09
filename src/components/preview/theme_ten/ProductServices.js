"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

const ProductServices = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    if (!data || data.length === 0) return null;
    //     style = {{
    //         background: cardBg || themeBg || "#fce7f3",
    //             backgroundImage: cardImage
    //                 ? `url(${cardImage})`
    //                 : `url('/assets/banner/theme-ten.jpg')`,
    //                 backgroundSize: "cover",
    //                     backgroundPosition: "center",
    //                         color: fontColor || "#000000",
    //                             fontFamily: cardFont || "inherit",
    //             }
    // }
    return (
        <div
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
            style={{
                background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h3 className="font-bold text-lg mb-4 text-center">
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
                        <div className="bg-transparent rounded-xl p-4 shadow-md backdrop-blur-sm">
                            {/* Product Image */}
                            <div className="relative">
                                <Image
                                    src={
                                        item.image?.startsWith("http")
                                            ? item.image
                                            : `https://res.cloudinary.com/uploads/${item.image}`
                                    }
                                    alt={item.title || "Product"}
                                    width={600}
                                    height={300}
                                    className="rounded-lg object-cover w-full h-60"
                                />

                                {/* Optional Tags */}
                                {item.tag && (
                                    <span className="absolute top-2 right-2 bg-white/80 text-black px-2 py-1 rounded text-xs shadow">
                                        {item.tag}
                                    </span>
                                )}
                                {item.price && (
                                    <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                                        Price: {item.price}
                                    </span>
                                )}
                            </div>

                            {/* Product Info */}
                            <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                            <p className="text-gray-200 text-sm mt-2 line-clamp-3">
                                {item.description}
                            </p>

                            {/* Button */}
                            <button
                                className="mt-3 px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
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
