"use client";

import Image from "next/image";
import { FaExpand, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Gallery({ data = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No gallery images available
      </div>
    );
  }

  const goPrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const getImageSrc = (item) => {
    if (!item) return "";
    if (typeof item === "string") return item;
    return item.image || item.url || "";
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4 border border-gray-200 rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-8">Gallery</h2>

      <div className="relative flex justify-center items-center">
        <button
          onClick={goPrev}
          className="absolute left-0 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>

        <div
          className="relative w-80 h-56 sm:w-[400px] sm:h-[250px] cursor-pointer rounded-lg overflow-hidden shadow-sm"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={getImageSrc(data[selectedIndex])}
            alt={`Gallery image ${selectedIndex + 1}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex justify-center items-center opacity-0 hover:opacity-100 transition">
            <FaExpand className="text-white text-2xl" />
          </div>
        </div>

        <button
          onClick={goNext}
          className="absolute right-0 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl mx-4 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-0 ml-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-50"
            >
              <FaArrowLeft />
            </button>

            <Image
              src={getImageSrc(data[selectedIndex])}
              alt="Expanded image"
              width={1000}
              height={700}
              className="rounded-lg object-contain w-full max-h-[90vh]"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-0 mr-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-50"
            >
              <FaArrowRight />
            </button>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full px-3 py-1 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
