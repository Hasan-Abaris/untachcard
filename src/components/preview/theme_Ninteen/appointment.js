"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import axios from "axios";
import { base_url } from "@/server";
import {
  toastSuccessMessage,
  toastSuccessMessageError,
} from "@/components/common/messageShow/MessageShow";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/common/loader/Loader";

export default function AppointmentPage({ data }) {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    query: "",
    cardId: data?._id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitData = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.date ||
      !formData.query
    ) {
      toastSuccessMessageError("Please fill in all fields");
      return;
    }

    setLoader(true);
    try {
      const res = await axios.post(
        `${base_url}card-appointment/appointment`,
        formData
      );

      if (res?.data?.success) {
        toastSuccessMessage("Appointment booked successfully! We’ll contact you soon.");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          date: "",
          query: "",
          cardId: data?._id,
        });
      } else {
        toastSuccessMessageError(res?.data?.msg || "Failed to book appointment");
      }
    } catch (error) {
      toastSuccessMessageError("Something went wrong. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader && <Loader />}

      <div className="max-w-md mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-black mb-8">
          Book Appointment
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 text-gray-800"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 text-gray-800"
          />

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 text-gray-800"
          />

          <div className="relative">
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 focus:border-red-400"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 w-5 h-5 pointer-events-none" />
          </div>

          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Reason for appointment / Message"
            rows={5}
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 text-gray-800 resize-none"
          />

          <button
            type="button"
            onClick={submitData}
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.mobile ||
              !formData.date ||
              !formData.query
            }
            className="w-full py-4 bg-red-400 text-white font-medium rounded-full hover:bg-red-400 transition disabled:opacity-50"
          >
            Book Appointment
          </button>
        </div>

        <ToastContainer position="top-center" autoClose={5000} />
      </div>
    </>
  );
}
