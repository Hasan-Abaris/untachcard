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
    <div className="flex flex-col items-center py-10 px-4 bg-gray-200">
      {/* Header with Icon */}
      <div className="w-full max-w-md flex items-center justify-start mb-4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 6H13V14H11V6ZM11 16H13V18H11V16Z" fill="black"/>
        </svg>
        <h2 className="text-black font-semibold text-xl">Inquiries</h2>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 border border-gray-300">
        <form id="enquiryForm" encType="multipart/form-data" onSubmit={submitData}>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none"
              placeholder="Enter Phone Number"
              value={initialValue.mobile}
              onChange={handleChange}
              onKeyUp={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
            />
          </div>

          {/* Message */}
          <div className="mb-4 relative">
            <textarea
              name="query"
              id="message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none resize-none"
              placeholder="Type a message here..."
              rows="5"
              value={initialValue.query}
              onChange={handleChange}
            ></textarea>
            <div className="absolute top-2 right-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 7H11V13H13V7ZM13 15H11V17H13V15Z"/>
              </svg>
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <input
              type="file"
              id="attachment"
              name="attachment"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none"
              placeholder="Choose File to upload"
              accept="image/jpeg,image/png,image/jpg"
            />
            <p className="text-sm text-gray-400 mt-1">Files Supported: JPG, PNG, JPEG</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-black text-white font-semibold py-2 rounded-md shadow-md hover:bg-gray-800 transition 
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