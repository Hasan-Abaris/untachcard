"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const Portfolio = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const linkSend = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (
        <div
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
            style={{
                backgroundImage: "url('/assets/banner/theme-ten.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h3 className="font-bold text-lg mb-4 text-center">
                Portfolio
            </h3>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg"
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-transparent rounded-lg p-4 backdrop-blur-sm shadow-md">
                            {/* Portfolio Image */}
                            <img
                                src={
                                    item?.image?.startsWith("http")
                                        ? item.image
                                        : `/assets/assets/uploads/card-banner/${item?.image}`
                                }
                                alt={item?.title || "Portfolio"}
                                className="rounded-lg w-full object-cover"
                            />

                            {/* Portfolio Info */}
                            <h4 className="mt-3 font-semibold">{item?.title}</h4>
                            <p className="text-gray-200 text-sm mt-2 line-clamp-3">
                                {item?.description}
                            </p>

                            {/* View Button */}
                            <button
                                className="mt-4 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                                onClick={() => linkSend(item?.url)}
                            >
                                View →
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Portfolio;
