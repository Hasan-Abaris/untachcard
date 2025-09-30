"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Add this
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const MyCart = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wedding Venue Booking",
      price: 50000,
      quantity: 1,
      image: "/assets/images/venue1.jpg",
    },
    {
      id: 2,
      name: "Photography Package",
      price: 15000,
      quantity: 2,
      image: "/assets/images/photo1.jpg",
    },
    {
      id: 3,
      name: "Flower Decoration",
      price: 8000,
      quantity: 1,
      image: "/assets/images/decor1.jpg",
    },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(value) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    // Store cart items in localStorage so checkout page can read them
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    router.push("/account/checkout");
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">My Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white shadow-md rounded-lg p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <label>Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        className="w-16 border px-2 py-1 rounded"
                      />
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="ml-4 text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-semibold text-xl mb-4">Cart Summary</h2>
              <p className="mb-2">
                Subtotal: <span className="font-semibold">₹{totalAmount}</span>
              </p>
              <p className="mb-4 text-sm text-gray-600">
                Taxes and shipping calculated at checkout
              </p>
              <button
                onClick={goToCheckout}
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MyCart;
