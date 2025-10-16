"use client";
import React, { useState } from "react";

const Gallery = ({ data }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!data || data.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-4">No gallery available.</p>
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

  return (
    <div className="my-8 max-w-2xl mx-auto p-4 bg-black rounded-lg shadow-lg">
      {/* Gallery Title */}
      <h3 className="text-2xl font-bold text-center mb-6 text-white">Gallery</h3>

      {/* Gallery Images */}
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="w-48 h-48 bg-cover bg-center rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
            style={{ backgroundImage: `url(${item.url})` }}
            onClick={() => openLightbox(item.url)}
          ></div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={selectedImage}
              alt="Gallery Item"
              className="w-full h-auto rounded"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
