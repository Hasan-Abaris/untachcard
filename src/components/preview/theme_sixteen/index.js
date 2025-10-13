"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "@/server";

import ProfileCard from "./profile";
import Gallery from "./Gallery";
import Testimonials from "./testimonials";
import EnquiryForm from "./Enquiry";
import Qr from "./QR";
import CustomSection from "./Custom";
import WorkingHours from "./WorkingHours";
import Payment from "./Payment";
import AppointmentPage from "./Appointment";
import ProductServices from "./ProductSection";

const Sixteenpage = ({ slug }) => {
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCardData = async (slug) => {
    if (!slug) return setLoading(false);

    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(`${base_url}card/details/${slug}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (res?.data?.data?.length > 0) {
        setDetailsdata(res.data.data[0]);
        setError(false);
      } else {
        const demoRes = await axios.get(`${base_url}card/demo`);
        setDetailsdata(demoRes.data.data[0]);
        setError(false);
      }
    } catch (err) {
      console.error("Primary API failed:", err);
      try {
        const demoRes = await axios.get(`${base_url}card/demo`);
        setDetailsdata(demoRes.data.data[0]);
        setError(false);
      } catch (demoErr) {
        console.error("Demo API also failed:", demoErr);
        setError(true);
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
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-black text-lg font-semibold animate-pulse">
          Loading card...
        </p>
      </div>
    );
  }

  if (error || !dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-white text-lg font-semibold">No data found!</p>
      </div>
    );
  }

  // Separate sections
  const workingHoursData = dataDetails.customsection?.find(
    (item) => item.title === "Working Hours"
  );
  const paymentData = dataDetails.customsection?.find(
    (item) => item.title === "Payment"
  );
  const otherCustomSections = dataDetails.customsection?.filter(
    (item) => item.title !== "Working Hours" && item.title !== "Payment"
  );

  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-8 lg:px-16 space-y-12">
      {/* Profile Section */}
      {dataDetails && <ProfileCard data={dataDetails} />}

      {/* Products Section */}
      {dataDetails?.products?.length > 0 && (
        <ProductServices data={dataDetails.products} />
      )}

      {/* Gallery Section */}
      {dataDetails?.galleries?.length > 0 && (
        <Gallery data={dataDetails.galleries} />
      )}

      {/* Testimonials Section */}
      {dataDetails?.testimonials?.length > 0 && (
        <Testimonials data={dataDetails.testimonials} />
      )}

      {/* Enquiry Form */}
      <EnquiryForm data={dataDetails} />

      {/* QR Section */}
      {dataDetails?.fields?.length > 0 && <Qr data={dataDetails.fields} />}

      {/* Custom Sections */}
      {otherCustomSections?.length > 0 && (
        <CustomSection data={otherCustomSections} />
      )}

      {/* Working Hours */}
      {workingHoursData && <WorkingHours data={workingHoursData} />}

      {/* Payment */}
      {paymentData && <Payment data={paymentData} />}

      {/* Appointment */}
      {dataDetails && <AppointmentPage data={dataDetails} />}
    </div>
  );
};

export default Sixteenpage;
