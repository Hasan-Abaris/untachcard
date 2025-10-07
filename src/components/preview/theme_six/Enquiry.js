import React from "react";

function Enquiry() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h4 className="text-3xl font-extrabold text-blue-700">Enquiry Form</h4>
          <p className="text-gray-500 mt-2">We’d love to hear from you!</p>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />

          <div className="flex space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-1/2 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile"
              className="w-1/2 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          <textarea
            name="msg"
            placeholder="Type your message"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition h-32 resize-none"
            required
          ></textarea>

          <div className="text-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md">
              Send
            </button>
          </div>

          <div className="result text-center text-gray-500 mt-2"></div>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
