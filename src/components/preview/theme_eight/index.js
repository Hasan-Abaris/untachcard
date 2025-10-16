"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ProductServices from "./ProductServices";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import EnquiryForm from "./EnquiryForm";
import CustomSection from "./CustomSection";
import WorkingHours from "./WorkingHours";
import PaymentSection from "./PaymentSection";
import { base_url } from "@/server";
import axios from "axios";
import { useParams } from "next/navigation";
import AppointmentPage from "./appointment";
import BrandingCardShow from "@/components/common/brandingCardShow/BrandingCardShow";

const ThemeEight = () => {
  const params = useParams();
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cardDetailsget = async (slug) => {
    if (params?.slug === "demo") {
      try {
        const res = await axios.get(`${base_url}card/demo`);
        if (res?.data?.data?.length > 0) {
          setDetailsdata(res.data.data[0]);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        // console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
      // console.log(res);
    } else {
      try {
        const token = window.localStorage.getItem("token");
        const res = await axios.get(`${base_url}card/details/${slug}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res?.data?.data?.length > 0) {
          setDetailsdata(res.data.data[0]);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        // console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (params?.slug) {
      setLoading(true);
      cardDetailsget(params?.slug);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (error || !dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
        <p className="text-white text-lg font-semibold">No data found</p>
      </div>
    );
  }

  const cardBg =
    dataDetails?.card_bg_type === "Transparent"
      ? "transparent"
      : dataDetails?.card_bg || "#000";
  const fontColor = dataDetails?.card_font_color || "#fff";
  const cardFont = dataDetails?.card_font || "inherit";
  const themeBg =
    dataDetails?.card_theme_bg_type === "Transparent"
      ? "transparent"
      : dataDetails?.card_theme_bg || "#111";


  return (
    <div className="min-h-screen p-6 space-y-6 pt-19"
      style={{
        background:
          themeBg && themeBg !== "transparent"
            ? themeBg
            : "linear-gradient(to right, #a855f7, #3b82f6, #22d3ee)",
      }}>
      {dataDetails && <ProfileCard data={dataDetails} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />}

      {dataDetails?.products?.length > 0 && (
        <ProductServices data={dataDetails?.products} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
      )}

      {dataDetails?.portfolios?.length > 0 && (
        <Portfolio data={dataDetails?.portfolios} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
      )}

      {dataDetails?.galleries?.length > 0 && (
        <Gallery data={dataDetails?.galleries} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
      )}

      {dataDetails?.testimonials?.length > 0 && (
        <Testimonials data={dataDetails?.testimonials} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
      )}
      {dataDetails && <EnquiryForm data={dataDetails} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />}
      {dataDetails?.customsection?.length > 0 && (
        <CustomSection data={dataDetails?.customsection} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
      )}


      {dataDetails?.working_hours && (
        <WorkingHours data={dataDetails?.working_hours} />
      )}

      {dataDetails?.payment_options?.length > 0 && (
        <PaymentSection data={dataDetails?.payment_options} />
      )}
      {/* Appointment */}
      {dataDetails && <AppointmentPage data={dataDetails} themeBg={themeBg} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />}
      {(dataDetails?.hide_branding === 1 || dataDetails?.hide_branding === "1") && (
        <BrandingCardShow />
      )}
    </div>
  );
};

export default ThemeEight;
