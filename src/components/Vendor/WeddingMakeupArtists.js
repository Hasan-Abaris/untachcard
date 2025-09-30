"use client";
import React, { useRef, useEffect, useState } from "react";
import { allMakeupArtists } from "@/data/makeupArtistsData"; // your makeup artists data
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TrendingMakeupArtists = () => {
  const scrollContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && container.children.length > 0) {
      const card = container.children[0];
      const style = window.getComputedStyle(card);
      const gap = parseInt(window.getComputedStyle(container).gap || "0", 10);
      setCardWidth(card.offsetWidth + gap);
    }
    checkArrows();
    window.addEventListener("resize", checkArrows);
    return () => window.removeEventListener("resize", checkArrows);
  }, []);

  const checkArrows = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    setTimeout(checkArrows, 300);
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
    setTimeout(checkArrows, 300);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header & Arrows */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Wedding Makeup Artists
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full bg-white shadow-md transition-colors ${
                canScrollLeft ? "hover:bg-gray-100" : "opacity-50 cursor-not-allowed"
              }`}
              aria-label="Scroll Left"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`p-2 rounded-full bg-white shadow-md transition-colors ${
                canScrollRight ? "hover:bg-gray-100" : "opacity-50 cursor-not-allowed"
              }`}
              aria-label="Scroll Right"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Makeup Artist Cards (No scrollbar) */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden" // hides scrollbar
          >
            {allMakeupArtists.map((artist, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[340px] bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-[200px]">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    ⭐ {artist.rating.toFixed(1)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {artist.location}
                  </p>
                  <p className="text-lg font-bold text-pink-600 mt-3">
                    {artist.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingMakeupArtists;
