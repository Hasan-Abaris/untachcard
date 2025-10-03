import React from "react";

const Testimonials = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Testimonials</h2>
            <div className="text-center">
                <img
                    src="/assets/cardPreview/resti-seven.jpg"
                    alt="client"
                    className="w-20 h-20 rounded-full mx-auto"
                />
                <h3 className="mt-2 font-semibold">Black Widow</h3>
                <p className="text-yellow-400">★★★★★</p>
                <p className="text-gray-400 mt-2">
                    This is unbelievable. After using timework my business skyrocketed!
                </p>
            </div>
        </div>
    );
};

export default Testimonials;
