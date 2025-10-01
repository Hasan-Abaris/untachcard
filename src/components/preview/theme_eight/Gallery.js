
import React from "react";

const Gallery = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
                <img src="/assets/cardPreview/g-seven1.jpg" alt="gallery" className="rounded-lg" />
                <img src="/assets/cardPreview/g-seven1.jpg" alt="gallery" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Gallery;
