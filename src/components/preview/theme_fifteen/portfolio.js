"use client";
import React from "react";

const Portfolio = ({ data, cardData }) => {
  if (!data || data.length === 0) {
    return (
      <p
        className="text-center mt-4"
        style={{
          color: cardData?.card_font_color || "#9ca3af",
          fontFamily: cardData?.card_font || "sans-serif",
        }}
      >
        No portfolios available.
      </p>
    );
  }

  return (
    <div
      className="portfolio-list max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center"
      style={{
        background:
          cardData?.card_bg_type === "Color"
            ? cardData?.card_bg || "#f9fafb"
            : cardData?.card_bg_type === "Image"
            ? `url(${cardData?.card_bg}) center/cover no-repeat`
            : "#f9fafb",
        fontFamily: cardData?.card_font || "sans-serif",
      }}
    >
      {data.map((p) => (
        <div
          key={p._id}
          className="portfolio-item rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
          style={{
            backgroundColor: cardData?.card_theme_bg || "#ffffff",
            color: cardData?.card_font_color || "#000000",
          }}
        >
          {/* Title */}
          <h3
            className="text-lg font-semibold mb-2"
            style={{
              color: cardData?.card_font_color || "#000000",
            }}
          >
            {p.title}
          </h3>

          {/* Description */}
          <p
            className="mb-2"
            style={{
              color: cardData?.card_font_color || "#333333",
              opacity: 0.9,
            }}
          >
            {p.description}
          </p>

          {/* Image */}
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg w-full h-48 object-cover mb-2"
            />
          )}

          {/* Link */}
          {p.url && (
            <a
              href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{
                color: "#2563eb", // You can make this dynamic too if needed
                fontFamily: cardData?.card_font || "inherit",
              }}
            >
              Visit
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
