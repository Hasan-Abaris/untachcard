
import React from "react";

const CustomSection = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-nine.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-center text-lg font-bold">Custom Section</h2>
            <h3 className="mt-2 text-xl font-semibold">Insert whatever you like</h3>
            <p className="text-sm text-gray-700 mt-2">
                This is custom area, totally customizable into anything you like using
                basic HTML with the built in editor.{" "}
                <strong>Below are examples of some custom sections.</strong>
            </p>
        </div>
    );
};

export default CustomSection;
