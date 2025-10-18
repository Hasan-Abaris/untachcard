"use client";
import React, { useState } from "react";

const Gallery = ({ data, cardData }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!data || data.length === 0) {
    return (
      <p
        className="text-center mt-4"
        style={{
          color: cardData?.card_font_color || "#9ca3af",
          fontFamily: cardData?.card_font || "sans-serif",
        }}
      >
        No gallery available.
      </p>
    );
  }

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const styles = {
    title: {
      fontSize: "1.8rem",
      fontWeight: 700,
      textAlign: "center",
      marginBottom: "1.5rem",
      color: cardData?.card_font_color || "#111827",
      fontFamily: cardData?.card_font || "sans-serif",
    },
    imageBox: {
      width: "12rem",
      height: "12rem",
      borderRadius: "10px",
      cursor: "pointer",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.3s ease",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.8)",
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    closeBtn: {
      position: "absolute",
      top: "8px",
      right: "8px",
      backgroundColor: "#1f2937",
      color: "#fff",
      padding: "0.5rem",
      borderRadius: "50%",
      cursor: "pointer",
      border: "none",
      fontSize: "1rem",
    },
  };

  return (
    <>
      {/* Gallery Title */}
      <h3 style={styles.title}>Gallery</h3>

      {/* Gallery Images */}
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            style={{
              ...styles.imageBox,
              backgroundImage: `url(${item.url})`,
            }}
            onClick={() => openLightbox(item.url)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          ></div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div style={styles.overlay}>
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={selectedImage}
              alt="Gallery Item"
              className="w-full h-auto rounded"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
              }}
            />
            <button style={styles.closeBtn} onClick={closeLightbox}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
