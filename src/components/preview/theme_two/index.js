"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./product";
import Portfolio from "./portfolio";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Qr from "./Qr";
import Enquiry from "./Enquiry";
import Services from "./Services";
import ProfileCard from "./ThemeOne";

function Themetwopage() {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const slug = "Zabi"; // or pass dynamically

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await axios.get(
          `https://onlineparttimejobs.in/api/card/details/${slug}`
        );
        if (res.data.success && res.data.data.length > 0) {
          setCard(res.data.data[0]);
        }
      } catch (err) {
        console.error("Error fetching card:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading card...</p>;
  if (!card) return <p className="text-center mt-10">No card found</p>;

  return (
    <div>
      <ProfileCard card={card} />
      <Product card={card} />
      <Portfolio card={card} />
      <Gallery card={card} />
      <Testimonial card={card} />
      <Qr card={card} />
      <Enquiry card={card} />
      <Services card={card} />
    </div>
  );
}

export default Themetwopage;
