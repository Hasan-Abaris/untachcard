"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "./profile";
import ProductServices from "./product";
import Portfolio from "./portfolio";
import Gallery from "./Gallery";
import Testimonials from "./Testimonial";
import EnquiryForm from "./Enquiry";
import CustomSection from "./Services";
import { useParams } from "next/navigation";
import { base_url } from "@/server";
import axios from "axios";
import Qr from "./Qr";

const Themeonepage = () => {
  const params = useParams(); 
  const [dataDetails, setDetailsdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cardDetailsget = async (slug) => {
    if (!slug) return;
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
      console.error("API error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const slug = params?.slug || "abdul-quadir-abaris-softech"; // fallback slug
    setLoading(true);
    cardDetailsget(slug);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (error || !dataDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-white text-lg font-semibold">No data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
  {/* Profile Card */}
  {dataDetails ? (
    <ProfileCard data={dataDetails} />
  ) : (
    <ProfileCard data={{ name: "John Doe", title: "Web Developer" }} />
  )}

  {/* Product / Services */}
  {dataDetails?.sections?.length > 0 ? (
    <ProductServices data={dataDetails.sections} />
  ) : (
    <ProductServices data={[{ title: "Service 1", desc: "Description" }]} />
  )}

  {/* Portfolio */}
  {dataDetails?.portfolios?.length > 0 ? (
    <Portfolio data={dataDetails.portfolios} />
  ) : (
    <Portfolio data={[{ project: "Sample Project", img: "/placeholder.png" }]} />
  )}

  {/* Gallery */}
  {dataDetails?.galleries?.length > 0 ? (
    <Gallery data={dataDetails.galleries} />
  ) : (
    <Gallery data={[{ img: "/placeholder.png", title: "Sample Image" }]} />
  )}

  {/* Testimonials */}
  {dataDetails?.testimonials?.length > 0 ? (
    <Testimonials data={dataDetails.testimonials} />
  ) : (
    <Testimonials data={[{ name: "Jane Doe", comment: "Great!" }]} />
  )}

  {/* Enquiry Form */}
  {dataDetails ? (
    <EnquiryForm data={dataDetails} />
  ) : (
    <EnquiryForm data={{ email: "", message: "" }} />
  )}

  {/* QR Section */}
  {dataDetails?.customSection?.length > 0 ? (
    <Qr data={dataDetails.fields} />
  ) : (
    <Qr data={[{ label: "QR Code", value: "https://example.com" }]} />
  )}

  {/* Custom Section */}
  {dataDetails?.customSection?.length > 0 ? (
    <CustomSection data={dataDetails.fields} />
  ) : (
    <CustomSection data={[{ title: "Custom Section", content: "Sample content" }]} />
  )}
</div>

  );
};

export default Themeonepage;
