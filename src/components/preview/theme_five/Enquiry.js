import React from 'react';

function Enquiry() {
  return (
    <div className=" flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-lg bg-black rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-white">Enquiry Form</h4>
        </div>
        <div className="space-y-4 text-white">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="w-1/2">
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
          <div>
            <textarea
              name="msg"
              placeholder="Type your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              Send
            </button>
          </div>
          <div className="result text-center text-gray-600"></div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;