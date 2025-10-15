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
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="rounded-2xl shadow-xl w-full max-w-lg p-6 backdrop-blur-lg" style={{
          backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // background: cardBg,
          color: fontColor,
          fontFamily: cardFont,
        }}>
          {/* Header */}
          <h2 className="text-2xl font-semibold text-center mb-2">Appointment</h2>
          <p className="text-center text-gray-500 mb-4">
            Fill out the form below to book your appointment.
          </p>



          {/* Form */}
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
              rows="3"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="button"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md uppercase"
              disabled={
                !initialValue?.name ||
                !initialValue?.email ||
                !initialValue?.query ||
                !initialValue?.mobile ||
                !initialValue?.date
              }
              onClick={submitData}
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
