"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  // Dummy reviews (replace with API data later)
  const [reviews] = useState([
    
        {
    id: 1,
    name: "Aditi Sharma",
    date: "12 Sep 2025",
    rating: 5,
    review:
      "Amazing experience! The team made our wedding truly memorable. Very professional and supportive.",
    avatar: "/assets/images/user1.jpg",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    date: "05 Sep 2025",
    rating: 4,
    review:
      "The venue was beautiful and well managed. Food could have been slightly better, but overall great service.",
    avatar: "/assets/images/user2.jpg",
  },
  {
    id: 3,
    name: "Priya Verma",
    date: "29 Aug 2025",
    rating: 5,
    review:
      "Loved the photography team! They captured every emotion perfectly. Highly recommend.",
    avatar: "/assets/images/user3.jpg",
  },
  {
    id: 4,
    name: "Aman Gupta",
    date: "18 Aug 2025",
    rating: 3,
    review:
      "Decor was nice but coordination on the event day could have been better. Still a good experience overall.",
    avatar: "/assets/images/user4.jpg",
  },
  {
    id: 5,
    name: "Neha Singh",
    date: "10 Aug 2025",
    rating: 4,
    review:
      "Makeup artist did an excellent job, very natural look just as I wanted. Timing was slightly delayed though.",
    avatar: "/assets/images/user5.jpg",
  },
  {
    id: 6,
    name: "Karan Patel",
    date: "02 Aug 2025",
    rating: 5,
    review:
      "DJ and music arrangements were superb! Our sangeet night was a blast. Everyone enjoyed a lot.",
    avatar: "/assets/images/user6.jpg",
  },
  {
    id: 7,
    name: "Simran Kaur",
    date: "25 Jul 2025",
    rating: 5,
    review:
      "The catering was top-notch, all our guests appreciated the food variety and taste. Big thumbs up!",
    avatar: "/assets/images/user7.jpg",
  },
  {
    id: 8,
    name: "Arjun Reddy",
    date: "16 Jul 2025",
    rating: 4,
    review:
      "Pre-wedding shoot location was stunning and photographers were very creative. Delivery of photos was a bit late.",
    avatar: "/assets/images/user8.jpg",
  },
  {
    id: 9,
    name: "Meera Joshi",
    date: "05 Jul 2025",
    rating: 5,
    review:
      "Loved the bridal wear collection. I found my dream lehenga at a reasonable price. Great staff support too.",
    avatar: "/assets/images/user9.jpg",
  },
  {
    id: 10,
    name: "Vikram Malhotra",
    date: "28 Jun 2025",
    rating: 4,
    review:
      "Pandit ji conducted all rituals very well and explained everything clearly. A very peaceful ceremony.",
    avatar: "/assets/images/user10.jpg",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Client Reviews 💬</h1>

      {reviews.length === 0 ? (
        <p className="text-gray-600 text-lg">No reviews yet. Be the first one!</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex gap-4"
            >
              {/* User Avatar
              <img
                src={r.avatar}
                alt={r.name}
                className="w-16 h-16 rounded-full object-cover"
              /> */}

              {/* Review Content */}
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">{r.name}</h2>
                  <span className="text-sm text-gray-500">{r.date}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < r.rating ? "text-yellow-400" : "text-gray-300"
                      } w-5 h-5`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed">{r.review}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
