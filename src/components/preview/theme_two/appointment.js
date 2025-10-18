"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { base_url } from "@/server";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/common/loader/Loader";

export default function AppointmentPage({ data, cardData }) {
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
    const { name, value } = e.target;
    setInitialValue((prev) => ({ ...prev, [name]: value }));
  };

  const submitData = async () => {
    setLoader(true);
    const payload = { ...initialValue, cardId: data?._id };

    try {
      const res = await axios.post(`${base_url}card-appointment/appointment`, payload);
      if (res?.data?.success) {
        toastSuccessMessage("Your appointment has been submitted successfully. We’ll get back to you soon!");
        setInitialValue({ name: "", email: "", mobile: "", query: "", cardId: "", date: "" });
      } else {
        toastSuccessMessageError(res?.data?.msg || "Something went wrong!");
      }
    } catch (error) {
      toastSuccessMessageError(error?.message || "Network error!");
    } finally {
      setLoader(false);
    }
  };

  const styles = {
    page: {
      background: "#ffffff", // removed gray/gradient, pure white
      fontFamily: cardData?.card_font || "sans-serif",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.5rem",
    },
    container: {
      backgroundColor: "#ffffff", // inner container white
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      padding: "2rem",
      width: "100%",
      maxWidth: "600px",
      color: cardData?.card_font_color || "#000",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "0.5rem",
      color: cardData?.card_font_color || "#111827",
    },
    subtitle: {
      textAlign: "center",
      color: "#6b7280",
      marginBottom: "1.5rem",
    },
    profileBox: {
      backgroundColor: "#ffffff", // removed gradient
      padding: "1rem",
      borderRadius: "12px",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    profileName: {
      fontWeight: "700",
      fontSize: "1.25rem",
      marginTop: "0.5rem",
      color: cardData?.card_font_color || "#000",
    },
    input: {
      width: "100%",
      padding: "0.9rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.75rem",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: cardData?.card_font || "sans-serif",
    },
    inputFocus: {
      borderColor: cardData?.card_font_color || "#06b6d4",
      boxShadow: `0 0 0 2px ${cardData?.card_font_color || "#06b6d4"}33`,
    },
    button: {
      width: "100%",
      backgroundColor: cardData?.card_font_color || "#06b6d4",
      color: "#fff",
      fontWeight: "600",
      padding: "0.9rem",
      borderRadius: "0.75rem",
      border: "none",
      cursor: "pointer",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
  };

  return (
    <>
      {loader && <Loader />}
      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.title}>Appointment</h2>
          <p style={styles.subtitle}>Fill out the form below to book your appointment.</p>

          <div style={styles.profileBox}>
            {data?.image_source === "local" ? (
              <Image
                src={`/assets/assets/uploads/card-profile/${data?.profile}`}
                alt="Profile"
                width={90}
                height={90}
                className="rounded-full border border-black mx-auto"
              />
            ) : (
              <Image
                src={data?.profile}
                alt="Profile"
                width={90}
                height={90}
                className="rounded-full border border-black mx-auto"
              />
            )}
            <h1 style={styles.profileName}>{data?.title || "No Title"}</h1>
          </div>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={initialValue.name}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            <input
              type="number"
              placeholder="Phone"
              name="mobile"
              value={initialValue.mobile}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={initialValue.email}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            <input
              type="datetime-local"
              name="date"
              value={initialValue.date}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            <textarea
              placeholder="Comments"
              name="query"
              value={initialValue.query}
              onChange={handleChange}
              style={{ ...styles.input, minHeight: "80px", resize: "none" }}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            ></textarea>

            <button
              type="button"
              onClick={submitData}
              style={{
                ...styles.button,
                opacity:
                  !initialValue.name ||
                  !initialValue.email ||
                  !initialValue.mobile ||
                  !initialValue.date ||
                  !initialValue.query
                    ? 0.5
                    : 1,
                cursor:
                  !initialValue.name ||
                  !initialValue.email ||
                  !initialValue.mobile ||
                  !initialValue.date ||
                  !initialValue.query
                    ? "not-allowed"
                    : "pointer",
              }}
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
