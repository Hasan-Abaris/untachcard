"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      image: "https://vcard.waptechy.com/assets/uploads/product-image/1627536923-tony-1.jpg",
      name: "Black Widow",
      rating: 5,
      text: "This is unbelievable. After using TimWork my business skyrocketed!",
    },
    {
      id: 2,
      image: "https://vcard.waptechy.com/assets/uploads/product-image/1627537722-Chris-Evans-title-character-Joe-Johnston-Captain-1.jpg",
      name: "Captain America",
      rating: 4,
      text: "TimWork is the best tool to make up projects quickly.",
    },
    {
      id: 3,
      image: "https://vcard.waptechy.com/assets/uploads/product-image/1627536923-tony-1.jpg",
      name: "Ironman",
      rating: 5,
      text: "Fantastic, I'm totally blown away by TimWork.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <i key={i} className="fas fa-star text-yellow-400"></i>
        ) : (
          <i key={i} className="far fa-star text-yellow-400"></i>
        )
      );
    }
    return stars;
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="card p-4 m-0 max-w-md w-full">
        <div className="card-header flex justify-center items-center p-2">
          <h4 className="text-xl font-semibold">Testimonials</h4>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-250 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 1)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[429px] mx-2"
              >
                <div className="pb-3">
                  <div className="product-item">
                    <div className="product-image">
                      <img
                        alt="image"
                        src={testimonial.image}
                        className="w-16 h-16 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <div className="product-details text-center mt-3">
                      <div className="product-name text-lg font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="product-review flex justify-center mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="text-small text-gray-600 mt-2">
                        {testimonial.text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Testimonial;