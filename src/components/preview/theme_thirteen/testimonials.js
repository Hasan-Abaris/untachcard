"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function TestimonialSlider({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-4">
        No testimonials available.
      </p>
    );
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const testimonial = data[currentIndex];

  return (
    <section className="relative pt-16 px-4 sm:px-8 bg-white rounded-2xl shadow-xl max-w-5xl mx-auto">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/left-ling-img.png"
          alt="left"
          width={80}
          height={20}
        />
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/right-line-img.png"
          alt="right"
          width={80}
          height={20}
        />
      </div>

      {/* Testimonial Card */}
      <div className="relative flex flex-col items-center justify-center bg-gray-50 p-8 rounded-xl shadow-md">
        <p className="text-center text-gray-700 mb-6">
          {testimonial.description || testimonial.message}
        </p>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.title || testimonial.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <h5 className="text-gray-800 font-semibold">
            {testimonial.title || testimonial.name}
          </h5>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <button
            onClick={goPrev}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <button
            onClick={goNext}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
