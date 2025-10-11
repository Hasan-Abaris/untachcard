"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Gallery({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 text-lg">
        No gallery items available
      </div>
    );
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-6 relative text-center">
      {/* Heading */}
      <div className="mb-8">
        <div className="w-12 h-[2px] bg-gray-400 mx-auto mb-2" />
        <h2 className="text-3xl font-semibold text-gray-800">Gallery</h2>
      </div>

      {/* Image Display */}
      <div className="relative flex justify-center items-center">
        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute left-0 md:left-8 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all"
        >
          <FaArrowLeft />
        </button>

        {/* Image Container */}
        <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={data[currentIndex].url}
            alt={data[currentIndex].alt || "Gallery image"}
            fill
            className="object-cover"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute right-0 md:right-8 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === i
                ? "bg-gray-800 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
