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
import ProfileCard from "./profile";
import WorkingHours from "./WorkingHours";
import { base_url } from "@/server";

const Themetwopage = ({ slug }) => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCard = async (slug) => {
    try {
      const token = window.localStorage.getItem("token");
      // 1️⃣ Fetch by slug
      const res = await axios.get(`${base_url}card/details/${slug}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res?.data?.success && res?.data?.data?.length > 0) {
        setCard(res.data.data[0]);
      } else {
        // 2️⃣ fallback to demo
        const demoRes = await axios.get(`${base_url}card/demo`);
        setCard(demoRes.data.data[0]);
      }
    } catch (err) {
      console.error("Primary API failed, using demo:", err);
      try {
        const demoRes = await axios.get(`${base_url}card/demo`);
        setCard(demoRes.data.data[0]);
      } catch (demoErr) {
        console.error("Demo API also failed:", demoErr);
        setCard(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchCard(slug);
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading card...</p>;
  if (!card) return <p className="text-center mt-10">No card found</p>;

  return (
    <div>
      {/* Pass already fetched data to all components */}
      <ProfileCard data={card} />
      <Product data={card?.products || []} />
      <Portfolio data={card?.portfolios || []} />
      <Gallery data={card?.galleries || []} />
      <Testimonial data={card?.testimonials || []} />
      <Qr data={card?.fields || []} />
      <Enquiry data={card} />
      <Services data={card?.fields || []} />
      <WorkingHours />
    </div>
  );
};

export default Themetwopage;
