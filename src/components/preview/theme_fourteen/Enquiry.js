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
    const clone = { ...initialValue };
    const value = e.target.value;
    const name = e.target.name;
    clone[name] = value;
    setInitialValue(clone);
  };

  const submitData = async () => {
    const clone = { ...initialValue, cardId: data?._id };
    try {
      const res = await axios.post(`${base_url}card-inquiry/inquiry`, clone);
      if (res?.data?.success) {
        toastSuccessMessage("Your inquiry has been submitted successfully. We’ll get back to you soon!");
        setInitialValue({
          name: "",
          email: "",
          mobile: "",
          query: "",
          cardId: ""
        });
      } else {
        toastSuccessMessageError(res?.data?.msg);
      }
    } catch (error) {
      toastSuccessMessageError(error?.message);
    }
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-gray-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8 relative overflow-hidden">
        {/* subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-40 rounded-2xl -z-10"></div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 border-b border-gray-200 pb-4">
          Inquiries
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
              value={initialValue?.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
              value={initialValue?.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="number"
              name="mobile"
              placeholder="Enter Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
              value={initialValue?.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="query"
              placeholder="Type a message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none resize-none"
              value={initialValue?.query}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* File Upload Section */}
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-5 text-center">
            <label
              htmlFor="attachment"
              className="cursor-pointer flex flex-col items-center justify-center text-gray-700 hover:text-indigo-600 transition"
            >
              <svg
                className="w-8 h-8 mb-2 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25 .001L224 109.3V352c0 17.67 14.33 32 32 32c17.67 0 32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0S239.6 3.125 233.4 9.375L105.4 137.4C92.88 149.9 92.88 170.1 105.4 182.6zM480 352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z"/>
              </svg>
              <span className="text-base font-medium">Choose File to Upload</span>
              <small className="text-gray-500 mt-1">Files Supported: JPG, PNG, JPEG</small>
            </label>
            <input id="attachment" name="attachment" type="file" hidden multiple />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!initialValue?.name || !initialValue?.email || !initialValue?.query || !initialValue?.mobile}
            onClick={submitData}
          >
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EnquiryForm;
