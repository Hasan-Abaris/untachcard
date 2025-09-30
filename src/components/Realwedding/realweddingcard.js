"use client";
import React from "react";
import { weddingData}  from "../../data/weddingcardData"

const RealWeddingCards = () => {
  return (
<div className="max-w-[1200px] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">      {weddingData.map((wedding) => (
        <div
          key={wedding.id}
          className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <img
            src={wedding.mainImage}
            alt={wedding.couple}
            className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay for photo count */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            {wedding.photosCount} Photos
          </div>

          {/* Couple and Location */}
          <div className="p-3 bg-white">
            <h3 className="text-lg font-semibold">{wedding.couple}</h3>
            <p className="text-gray-500 text-sm flex items-center">
              <span className="mr-1">📍</span> {wedding.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RealWeddingCards;
