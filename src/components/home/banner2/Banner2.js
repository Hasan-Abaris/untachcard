

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Banner2() {
    return (
        <section id="home" className="h-screen w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                // loop
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
                        style={{
                            backgroundImage: "url('/assets/banner/itapit_banner1 (1).jpg')",
                        }}
                    >
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                ITAP SMART BUSINESS CARDS
                            </h1>
                            <p className="mt-4 text-lg mb-6">
                                Customize stylish digital business cards
                            </p>
                            <Link href="#contact" className="mt-6 bg-transparent border border-white-600 text-white-600 px-6 py-3 rounded shadow hover:bg-red-600 hover:text-white transition-all duration-300  mt-4">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
                        style={{
                            backgroundImage: "url('/assets/banner/tapbanner.jpg')",
                        }}
                    >
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                DIGITAL SOLUTIONS
                            </h1>
                            <p className="mt-4 text-lg">Grow your business with us</p>
                            <Link href="#contact" className="mt-6 bg-transparent border border-white-600 text-white-600 px-6 py-3 rounded shadow hover:bg-red-600 hover:text-white transition-all duration-300  mt-4">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

