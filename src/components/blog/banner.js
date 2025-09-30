"use client";
import React from "react";
import Link from "next/link";

const blogBanners = [
  {
    id: 1,
    href: "/blog/minimalist-goals-this-vineyard-wedding-in-italy-is-your-inspo",
    img: "https://image.wedmegood.com/resized-nw/950X400/wp-content/uploads/2025/09/Collage_Fotor15.jpg",
    title: "Minimalist Goals? This Vineyard Wedding In Italy Is Your Inspo!",
  },
  {
    id: 2,
    href: "/blog/noura-nectar-from-skinn-by-titan-the-fragrance-every-modern-bride-needs-in-her-trousseau",
    img: "https://image.wedmegood.com/resized-nw/950X400/wp-content/uploads/2025/09/Collage_Fotor12.jpg",
    title:
      "NOURA Nectar from Skinn by Titan: The Fragrance Every Modern Bride Needs in Her Trousseau!",
  },
];

function BlogBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 ">
      {blogBanners.map((banner) => (
        <Link key={banner.id} href={banner.href}>
          <div
            className="relative h-72 md:h-96  overflow-hidden shadow-lg group cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.img})` }}
          >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

            {/* Title Text */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <h2 className="text-white text-lg md:text-2xl font-serif font-semibold drop-shadow-lg tracking-wide leading-snug group-hover:scale-105 transition-transform duration-300">
                {banner.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogBanner;
