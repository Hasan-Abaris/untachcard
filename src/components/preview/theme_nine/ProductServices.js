import React from "react";

const ProductServices = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Products and Services</h2>
            <div className="bg-white/80 rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                    <img
                        src="/assets/cardPreview/product-seven.jpg"
                        alt="service"
                        className="w-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                        SAAS
                    </span>
                    <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                        Price: 19-29 USD
                    </span>
                </div>
                <div className="p-4 text-left">
                    <h3 className="font-bold">TimWork and TimWork SaaS</h3>
                    <p className="text-sm text-gray-700">
                        TimWork is a perfect, robust, lightweight, superfast web application
                        to fulfill all your CRM, Project Management, and Team Collaboration
                        needs.
                    </p>
                    <button className="mt-2 text-sm font-bold text-blue-600 hover:underline flex items-center">
                        Enquiry →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductServices;
