import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { base_url } from "@/server";
import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const EnquiryForm = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    cardId: data?._id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitData = async () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.query) {
      toastSuccessMessageError("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(`${base_url}card-inquiry/inquiry`, formData);
      if (res?.data?.success) {
        toastSuccessMessage("Your inquiry has been submitted successfully. We’ll get back to you soon!");
        setFormData({ name: "", email: "", mobile: "", query: "", cardId: data?._id });
      } else {
        toastSuccessMessageError(res?.data?.msg || "Something went wrong");
      }
    } catch (error) {
      toastSuccessMessageError(error?.response?.data?.msg || error?.message || "Network error");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-black text-left mb-8">
        Enquiry Form
      </h2>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 focus:outline-none text-gray-800 placeholder-gray-400 transition"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email Address"
          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 focus:outline-none text-gray-800 placeholder-gray-400 transition"
        />

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter Mobile Number"
          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 focus:outline-none text-gray-800 placeholder-gray-400 transition"
        />

        <textarea
          name="query"
          value={formData.query}
          onChange={handleChange}
          rows={6}
          placeholder="Enter Message"
          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-red-400 focus:outline-none text-gray-800 placeholder-gray-400 resize-none transition"
        />

        {/* red 4end Button */}
        <button
          type="button"
          onClick={submitData}
          disabled={!formData.name || !formData.email || !formData.mobile || !formData.query}
          className="w-full sm:w-auto px-10 py-4 bg-red-400 text-white font-medium rounded-full hover:bg-red-400 focus:outline-none transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>

      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default EnquiryForm;