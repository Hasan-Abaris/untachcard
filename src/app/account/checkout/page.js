"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Script from "next/script";

const Checkout = () => {
  // Dummy cart data (you can pass this via Context/Props later)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wedding Venue Booking", price: 50000, quantity: 1 },
    { id: 2, name: "Photography Package", price: 15000, quantity: 2 },
    { id: 3, name: "Flower Decoration", price: 8000, quantity: 1 },
  ]);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = async () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_1234567890abcdef", // Replace with your Razorpay Key ID
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "Wedding Pro",
      description: "Order Payment",
      image: "/assets/images/logo.png", // optional
      handler: function (response) {
        console.log("Payment Success:", response);
        setIsPaid(true);
        setCartItems([]); // clear cart after success
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f472b6", // pink-500
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      {/* Razorpay Script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">Checkout</h1>

        {isPaid ? (
          <div className="text-center bg-green-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              ✅ Payment Successful!
            </h2>
            <p className="text-gray-700">
              Your order has been placed successfully. 🎉
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
            <h2 className="font-semibold text-xl mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b py-2 text-gray-700"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>

            <button
              onClick={handlePayment}
              className="mt-6 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
            >
              Pay Now
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
