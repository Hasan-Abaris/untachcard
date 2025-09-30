

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner2() {
    return (
        <section id="home" className="h-screen w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="h-full"
            >
                <SwiperSlide>
                    <div
                        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
                        style={{ backgroundImage: "url('/assets/banner/itapit_banner1 (1).jpg')" }}
                    >
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold">ITAP SMART BUSINESS CARDS</h1>
                            <p className="mt-4 text-lg">Customize stylish digital business cards</p>
                            <button className="mt-6 bg-blue-600 px-6 py-3 rounded shadow">Contact Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
                        style={{ backgroundImage: "url('/assets/banner/tapbanner.jpg')" }}
                    >
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold">DIGITAL SOLUTIONS</h1>
                            <p className="mt-4 text-lg">Grow your business with us</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

