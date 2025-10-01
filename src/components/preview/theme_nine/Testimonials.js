import React from "react";

const Testimonials = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Testimonials</h2>
            <div className="bg-white/80 rounded-xl shadow-md p-4">
                <img
                    src="/assets/cardPreview/resti-seven.jpg"
                    alt="client"
                    className="w-24 h-24 rounded-full mx-auto"
                />
                <h3 className="font-semibold mt-2">Black Widow</h3>
                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-gray-600 italic mt-2">
                    This is unbelievable. After using TimWork my business skyrocketed!
                </p>
            </div>
        </div>
    );
};

export default Testimonials;
