"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Eye, Section } from "lucide-react"; // 👁 Eye icon
import { useDispatch } from "react-redux";
import { fetchUseCard } from "@/app/reduxToolkit/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 👇 sirf image + theme ka data
const cards = [
    { theme: "Theme One", image: "/assets/theme/theme1.png", preview: "/preview/theme_one/theme_one/demo" },
    { theme: "Theme Two", image: "/assets/theme/theme2.png", preview: "/preview/theme_two/theme_two/demo" },
    { theme: "Theme Three", image: "/assets/theme/theme3.png", preview: "/preview/theme_three/theme_three/demo" },
    { theme: "Theme Four", image: "/assets/theme/theme4.png", preview: "/preview/theme_four/theme_four/demo" },
    { theme: "Theme Five", image: "/assets/theme/theme5.png", preview: "/preview/theme_five/theme_five/demo" },
    { theme: "Theme Six", image: "/assets/theme/theme6.png", preview: "/preview/theme_six/theme_six/demo" },
    { theme: "Theme Seven", image: "/assets/theme/theme7.png", preview: '/preview/theme_seven/theme_seven/demo' },
    { theme: "Theme Eight", image: "/assets/theme/theme8.png", preview: '/preview/theme_eight/theme_eight/demo' },
    { theme: "Theme Nine", image: "/assets/theme/theme9.png", preview: '/preview/theme_nine/theme_nine/demo' },
    { theme: "Theme Ten", image: "/assets/theme/theme10.png", preview: '/preview/theme_ten/theme_ten/demo' },
    { theme: "Theme Eleven", image: "/assets/theme/theme11.png", preview: '/preview/theme_eleven/theme_eleven/demo' },
    { theme: "Theme Twelve", image: "/assets/theme/theme12.png", preview: "/preview/theme_twelve/theme_twelve/demo" },
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
        window.open(previewUrl, "_blank");
        // if (!isLogin) {
        //     router.push("/login2");
        // } else {
        //     window.open(previewUrl, "_blank");
        // }
    };

    return (
        <section id="brochure">
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

                <div className="max-w-7xl mx-auto px-4 flex justify-end mt-6">
                <Link href="/all-templates">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
                        View All Templates
                    </button>
                </Link>
            </div>
            </div>
        </section>
    );
};

export default OurCards;
