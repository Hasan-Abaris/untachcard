"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Image from "next/image";

const Profile = () => {
  const user = {
    name: "Sayyad Hasan",
    email: "hasan@example.com",
    phone: "+91 9876543210",
    address: "123, Rose Garden, Banjara Hills, Hyderabad",
    country: "India",
    joinDate: "January 2024",
    avatar: "/assets/images/profile-avatar.png", // replace with actual image
  };

  const recentActivity = [
    { id: 1, type: "Order", detail: "Wedding Decor Package", date: "Sep 10, 2025" },
    { id: 2, type: "Refund", detail: "Photography Advance", date: "Aug 25, 2025" },
    { id: 3, type: "Address Update", detail: "Changed default billing address", date: "Aug 20, 2025" },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 mt-20 text-center">My Profile</h1>

        {/* Profile Overview */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto border hover:shadow-lg transition">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-28 h-28 rounded-full border object-cover shadow"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              <p className="text-gray-600">{user.address}</p>
              <p className="text-gray-600">Country: {user.country}</p>
              <p className="text-sm text-gray-500 mt-2">
                Member since {user.joinDate}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700 transition">
                  Edit Profile
                </button>
                <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300 transition">
                  Change Password
                </button>
                <button className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto border mt-10">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Account Information</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="font-medium">Full Name:</p>
              <p>{user.name}</p>
            </div>
            <div>
              <p className="font-medium">Email Address:</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p className="font-medium">Phone Number:</p>
              <p>{user.phone}</p>
            </div>
            <div>
              <p className="font-medium">Country:</p>
              <p>{user.country}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-medium">Address:</p>
              <p>{user.address}</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto border mt-10">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Recent Activity</h2>
          <ul className="divide-y">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{activity.type}</p>
                  <p className="text-gray-600 text-sm">{activity.detail}</p>
                </div>
                <p className="text-gray-500 text-sm">{activity.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
