"use client";
import React, { useState } from "react";
import Image from "next/image";

const guides = [
  {
    title: "Decor",
    subtitle: "GUIDE",
    link: "/blog/category/indian-wedding-decor",
    image: "https://image.wedmegood.com/blog/decor.jpg",
  },
  {
    title: "Dress",
    subtitle: "GUIDE",
    link: "/blog/category/bridal-style-advice",
    image: "https://image.wedmegood.com/blog/dress.jpg",
  },
  {
    title: "Real",
    subtitle: "WEDDING",
    link: "/blog/category/real-wedding-2",
    image: "https://image.wedmegood.com/blog/real-wedding.jpg",
  },
  {
    title: "Wedding",
    subtitle: "IDEAS",
    link: "/blog/category/indian-wedding-ideas",
    image: "https://image.wedmegood.com/blog/wedding-ideas.jpg",
  },
];

const BrowseGuides = () => {
  const [vendor, setVendor] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      {/* Browse Guides Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-serif font-bold text-gray-900">
            Browse our Guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {guides.map((guide, idx) => (
              <a
                key={idx}
                href={guide.link}
                className="relative group block rounded-lg overflow-hidden shadow-md"
              >
                {/* Background Image */}
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4 group-hover:bg-black/60 transition">
                  <h3 className="text-2xl md:text-3xl font-serif italic font-bold">
                    {guide.title}
                  </h3>
                  <h4 className="text-lg uppercase tracking-wide">
                    {guide.subtitle}
                  </h4>
                  <p className="mt-6 underline text-sm">EXPLORE</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Search Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 max-w-3xl mx-auto">
            Find the best wedding vendors with thousands of trusted reviews
          </h2>

          {/* Selection Box */}
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <span className="text-lg text-gray-800">I am looking for</span>

            {/* Vendor Select */}
            <select
              className="w-64 border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            >
              <option value="">Wedding Vendors</option>
              <option value="venues">Venues</option>
              <option value="photographers">Photographers</option>
              <option value="planners">Planners</option>
              <option value="decorators">Decorators</option>
            </select>

            {/* City Select */}
            <select
              className="w-64 border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">In City</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
            </select>

            {/* Search Button */}
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default BrowseGuides;
