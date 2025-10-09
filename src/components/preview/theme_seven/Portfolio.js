"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const linkSend = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (

        <div
            className="rounded-lg p-4 shadow-md max-w-md mx-auto"
            style={{
                background: cardBg || "#000",
                color: fontColor || "#fff",
            }}
        >
            <h3 className="font-semibold mb-3 text-center text-lg">
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
                        <div
                            className="rounded-lg p-3 transition-all"
                            style={{
                                background:
                                    cardBg === "transparent"
                                        ? "rgba(0,0,0,0.5)"
                                        : cardBg || "#111",
                                color: fontColor || "#fff",
                            }}
                        >
                            <img
                                src={
                                    item?.image?.startsWith("http")
                                        ? item.image
                                        : `https://res.cloudinary.com/uploads/${item.image}`
                                }
                                alt={item?.title || "portfolio"}
                                className="rounded-lg w-full object-cover"
                            />

                            <h4 className="mt-3 font-semibold">
                                {item?.title}
                            </h4>

                            <p
                                className="text-sm mt-2 opacity-80 line-clamp-3"
                                style={{
                                    color: fontColor
                                        ? `${fontColor}cc`
                                        : "#ccc",
                                }}
                            >
                                {item?.description}
                            </p>

                            <button
                                className="mt-4 border px-4 py-2 rounded-lg transition hover:opacity-80"
                                style={{
                                    borderColor: fontColor || "#fff",
                                    color: fontColor || "#fff",
                                }}
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
