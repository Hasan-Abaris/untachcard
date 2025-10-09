"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonial = ({ data, cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data || data.length === 0) {
    return (
      <p
        className="text-center mt-4"
        style={{
          color: cardData?.card_font_color || "#9ca3af",
          fontFamily: cardData?.card_font || "sans-serif",
        }}
      >
        No testimonials available.
      </p>
    );
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

  // ✅ Dynamic styles
  const styles = {
    container: {
      background:
        cardData?.card_bg_type === "Color"
          ? cardData?.card_bg || "#f3f4f6"
          : cardData?.card_bg_type === "Image"
          ? `url(${cardData?.card_bg}) center/cover no-repeat`
          : "#f3f4f6",
      color: cardData?.card_font_color || "#000",
      fontFamily: cardData?.card_font || "sans-serif",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "1.5rem",
      margin: "2rem auto",
      maxWidth: "80rem",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "1.5rem",
      color: cardData?.card_font_color || "#111827",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "1rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      textAlign: "center",
    },
    name: {
      marginTop: "0.75rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: cardData?.card_font_color || "#111",
    },
    text: {
      color: "#4b5563",
      marginTop: "0.5rem",
      fontSize: "0.95rem",
      lineHeight: "1.4",
    },
    arrowBtn: {
      backgroundColor: cardData?.card_font_color || "#1f2937",
      color: "#fff",
      padding: "0.5rem",
      borderRadius: "50%",
      cursor: "pointer",
      border: "none",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div className="my-8 flex justify-center">
      <div style={styles.container}>
        {/* Section Title */}
        <h3 style={styles.title}>Testimonials</h3>

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
                <div style={styles.card}>
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                  <h4 style={styles.name}>{testimonial.name}</h4>
                  <div className="flex justify-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p style={styles.text}>{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {data.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                style={{ ...styles.arrowBtn, position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                style={{ ...styles.arrowBtn, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}
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
