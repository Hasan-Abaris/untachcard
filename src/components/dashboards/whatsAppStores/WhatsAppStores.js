
import React from "react";
import { FaUsers, FaChartLine, FaEdit, FaTrash } from "react-icons/fa";

const WhatsAppStores = () => {
    return (
        <>
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        WhatsApp Stores
                    </h1>
                </div>

            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 overflow-x-auto">
                <table className="w-full border-collapse">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 text-sm md:text-base">
                            <th className="py-3 px-4 text-left">STORE NAME</th>
                            <th className="py-3 px-4 text-left">WHATSAPP NO</th>
                            <th className="py-3 px-4 text-center">STATS</th>
                            <th className="py-3 px-4 text-center">SUBSCRIBERS</th>
                            <th className="py-3 px-4 text-center">STATUS</th>
                            <th className="py-3 px-4 text-center">CREATED AT</th>
                            <th className="py-3 px-4 text-center">ACTION</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        <tr className="border-b hover:bg-gray-50 text-sm md:text-base">
                            {/* Store Name */}
                            <td className="py-4 px-4 flex items-center space-x-3">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="logo"
                                    className="w-10 h-10 rounded-full object-cover border"
                                />
                                <div>
                                    <p className="font-semibold text-gray-700">Sanvi Infosys</p>
                                    <a
                                        href="https://weddingspot.yogeshmaya360.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 text-xs md:text-sm truncate block"
                                    >
                                        https://weddingspot.yogeshmaya360.com/whatsapp-store/sanvi-infosys
                                    </a>
                                </div>
                            </td>

                            {/* WhatsApp No */}
                            <td className="py-4 px-4">+91 9876543210</td>

                            {/* Stats */}
                            <td className="py-4 px-4 text-center text-blue-500">
                                <FaChartLine size={18} />
                            </td>

                            {/* Subscribers */}
                            <td className="py-4 px-4 text-center text-blue-500">
                                <FaUsers size={18} />
                            </td>

                            {/* Status Toggle */}
                            <td className="py-4 px-4 text-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition"></div>
                                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                                </label>
                            </td>

                            {/* Created At */}
                            <td className="py-4 px-4 text-center">
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-md text-xs">
                                    Sep 25 2025
                                </span>
                            </td>

                            {/* Actions */}
                            <td className="py-4 px-4 text-center flex justify-center space-x-3">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <FaEdit size={18} />
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <FaTrash size={18} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WhatsAppStores