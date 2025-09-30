
"use client";
import React, { useState } from "react";
import OrderNFCbuy from "./orderNFCbuy/OrderNFCbuy";

const OrderNFC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cards = [
        { id: 1, image: "/assets/dasgboardsideImage/nfc1.jpg", name: "Kiona Ryan", price: "$552.00" },
        { id: 2, image: "/assets/dasgboardsideImage/nfc2.jpeg", name: "Melodie Nelson", price: "$150.00" },
        { id: 3, image: "/assets/dasgboardsideImage/nfc3.jpeg", name: "Mollie Howe", price: "$140.00" },
        { id: 4, image: "/assets/dasgboardsideImage/nfc4.jpeg", name: "Kim Joyner", price: "$22.00" },
        { id: 5, image: "/assets/dasgboardsideImage/nfc5.jpeg", name: "Hello world", price: "$99.00" },
        { id: 6, image: "/assets/dasgboardsideImage/nfc6.jpg", name: "QR Card", price: "$100.00" },
        { id: 7, image: "/assets/dasgboardsideImage/nfc7.png", name: "so & So", price: "$500.00" },
        { id: 8, image: "/assets/dasgboardsideImage/nfc8.png", name: "Gift Card", price: "$20.00" },
        { id: 9, image: "/assets/dasgboardsideImage/nfc9.jpg", name: "rtyyrt", price: "$150.00" },
        { id: 10, image: "/assets/dasgboardsideImage/nfc10.png", name: "Sushant", price: "$100.00" },
    ];

    const order = {
        productName: "Samsung Money Card",
        name: "Kim Joyner",
        email: "kimjoyner@example.com",
        phone: "+1 234 567 890",
        paymentType: "Credit Card",
        amount: "$22.00",
        address: "123 Main Street, NY, USA",
        orderedAt: "2025-09-27 10:30 AM",
        description: "Autem reprehenderit",
        image: "/assets/dasgboardsideImage/nfc1.jpg"
    };

    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Order NFC / NFC Card Type
                    </h1>
                </div>
            </div>

            <div className="p-4 md:p-6">
                <h2 className="text-lg font-medium mb-4">
                    NFC Card Type<span className="text-red-500">*</span>
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col items-center group"
                            onClick={() => setIsOpen(true)}
                        >
                            {/* Card Image */}
                            <div className="w-full aspect-square rounded-lg border shadow-sm overflow-hidden bg-white hover:shadow-lg transition">
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition"
                                />
                            </div>

                            {/* Title & Price */}
                            <div className="flex flex-col items-center mt-2">
                                <span className="text-gray-800 font-medium">{card.name}</span>
                                <span className="text-blue-600 font-semibold">{card.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <OrderNFCbuy
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    order={order}
                />
            </div>
        </>
    );
};

export default OrderNFC;
