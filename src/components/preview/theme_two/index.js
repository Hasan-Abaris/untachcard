"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./profile";
import ProductServices from "./product";
import Portfolio from "./portfolio";
import Testimonials from "./Testimonial";
import EnquiryForm from "./Enquiry";
import Qr from "./Qr";
import CustomSection from "./Custom";
import WorkingHours from "./WorkingHours";
import { base_url } from "@/server";
import axios from "axios";
import AppointmentPage from "./appointment";
import Gallery from "./Gallery";
import { useParams } from "next/navigation";
import Payment from "./Payment";

const Themetwopage = ({ dataDetailsData }) => {
  const params = useParams();
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cardDetailsget = async (slug) => {
    try {
      let res;
      if (params?.slug === "demo") {
        res = await axios.get(`${base_url}card/demo`);
      } else {
        const token = window.localStorage.getItem("token");
        res = await axios.get(`${base_url}card/details/${slug}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-black text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  if (!dataDetails || error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-black text-lg font-semibold">No data found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-8 lg:px-16">
      {/* Profile Section */}
      {dataDetails && <ProfileCard data={dataDetails} />}

      {/* Products and Services */}
      {dataDetails?.products?.length > 0 && (
        <div className="my-8">
          <ProductServices data={dataDetails.products} />
        </div>
      )}

      {/* Portfolio */}
      {dataDetails?.portfolios?.length > 0 && (
        <div className="my-8">
          <Portfolio data={dataDetails.portfolios} />
        </div>
      )}

      {/* Gallery */}
      {dataDetails?.galleries?.length > 0 && (
        <div className="my-8">
          <Gallery data={dataDetails.galleries} />
        </div>
      )}

      {/* Testimonials */}
      {dataDetails?.testimonials?.length > 0 && (
        <div className="my-8">
          <Testimonials data={dataDetails.testimonials} />
        </div>
      )}

      {/* Enquiry Form */}
      {dataDetails && (
        <div className="my-8">
          <EnquiryForm data={dataDetails} />
        </div>
      )}

      {/* QR Section */}
      {dataDetails?.fields?.length > 0 && (
        <div className="my-8">
          <Qr data={dataDetails.fields} />
        </div>
      )}

      {/* Custom Section Card */}
      {dataDetails?.customsection?.length > 0 && (
        <div className="my-8">
          <h3 className="text-xl font-bold mb-2 text-center">Custom Section</h3>
          <CustomSection data={dataDetails.customsection} />
        </div>
      )}

      {/* Working Hours Card */}
      {dataDetails?.customsection?.some(
        (item) => item.title === "Working Hours"
      ) && (
        <div className="my-8">
          <h3 className="text-xl font-bold mb-2 text-center"> </h3>
          <WorkingHours
            data={dataDetails.customsection.find(
              (item) => item.title === "Working Hours"
            )}
          />
        </div>
      )}

      {/* Payment Card */}
      {dataDetails?.customsection?.some((item) => item.title === "Payment") && (
        <div className="my-8">
          <h3 className="text-xl font-bold mb-2 text-center"></h3>
          <Payment
            data={dataDetails.customsection.find(
              (item) => item.title === "Payment"
            )}
          />
        </div>
      )}

      {/* Appointment */}
      {dataDetails && (
        <div className="">
          <AppointmentPage data={dataDetails} />
        </div>
      )}
    </div>
  );
};

export default Themetwopage;
