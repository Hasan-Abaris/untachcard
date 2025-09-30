
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const stories = [
    {
        id: 1,
        name: "Saumya and Karamveer",
        desc: "Gorgeous Anand Karaj In Amritsar That Was A Total Serve!",
        date: "12 September 2025",
        image: "/assets/banner/ws1.jpg",
    },
    {
        id: 2,
        name: "Rutwika and Abhijit",
        desc: "This Telugu Wedding Has All The Bridal Inspo You’ve Been Looking For!",
        date: "27 November 2024",
        image: "/assets/banner/ws2.jpg",
    },
    {
        id: 3,
        name: "Nanda and Rajath",
        desc: "Pastels, Greens & Outdoor Scenes! This Kerala Engagement Was A Total WedMeGood Win!",
        date: "23 January 2025",
        image: "/assets/banner/ws3.jpg",
    },
    {
        id: 4,
        name: "Lisha and Aman",
        desc: "A Jaipur Wedding With Pretty Views & Pastel Magic!",
        date: "23 January 2025",
        image: "/assets/banner/ws4.jpg",
    },
    // add more stories here if needed
];

const RealWeddingStories = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                    Real Wedding Stories
                </h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {stories.map((story) => (
                        <SwiperSlide key={story.id}>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {story.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">{story.desc}</p>
                                    <p className="text-gray-400 text-xs mt-3">{story.date}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RealWeddingStories;
