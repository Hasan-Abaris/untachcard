"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonial = ({ data, cardStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ If no testimonials, show nothing
  if (!data || data.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <i key={i} className="fas fa-star text-yellow-400 mx-0.5"></i>
        ) : (
          <i key={i} className="far fa-star text-yellow-400 mx-0.5"></i>
        )
      );
    }
    return stars;
  };

  // ✅ No large white bg — just natural page color
  const containerStyle = {
    background: "transparent",
    fontFamily: cardStyles?.card_font || "sans-serif",
    color: cardStyles?.card_font_color || "#000000",
  };

  return (
    <div className="my-8 flex justify-center bg-black" style={containerStyle}>
      <div className="w-full max-w-4xl p-4 rounded-lg">
        {/* Section Title */}
        <h3 className="text-2xl font-bold text-center mb-6">Testimonials</h3>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((testimonial, index) => (
              <div
                key={testimonial._id || index}
                className="flex-shrink-0 w-full md:w-96 mx-auto px-2"
              >
                {/* ✅ Small white card only */}
                <div className="bg-white rounded-lg p-4 shadow text-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                  <h4 className="mt-3 text-lg font-semibold">
                    {testimonial.name}
                  </h4>
                  <div className="flex justify-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-black mt-2">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {data.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
