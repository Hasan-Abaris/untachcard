

import React from 'react'

const BrandBar = () => {
    const brands = ["SONY", "adidas", "tumblr", "vimeo", "SONY"];
    return (
        <div className="w-full bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 text-white font-semibold text-lg">
                {brands.map((brand, i) => (
                    <span key={i} className="hover:text-gray-300 cursor-pointer">
                        {brand}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default BrandBar