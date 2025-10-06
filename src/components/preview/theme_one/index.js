"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./profile";
import ProductServices from "./product";
import Portfolio from "./portfolio";
import Gallery from "./Gallery";
import Testimonials from "./Testimonial";
import EnquiryForm from "./Enquiry";
import CustomSection from "./Services";
import Qr from "./Qr";
import { useParams } from "next/navigation";
import { base_url } from "@/server";
import axios from "axios";

const Themeonepage = () => {
  const params = useParams();
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch card by slug or fallback to demo
  const fetchCardData = async (slug) => {
    try {
      const token = window.localStorage.getItem("token");

      // Try fetching card by slug
      const res = await axios.get(`${base_url}card/details/${slug}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res?.data?.data?.length > 0) {
        setDetailsdata(res.data.data[0]);
      } else {
        // fallback to demo API
        const demoRes = await axios.get(`${base_url}card/demo`);
        setDetailsdata(demoRes.data.data[0]);
      }
    } catch (err) {
      console.error("Primary API failed, using demo:", err);
      try {
        const demoRes = await axios.get(`${base_url}card/demo`);
        setDetailsdata(demoRes.data.data[0]);
      } catch (demoErr) {
        console.error("Demo API also failed:", demoErr);
        setDetailsdata(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const slug = params?.slug || null;
    fetchCardData(slug);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (!dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-lg font-semibold">No data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Pass already fetched data to ProfileCard */}
      <ProfileCard data={dataDetails} />

      {/* Product / Services */}
      <ProductServices data={dataDetails?.sections || []} />

      {/* Portfolio */}
      <Portfolio data={dataDetails?.portfolios || []} />

      {/* Gallery */}
      <Gallery data={dataDetails?.galleries || []} />

      {/* Testimonials */}
      <Testimonials data={dataDetails?.testimonials || []} />

      {/* Enquiry Form */}
      <EnquiryForm data={dataDetails} />

      {/* QR Section */}
      <Qr data={dataDetails?.fields || []} />

      {/* Custom Section */}
      <CustomSection data={dataDetails?.fields || []} />
    </div>
  );
};

export default Themeonepage;
