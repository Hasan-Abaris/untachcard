"use client";
import React, { useState } from "react";
import Image from "next/image";

const Wishlist = () => {
  // Dummy data (later replace with API / localStorage data)
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Dynamic Dance Zone",
      category: "Choreographer",
      location: "Hyderabad",
      price: "₹65,000 onwards",
      image: "/assets/images/ddzone.jpg",
    },
    {
      id: 2,
      name: "Royal Banquet Hall",
      category: "Wedding Venue",
      location: "Mumbai",
      price: "₹1,20,000 onwards",
      image: "/assets/banner/p3.jpg",
    },
  ]);

  // Remove item from wishlist
  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-pink-600 font-semibold mt-2">{item.price}</p>

              <button
                onClick={() => handleRemove(item.id)}
                className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
