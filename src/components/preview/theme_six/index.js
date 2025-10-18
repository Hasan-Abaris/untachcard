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
import AppointmentPage from "./appointment";
import { base_url } from "@/server";
import axios from "axios";
import { useParams } from "next/navigation";

const ThemeSixpage = ({ dataDetailsData }) => {
  const params = useParams();
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cardDetailsget = async (slug) => {
    try {
      const res =
        slug === "demo"
          ? await axios.get(`${base_url}card/demo`)
          : await axios.get(`${base_url}card/details/${slug}`, {
              headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
            });
      if (res?.data?.data?.length > 0) {
        setDetailsdata(res.data.data[0]);
        setError(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
        <p className="text-white text-lg font-semibold animate-pulse">Loading...</p>
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
    <div className="min-h-screen p-6 space-y-6 flex flex-col items-center">
      {/* Profile Section */}
      {dataDetails && <ProfileCard data={dataDetails} />}

      {/* Products and Services */}
      {dataDetails?.products?.length > 0 && <ProductServices data={dataDetails.products} />}

      {/* Portfolio */}
      {dataDetails?.portfolios?.length > 0 && <Portfolio data={dataDetails.portfolios} />}

      {/* Gallery */}
      {dataDetails?.galleries?.length > 0 && <Gallery data={dataDetails.galleries} />}

      {/* Testimonials */}
      {dataDetails?.testimonials?.length > 0 && <Testimonials data={dataDetails.testimonials} />}

      {/* Enquiry Form */}
      {dataDetails && <EnquiryForm data={dataDetails} />}

      {/* QR Section */}
      {dataDetails?.fields?.length > 0 && <Qr data={dataDetails.fields} />}

      {/* Custom Section */}
      {dataDetails?.customsection?.length > 0 && <CustomSection data={dataDetails.customsection} />}

      {/* Working Hours */}
      {dataDetails?.customsection?.some(item => item.title === "Working Hours") && (
        <WorkingHours
          data={dataDetails.customsection.find(item => item.title === "Working Hours")}
        />
      )}

      {/* Payment */}
      {dataDetails?.customsection?.some(item => item.title === "Payment") && (
        <Payment
          data={dataDetails.customsection.find(item => item.title === "Payment")}
        />
      )}

      {/* Appointment */}
      {dataDetails && <AppointmentPage data={dataDetails} />}
    </div>
  );
};

export default ThemeSixpage;
