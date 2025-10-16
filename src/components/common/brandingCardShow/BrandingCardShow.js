
import React from 'react'

const BrandingCardShow = () => {
    return (
        <div className="flex justify-center p-3">
            <a
                href="https://www.abarissoftech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black no-underline hover:underline hover:text-red-600 transition"
            >
                Powered by <span className="font-semibold"> Abaris Softech</span>
            </a>
        </div>

    )
}

export default BrandingCardShow