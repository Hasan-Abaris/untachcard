"use client";
import React, { useState } from "react";

function Dynamiccard() {
  const [primaryColor, setPrimaryColor] = useState("#00FF00");
  const [backgroundSecondaryColor, setBackgroundSecondaryColor] =
    useState("#1A2A44");
  const [backgroundColor, setBackgroundColor] = useState("#1A2A44");
  const [buttonTextColor, setButtonTextColor] = useState("#4A2C2A");
  const [labelTextColor, setLabelTextColor] = useState("#D3D3D3");
  const [descriptionTextColor, setDescriptionTextColor] = useState("#B0B0B0");
  const [cardsBackground, setCardsBackground] = useState("#D3D3D3");
  const [socialIconColor, setSocialIconColor] = useState("#D3D3D3");
  const [stickyPosition, setStickyPosition] = useState("Right");
  const [customField1, setCustomField1] = useState("");
  const [customField2, setCustomField2] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [buttonStyle, setButtonStyle] = useState("Style 1");

  const buttonStyles = {
    "Style 1": "bg-purple-600 text-white rounded-md px-6 py-2",
    "Style 2": "bg-purple-600 text-white rounded-md px-6 py-2",
    "Style 3": "bg-purple-600 text-white rounded-md px-6 py-2",
    "Style 4": "bg-purple-600 text-white rounded-md px-6 py-2",
    "Style 5": "bg-purple-600 text-white rounded-full px-6 py-2",
    "Style 6":
      "bg-purple-600 text-white rounded-md border-dashed border-2 px-6 py-2",
    "Style 7":
      "bg-transparent text-purple-600 border border-purple-600 rounded-md px-6 py-2",
    "Style 8": "bg-gray-300 text-gray-800 rounded-md px-6 py-2",
    "Style 9": "bg-gray-300 text-gray-800 rounded-md px-6 py-2",
    "Style 10":
      "bg-transparent text-gray-800 border border-gray-300 rounded-md px-6 py-2",
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white rounded-xl shadow-lg max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Dynamic vCard Settings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Settings */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Dynamic vCard Content
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Customize your vCard with dynamic fields, real-time updates, and
              interactive features.
            </p>

            {/* Color Settings */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Secondary Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={backgroundSecondaryColor}
                onChange={(e) => setBackgroundSecondaryColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={buttonTextColor}
                onChange={(e) => setButtonTextColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Label Text Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={labelTextColor}
                onChange={(e) => setLabelTextColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description Text Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={descriptionTextColor}
                onChange={(e) => setDescriptionTextColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cards Background:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={cardsBackground}
                onChange={(e) => setCardsBackground(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Social Icon Color:
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                value={socialIconColor}
                onChange={(e) => setSocialIconColor(e.target.value)}
              />
            </div>

            {/* Sticky Button Position */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sticky Button:
              </label>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 border rounded-md ${
                    stickyPosition === "Left" ? "bg-gray-300" : "bg-gray-100"
                  }`}
                  onClick={() => setStickyPosition("Left")}
                >
                  Left
                </button>
                <button
                  className={`px-4 py-2 border rounded-md ${
                    stickyPosition === "Right" ? "bg-gray-300" : "bg-gray-100"
                  }`}
                  onClick={() => setStickyPosition("Right")}
                >
                  Right
                </button>
              </div>
            </div>

            {/* Button Styles */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Styles:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(buttonStyles).map((style) => (
                  <button
                    key={style}
                    className={buttonStyles[style]}
                    onClick={() => setButtonStyle(style)}
                    style={{
                      backgroundColor:
                        buttonStyle === style ? primaryColor : "",
                    }}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Fields */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ color: labelTextColor }}
              >
                Custom Field 1
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter value"
                value={customField1}
                onChange={(e) => setCustomField1(e.target.value)}
                style={{ color: descriptionTextColor }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ color: labelTextColor }}
              >
                Custom Field 2
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter value"
                value={customField2}
                onChange={(e) => setCustomField2(e.target.value)}
                style={{ color: descriptionTextColor }}
              />
            </div>

            {/* Toggle Status */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="dynamicCardStatus"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="dynamicCardStatus"
                className="text-sm font-medium text-gray-700"
              >
                {isActive ? "Active" : "Inactive"}
              </label>
            </div>
          </div>

          {/* Save and Discard Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Save
            </button>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Discard
            </button>
          </div>
        </div>

        {/* Right Column - Mobile Preview */}
        <div className="flex justify-center">
          <div
            className="w-[300px] h-[550px] bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center"
            style={{
              background: `linear-gradient(to right, ${backgroundColor}, ${backgroundSecondaryColor})`,
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Live Preview
            </h3>
            <div
              className="w-full space-y-4"
              style={{ backgroundColor: cardsBackground }}
            >
              <div className="flex items-center space-x-4 p-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
                <div>
                  <h6
                    className="text-sm font-medium"
                    style={{ color: labelTextColor }}
                  >
                    Pallavi Hegde
                  </h6>
                  <p
                    className="text-xs"
                    style={{ color: descriptionTextColor }}
                  >
                    UI / UX Designer
                  </p>
                </div>
              </div>
              <p
                className="text-sm p-4"
                style={{ color: descriptionTextColor }}
              >
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex justify-end space-x-2 p-4">
                <button
                  className={`px-4 py-2 rounded-full ${buttonStyles[buttonStyle]}`}
                  style={{
                    backgroundColor: primaryColor,
                    color: buttonTextColor,
                  }}
                >
                  Add to contact
                </button>

                <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-800">×</span>
                </button>
              </div>
              {stickyPosition === "Right" && (
                <div className="absolute bottom-4 right-4">
                  <button
                    className={`px-4 py-2 rounded-full ${buttonStyles[buttonStyle]}`}
                    style={{
                      backgroundColor: primaryColor,
                      color: buttonTextColor,
                    }}
                  >
                    Follow
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dynamiccard;
