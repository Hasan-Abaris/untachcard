"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";


const Portfolio = ({ data }) => {
    // console.log(data);
    const router = useRouter()
    const linkSend = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }

    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Portfolio</h2>
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
                                src={item?.image}
                                alt="portfolio"
                                className="rounded-lg w-full h-48 object-cover"
                            />
                            <p className="mt-4 text-sm text-gray-300">
                                {item?.description}
                            </p>
                            <button type="button" className="mt-3 px-4 py-2 border rounded hover:bg-gray-700" onClick={() => linkSend(`${item?.url}`)}>
                                View
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Portfolio;
