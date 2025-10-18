"use client";

import React, { useState } from "react";
import axios from "axios";
import { base_url } from "@/server";
import { ToastContainer } from "react-toastify";
import {
  toastSuccessMessage,
  toastSuccessMessageError,
} from "@/components/common/messageShow/MessageShow";

function Enquiry({ data, cardStyles }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      cardId: data?._id || "",
      query: formData.msg,
    };

    try {
      const res = await axios.post(`${base_url}card-inquiry/inquiry`, payload);
      if (res?.data?.success) {
        toastSuccessMessage(
          "Your inquiry has been submitted successfully. We’ll get back to you soon!"
        );
        setFormData({ name: "", email: "", mobile: "", msg: "" });
      } else {
        toastSuccessMessageError(res?.data?.msg || "Something went wrong!");
      }
    } catch (error) {
      toastSuccessMessageError(error?.message || "Network error!");
    }
  };

  // Dynamic styles
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

  const inputStyle = {
    borderColor: cardStyles?.input_border_color || "#ccc",
    backgroundColor: cardStyles?.input_bg || "#fff",
    color: cardStyles?.input_font_color || "#000",
    fontFamily: cardStyles?.card_font || "sans-serif",
    padding: "1rem",
    borderRadius: "1rem",
  };

  const inputFocusStyle = {
    outline: "none",
    boxShadow: `0 0 0 2px ${cardStyles?.input_focus_ring || "#3b82f6"}`,
  };

  const buttonStyle = {
    backgroundColor: cardStyles?.button_bg || "#3b82f6",
    color: cardStyles?.button_font_color || "#fff",
    fontFamily: cardStyles?.card_font || "sans-serif",
    padding: "0.75rem 2rem",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    opacity: 0.9,
  };

  const titleStyle = {
    color: cardStyles?.header_color || "#1e3a8a",
    fontFamily: cardStyles?.card_font || "sans-serif",
  };

  const subTitleStyle = {
    color: cardStyles?.subheader_color || "#6b7280",
    fontFamily: cardStyles?.card_font || "sans-serif",
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      style={containerStyle}
    >
      <div className="w-full max-w-lg rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h4 className="text-3xl font-extrabold" style={titleStyle}>
            Enquiry Form
          </h4>
          <p className="mt-2" style={subTitleStyle}>
            We’d love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            required
          />

          <div className="flex space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              required
            />
          </div>

          <textarea
            name="msg"
            placeholder="Type your message"
            value={formData.msg}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            required
            className="h-32 resize-none"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.mobile ||
                !formData.msg
              }
              style={buttonStyle}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, buttonHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, { opacity: 1 })
              }
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Enquiry;
