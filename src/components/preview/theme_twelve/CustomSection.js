
import React from "react";

const CustomSection = () => {
    return (
        <div className="bg-black text-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-2">Custom Section</h2>
            <h3 className="text-xl font-semibold mb-2">Insert whatever you like</h3>
            <p className="text-gray-300">
                This is custom area, totally customizable into anything you like using
                basic HTML with the built in editor.{" "}
                <span className="font-semibold">Below are examples of some custom sections.</span>
            </p>
        </div>
    );
};

export default CustomSection;