"use client";

import React, { useState, useEffect } from "react";

const Portfolio = ({ cardId }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cardId) {
      setError("Card ID is missing");
      return;
    }

    const fetchPortfolios = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://onlineparttimejobs.in/api/card/details/${cardId}`
        );
        const data = await response.json();
        console.log("📌 API Response:", data);

        if (data.portfolios && data.portfolios.length > 0) {
          setPortfolios(data.portfolios);
        } else {
          setError("No portfolios found for this card.");
        }
      } catch (err) {
        console.error("Error fetching portfolios:", err);
        setError("Failed to fetch portfolios.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, [cardId]);

  if (loading) return <p>Loading portfolios...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (portfolios.length === 0) return <p>No portfolios available.</p>;

  return (
    <div className="portfolio-list">
      {portfolios.map((p) => (
        <div key={p._id} className="portfolio-item">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          {p.image && (
            <img
              src={`https://onlineparttimejobs.in/uploads/${p.image}`}
              alt={p.title}
              style={{ maxWidth: "300px" }}
            />
          )}
          {p.url && (
            <p>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
