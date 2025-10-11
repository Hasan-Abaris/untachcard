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
        No products available.
      </p>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto p-4 bg-white"
      style={{
        fontFamily: cardData?.card_font || "sans-serif",
      }}
    >
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 border-b border-gray-300 pb-2 relative">
        <span className="bg-white px-4">Products</span>
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((p) => (
          <div
            key={p._id}
            className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
            style={{
              color: cardData?.card_font_color || "#ffffff",
            }}
          >
            {/* Image */}
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg w-full h-48 object-cover mb-2"
              />
            )}

            {/* Title */}
            <h3
              className="text-lg font-semibold mb-2"
              style={{
                color: cardData?.card_font_color || "#ffffff",
              }}
            >
              {p.title}
            </h3>

            {/* Description */}
            <p
              className="mb-2 text-gray-300"
              style={{
                opacity: 0.9,
              }}
            >
              {p.description}
            </p>

            {/* Price */}
            <p
              className="text-xl font-bold mb-2"
              style={{
                color: cardData?.card_font_color || "#ffffff",
              }}
            >
              ₹{p.price || "N/A"}
            </p>

            {/* Link */}
            {p.url && (
              <a
                href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
                style={{
                  fontFamily: cardData?.card_font || "inherit",
                }}
              >
                Visit
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;