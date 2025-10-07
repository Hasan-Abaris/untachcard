"use client";
import React from "react";

const Portfolio = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-400 text-center mt-4">No portfolios available.</p>;
  }

  return (
    <div className="portfolio-list max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
      {data.map((p) => (
        <div
          key={p._id}
          className="portfolio-item bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
        >
          <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-300 mb-2">{p.description}</p>
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg w-full h-48 object-cover mb-2"
            />
          )}
          {p.url && (
            <a
              href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
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
