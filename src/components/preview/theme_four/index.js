"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ProductServices from "./ProductServices";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import EnquiryForm from "./EnquiryForm";
import CustomSection from "./CustomSection";
import WorkingHours from "./WorkingHours";
import PaymentSection from "./PaymentSection";
import { useParams } from "next/navigation";
import { base_url } from "@/server";
import axios from "axios";
import Portfolio from "./portfolio";

const ThemeFourpage = () => {
  const params = useParams();
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cardDetailsget = async (slug) => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(`${base_url}/card/details/${slug}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      console.log("API Response:", res.data); // debug

      if (res?.data?.data?.length > 0) {
        setDetailsdata(res.data.data[0]);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const slug = params?.slug || "Zabi"; // fallback for testing
    setLoading(true);
    cardDetailsget(slug);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-900">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading card...
        </p>
      </div>
    );
  }

  if (error || !dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-skyblue-500 via-white-500 to-pink-400">
        <p className="text-white text-lg font-semibold">No data found !</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 p-6 space-y-6">
      {dataDetails && <ProfileCard data={dataDetails} />}

      {dataDetails?.sections?.length > 0 && (
        <ProductServices data={dataDetails?.sections} />
      )}

      {dataDetails?.portfolios?.length > 0 && (
        <Portfolio data={dataDetails?.portfolios} />
      )}

      {dataDetails?.galleries?.length > 0 && (
        <Gallery data={dataDetails?.galleries} />
      )}

      {dataDetails?.testimonials?.length > 0 && (
        <Testimonials data={dataDetails?.testimonials} />
      )}

      {dataDetails && <EnquiryForm data={dataDetails} />}

      {dataDetails?.custumSection?.length > 0 && (
        <CustomSection data={dataDetails?.fields} />
      )}

      {dataDetails?.working_hours && (
        <WorkingHours data={dataDetails?.working_hours} />
      )}

      {dataDetails?.payment_options?.length > 0 && (
        <PaymentSection data={dataDetails?.payment_options} />
      )}
    </div>
  );
};

export default ThemeFourpage;

