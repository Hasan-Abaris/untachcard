import React from "react";

const Gallery = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
                <img src="/assets/cardPreview/g-seven1.jpg" className="rounded-lg" />
                <img src="/assets/cardPreview/g-seven2.jpg" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Gallery;
