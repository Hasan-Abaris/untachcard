import React from "react";

const Gallery = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center" style={{
            backgroundImage: "url('/assets/banner/theme-nine.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
                <img
                    src="/assets/cardPreview/g-seven1.jpg"
                    alt="gallery1"
                    className="rounded-lg shadow-md"
                />
                <img
                    src="/assets/cardPreview/g-seven2.jpg"
                    alt="gallery2"
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default Gallery;
