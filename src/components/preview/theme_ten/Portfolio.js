import React from "react";

const Portfolio = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto">
            <h3 className="font-bold text-lg mb-4">Portfolio</h3>
            <div>
                <img
                    src="/assets/cardPreview/portifolio-seven.jpg"
                    alt="portfolio"
                    className="rounded-lg w-full"
                />
                <h4 className="mt-3 font-semibold">Project Management Systems</h4>
                <p className="text-gray-600 text-sm mt-2">
                    Professional Project Management Systems and CRM applications.
                </p>
                <button className="mt-4 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    View
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
