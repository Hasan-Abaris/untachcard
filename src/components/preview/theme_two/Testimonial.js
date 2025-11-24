"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonial = ({ data, cardStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <i key={i} className="fas fa-star text-yellow-400 mx-0.5"></i>
      ) : (
        <i key={i} className="far fa-star text-yellow-400 mx-0.5"></i>
      )
    );
  };

  const containerStyle = {
    fontFamily: cardStyles?.card_font || "Inter, sans-serif",
    color: cardStyles?.card_font_color || "#000",
  };

  return (
    <div className="my-14 flex justify-center" style={containerStyle}>
      <div className="w-full max-w-4xl p-4 rounded-lg">

        {/* Title */}
        <h3 className="text-4xl font-bold text-center mb-10 tracking-wide text-gray-900">
          Testimonials
        </h3>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((item, index) => (
              <div
                key={item._id || index}
                className="flex-shrink-0 w-full px-4"
              >
                {/* Testimonial Card */}
                <div className="
                  bg-white/80 
                  backdrop-blur-md 
                  p-8 
                  rounded-3xl 
                  shadow-xl 
                  border 
                  border-gray-100
                  hover:shadow-2xl 
                  transition-all 
                  duration-300 
                  text-center
                  max-w-lg
                  mx-auto
                ">
                  
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-full mx-auto shadow-xl ring-2 ring-gray-300"
                  />

                  {/* Title */}
                  <h4 className="mt-5 text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  {/* Rating */}
                  <div className="flex justify-center mt-2">
                    {renderStars(item.rating)}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-700 leading-relaxed text-base px-2 italic">
                    “{item.description}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {data.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition shadow-lg"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition shadow-lg"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
