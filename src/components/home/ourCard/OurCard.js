"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Eye } from "lucide-react"; // 👁 Eye icon
import { useDispatch } from "react-redux";
import { fetchUseCard } from "@/app/reduxToolkit/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 👇 sirf image + theme ka data
const cards = [
    { theme: "Theme One", image: "https://vcard.waptechy.com/assets/uploads/themes/one.png", preview: "/preview/theme_one" },
    { theme: "Theme Two", image: "https://vcard.waptechy.com/assets/uploads/themes/two.png", preview: "/preview/theme_two" },
    { theme: "Theme Three", image: "https://vcard.waptechy.com/assets/uploads/themes/three.png", preview: "/preview/theme_three" },
    { theme: "Theme Four", image: "https://vcard.waptechy.com/assets/uploads/themes/four.png", preview: "/preview/theme_four" },
    { theme: "Theme Five", image: "https://vcard.waptechy.com/assets/uploads/themes/five.png", preview: "/preview/theme_five" },
    { theme: "Theme Six", image: "https://vcard.waptechy.com/assets/uploads/themes/six.png", preview: "/preview/theme_six" },
    { theme: "Theme Seven", image: "https://vcard.waptechy.com/assets/uploads/themes/seven.png", preview: '/preview/theme_seven/theme_seven/abdul-quadir-abaris-softech' },
    { theme: "Theme Eight", image: "https://vcard.waptechy.com/assets/uploads/themes/eight.png", preview: '/preview/theme_eight/theme_eight/Zabi' },
    { theme: "Theme Nine", image: "https://vcard.waptechy.com/assets/uploads/themes/nine.png", preview: '/preview/theme_nine/theme_nine/abdul-quadir-abaris-softech' },
    { theme: "Theme Ten", image: "https://vcard.waptechy.com/assets/uploads/themes/ten.png", preview: '/preview/theme_ten/theme_ten/Zabi' },
    { theme: "Theme Eleven", image: "https://vcard.waptechy.com/assets/uploads/themes/eleven.png", preview: '/preview/theme_eleven/theme_eleven/abdul-quadir-abaris-softech' },
    { theme: "Theme Twelve", image: "https://vcard.waptechy.com/assets/uploads/themes/twelve.png", preview: "" },
];

const OurCards = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(fetchUseCard());
    }, [dispatch]);

    const isLogin =
        typeof window !== "undefined" &&
        (localStorage.getItem("isLogin") === "true" ||
            localStorage.getItem("token"));

    // ✅ Handle click based on login
    const handlePreviewClick = (previewUrl) => {
        if (!isLogin) {
            router.push("/login2");
        } else {
            window.open(previewUrl, "_blank");
        }
    };

    return (
        <div className="w-full py-12 bg-gray-50">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800 uppercase mb-10">
                Our Cards
            </h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="max-w-7xl mx-auto px-4"
            >
                {cards.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center bg-white">
                            {/* Sirf Image */}
                            <div className="w-full h-100 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.theme}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* 👁 Preview Theme Button */}
                            <div className="w-full flex justify-center py-3">
                                <button
                                    onClick={() => handlePreviewClick(card.preview)}
                                    className="flex items-center gap-2 px-4 py-2 text-sm bg-pink-600 text-white rounded hover:bg-pink-700 transition"
                                >
                                    <Eye size={16} /> Preview {card.theme}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* <div className="max-w-7xl mx-auto px-4 flex justify-end mt-6">
                <Link href="/all-templates">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
                        View All Templates
                    </button>
                </Link>
            </div> */}
        </div>
    );
};

export default OurCards;
