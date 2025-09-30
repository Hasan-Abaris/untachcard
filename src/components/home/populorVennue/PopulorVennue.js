"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const PopulorVennue = () => {
    const venues = [
        {
            img: "/assets/banner/p1.jpeg",
            title: "Party Restaurants / Lounge",
            cities: "Mumbai | Bangalore | Pune",
        },
        {
            img: "/assets/banner/p2.jpg",
            title: "Forts / Palaces For Wedding",
            cities: "Mumbai | Bangalore | Pune",
        },
        {
            img: "/assets/banner/p3.jpg",
            title: "Destination Wedding Venues",
            cities: "Mumbai | Bangalore | Pune",
        },
        {
            img: "/assets/banner/p4.jpeg",
            title: "Banquet Halls",
            cities: "Mumbai | Bangalore | Pune",
        },
        {
            img: "/assets/banner/p4.jpeg",
            title: "Banquet Halls",
            cities: "Mumbai | Bangalore | Pune",
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center">
                    Popular Venue Searches
                </h2>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {venues.map((venue, i) => (
                        <SwiperSlide key={i}>
                            <Link href="/weddingDetails">
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
    <img
      src={venue.img}
      alt={venue.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-900 truncate">
        {venue.title}
      </h3>
      <p className="text-sm text-pink-600">{venue.cities}</p>
      <span className="text-pink-500 text-sm font-medium cursor-pointer">
        More
      </span>
    </div>
  </div>
</Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PopulorVennue;
