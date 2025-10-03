"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { fetchUseCard } from "@/app/reduxToolkit/slice";
import Link from "next/link";

const cards = [
    {
        theme: "Theme Two",
        bg: "bg-gray-100",
        headerBg: "bg-black",
        name: "John Doe",
        title: "CEO",
        desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
        theme: "Theme Three",
        bg: "bg-white",
        headerBg: "bg-cyan-600",
        name: "John Doe",
        title: "CEO",
        desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
        theme: "Theme Four",
        bg: "bg-white",
        headerBg: "bg-white",
        name: "John Doe",
        title: "CEO",
        desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
        theme: "Theme Five",
        bg: "bg-black text-white",
        headerImg: "/cover.jpg", // Replace with real image
        name: "John Doe",
        title: "CEO - My Company",
        desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
        theme: "Theme Five",
        bg: "bg-black text-white",
        headerImg: "/cover.jpg", // Replace with real image
        name: "John Doe",
        title: "CEO - My Company",
        desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
];

const OurCards = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUseCard());
    }, [dispatch]);
    return (
        <div className="w-full py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 uppercase mb-10">
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
                        <div
                            className={`rounded-xl shadow-lg overflow-hidden flex flex-col items-center ${card.bg}`}
                        >
                            {/* Header */}
                            {card.headerImg ? (
                                <div className="w-full h-32 overflow-hidden">
                                    <img
                                        src={card.headerImg}
                                        alt="cover"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className={`w-full h-20 ${card.headerBg}`}></div>
                            )}

                            {/* Profile */}
                            <div className="-mt-10 w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold">
                                JD
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{card.name}</h3>
                                <p className="text-sm text-gray-500">{card.title}</p>
                                <p className="text-xs text-gray-400 mt-2">{card.desc}</p>

                                {/* Contact */}
                                <div className="mt-4 space-y-2 text-sm">
                                    <div className="flex items-center gap-2 justify-center">
                                        <Mail size={16} /> help@yourdomain.com
                                    </div>
                                    <div className="flex items-center gap-2 justify-center">
                                        <Phone size={16} /> +910000000000
                                    </div>
                                    <div className="flex items-center gap-2 justify-center">
                                        <Globe size={16} /> https://yourdomain.com
                                    </div>
                                    <div className="flex items-center gap-2 justify-center">
                                        <MapPin size={16} /> Your, Address, Goes, Here
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between w-full px-4 py-3 border-t">
                                <button className="text-xs px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                                    Add to Phone Book
                                </button>
                                <button className="text-xs px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                                    Share
                                </button>
                            </div>

                            <div className="w-full flex justify-center py-3">
                                <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded">
                                    Preview {card.theme}
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
    );
};

export default OurCards;
