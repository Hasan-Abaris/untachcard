"use client"
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviewTabs = [
  { label: "All Reviews (109)" },
  { label: "Silver (58)" },
  { label: "Gold (36)" },
  { label: "Diamond (15)" },
];

const reviewData = [
  {
    name: "anjali_abc",
    rating: 3.5,
    package: "Wedsta Diamond Package",
    date: "3 Feb 2022",
    review:
      "I loved their work and both the makeups were excellent. They were just how I had imagined. Everything was on point and I would love to get dolled up by them sometime again. A big thanks to her.",
  },
  {
    name: "Deepak keshri",
    rating: 5.0,
    package: "Wedsta Diamond Package",
    date: "1 Feb 2022",
    review:
      "It was a great experience guys ..everyone praised your work..your planning skills and good coordination was the only reason behind this successful event in Marriot ..a big thanks from keshri family ❤️",
  },
  {
    name: "Paawan Singh",
    rating: 5.0,
    package: "Wedsta Silver Package",
    date: "18 Jan 2022",
    review:
      "Absolutely wonderful experience. I booked the WedMeGood team for my mother and I for two wedding events and we're both all praises for the professionalism of the hair and makeup artists and the quality of their work. Karishma with her team - Supriya and Rekha did an incredibly spectacular job and I loved both my looks. I strongly recommend their services. Thank you so much!",
  },
];

function Reviews() {
  const [activeTab, setActiveTab] = useState("All Reviews (109)");

  return (
    <div className="container mx-auto px-4 py-10 max-w-[900px]">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 text-center">
        Let them speak for us!
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Some impressions from our customers
      </p>

      {/* Tabs */}
      <div className="flex gap-6 overflow-x-auto border-b pb-2 mb-6">
        {reviewTabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab.label)}
            className={`whitespace-nowrap pb-2 border-b-2 transition ${
              activeTab === tab.label
                ? "border-pink-500 text-pink-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-pink-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviewData.map((review, idx) => (
          <div
            key={idx}
            className="flex bg-white p-4 rounded-lg shadow-sm gap-4"
          >
            <img
              src="https://image.wedmegood.com/nw/images/profile_placeholder.png"
              alt="reviewer-img"
              className="rounded-full w-12 h-12 object-cover"
            />

            <div className="flex-1">
              <div className="flex items-center gap-2 font-medium">
                {review.name}
                <FaStar className="text-pink-500" size={14} />
                <span className="text-sm text-gray-700">{review.rating}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Reviewed {review.package} | {review.date}
              </div>
              <p className="text-sm text-gray-700 mt-3">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded-md hover:bg-pink-50 transition">
          View More
        </button>
      </div>
    </div>
  );
}

export default Reviews;
