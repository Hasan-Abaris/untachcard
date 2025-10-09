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
        className="max-w-md mx-auto rounded-2xl shadow-lg p-8 relative"
        style={{ background: cardBg, color: fontColor }}
      >
        {/* Header */}
        <h2
          className="text-3xl font-semibold text-center mb-2"
          style={{ color: fontColor }}
        >
          Appointment
        </h2>
        <p
          className="text-center mb-6 opacity-80"
          style={{ color: fontColor }}
        >
          Fill out the form below to book your appointment.
        </p>

        {/* Profile Section */}
        <div className="bg-gray-200 bg-opacity-10 p-5 rounded-xl text-center mb-6">
          {data?.image_source === "local" ? (
            <Image
              src={`/assets/assets/uploads/card-profile/${data?.profile}`}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-2 mx-auto"
              style={{ borderColor: fontColor }}
            />
          ) : (
            <Image
              src={data?.profile || "/default-profile.png"}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-2 mx-auto"
              style={{ borderColor: fontColor }}
            />
          )}
          <h1
            className="text-xl font-semibold mt-3 mb-1"
            style={{ color: fontColor }}
          >
            {data?.tital}
          </h1>
        </div>

        {/* Appointment Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={initialValue.name}
            onChange={handleChange}
            style={{
              color: fontColor,
              borderColor: fontColor,
              fontFamily: cardFont,
            }}
            className="w-full border rounded-md p-3 bg-transparent placeholder-opacity-50"
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="mobile"
            value={initialValue.mobile}
            onChange={handleChange}
            style={{
              color: fontColor,
              borderColor: fontColor,
              fontFamily: cardFont,
            }}
            className="w-full border rounded-md p-3 bg-transparent placeholder-opacity-50"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={initialValue.email}
            onChange={handleChange}
            style={{
              color: fontColor,
              borderColor: fontColor,
              fontFamily: cardFont,
            }}
            className="w-full border rounded-md p-3 bg-transparent placeholder-opacity-50"
          />
          <input
            type="datetime-local"
            name="date"
            value={initialValue.date}
            onChange={handleChange}
            style={{
              color: fontColor,
              borderColor: fontColor,
              fontFamily: cardFont,
            }}
            className="w-full border rounded-md p-3 bg-transparent"
          />
          <textarea
            placeholder="Comments or Query"
            name="query"
            value={initialValue.query}
            onChange={handleChange}
            style={{
              color: fontColor,
              borderColor: fontColor,
              fontFamily: cardFont,
            }}
            className="w-full border rounded-md p-3 min-h-[100px] bg-transparent placeholder-opacity-50"
          ></textarea>

          <button
            type="button"
            className="w-full px-4 py-3 rounded-md font-semibold uppercase transition"
            style={{
              backgroundColor: fontColor,
              color: cardBg,
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

    </>
  );
}
