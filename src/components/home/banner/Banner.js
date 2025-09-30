"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";



const Banner = () => {
    const slides = [
        {
            img: "/assets/banner/banner2.jpg",
            title: "Your Wedding, Your Way",
            subtitle: "Find the best wedding vendors with thousands of trusted reviews",
        },
        {
            img: "/assets/banner/banner1.jpg",
            title: "Your Wedding, Your Way",
            subtitle: "Find the best wedding vendors with thousands of trusted reviews",
        },
        {
            img: "/assets/banner/banner3.jpg",
            title: "Your Wedding, Your Way",
            subtitle: "Find the best wedding vendors with thousands of trusted reviews",
        },
    ];

    return (
        <section className="relative mt-22">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                autoplay={{ delay: 4000 }}
                effect="fade"
                loop={true}
                navigation
                className="h-[80vh]"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-[80vh]">

                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />


                            <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-center text-white px-4">

                                <div className="mt-16 sm:mt-20 md:mt-28 lg:mt-40">
                                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4">
                                        {slide.title}
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-2xl tracking-widest border-y py-2 mb-6">
                                        {slide.subtitle}
                                    </p>


                                    <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center overflow-hidden w-full max-w-3xl">

                                        <select className="flex-1 p-3 text-gray-700 outline-none border-b md:border-b-0 md:border-r">
                                            <option>Select vendor type</option>
                                            <option>Photographer</option>
                                            <option>Caterer</option>
                                            <option>Decorator</option>
                                        </select>


                                        <select className="flex-1 p-3 text-gray-700 outline-none border-b md:border-b-0 md:border-r">
                                            <option>Select city</option>
                                            <option>Delhi</option>
                                            <option>Mumbai</option>
                                            <option>Kolkata</option>
                                        </select>


                                        <button className="bg-pink-600 text-white px-6 py-3 font-semibold hover:bg-pink-700 w-full md:w-auto">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    );
};

export default Banner;
