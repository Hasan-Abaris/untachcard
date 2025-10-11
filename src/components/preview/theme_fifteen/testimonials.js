"use client";
import Image from "next/image";
import { useState } from "react";

export default function TestimonialSlider({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-4">
        No testimonials available.
      </p>
    );
  }

  const testimonial = data[0]; // Use the first testimonial for static display

  return (
    <section className="relative py-10 px-6 bg-gray-100 max-w-4xl mx-auto">
      {/* Testimonials Label */}
      <div className="absolute top-6 left-6 bg-pink-500 text-white px-6 py-2 rounded-r-full font-semibold">
        Testimonials
      </div>

      {/* Testimonial Card */}
      <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 flex items-start space-x-6 mt-16">
        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
          <Image
            src={testimonial.image}
            alt={testimonial.title || testimonial.name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Testimonial Text */}
        <div className="flex-1">
          <p className="text-gray-700 text-base leading-relaxed max-w-prose">
            {testimonial.description || testimonial.message}
          </p>
        </div>
      </div>
    </section>
  );
}