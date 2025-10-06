
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

export const Portfolio = ({ data }) => {
    const router = useRouter()
    const linkSend = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
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
                        <div className="rounded-lg overflow-hidden bg-gray-900 p-4">
                            <img
                                src={`/assets/assets/uploads/card-banner/${item?.image}`}
                                alt="portfolio"
                                className="rounded-lg w-full h-48 object-cover"
                            />
                            <p className="mt-4 text-sm text-gray-300">
                                {item?.description}
                            </p>
                            <button type="button" className="mt-3 px-4 py-2 border rounded hover:bg-gray-700" onClick={() => linkSend(item?.url)}>
                                View
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};