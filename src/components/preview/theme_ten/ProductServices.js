import React from "react";

const ProductServices = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4">Products and Services</h3>
            <div className="relative">
                <img
                    src="/assets/cardPreview/product-seven.jpg"
                    alt="service"
                    className="rounded-lg w-full"
                />
                {/* <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    SAAS
                </span> */}
                <span className="absolute bottom-3 left-3 bg-pink-200 px-3 py-1 rounded shadow">
                    Price: 19-29 USD
                </span>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold">TimWork and TimWork SaaS</h4>
                <p className="text-gray-600 text-sm mt-2">
                    TimWork is a perfect, robust, lightweight, superfast web application
                    to fulfill all your CRM, Project Management, and Team Collaboration
                    needs.
                </p>
                <button className="mt-4 text-sm font-semibold text-blue-600 flex items-center gap-2">
                    Enquiry →
                </button>
            </div>
        </div>
    );
};

export default ProductServices;
