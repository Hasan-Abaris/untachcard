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
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      comments: "",
    });
  };

  return (
    <div className="appointment bg-[#f9f8f6] py-10 px-4 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 relative">

        {/* Title Section */}
        <div className="title flex items-center justify-center gap-5 mb-6">
          <Image
            src="https://vcards.infyom.com/assets/img/vcard38/left-ling-img.png"
            alt="Left line"
            width={80}
            height={10}
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#716659] text-center">
            Make an Appointment
          </h2>
          <Image
            src="https://vcards.infyom.com/assets/img/vcard38/right-line-img.png"
            alt="Right line"
            width={80}
            height={10}
          />
        </div>

        {/* Profile Section */}
        <div className="text-center mb-6">
          <Image
            src={
              profile?.image
                ? profile.image
                : "/assets/profile-placeholder.png"
            }
            alt={profile?.name || "Profile"}
            width={90}
            height={90}
            className="rounded-full border border-[#716659] mx-auto mb-2"
          />
          <h3 className="text-lg font-semibold text-[#4b443d]">
            {profile?.name || "Your Name"}
          </h3>
          {profile?.designation && (
            <p className="text-sm text-gray-500">{profile.designation}</p>
          )}
        </div>

        {/* Appointment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#716659]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#716659]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#716659]"
          />

          {/* Date Picker Field */}
          <div className="relative">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#716659]"
            />
            <Calendar className="absolute right-3 top-3 text-[#716659]" size={24} />
          </div>

          {/* Comments */}
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 min-h-[90px] focus:outline-none focus:ring-2 focus:ring-[#716659]"
          />

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#716659] hover:bg-[#5d564e] text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md transition-all duration-300"
            >
              Make an Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
