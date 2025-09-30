"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogPosts = [
    {
        img: "/assets/banner/lb1.jpeg",
        title: "This Couple Tied The Knot With A Cosy Court Wedding",
        description:
            "Not all love stories need grandeur, sometimes it’s the quiet, intimate ones that touch the heart the most.",
        date: "17 Sep, 2025",
    },
    {
        img: "/assets/banner/lb2.jpg",
        title: "This Delhi Wedding Had Pinterest-Pretty Décor",
        description:
            "If we had to describe this wedding in three words, it would be pretty, personal, and playful.",
        date: "15 Sep, 2025",
    },
    {
        img: "/assets/banner/lb3.jpg",
        title: "Sister Of The Bride Style – Meet Komal",
        description:
            "Talk about brides stealing the show, but what about the sister who knows exactly how to turn heads?",
        date: "15 Sep, 2025",
    },
    {
        img: "/assets/banner/lb1.jpeg",
        title: "Sister Of The Bride Style – Meet Komal",
        description:
            "Talk about brides stealing the show, but what about the sister who knows exactly how to turn heads?",
        date: "15 Sep, 2025",
    },
];

const LatestBlog = () => {
    return (
        <section className="py-12 px-4 md:px-10 bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">
                Latest Blogs
            </h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1.1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {blogPosts.map((post, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-full">
                            {/* fixed image height */}
                            <div className="overflow-hidden h-56">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            {/* text block with min-height */}
                            <div className="p-4 flex flex-col justify-between min-h-[150px]">
                                <div>
                                    <h3 className="text-lg font-semibold line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>
                                <p className="text-gray-400 text-xs mt-2">{post.date}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default LatestBlog;
