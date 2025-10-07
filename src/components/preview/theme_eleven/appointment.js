"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function AppointmentPage() {
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
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 relative">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-2">Appointment</h2>
        <p className="text-center text-gray-500 mb-4">
          Fill out the form below to book your appointment.
        </p>

        {/* Profile Section */}
        <div className="bg-gradient-to-b from-white to-gray-200 p-4 rounded-lg text-center mb-4">
          <Image
            src="#"
            alt="Profile"
            width={90}
            height={90}
            className="rounded-full border border-black mx-auto"
          />
          <h1 className="text-xl font-bold mt-2 mb-3 text-black">
           Name Here
          </h1>
        </div>

        {/* Appointment Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full border rounded-md p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md uppercase"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
