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

const ThemeFivepage = ({ dataDetailsData }) => {
  const params = useParams();
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch data from API
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
      } catch {
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
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  // Run when component loads
  useEffect(() => {
    if (dataDetailsData) {
      setDetailsdata(dataDetailsData);
      setLoading(false);
    } else if (params?.slug) {
      cardDetailsget(params?.slug);
    }
  }, [params, dataDetailsData]);

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-900">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading card...
        </p>
      </div>
    );
  }

  // Error screen
  if (error || !dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-500 via-white to-pink-400">
        <p className="text-white text-lg font-semibold">No data found!</p>
      </div>
    );
  }

  // ✅ MAIN PAGE (show only if section has data)
  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-8 lg:px-16">
      {/* ✅ Profile Section */}
      {dataDetails && <ProfileCard data={dataDetails} />}

      {/* ✅ Products & Services */}
      {dataDetails?.products?.length > 0 && (
        <div className="my-8">
          <ProductServices data={dataDetails.products} />
        </div>
      )}

      {/* ✅ Portfolio */}
      {dataDetails?.portfolios?.length > 0 && (
        <div className="my-8">
          <Portfolio data={dataDetails.portfolios} />
        </div>
      )}

      {/* ✅ Gallery */}
      {dataDetails?.galleries?.length > 0 && (
        <div className="my-8">
          <Gallery data={dataDetails.galleries} />
        </div>
      )}

      {/* ✅ Testimonials */}
      {dataDetails?.testimonials?.length > 0 && (
        <div className="my-8">
          <Testimonials data={dataDetails.testimonials} />
        </div>
      )}

      {/* ✅ Enquiry Form */}
      {dataDetails && (
        <div className="my-8">
          <EnquiryForm data={dataDetails} />
        </div>
      )}

      {/* ✅ QR Section */}
      {dataDetails?.fields?.length > 0 && (
        <div className="my-8">
          <Qr data={dataDetails.fields} />
        </div>
      )}

      {/* ✅ Custom Section */}
      {dataDetails?.customsection?.length > 0 && (
        <div className="my-8">
          <h3 className="text-xl font-bold mb-2 text-center"></h3>
          <CustomSection data={dataDetails.customsection} />
        </div>
      )}

      {/* ✅ Working Hours */}
      {dataDetails?.working_hours && (
        <div className="my-8 bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-center">Working Hours</h3>
          <WorkingHours data={dataDetails.working_hours} />
        </div>
      )}

      {/* ✅ Payment */}
      {dataDetails?.payment_options?.length > 0 && (
        <div className="my-8 bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-center">Payment</h3>
          <Payment data={dataDetails.payment_options} />
        </div>
      )}

      {/* ✅ Appointment */}
      {dataDetails && (
        <div className="">
          <h3 className="text-xl font-bold mb-2 text-center"></h3>
          <AppointmentPage data={dataDetails} />
        </div>
      )}
    </div>
  );
};

export default ThemeFivepage;
