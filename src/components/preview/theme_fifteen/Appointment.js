"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Calendar } from "lucide-react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    comments: "",
  });

  const [slotIndex, setSlotIndex] = useState(0);
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goPrevSlot = () =>
    setSlotIndex((prev) => (prev === 0 ? timeSlots.length - 1 : prev - 1));
  const goNextSlot = () =>
    setSlotIndex((prev) => (prev === timeSlots.length - 1 ? 0 : prev + 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked for ${formData.name} on ${formData.date} at ${timeSlots[slotIndex]}!`
    );
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      comments: "",
    });
    setSlotIndex(0);
  };

  return (
    <div className="bg-[#f9f8f6] flex justify-center items-center min-h-screen py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full overflow-hidden">
        
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-[#a72979] to-[#ed527a] px-6 py-4">
          <h2 className="text-white text-2xl font-bold">Make an Appointment</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Date */}
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Date</label>
            </div>
            <div className="w-3/4 relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-[#f3f7fa] border-none rounded-lg p-3 pr-10 text-gray-600 focus:outline-none"
              />
              <Calendar className="absolute right-3 top-3 text-gray-500" size={20} />
            </div>
          </div>

          {/* Hour */}
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Hour</label>
            </div>
            <div className="w-3/4 flex items-center gap-2">
              <button
                type="button"
                onClick={goPrevSlot}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <div className="flex-1 text-center bg-[#f3f7fa] rounded-lg p-3 text-gray-700">
                {timeSlots[slotIndex]}
              </div>
              <button
                type="button"
                onClick={goNextSlot}
                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Name</label>
            </div>
            <div className="w-3/4">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#f3f7fa] border-none rounded-lg p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Email</label>
            </div>
            <div className="w-3/4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#f3f7fa] border-none rounded-lg p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Phone</label>
            </div>
            <div className="w-3/4">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-[#f3f7fa] border-none rounded-lg p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Comments */}
          <div className="flex items-start">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Comments</label>
            </div>
            <div className="w-3/4">
              <textarea
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full bg-[#f3f7fa] border-none rounded-lg p-3 min-h-[80px] focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
