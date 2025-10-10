"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./Profile";
import ProductServices from "./product";
import Portfolio from "./portfolio";
import Gallery from "./Gallery";
import Testimonials from "./Testimonial";
import EnquiryForm from "./Enquiry";
import Qr from "./Qr";
import CustomSection from "./Custom";
import WorkingHours from "./WorkingHours";
import Payment from "./Payment";
import { base_url } from "@/server";
import axios from "axios";
import AppointmentPage from "./appointment";

const ThemeSixpage = ({ slug }) => {
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCardData = async (slug) => {
    if (!slug) return setLoading(false);

    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(`${base_url}card/details/${slug}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res?.data?.data?.length > 0) {
        setDetailsdata(res.data.data[0]);
      } else {
        const demoRes = await axios.get(`${base_url}card/demo`);
        setDetailsdata(demoRes.data.data[0]);
      }
    } catch (err) {
      console.error("Primary API failed:", err);
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
    fetchCardData(slug);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
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
    <div className="min-h-screen  p-6 space-y-6">
      {/* Profile Section */}
      <div className="my-8">
        <ProfileCard data={dataDetails} />
      </div>

      {/* Products and Services */}
      <div className="my-8">
        <ProductServices data={dataDetails?.products || []} />
      </div>

      {/* Portfolio */}
      <div className="my-8">
        <Portfolio data={dataDetails?.portfolios || []} />
      </div>

      {/* Gallery */}
      <div className="my-8">
        <Gallery data={dataDetails?.galleries || []} />
      </div>

      {/* Testimonials */}
      <div className="my-8">
        <Testimonials data={dataDetails?.testimonials || []} />
      </div>

      {/* Enquiry Form */}
      <div className="my-8">
        <EnquiryForm data={dataDetails} />
      </div>

      {/* QR Section */}
      <div className="my-8">
        <Qr data={dataDetails?.fields || []} />
      </div>

      {/* Custom Section Card */}
      <div className="my-8 bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2 text-center">Custom Section</h3>
        <CustomSection data={dataDetails?.customsection || []} />
      </div>

      {/* Working Hours Card */}
      <div className="my-8 bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2 text-center">Working Hours</h3>
        <WorkingHours
          data={
            dataDetails?.customsection?.find(
              (item) => item.title === "Working Hours"
            ) || null
          }
        />
      </div>

      {/* Payment Card */}
      <div className="my-8 bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2 text-center">Payment</h3>
        <Payment
          data={
            dataDetails?.customsection?.find(
              (item) => item.title === "Payment"
            ) || null
          }
        />
        {/* Appointment */}
              <div className="my-8 rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-2 text-center">Appointment</h3>
            {dataDetails && <AppointmentPage data={dataDetails} />}
              </div>
      </div>
    </div>
  );
};

export default ThemeSixpage;
