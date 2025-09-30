"use client";
import React, { useState } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const Billing = () => {
  const [billingAddresses, setBillingAddresses] = useState([
    {
      id: 1,
      name: "Hasan Khan",
      address: "123, Rose Garden, Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500034",
      phone: "9876543210",
      country: "India",
      default: true,
    },
    {
      id: 2,
      name: "Hasan Khan",
      address: "45, Palm Street, Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500033",
      phone: "9876543211",
      country: "India",
      default: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    country: "",
    default: false,
  });

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.address && newAddress.city) {
      setBillingAddresses([
        ...billingAddresses,
        { ...newAddress, id: Date.now() },
      ]);
      setNewAddress({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        country: "",
        default: false,
      });
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">My Billing Addresses</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {billingAddresses.map((address) => (
            <div
              key={address.id}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition"
            >
              {address.default && (
                <span className="text-sm bg-pink-100 text-pink-600 px-2 py-1 rounded-full font-semibold mb-2 inline-block">
                  Default
                </span>
              )}
              <h2 className="font-semibold text-lg mb-2">{address.name}</h2>
              <p>{address.address}</p>
              <p>
                {address.city}, {address.state} - {address.zip}
              </p>
              <p>{address.country}</p>
              <p>Phone: {address.phone}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 transition">
                  Edit
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Add New Billing Address
          </button>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Billing Address</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.name}
              onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.address}
              onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.city}
              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="State"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.state}
              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.zip}
              onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.phone}
              onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border rounded p-2 mb-3"
              value={newAddress.country}
              onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
            />
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={newAddress.default}
                onChange={(e) => setNewAddress({ ...newAddress, default: e.target.checked })}
                className="mr-2"
              />
              <span>Set as default</span>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAddress}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Billing;
