import React from "react";

const ProductServices = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">
                Products and Services
            </h2>
            <div className="relative">
                <img
                    src="/assets/cardPreview/product-seven.jpg"
                    alt="product"
                    className="rounded-lg w-full h-40 object-cover"
                />
                {/* <span className="absolute top-2 right-2 bg-gray-800 px-2 py-1 rounded text-xs">
                    SAAS
                </span> */}
                <span className="absolute bottom-2 left-2 bg-gray-800 px-2 py-1 rounded text-xs">
                    Price: 19–29 USD
                </span>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold">TimWork and TimWork SaaS</h3>
                <p className="text-gray-400 text-sm mt-2">
                    TimWork is a perfect, robust, lightweight, superfast web application
                    to fulfill all your CRM, Project Management, and Team Collaboration
                    needs.
                </p>
                <button className="mt-3 px-4 py-2 border rounded hover:bg-gray-700">
                    Enquiry →
                </button>
            </div>
        </div>
    );
};

export default ProductServices;
