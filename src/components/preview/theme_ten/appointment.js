"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import axios from "axios";
import { base_url } from "@/server";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/common/loader/Loader";

export default function AppointmentPage({ data, themeBg, cardBg, fontColor, cardFont }) {
  const [loader, setLoader] = useState(false)
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    cardId: "",
    date: ""
  })
  const handleChange = async (e) => {
    const clone = { ...initialValue }
    const value = e.target.value
    const name = e.target.name
    clone[name] = value
    setInitialValue(clone)
  }

  const submitData = async () => {
    // console.log('dfgdf');
    setLoader(true)
    const clone = { ...initialValue, cardId: data?._id }
    try {
      const res = await axios.post(`${base_url}card-appointment/appointment`, clone);
      // console.log(res?.data);
      if (res?.data?.success) {
        toastSuccessMessage("Your appointment has been submitted successfully. We’ll get back to you soon!")
        setInitialValue({
          name: "",
          email: "",
          mobile: "",
          query: "",
          cardId: "",
          date: "",
        })
        setLoader(false)
      } else {
        toastSuccessMessageError(res?.data?.msg)
        setLoader(false)
      }

    } catch (error) {
      toastSuccessMessageError(error?.message)
      setLoader(false)
    }


  }

  return (
    <>
      {loader && <Loader />}
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          background: cardBg,
          color: fontColor,
          fontFamily: cardFont,
        }}
      >
        <div
          className="w-full max-w-lg rounded-xl shadow-xl p-6 relative"
          style={{
            background: cardBg || "rgba(255,255,255,0.85)",
            color: fontColor || "#000",
            fontFamily: cardFont || "inherit",
          }}
        >
          {/* Header */}
          <h2
            className="text-2xl font-semibold text-center mb-2"
            style={{ color: fontColor }}
          >
            Appointment
          </h2>
          <p
            className="text-center mb-4"
            style={{ color: fontColor ? `${fontColor}cc` : "#555" }}
          >
            Fill out the form below to book your appointment.
          </p>

          {/* Profile Card */}
          <div
            className="p-4 rounded-lg text-center mb-4 shadow-inner"
            style={{
              background: themeBg ? `${themeBg}33` : "#f9fafb",
            }}
          >
            <Image
              src={
                data?.image_source === "local"
                  ? `/assets/assets/uploads/card-profile/${data?.profile}`
                  : data?.profile || "/assets/default-avatar.png"
              }
              alt="Profile"
              width={90}
              height={90}
              className="rounded-full border mx-auto"
            />
            <h1
              className="text-xl font-bold mt-2 mb-3"
              style={{ color: fontColor || "#000", fontFamily: cardFont }}
            >
              {data?.title || data?.tital}
            </h1>
          </div>

          {/* Appointment Form */}
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={initialValue.name}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2"
              style={{
                borderColor: fontColor || "#ccc",
                color: fontColor || "#000",
                fontFamily: cardFont,
              }}
            />

            <input
              type="number"
              placeholder="Phone"
              name="mobile"
              value={initialValue.mobile}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2"
              style={{
                borderColor: fontColor || "#ccc",
                color: fontColor || "#000",
                fontFamily: cardFont,
              }}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={initialValue.email}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2"
              style={{
                borderColor: fontColor || "#ccc",
                color: fontColor || "#000",
                fontFamily: cardFont,
              }}
            />

            <input
              type="datetime-local"
              name="date"
              value={initialValue.date}
              onChange={handleChange}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2"
              style={{
                borderColor: fontColor || "#ccc",
                color: fontColor || "#000",
                fontFamily: cardFont,
              }}
            />

            <textarea
              placeholder="Comments"
              name="query"
              value={initialValue.query}
              onChange={handleChange}
              className="w-full border rounded-md p-3 min-h-[80px] focus:outline-none focus:ring-2"
              style={{
                borderColor: fontColor || "#ccc",
                color: fontColor || "#000",
                fontFamily: cardFont,
              }}
            ></textarea>

            <button
              type="button"
              className="w-full py-3 rounded-md uppercase font-semibold transition"
              style={{
                background: fontColor || "#06b6d4",
                color: "#fff",
                fontFamily: cardFont,
              }}
              onClick={submitData}
              disabled={
                !initialValue.name ||
                !initialValue.email ||
                !initialValue.query ||
                !initialValue.mobile ||
                !initialValue.date
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
