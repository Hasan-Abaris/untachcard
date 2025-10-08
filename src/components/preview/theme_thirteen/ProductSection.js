"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ProductSection = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!products || products.length === 0) return null;

  const goPrev = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const goNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="relative pt-16 px-8 sm:px-20 bg-white rounded-2xl shadow-xl border border-gray-200 max-w-6xl mx-auto">
      {/* Decorative Vector */}
      <div className="absolute -top-10 left-0 opacity-10">
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/vector6.png"
          alt="vector"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-center gap-4 mb-10 relative z-10">
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/left-ling-img.png"
          alt="left"
          width={80}
          height={20}
        />
        <h2 className="text-3xl font-bold text-gray-800">Products</h2>
        <Image
          src="https://vcards.infyom.com/assets/img/vcard38/right-line-img.png"
          alt="right"
          width={80}
          height={20}
        />
      </div>

      {/* Product Card Slider (One at a Time) */}
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-0 ml-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Product Card */}
        <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden text-center">
          <a
            href={products[currentIndex].link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="w-full h-64 relative">
              <Image
                src={products[currentIndex].image}
                alt={products[currentIndex].title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h5 className="text-black font-medium mb-2">
                {products[currentIndex].title}
              </h5>
              <p className="text-gray-700 font-semibold">${products[currentIndex].price}</p>
            </div>
          </a>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-0 mr-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-10"
        >
          <FaArrowRight />
        </button>
      </div>

    </section>
  );
};

export default ProductSection;
