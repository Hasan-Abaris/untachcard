"use client";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiEye, FiDownload, FiFilter } from "react-icons/fi";
import MyNFCcardsdeatils from "./MyNFCcardsdeatils/MyNFCcardsdeatils";

const MyNFCcards = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cards] = useState([
        {
            id: 1,
            image: "/card1.png",
            name: "Premal Gaywala",
            designation: "Computer Sales",
            phone: "+91 9876543210",
            date: "Sep 25 2025",
            status: "Pending",
        },
        {
            id: 2,
            image: "/card1.png",
            name: "MiSa",
            designation: "MiSa",
            phone: "+91 9876543210",
            date: "Sep 25 2025",
            status: "Pending",
        },
        {
            id: 3,
            image: "/card2.png",
            name: "Akio Sharmasdc",
            designation: "Content Writer",
            phone: "+91 9856326548",
            date: "Sep 24 2025",
            status: "Pending",
        },
    ]);

    const order = {
        userName: "Premal Gaywala",
        nfcCardType: "TEST NFC NISA",
        vCard: "Sanvi Infosys",
        companyName: "Sanvi Infosys",
        address: "Udhna Surat",
        orderStatus: "Pending",
        createdAt: "Sep 25 2025",
        paymentStatus: "Paid",
        paymentType: "Manually",
        pricePerCard: "10.00",
        quantity: 1,
        subtotal: "10.00",
        tax: "0.00",
        total: "10.00",
        logo: "/logos/routes-overseas.png"
    };

    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        My NFC Cards
                    </h1>
                </div>
            </div>

            <div className="p-4 md:p-6">
                {/* Top Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
                    {/* Search */}
                    <div className="relative w-full md:w-1/3">
                        <FiSearch className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        {/* <button className="p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                        <FiFilter />
                    </button>
                    <button className="px-5 py-2 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500">
                        How it works?
                    </button> */}
                        <Link href="/dashboards/myNFCcards/orderNFC" className="px-5 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600">
                            Order NFC
                        </Link>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 text-gray-600 text-sm">
                            <tr>
                                <th className="px-4 py-3">CARD TYPE</th>
                                <th className="px-4 py-3">NAME</th>
                                <th className="px-4 py-3">DESIGNATION</th>
                                <th className="px-4 py-3">PHONE</th>
                                <th className="px-4 py-3">ORDERED AT</th>
                                <th className="px-4 py-3">ORDER STATUS</th>
                                <th className="px-4 py-3 text-center">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {cards.map((card, index) => (
                                <tr
                                    key={card.id}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    {/* Card Image */}
                                    <td className="px-4 py-3">
                                        <img
                                            src={card.image}
                                            alt="card"
                                            className="w-24 h-16 object-contain rounded"
                                        />
                                    </td>

                                    {/* Name */}
                                    <td className="px-4 py-3 font-medium">{card.name}</td>

                                    {/* Designation */}
                                    <td className="px-4 py-3">{card.designation}</td>

                                    {/* Phone */}
                                    <td className="px-4 py-3">{card.phone}</td>

                                    {/* Date */}
                                    <td className="px-4 py-3">{card.date}</td>

                                    {/* Status */}
                                    <td className="px-4 py-3">
                                        <span className="px-3 py-1 text-sm rounded-lg bg-indigo-100 text-indigo-600">
                                            {card.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3 flex justify-center items-center gap-3">
                                        <button className="text-indigo-500 hover:text-indigo-700">
                                            <FiDownload size={18} />
                                        </button>
                                        <button className="text-indigo-500 hover:text-indigo-700">
                                            <FiEye size={18} onClick={() => setIsOpen(true)} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <MyNFCcardsdeatils
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    order={order}
                />
            </div>
        </>
    );
};

export default MyNFCcards;
