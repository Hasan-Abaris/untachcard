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

        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center" style={{
            backgroundImage: "url('/assets/banner/theme-nine.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-xl font-bold mb-4">Portfolio</h2>
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
                        <div className="bg-white/80 rounded-xl shadow-md overflow-hidden">
                            <img
                                src={`/assets/assets/uploads/card-banner/${item?.image}`}
                                alt="portfolio"
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">{item?.title}</h3>
                                <p className="text-sm text-gray-700">
                                    {item?.description}
                                </p>
                                <button className="mt-3 border px-4 py-2 rounded-lg hover:bg-black hover:text-white" onClick={() => linkSend(item?.url)}>
                                    View
                                </button>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Portfolio;
