"use client";
import Image from "next/image";
import { FaExpand, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useRef } from "react";

const Gallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sliderRef = useRef();

  const goPrev = (e) => {
    e.stopPropagation(); // Prevent closing modal
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative pt-16 pb-10 px-4 sm:px-8 bg-white rounded-2xl shadow-xl border border-gray-200 max-w-5xl mx-auto overflow-hidden">
      {/* Decorative Vectors */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/vector3.png"
          alt="background vector"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-10 relative z-10">
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/left-ling-img.png"
          alt="left"
          width={80}
          height={20}
        />
        <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/right-line-img.png"
          alt="right"
          width={80}
          height={20}
        />
      </div>

      {/* Horizontal Slider */}
      <div className="relative z-10">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black/70"
        >
          <FaArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 relative rounded-xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={250}
                className="object-cover w-full h-56 transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center">
                <FaExpand className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black/70"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl w-full mx-4 flex items-center">
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              className="absolute left-0 ml-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-50"
            >
              <FaArrowLeft />
            </button>

            <Image
              src={images[selectedIndex]}
              alt="expanded"
              width={1000}
              height={700}
              className="rounded-lg object-contain w-full max-h-[90vh]"
            />

            {/* Right Arrow */}
            <button
              onClick={goNext}
              className="absolute right-0 mr-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-50"
            >
              <FaArrowRight />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full px-3 py-1 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
