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
    <section className="relative py-16 px-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/left-ling-img.png"
          alt="left-line"
          width={60}
          height={20}
          className="opacity-80"
        />
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide">
          Testimonials
        </h2>
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/right-line-img.png"
          alt="right-line"
          width={60}
          height={20}
          className="opacity-80"
        />
      </div>

      {/* Card */}
      <div className="relative bg-white border border-gray-100 shadow-lg rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-xl">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-4 border-gray-200 mb-6">
          <Image
            src={testimonial.image}
            alt={testimonial.title || testimonial.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed max-w-3xl italic mb-8">
          “{testimonial.description || testimonial.message}”
        </p>

        <h5 className="text-lg md:text-xl font-semibold text-gray-900">
          {testimonial.title || testimonial.name}
        </h5>
        {testimonial.designation && (
          <span className="text-sm text-gray-500 mt-1">
            {testimonial.designation}
          </span>
        )}

        {/* Navigation */}
        <button
          onClick={goPrev}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-800 p-3 rounded-full hover:bg-gray-200 shadow-sm transition"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-800 p-3 rounded-full hover:bg-gray-200 shadow-sm transition"
        >
          <FaArrowRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-gray-800 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
