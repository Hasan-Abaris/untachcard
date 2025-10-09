"use client";
import React, { useState } from "react";
import axios from "axios";
import { base_url } from "@/server";
import { ToastContainer } from "react-toastify";
import {
  toastSuccessMessage,
  toastSuccessMessageError,
} from "@/components/common/messageShow/MessageShow";

function Enquiry({ data, cardData }) {
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
        toastSuccessMessage("Your inquiry has been submitted successfully. We’ll get back to you soon!");
        setFormData({ name: "", email: "", mobile: "", msg: "" });
      } else {
        toastSuccessMessageError(res?.data?.msg || "Something went wrong!");
      }
    } catch (error) {
      toastSuccessMessageError(error?.message || "Network error!");
    }
  };

  // ✅ Dynamic styles
  const styles = {
    page: {
      background:
        cardData?.card_bg_type === "Color"
          ? cardData?.card_bg || "#f9fafb"
          : cardData?.card_bg_type === "Image"
          ? `url(${cardData?.card_bg}) center/cover no-repeat`
          : "#f9fafb",
      fontFamily: cardData?.card_font || "sans-serif",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.5rem",
    },
    container: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      padding: "2rem",
      width: "100%",
      maxWidth: "600px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "800",
      color: cardData?.card_font_color || "#1e3a8a",
    },
    subtitle: {
      color: "#6b7280",
      marginTop: "0.5rem",
    },
    input: {
      width: "100%",
      padding: "1rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.75rem",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: cardData?.card_font || "sans-serif",
    },
    button: {
      backgroundColor: cardData?.card_font_color || "#2563eb",
      color: "#fff",
      fontWeight: "600",
      padding: "0.75rem 2rem",
      borderRadius: "0.75rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div className="text-center mb-8">
          <h4 style={styles.title}>Enquiry Form</h4>
          <p style={styles.subtitle}>We’d love to hear from you!</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* Email & Mobile */}
          <div className="flex space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ ...styles.input, width: "50%" }}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={{ ...styles.input, width: "50%" }}
            />
          </div>

          {/* Message */}
          <textarea
            name="msg"
            placeholder="Type your message"
            value={formData.msg}
            onChange={handleChange}
            style={{ ...styles.input, height: "8rem", resize: "none" }}
            required
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.mobile || !formData.msg}
              style={{
                ...styles.button,
                opacity: !formData.name || !formData.email || !formData.mobile || !formData.msg ? 0.5 : 1,
                cursor: !formData.name || !formData.email || !formData.mobile || !formData.msg ? "not-allowed" : "pointer",
              }}
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
