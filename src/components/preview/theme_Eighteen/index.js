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

const ThemeEightteen = ({ dataDetailsData }) => {
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
        setError(true);
      } finally {
        setLoading(false);
      }
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
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (dataDetailsData) {
      setDetailsdata(dataDetailsData);
      setLoading(false);
    } else if (params?.slug) {
      cardDetailsget(params?.slug);
    }
  }, [params, dataDetailsData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-500">
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (error || !dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-500">
        <p className="text-white text-lg font-semibold">No data found</p>
      </div>
    );
  }

  // Colors
  const cardBg = "#ffffff";           // All cards stay pure white
  const fontColor = "#1f2937";        // Dark readable text
  const cardFont = dataDetails?.card_font || "system-ui, sans-serif";
  const themeBg = "#000000";          // ← Your requested background color

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6"
      style={{
        background: themeBg,  // Now #777777 (medium gray)
      }}
    >
      <div className="max-w-lg mx-auto space-y-8">
        {/* Profile Card */}
        {dataDetails && (
          <ProfileCard
            data={dataDetails}
            themeBg={themeBg}
            cardBg={cardBg}
            fontColor={fontColor}
            cardFont={cardFont}
          />
        )}

        {dataDetails?.products?.length > 0 && (
          <ProductServices data={dataDetails?.products} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
        )}

        {dataDetails?.portfolios?.length > 0 && (
          <Portfolio data={dataDetails?.portfolios} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
        )}

        {dataDetails?.galleries?.length > 0 && (
          <Gallery data={dataDetails?.galleries} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
        )}

        {dataDetails?.testimonials?.length > 0 && (
          <Testimonials data={dataDetails?.testimonials} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
        )}

        {dataDetails && <EnquiryForm data={dataDetails} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />}

        {dataDetails?.customsection?.length > 0 && (
          <CustomSection data={dataDetails?.customsection} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
        )}

        {dataDetails?.working_hours && <WorkingHours data={dataDetails?.working_hours} cardBg={cardBg} />}

        {dataDetails?.payment_options?.length > 0 && (
          <PaymentSection data={dataDetails?.payment_options} cardBg={cardBg} />
        )}

        {dataDetails && (
          <AppointmentPage data={dataDetails} cardBg={cardBg} fontColor={fontColor} cardFont={cardFont} />
        )}

        {(dataDetails?.hide_branding === 1 || dataDetails?.hide_branding === "1") && <BrandingCardShow />}
      </div>
    </div>
  );
};

export default ThemeEightteen;