"use client";
import React, { useState } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New Password and Confirm Password do not match!");
      return;
    }

    // Dummy submit action
    setMessage("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">Change Password</h1>

        <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
          {message && (
            <p
              className={`mb-4 px-3 py-2 rounded ${
                message.includes("successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Enter current password"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Confirm new password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChangePassword;
