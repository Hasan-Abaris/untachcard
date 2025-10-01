
import React from "react";

const Testimonials = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 text-center max-w-lg mx-auto">
            <h3 className="font-bold text-lg mb-4">Testimonials</h3>
            <img
                src="/assets/cardPreview/resti-seven.jpg"
                alt="client"
                className="w-20 h-20 rounded-full mx-auto"
            />
            <h4 className="mt-3 font-semibold">Captain America</h4>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐☆</p>
            <p className="text-gray-600 text-sm mt-2">
                TimWork is the best tool to make up projects quickly.
            </p>
        </div>
    );
};

export default Testimonials;
