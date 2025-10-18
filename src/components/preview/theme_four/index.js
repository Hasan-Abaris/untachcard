"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./profile";
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

const ThemeFourpage = ({ dataDetailsData }) => {
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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-900">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading card...
        </p>
      </div>
    );

  if (error || !dataDetails)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-500 via-white to-pink-400">
        <p className="text-white text-lg font-semibold">No data found!</p>
      </div>
    );

  return (
    <div className="min-h-screen text-black px-4 md:px-8 lg:px-16 flex flex-col items-center">
      {/* Profile Section */}
      {dataDetails && <ProfileCard data={dataDetails} />}

      {/* Products and Services */}
      {dataDetails?.products?.length > 0 && (
        <div className="my-8 ">
          <ProductServices data={dataDetails.products} />
        </div>
      )}

      {/* Portfolio */}
      {dataDetails?.portfolios?.length > 0 && (
        <div className="my-8 ">
          <Portfolio data={dataDetails.portfolios} />
        </div>
      )}

      {/* Gallery */}
      {dataDetails?.galleries?.length > 0 && (
        <div className="my-8 w-full">
          <Gallery data={dataDetails.galleries} />
        </div>
      )}

      {/* Testimonials */}
      {dataDetails?.testimonials?.length > 0 && (
        <div className="my-8 w-full">
          <Testimonials data={dataDetails.testimonials} />
        </div>
      )}

      {/* Enquiry Form */}
      {dataDetails && (
        <div className="my-8 w-full">
          <EnquiryForm data={dataDetails} />
        </div>
      )}

      {/* QR Section */}
      {dataDetails?.fields?.length > 0 && (
        <div className="my-8 w-full">
          <Qr data={dataDetails.fields} />
        </div>
      )}

      {/* Custom Section */}
      {dataDetails?.customsection?.length > 0 && (
        <div className="my-8 w-full">
          <CustomSection data={dataDetails.customsection} />
        </div>
      )}

      {/* Working Hours */}
      {dataDetails?.customsection?.some(item => item.title === "Working Hours") && (
        <div className="my-8 w-full">
          <WorkingHours
            data={dataDetails.customsection.find(item => item.title === "Working Hours")}
          />
        </div>
      )}

      {/* Payment */}
      {dataDetails?.customsection?.some(item => item.title === "Payment") && (
        <div className="my-8 ">
          <Payment
            data={dataDetails.customsection.find(item => item.title === "Payment")}
          />
        </div>
      )}

      {/* Appointment */}
      {dataDetails && (
        <div className="my-8 ">
          <AppointmentPage data={dataDetails} />
        </div>
      )}
    </div>
  );
};

export default ThemeFourpage;
