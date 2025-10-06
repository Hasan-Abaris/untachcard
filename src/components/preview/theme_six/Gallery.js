"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "https://img.youtube.com/vi/vSIdhL_IQIU/0.jpg",
      link: "https://www.youtube.com/watch?v=vSIdhL_IQIU",
    },
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="card p-4 max-w-md w-full  text-black">
        <div className="card-header flex justify-center items-center p-4">
          <h4 className="text-xl font-semibold">Gallery</h4>
        </div>

        <div className="col-md-12">
          <div className="gallery gallery-md text-center">
            {galleryItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(item.image);
                }}
                className="cursor-pointer"
              >
                <div
                  className="gallery-item h-48 bg-cover bg-center rounded"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
              </a>
            ))}
          </div>
        </div>

        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage}
                alt="Gallery Item"
                className="w-full h-auto rounded"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;