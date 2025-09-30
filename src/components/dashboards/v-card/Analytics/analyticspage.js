"use client";
import React from "react";

function Overviewpage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 mb-6">
        {["Overview", "Countries", "Devices", "Operating Systems", "Browsers", "Languages"].map(
          (tab, i) => (
            <button
              key={i}
              className={`pb-2 text-sm font-medium ${
                tab === "Overview"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Countries */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Countries</h3>
          {[
            { name: "India", flag: "https://vcards.infyom.com/vendor/blade-flags/country-in.svg" },
            { name: "Egypt", flag: "https://vcards.infyom.com/vendor/blade-flags/country-eg.svg" },
            { name: "Brazil" },
            { name: "Turkey" },
            { name: "Malaysia", flag: "https://vcards.infyom.com/vendor/blade-flags/country-my.svg" },
          ].map((country, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center space-x-2">
                  {country.flag && (
                    <img src={country.flag} alt={country.name} className="w-6 h-6 rounded" />
                  )}
                  <span>{country.name}</span>
                </div>
                <div className="text-sm text-gray-500">17% • 1</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "17%" }}></div>
              </div>
            </div>
          ))}
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View More Products
          </a>
        </div>

        {/* Devices */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Devices</h3>
          <div className="flex justify-between items-center mb-1">
            <span>Desktop</span>
            <div className="text-sm text-gray-500">100% • 6</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
          <a href="#" className="text-sm text-gray-500 hover:underline mt-4 block">
            View More Products
          </a>
        </div>

        {/* Operating Systems */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Operating Systems</h3>
          <div className="flex justify-between items-center mb-1">
            <span>Windows</span>
            <div className="text-sm text-gray-500">100% • 6</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "100%" }}></div>
          </div>
          <a href="#" className="text-sm text-gray-500 hover:underline mt-4 block">
            View More Products
          </a>
        </div>

        {/* Browsers */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Browsers</h3>
          {[
            { name: "Chrome", percent: 83, count: 5 },
            { name: "Edge", percent: 17, count: 1 },
          ].map((browser, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span>{browser.name}</span>
                <div className="text-sm text-gray-500">
                  {browser.percent}% • {browser.count}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full"
                  style={{ width: `${browser.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View More Products
          </a>
        </div>

        {/* Languages */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          {[
            { name: "English", percent: 50, count: 3 },
            { name: "Arabic - العربية", percent: 17, count: 1 },
            { name: "Portuguese - português", percent: 17, count: 1 },
            { name: "Turkish - Türkçe", percent: 17, count: 1 },
          ].map((lang, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span>{lang.name}</span>
                <div className="text-sm text-gray-500">
                  {lang.percent}% • {lang.count}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full"
                  style={{ width: `${lang.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View More Products
          </a>
        </div>
      </div>
    </div>
  );
}

export default Overviewpage;
