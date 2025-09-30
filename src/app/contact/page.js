"use client";

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can send formData to your backend or API here
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-20">
      {/* Left Section - Info */}
      <div className="bg-white border-l p-6 w-full md:w-1/2 rounded-lg shadow">
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold">Vendors</h4>
            <p className="mt-2 text-gray-700">
              If you are a registered vendor or a business looking to promote your brand on our portal, please send in your queries at{" "}
              <span className="font-bold">vendors@wedmegood.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Marketing Collaborations</h4>
            <p className="mt-2 text-gray-700">
              For brand collaborations - sponsored content, social media activations etc., please write into{" "}
              <span className="font-bold">partnerships@wedmegood.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Wedding Submissions</h4>
            <p className="mt-2 text-gray-700">
              WedMeGood features weddings across cultures, styles, and budgets. To submit your wedding, kindly email us 15-20 photos at{" "}
              <span className="font-bold">submissions@wedmegood.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Careers</h4>
            <p className="mt-2 text-gray-700">
              We are a team of passionate young minds looking to reinvent the wedding space. Please check our careers page for current openings and email us at{" "}
              <span className="font-bold">hr@wedmegood.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Customers</h4>
            <p className="mt-2 text-gray-700">
              We love to hear from our precious users. For any feedback or queries simply write in to{" "}
              <span className="font-bold">info@wedmegood.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="bg-white border-l p-6 w-full md:w-1/2 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Enter your message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="border rounded-md px-3 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
