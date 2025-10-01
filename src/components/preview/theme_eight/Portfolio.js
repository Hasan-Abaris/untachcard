
import React from "react";

const Portfolio = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Portfolio</h2>
            <img
                src="/assets/cardPreview/portifolio-seven.jpg"
                alt="portfolio"
                className="rounded-lg w-full h-40 object-cover"
            />
            <p className="mt-4 text-sm text-gray-300">
                Professional Project Management Systems and CRM applications.
            </p>
            <button className="mt-3 px-4 py-2 border rounded hover:bg-gray-700">
                View
            </button>
        </div>
    );
};

export default Portfolio;
