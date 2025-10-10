"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Calendar } from "lucide-react";

export default function AppointmentPage({ profile }) {
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
    <div className="appointment bg-[#f9f8f6] py-10 px-4 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 relative">

        {/* Submit Button */}
          <div className="text-center pt-4 mb-5">
            <button
              type="submit"
              className="bg-[#716659] hover:bg-[#5d564e] text-white font-semibold text-lg px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
              Make an Appointment
            </button>
          </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Date Row */}
          <div className="flex items-center mb-3">
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
                className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#716659]"
              />
              <Calendar className="absolute right-2 top-2 text-[#716659]" size={20} />
            </div>
          </div>

          {/* Hour/Time Slot Row */}
          <div className="flex items-center mb-3">
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
              <div className="flex-1 text-center border border-gray-300 rounded-lg p-2">
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
          <div className="flex items-center mb-3">
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
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#716659]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center mb-3">
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
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#716659]"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-3">
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
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#716659]"
              />
            </div>
          </div>

          {/* Comments */}
          <div className="flex items-start mb-3">
            <div className="w-1/4 text-right pr-3">
              <label className="font-medium">Comments</label>
            </div>
            <div className="w-3/4">
              <textarea
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[#716659]"
              />
            </div>
          </div>

     
        </form>
      </div>
    </div>
  );
}
