import React from "react";
import Image from "next/image";

function InstAppMail() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Instagram Section */}
      <div className="section-instagram text-center bg-gray-900 text-white py-12 rounded-lg">
        <h3 className="text-3xl font-playfair font-bold mb-4">
          More Inspiration on Instagram
        </h3>
        <h3 className="text-3xl font-playfair font-bold mb-6">@Wedding Pro</h3>
        <a
          className="inline-block bg-white text-black font-helvetica py-2 px-6 rounded-full hover:bg-gray-200 transition"
          href="/https.www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
      </div>

      {/* Download App Section */}
      <div className="section-download-app mt-12 flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg">
        <div className="w-full md:w-6/12 mb-6 md:mb-0">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Get more Wedding Ideas
          </h2>
          <h3 className="text-2xl font-playfair mb-6">
            Download the WedMeGood App now
          </h3>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <p className="text-lg mb-4">Get a link to download the App</p>
            <form className="space-y-4">
              <input
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="tel"
                name="mobile"
                placeholder="Enter Mobile No"
              />
              <p className="text-red-500 text-sm"></p>
              <button
                type="button"
                className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition shadow-md font-helvetica"
              >
                Text me the download link
              </button>
            </form>
            <div className="text-center mt-6">
              <a
                href="https://wedmegood.app.link/dwnldwmgapp"
                rel="noopener noreferrer"
                className="inline-block mr-4"
              >
                <img
                  className="h-12"
                  src="/assets/banner/banner1.jpg"
                  alt="Download App"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wedmegood.planner"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  className="h-12"
                  src="https://images.wedmegood.com/blog/android-icon.png"
                  alt="Android Icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="image bg-gray-200 h-64 rounded-lg"></div> {/* Placeholder for image */}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="section-subscribe mt-12 bg-gray-900 text-white py-12 rounded-lg">
        <div className="w-full">
          <form className="text-center space-y-6">
            <h2 className="text-2xl font-playfair font-bold">
              Get more wedding ideas in your inbox
            </h2>
            <div className="w-full md:w-6/12 mx-auto">
              <input
                id="subscriber-email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="email"
                name="subscriber-email"
                autoComplete="off"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="button"
              className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition shadow-md font-helvetica"
            >
              I want More
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InstAppMail;