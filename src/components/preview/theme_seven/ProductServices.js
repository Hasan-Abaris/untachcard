"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
const ProductServices = ({ data }) => {
    if (!data || data.length === 0) return null;
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Products and Services</h3>
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
                        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
                            <div className="relative">
                                <Image
                                    src={
                                        item.image.startsWith("http")
                                            ? item.image
                                            : `https://res.cloudinary.com/uploads/${item.image}`
                                    }
                                    alt={item.title}
                                    width={600}
                                    height={300}
                                    className="rounded-lg object-cover"
                                />
                                {/* {console.log();
                                } */}
                                {item.tag && (
                                    <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded text-xs">
                                        {item.tag}
                                    </span>
                                )}
                                {item.price && (
                                    <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs">
                                        Price: {item.price}
                                    </span>
                                )}
                            </div>

                            <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                            <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                                {item.description}
                            </p>

                            <button
                                className="mt-3 px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
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
