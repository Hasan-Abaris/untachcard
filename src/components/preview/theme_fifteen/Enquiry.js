"use client";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { base_url } from "@/server";
import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const EnquiryForm = ({ data }) => {
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    cardId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValue({ ...initialValue, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const clone = { ...initialValue, cardId: data?._id };
    try {
      const res = await axios.post(`${base_url}card-inquiry/inquiry`, clone);
      if (res?.data?.success) {
        toastSuccessMessage("Your inquiry has been submitted successfully. We’ll get back to you soon!");
        setInitialValue({ name: "", email: "", mobile: "", query: "", cardId: "" });
      } else {
        toastSuccessMessageError(res?.data?.msg);
      }
    } catch (error) {
      toastSuccessMessageError(error?.message);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Gradient Header */}
      <div className="w-full max-w-md rounded-t-xl bg-gradient-to-r from-pink-600 to-purple-600 py-3 p-5">
        <h2 className="text-white font-semibold text-xl">Inquiries</h2>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white shadow-md rounded-b-xl p-6 border border-gray-100">
        <form id="enquiryForm" encType="multipart/form-data" onSubmit={submitData}>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your Name"
              value={initialValue.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Email Address"
              value={initialValue.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <input
              type="tel"
              name="mobile"
              id="mobile"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Phone Number"
              value={initialValue.mobile}
              onChange={handleChange}
              onKeyUp={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <textarea
              name="query"
              id="message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Type a message here..."
              rows="5"
              value={initialValue.query}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-4 text-center border-2 border-dashed border-gray-300 rounded-md py-5 hover:border-pink-400 transition">
            <label htmlFor="attachment" className="cursor-pointer text-gray-700 font-medium">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 text-pink-500"
                >
                  <path d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25 .001L224 109.3V352c0 17.67 14.33 32 
                  32 32c17.67 0 32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 
                  12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 
                  3.125 264.2 0 256 0S239.6 3.125 233.4 9.375L105.4 
                  137.4C92.88 149.9 92.88 170.1 105.4 182.6zM480 
                  352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 
                  0-32 14.33-32 32v96c0 17.67 14.33 32 32 
                  32h448c17.67 0 32-14.33 32-32v-96C512 
                  366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 
                  10.8-24 24-24s24 10.8 24 24C456 445.2 
                  445.2 456 432 456z"/>
                </svg>
                <span>Choose File to upload</span>
              </div>
              <input type="file" id="attachment" name="attachment" hidden multiple />
            </label>
            <p className="text-sm text-gray-400 mt-2">Files Supported: JPG, PNG, JPEG</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-2 rounded-md shadow-md hover:opacity-90 transition 
            ${!initialValue.name || !initialValue.email || !initialValue.query || !initialValue.mobile ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!initialValue.name || !initialValue.email || !initialValue.query || !initialValue.mobile}
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EnquiryForm;
