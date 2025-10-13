"use client";
import { useState } from "react";

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
    <div className="flex justify-center items-center min-h-screen py-10 px-4">
      <div className=" rounded-lg shadow-xl max-w-2xl w-full overflow-hidden border border-gray-700">
        {/* Header with Icon */}
        <div className="flex items-center p-4 text-white">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M9 7H15V9H9V7ZM9 11H15V13H9V11ZM4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2ZM4 20H20V4H4V20Z" fill="white"/>
          </svg>
          <h2 className="text-white text-2xl font-bold">Make an Appointment</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-white">
          {/* Name */}
          <div className="flex items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
              placeholder="Enter Name"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
              placeholder="Enter Phone"
            />
          </div>

          {/* Email */}
          <div className="flex items-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
              placeholder="Enter Email"
            />
          </div>

          {/* Date */}
          <div className="flex items-center">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
              placeholder="Pick a Date"
            />
          </div>

          {/* Comments */}
          <div className="flex items-center">
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-400"
              placeholder="Enter Comments"
              rows="3"
            />
          </div>

          {/* Hour */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={goPrevSlot}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"/>
              </svg>
            </button>
            <div className="flex-1 text-center bg-gray-800 rounded-md px-4 py-2 text-gray-300">
              {timeSlots[slotIndex]}
            </div>
            <button
              type="button"
              onClick={goNextSlot}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}