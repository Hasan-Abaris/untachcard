"use client";
import React from 'react'
import { FaIdBadge, FaBan, FaQuestionCircle, FaCalendarCheck, FaFileAlt, FaShoppingCart, FaClock } from "react-icons/fa";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
    const cards = [
        {
            bg: "bg-gradient-to-r from-indigo-500 to-purple-500",
            title: "Hey Mr. Admin,",
            subtitle: "Create your business vCard instantly — no tech skills needed!",
            button: "+ Add New Card",
            buttonStyle: "bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-indigo-100",
        },
        {
            bg: "bg-blue-500",
            icon: <FaIdBadge className="text-white text-4xl" />,
            value: "158",
            label: "Total Active vCards",
        },
        {
            bg: "bg-green-500",
            icon: <FaBan className="text-white text-4xl" />,
            value: "1",
            label: "Total Deactivated vCards",
        },
        {
            bg: "bg-sky-400",
            icon: <FaQuestionCircle className="text-white text-4xl" />,
            value: "0",
            label: "Today inquiries",
        },
        {
            bg: "bg-yellow-400",
            icon: <FaCalendarCheck className="text-white text-4xl" />,
            value: "0",
            label: "Today Appointments",
        },
        {
            bg: "bg-red-400",
            icon: <FaFileAlt className="text-white text-4xl" />,
            value: "20",
            label: "WhatsApp Store",
        },
        {
            bg: "bg-gray-800",
            icon: <FaShoppingCart className="text-white text-4xl" />,
            value: "1060",
            label: "WhatsApp Store Order",
        },
        {
            bg: "bg-purple-400",
            icon: <FaClock className="text-white text-4xl" />,
            value: "1011",
            label: "WhatsApp Store Pending Order",
        },
    ];

    const data = [
        { date: "19-09-25", vCard: 80, whatsapp: -40 },
        { date: "20-09-25", vCard: 150, whatsapp: -60 },
        { date: "21-09-25", vCard: 140, whatsapp: -50 },
        { date: "22-09-25", vCard: 130, whatsapp: -60 },
        { date: "23-09-25", vCard: 200, whatsapp: -70 },
        { date: "24-09-25", vCard: 140, whatsapp: -60 },
        { date: "25-09-25", vCard: 180, whatsapp: -70 },
        { date: "26-09-25", vCard: 70, whatsapp: -30 },
    ];
    return (
        <>
            <div className="mt-0 p-4 pt-19">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Dashboard
                    </h1>
                </div>

            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {cards?.map((card, i) => (
                    <div
                        key={i}
                        className={`${card.bg} rounded-xl shadow-lg text-white p-6 flex flex-col justify-center items-start`}
                    >
                        {card.title ? (
                            <>
                                <h2 className="text-lg font-semibold">{card.title}</h2>
                                <p className="text-sm mt-1">{card.subtitle}</p>
                                <button className={card.buttonStyle}>{card.button}</button>
                            </>
                        ) : (
                            <>
                                <div className="mb-3">{card.icon}</div>
                                <h3 className="text-3xl font-bold">{card.value}</h3>
                                <p className="text-sm mt-1">{card.label}</p>
                            </>
                        )}
                    </div>
                ))}



            </div>
            <div className="w-full px-4 lg:px-8 space-y-6">
                {/* Analytics Card */}
                <div className="w-full bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                        <h2 className="text-lg font-semibold">
                            vCard & WhatsApp Store Analytics
                        </h2>
                        <button className="border border-indigo-500 text-indigo-600 px-3 py-1 rounded-lg text-sm flex items-center gap-2 hover:bg-indigo-50">
                            <FaCalendarAlt /> Sep 19, 2025 - Sep 26, 2025
                        </button>
                    </div>

                    {/* Chart */}
                    <div className="w-full h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend
                                    verticalAlign="top"
                                    height={36}
                                    wrapperStyle={{ fontSize: "14px" }}
                                />
                                <Bar dataKey="vCard" fill="#FACC15" name="vCard Visitors" />
                                <Bar dataKey="whatsapp" fill="#22C55E" name="WhatsApp Store Visitors" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Today Appointments */}
                <div className="w-full bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-3">Today Appointments</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-gray-100 rounded-lg">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="px-4 py-2 border">VCARD NAME</th>
                                    <th className="px-4 py-2 border">NAME</th>
                                    <th className="px-4 py-2 border">PHONE</th>
                                    <th className="px-4 py-2 border">EMAIL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="4" className="text-center text-gray-400 py-4 border">
                                        No Data Available
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard