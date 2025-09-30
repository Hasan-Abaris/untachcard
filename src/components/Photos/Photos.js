"use client";
import React, { useState } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Image from "next/image";

const categories = [
  { id: 1, name: "All Categories", img: "/assets/images/category1.jpg" },
  { id: 2, name: "Bridal Lehenga", img: "/assets/images/category2.jpg" },
  { id: 3, name: "Outfits", img: "/assets/images/category3.jpg" },
  { id: 4, name: "Bridal Designs", img: "/assets/images/category4.jpg" },
  { id: 5, name: "Wedding Sarees", img: "/assets/images/rw2.jpg" },
  { id: 6, name: "Mehndi Designs", img: "/assets/banner/c3.jpg" },
  {
    id: 7,
    name: "Wedding Jewellery",
    img: "/assets/images/jewelleryandaccessories.jpg",
  },
];

// Example photo cards data
const photoCards = [
  {
    id: 1,
    title: "Akshi and Neelesh",
    location: "Goa",
    img: "/assets/images/rw23.jpg",
    desc: "Cute seating chart for mehendi with seed paper elements",
  },
  {
    id: 2,
    title: "Sonali and Kenan",
    location: "Malta",
    img: "/assets/images/rw22.jpg",
    desc: "Pre wedding shoot shot against the waters and a vintage car",
  },
  {
    id: 3,
    title: "Shubhanai and Mavank",
    location: "Gurgaon",
    img: "/assets/images/rw21.jpg",
    desc: "Fun shot of the bride with her bridesmaids on the sangeet",
  },
  {
    id: 4,
    title: "Savera and Ishaan",
    location: "Delhi NCR",
    img: "/assets/images/rw20.jpg",
    desc: "Wedding day capture of the bride with her sister in a red lehenga",
  },
  {
    id: 5,
    title: "Kyraa and Hardik",
    location: "Thailand",
    img: "/assets/images/rw19.jpg",
    desc: "Beautiful outdoor decor in a beach wedding",
  },
  {
    id: 6,
    title: "Aanya and Rohit",
    location: "Mumbai",
    img: "/assets/images/rw18.jpg",
    desc: "Bride and groom posing with sunset in the background",
  },
  {
    id: 7,
    title: "Meera and Arjun",
    location: "Jaipur",
    img: "/assets/images/rw17.jpg",
    desc: "Traditional mehendi ceremony with vibrant colors",
  },
  {
    id: 8,
    title: "Tara and Vikram",
    location: "Goa",
    img: "/assets/images/rw16.jpg",
    desc: "Couple walking hand in hand on the beach",
  },
  {
    id: 9,
    title: "Savera and Ishaan",
    location: "Delhi NCR",
    img: "/assets/images/rw15.jpg",
    desc: "Wedding day capture of the bride with her sister in a red lehenga",
  },
  {
    id: 10,
    title: "Kyraa and Hardik",
    location: "Thailand",
    img: "/assets/images/rw14.jpg",
    desc: "Beautiful outdoor decor in a beach wedding",
  },
  {
    id: 11,
    title: "Naina and Sahil",
    location: "Udaipur",
    img: "/assets/images/rw13.jpg",
    desc: "Bride and groom on a royal palace terrace",
  },
  {
    id: 12,
    title: "Anika and Rohan",
    location: "Bali",
    img: "/assets/images/rw12.jpg",
    desc: "Romantic sunset vows by the ocean",
  },
  {
    id: 13,
    title: "Ishita and Karan",
    location: "Jaipur",
    img: "/assets/images/rw11.jpg",
    desc: "Traditional baraat procession with dancing friends",
  },
  {
    id: 14,
    title: "Simran and Dev",
    location: "Kerala",
    img: "/assets/images/rw10.jpg",
    desc: "Bride in elegant saree posing near backwaters",
  },
  {
    id: 15,
    title: "Rhea and Manav",
    location: "Rishikesh",
    img: "/assets/images/rw9.jpg",
    desc: "Adventure-themed pre-wedding shoot on riverbank",
  },
];

const Photos = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Recent"); // "Recent" or "Trending"

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <div className="w-full px-10">
          <div className="text-gray-500 text-sm mb-2">
            <span className="mr-1">
              <a href="/" className="hover:underline">
                Home
              </a>
            </span>
            <span>&gt;</span>
            <span className="ml-1">Photos</span>
          </div>

          {/* Page Heading */}
          <h1 className="text-xl md:text-2xl font-bold mb-1">
            Wedding Photos, Latest Trends & Ideas{" "}
            <span className="text-gray-500 font-normal text-base">
              (37000+ photos)
            </span>
          </h1>

          {/* Page Description */}
          <p className="text-gray-500 text-sm md:text-base mt-1">
            Browse from latest Wedding Photos, Ideas & Inspiration
          </p>
        </div>

        {/* Category Slider */}
        <div className="flex overflow-x-auto gap-6 py-6 px-10 mt-5 justify-center items-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex-shrink-0 w-32 text-center cursor-pointer rounded-lg border hover:shadow-md transition"
            >
              <Image
                src={cat.img} // directly use cat.img
                alt={cat.name}
                width={128}
                height={96}
                className="w-full h-24 object-cover rounded-t-lg"
              />

              <p className="py-2 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* Sort & Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white mt-5 px-10 py-4 rounded shadow-sm gap-4">
          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-700">Sort by:</span>
            <button
              className={`px-3 py-1 rounded ${
                sort === "Recent"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setSort("Recent")}
            >
              Recent
            </button>
            <button
              className={`px-3 py-1 rounded ${
                sort === "Trending"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setSort("Trending")}
            >
              Trending
            </button>
          </div>

          {/* Search */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                placeholder="Search Photos & Ideas…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded px-10 py-2 focus:outline-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-10">
          {photoCards.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              <img
                src={photo.img}
                alt={photo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{photo.title}</h3>
                <p className="text-pink-500 text-sm mb-2">
                  Real Wedding, {photo.location}
                </p>
                <p className="text-gray-500 text-sm">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Photos;
