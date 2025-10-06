"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { base_url } from "@/server";

import Product from "./product";
import Portfolio from "./portfolio";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Qr from "./Qr";
import Enquiry from "./Enquiry";
import Services from "./Services";
import ProfileCard from "./profile";

const ThemeThreepage = () => {
  const params = useParams(); // get slug from URL
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCardData = async (slug) => {
    try {
      const token = window.localStorage.getItem("token");

      // Try fetching card by slug
      const res = await axios.get(`${base_url}card/details/${slug}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res?.data?.data?.length > 0) {
        setCardData(res.data.data[0]);
      } else {
        // fallback to demo API if primary returns nothing
        const demoRes = await axios.get(`${base_url}card/demo`);
        setCardData(demoRes.data.data[0]);
      }
    } catch (err) {
      console.error("Primary API failed, using demo:", err);
      try {
        const demoRes = await axios.get(`${base_url}card/demo`);
        setCardData(demoRes.data.data[0]);
      } catch (demoErr) {
        console.error("Demo API also failed:", demoErr);
        setCardData(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const slug = params?.slug || "demo"; // fallback to demo slug
    fetchCardData(slug);
  }, [params]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  if (!cardData)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-lg font-semibold">No card found</p>
      </div>
    );

  return (
    <div className="min-h-screen">
      {/* Pass API data to all components */}
      <ProfileCard data={cardData} />
      <Product data={cardData?.products || []} />
      <Portfolio data={cardData?.portfolios || []} />
      <Gallery data={cardData?.galleries || []} />
      <Testimonial data={cardData?.testimonials || []} />
      <Qr data={cardData?.fields || []} />
      <Enquiry data={cardData} />
      <Services data={cardData?.fields || []} />
    </div>
  );
};

export default ThemeThreepage;
