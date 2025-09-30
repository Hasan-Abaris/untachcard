"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { key: "basic", label: "Basic Details" },
  { key: "templates", label: "vCard Templates" },
  { key: "dynamic", label: "Dynamic vCard" },
  { key: "hours", label: "Business Hours" },
  { key: "qrcode", label: "Customize QR Code" },
  { key: "services", label: "Services" },
  { key: "products", label: "Products" },
  { key: "insta", label: "InstaEmbed" },
  { key: "gallery", label: "Galleries" },
  { key: "blogs", label: "Blogs" },
  { key: "testimonials", label: "Testimonials" },
  { key: "iframe", label: "Iframes" },
];

export default function EditVcardPage({ id }) {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="flex min-h-screen bg-gray-50 mt-24">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Edit vCard #{id}</h2>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                activeTab === item.key
                  ? "bg-indigo-100 text-indigo-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Edit vCard</h1>
          <Link
            href="/Dashboard/vcards"
            className="px-4 py-2 border rounded-md text-indigo-600 hover:bg-indigo-50"
          >
            Back
          </Link>
        </div>

        {/* Dynamic Content */}
        {activeTab === "basic" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Basic Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </form>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">vCard Templates</h2>
            <p>Here you can select or customize templates.</p>
          </div>
        )}

        {activeTab === "dynamic" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Dynamic vCard</h2>
            <p>Here you can configure dynamic vCard features.</p>
          </div>
        )}
      </main>
    </div>
  );
}
