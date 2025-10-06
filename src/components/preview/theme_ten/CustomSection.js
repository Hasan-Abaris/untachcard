
import React from "react";

const CustomSection = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-2">Custom Section</h3>
            <h4 className="font-semibold text-xl">Insert whatever you like</h4>
            <p className="mt-2 text-gray-600">
                This is custom area, totally customizable into anything you like using
                basic HTML with the built in editor.{" "}
                <span className="font-semibold">Below are examples of some custom sections.</span>
            </p>
        </div>
    );
};

export default CustomSection;
