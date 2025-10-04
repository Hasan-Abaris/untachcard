"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ThemeOne from "./ThemeOne";
import Product from "./product";
import Portfolio from "./portfolio";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Qr from "./Qr";
import Enquiry from "./Enquiry";
import Services from "./Services";

const Themeonepage = () => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example slug → "Zabi"
  const slug = "Zabi";  

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await axios.get(`https://onlineparttimejobs.in/api/card/details/${slug}`);

        if (res.data.success && res.data.data.length > 0) {
          setCard(res.data.data[0]); 
        } else {
          setError("Card not found.");
        }
      } catch (err) {
        console.error("API error:", err.response?.data || err);
        setError(err.response?.data?.message || "API Error");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading card...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!card) return <p className="text-center mt-10">No card data available.</p>;

  return (
    <div>
      <ThemeOne card={card} />
      <Product card={card} />
<Portfolio cardId={card.id || slug} />
      <Gallery card={card} />
      <Testimonial card={card} />
      <Qr card={card} />
      <Enquiry card={card} />
      <Services card={card} />
    </div>
  );
};

export default Themeonepage;
