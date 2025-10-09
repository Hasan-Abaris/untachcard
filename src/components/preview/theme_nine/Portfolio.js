"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const Portfolio = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const router = useRouter();

    const linkSend = (url) => {
        if (url) window.open(url, "_blank");
    };

    // Dynamic theme values
    // const cardBg =
    //     dataDetails?.card_bg_type === "Transparent"
    //         ? "transparent"
    //         : dataDetails?.card_bg || "#000";

    // const fontColor = dataDetails?.card_font_color || "#fff";
    // const cardFont = dataDetails?.card_font || "inherit";
    // const themeBg =
    //     dataDetails?.card_theme_bg_type === "Transparent"
    //         ? "transparent"
    //         : dataDetails?.card_theme_bg || "#111";

    return (
        <div
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center"
            style={{
                background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
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
                        <div
                            className="rounded-xl shadow-md overflow-hidden p-4"
                            style={{
                                background:
                                    data?.card_theme_bg_type === "Image" &&
                                        data?.card_theme_bg
                                        ? `url(${data.card_theme_bg}) center/cover no-repeat`
                                        : themeBg,
                                color: fontColor,
                                fontFamily: cardFont,
                            }}
                        >
                            <img
                                src={
                                    item?.image
                                        ? item.image.startsWith("http")
                                            ? item.image
                                            : `/assets/assets/uploads/card-banner/${item.image}`
                                        : "/assets/banner/default.jpg"
                                }
                                alt={item?.title || "portfolio"}
                                className="w-full object-cover rounded-lg mb-4"
                            />
                            <h3 className="font-bold text-lg">{item?.title}</h3>
                            <p className="text-sm mt-2">{item?.description}</p>
                            {item?.url && (
                                <button
                                    className="mt-3 border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
                                    onClick={() => linkSend(item?.url)}
                                >
                                    View
                                </button>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Portfolio;
