
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

export const Portfolio = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const router = useRouter()
    const linkSend = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (
        <div
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto backdrop-blur-lg"
            style={{
                background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h2 className="text-lg font-semibold mb-4 text-center">Portfolio</h2>
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
                        <div className="rounded-lg overflow-hidden p-4 bg-white/10 backdrop-blur-sm">
                            <img
                                src={`/assets/assets/uploads/card-banner/${item?.image}`}
                                alt={item?.title || "portfolio"}
                                className="rounded-lg w-full h-48 object-cover"
                            />
                            <p className="mt-4 text-sm text-gray-300">{item?.description}</p>
                            <button
                                type="button"
                                className="mt-3 px-4 py-2 border rounded hover:bg-gray-700 hover:text-white transition"
                                onClick={() => linkSend(item?.url)}
                            >
                                View
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};