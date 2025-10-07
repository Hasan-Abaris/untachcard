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
import { useParams } from "next/navigation";
import axios from "axios";
import { base_url } from "@/server";
import AppointmentPage from "./appointment";

const ThemeNine = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 p-6 space-y-6 pt-19">
      {dataDetails && <ProfileCard data={dataDetails} />}

      {dataDetails?.products?.length > 0 && (
        <ProductServices data={dataDetails?.products} />
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

            {dataDetails?.customsection?.length > 0 && (
                <CustomSection data={dataDetails?.customsection} />
            )}

      {dataDetails?.custumSection?.length > 0 && (
        <CustomSection data={dataDetails?.fields} />
      )}

      {dataDetails?.working_hours && (
        <WorkingHours data={dataDetails?.working_hours} />
      )}

      {dataDetails?.payment_options?.length > 0 && (
        <PaymentSection data={dataDetails?.payment_options} />
      )}
      {/* Appointment */}
      <AppointmentPage data={dataDetails?.customsection || []} />
    </div>
  );
};

export default ThemeNine;
