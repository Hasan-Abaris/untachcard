"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Gallery({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No gallery items available
      </div>
    );
  }

  const goPrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? data.length - 2 : prev - 2));
  };

  const goNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev >= data.length - 2 ? 0 : prev + 2));
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-4 bg-gray-100 relative">
      {/* Gallery Label */}
      <div className="bg-pink-500 text-white px-6 py-2 rounded-r-full font-semibold absolute top-4 left-4 z-10">
        Gallery
      </div>

      <div className="relative flex justify-center items-center mt-16">
        <button
          onClick={goPrev}
          className="absolute left-0 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>

        <div className="flex space-x-6">
          {data.slice(currentIndex, currentIndex + 2).map((item, idx) => (
            <div
              key={idx}
              className="relative w-64 h-64 bg-cork bg-cover bg-center rounded-xl shadow-md overflow-hidden"
              style={{
                backgroundImage: "url('https://via.placeholder.com/256?text=Corkboard')",
              }}
            >
              <Image
                src={item.url}
                alt={item.alt || "Gallery item"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goNext}
          className="absolute right-0 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(data.length / 2) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * 2)}
            className={`w-3 h-3 rounded-full transition-all ${
              Math.floor(currentIndex / 2) === i
                ? "bg-gray-800 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}