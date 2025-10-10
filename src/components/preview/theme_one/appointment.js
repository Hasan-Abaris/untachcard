"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { base_url } from "@/server";
import {
  toastSuccessMessage,
  toastSuccessMessageError,
} from "@/components/common/messageShow/MessageShow";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/common/loader/Loader";

export default function AppointmentPage({ data, cardStyles }) {
  const [loader, setLoader] = useState(false);
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    cardId: "",
    date: "",
  });

  const handleChange = (e) => {
    const clone = { ...initialValue };
    clone[e.target.name] = e.target.value;
    setInitialValue(clone);
  };

  const submitData = async () => {
    setLoader(true);
    const clone = { ...initialValue, cardId: data?._id };
    try {
      const res = await axios.post(
        `${base_url}card-appointment/appointment`,
        clone
      );
      if (res?.data?.success) {
        toastSuccessMessage(
          "Your appointment has been submitted successfully. We’ll get back to you soon!"
        );
        setInitialValue({
          name: "",
          email: "",
          mobile: "",
          query: "",
          cardId: "",
          date: "",
        });
      } else {
        toastSuccessMessageError(res?.data?.msg);
      }
    } catch (error) {
      toastSuccessMessageError(error?.message);
    } finally {
      setLoader(false);
    }
  };

  // Dynamic CSS
  const containerStyle = {
    backgroundColor: cardStyles?.card_bg || "#ffffff",
    fontFamily: cardStyles?.card_font || "sans-serif",
    color: cardStyles?.card_font_color || "#000000",
    backgroundImage:
      cardStyles?.card_theme_bg_type === "Image" && cardStyles?.card_theme_bg
        ? `url(/assets/assets/uploads/card-background/${cardStyles.card_theme_bg})`
        : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  console.log("AppointmentPage applied CSS:", containerStyle);

  return (
    <>
      {loader && <Loader />}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="w-full max-w-lg rounded-xl shadow-xl p-6 relative"
          style={containerStyle}
        >
          {/* Header */}
          <h2 className="text-2xl font-semibold text-center mb-2">
            Appointment
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Fill out the form below to book your appointment.
          </p>
          <div className="bg-gradient-to-b from-white to-gray-200 p-4 rounded-lg text-center mb-4">
            <Image
              src={
                data?.image_source === "local"
                  ? `/assets/assets/uploads/card-profile/${data?.profile}`
                  : data?.profile
              }
              alt="Profile"
              width={90}
              height={90}
              className="rounded-full border border-black mx-auto"
            />
            <h1 className="text-xl font-bold mt-2 mb-3 text-black">
              {data?.tital}
            </h1>
          </div>

          {/* Appointment Form */}
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={initialValue?.name}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="number"
              placeholder="Phone"
              name="mobile"
              value={initialValue?.mobile}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={initialValue?.email}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="datetime-local"
              name="date"
              value={initialValue?.date}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Comments"
              name="query"
              value={initialValue?.query}
              onChange={handleChange}
              className="w-full border rounded-md p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="button"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md uppercase"
              onClick={submitData}
              disabled={
                !initialValue?.name ||
                !initialValue?.email ||
                !initialValue?.query ||
                !initialValue?.mobile ||
                !initialValue?.date
              }
            >
              Book Appointment
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
