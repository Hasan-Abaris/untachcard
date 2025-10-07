"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = ({ data }) => {
    const linkSend = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Portfolio</h3>
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
                        <div>
                            <img
                                src={item?.image}
                                alt="portfolio"
                                className="rounded-lg w-full"
                            />
                            <h4 className="mt-3 font-semibold">{item?.title}</h4>
                            <p className="text-gray-600 text-sm mt-2">
                                {item?.description} fvgfddfg
                            </p>
                            <button className="mt-4 border px-4 py-2 rounded-lg hover:bg-gray-100 transition" onClick={() => linkSend(item?.url)}>
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
