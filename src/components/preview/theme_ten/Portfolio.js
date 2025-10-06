"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const Portfolio = ({ data }) => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4">Portfolio</h3>
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
                                src={`/assets/assets/uploads/card-banner/${item?.image}`}
                                alt="portfolio"
                                className="rounded-lg w-full"
                            />
                            <h4 className="mt-3 font-semibold">{item?.title}</h4>
                            <p className="text-gray-600 text-sm mt-2">
                                {item?.description}
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
