"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import { FaStar, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const VisitSeller = () => {
  // Example seller data (later connect with API)
  const seller = {
    id: 1,
    name: "Elegant Weddings & Events",
    location: "Mumbai, India",
    rating: 4.8,
    reviews: 120,
    contact: "+91 9876543210",
    description:
      "We specialize in wedding planning, decor, and event management. With 10+ years of experience, we bring your dream wedding to life with creativity and perfection.",
    categories: ["Wedding Planner", "Decor", "Photography"],
    logo: "/assets/images/rutwika-abhijit-hyderabad.jpg",
    services: [
      {
        id: 1,
        title: "Wedding Venue Decoration",
        price: "₹50,000 onwards",
        image: "/assets/banner/p3.jpg",
      },
      {
        id: 2,
        title: "Bridal Makeup Package",
        price: "₹25,000 onwards",
        image: "/assets/images/m1.jpg",
      },
      {
        id: 3,
        title: "Candid Photography",
        price: "₹40,000 onwards",
        image: "/assets/banner/ps3.jpg",
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10 mt-20">
        {/* Seller Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center gap-6">
          <img
            src={seller.logo}
            alt={seller.name}
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-2xl font-bold">{seller.name}</h1>
            <div className="flex items-center text-gray-600 mt-1">
              <FaMapMarkerAlt className="mr-2 text-pink-500" />
              {seller.location}
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(seller.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  } w-5 h-5`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {seller.rating} ({seller.reviews} reviews)
              </span>
            </div>
            <button className="mt-4 flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
              <FaPhoneAlt /> Contact Seller
            </button>
          </div>
        </div>

        {/* Seller Details */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">{seller.description}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <div className="flex gap-2 flex-wrap">
              {seller.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Seller Services */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {seller.services.map((service) => (
              <div
                key={service.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-pink-600 font-bold mt-2">
                    {service.price}
                  </p>
                  <button className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VisitSeller;
