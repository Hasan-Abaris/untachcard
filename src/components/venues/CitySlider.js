'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cities = [
    { name: 'Delhi NCR', img: '/assets/cityimage/c1.webp' },
    { name: 'Mumbai', img: '/assets/cityimage/c2.jpg' },
    { name: 'Bangalore', img: '/assets/cityimage/c3.png' },
    { name: 'Hyderabad', img: '/assets/cityimage/c4.webp' },
    { name: 'Chennai', img: '/assets/cityimage/c5.jpg' },
    { name: 'Goa', img: '/assets/cityimage/c6.jpg' },
    { name: 'Jaipur', img: '/assets/cityimage/c7.webp' },
    { name: 'Pune', img: '/assets/cityimage/c8.jpg' },
    { name: 'Kolkata', img: '/assets/cityimage/c9.jpg' },
    { name: 'Lucknow', img: '/assets/cityimage/c10.jpeg' },
];

export default function CitySlider() {
    return (
        <div className="my-4">
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                navigation
                modules={[Navigation]}
                className="flex items-center"
            >
                {cities.map((city, i) => (
                    <SwiperSlide key={i} className="!w-[80px] sm:!w-[100px] text-center">
                        <img
                            src={city.img}
                            alt={city.name}
                            className="rounded-full w-16 h-16 mx-auto object-cover"
                        />
                        <p className="text-sm mt-1">{city.name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
