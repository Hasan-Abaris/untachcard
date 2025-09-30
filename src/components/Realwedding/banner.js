"use client";
import React from "react";
import Image from "next/image";


const RealWeddingBanner = () => {
  return (
    <div className="relative w-full h-64 md:h-[50vh]">
       <Image
    src="/assets/banner/banner2.jpg"
    alt="Real Wedding"
    fill
    className="object-cover"
    style={{ objectPosition: "center 40%" }}
  />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center ">
        <h1 className="text-white text-6xl md:text-6xl font-bold">
          Wed<span className="text-pink-500">Me</span>Good 
        </h1>
        <h2 className="text-white text-xl md:text-3xl mt-2 font-serif">
          Real Weddings
        </h2>
        <p className="text-white text-sm md:text-4xl mt-1">
          REAL COUPLES · REAL INSPIRATION
        </p>
      </div>
    </div>
  );
};

export default RealWeddingBanner;
