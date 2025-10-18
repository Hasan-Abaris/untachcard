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
      className="portfolio-wrapper w-full flex justify-center"
      style={{
        background: "transparent", // ✅ No background at all
        fontFamily: cardData?.card_font || "sans-serif",
        padding: "1rem",
      }}
    >
      <div
        className="portfolio-list grid gap-6 justify-center auto-rows-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {data.map((p) => (
          <div
            key={p._id}
            className="portfolio-item rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
            style={{
              backgroundColor: "white", // ✅ Only the cards remain white
              color: cardData?.card_font_color || "#000000",
              minWidth: "250px",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <h3
              className="text-lg font-semibold mb-2 text-center"
              style={{ color: cardData?.card_font_color || "#000000" }}
            >
              {p.title}
            </h3>
            <p
              className="mb-2 text-center"
              style={{
                color: cardData?.card_font_color || "#333333",
                opacity: 0.9,
              }}
            >
              {p.description}
            </p>
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
                className="hover:underline block text-center"
                style={{
                  color: "#2563eb",
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
