"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function AppointmentPage({ profile }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name}!`);
    // Here, you can call your API to submit the formData
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      comments: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-2">Book Appointment</h2>
        <p className="text-center text-gray-500 mb-6">
          Fill out the form below to schedule your appointment.
        </p>

        {/* Profile Section */}
        <div className="bg-gradient-to-b from-white to-gray-200 p-4 rounded-xl text-center mb-6 shadow-inner">
          <Image
            src={profile?.image || "/assets/profile-placeholder.png"}
            alt={profile?.name || "Profile"}
            width={90}
            height={90}
            className="rounded-full border border-gray-300 mx-auto"
          />
          <h3 className="text-xl font-semibold mt-2 text-gray-800">
            {profile?.name || "Your Name"}
          </h3>
          {profile?.designation && (
            <p className="text-gray-500 text-sm">{profile.designation}</p>
          )}
        </div>

        {/* Appointment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          {/* Date Picker */}
          <div className="relative">
            <Calendar className="absolute right-3 top-3 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg uppercase transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
