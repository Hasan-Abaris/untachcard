import React from "react";

const Portfolio = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Portfolio</h2>
            <div className="bg-white/80 rounded-xl shadow-md overflow-hidden">
                <img
                    src="/assets/cardPreview/portifolio-seven.jpg"
                    alt="portfolio"
                    className="w-full object-cover"
                />
                <div className="p-4">
                    <h3 className="font-bold">Project Management Systems</h3>
                    <p className="text-sm text-gray-700">
                        Professional Project Management Systems and CRM applications.
                    </p>
                    <button className="mt-3 border px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
