"use client";
import React from "react";
import { allCategories } from "@/data/weddingCategoriesData"; 
const WeddingCategory = ({
  categories = allCategories,
  showHeader = true,
  showLink = true, 
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl  text-gray-800 mt-[3.0%]">
              Wedding Categories
            </h2>
            {showLink && (
              <a
                href="/vendors"
                className="text-pink-600 font-semibold hover:underline text-sm md:text-base"
              >
                View all Categories →
              </a>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories?.map((cat, i) => (
            <div
              key={i}
              className={`flex justify-between items-center rounded-xl p-6 bg-gradient-to-r ${cat.color} shadow-md hover:shadow-lg transition`}
            >
              <div className="max-w-[60%]">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{cat.desc}</p>
              </div>
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingCategory;
