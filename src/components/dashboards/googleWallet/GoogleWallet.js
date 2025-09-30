
"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import Link from "next/link";

const data = [
    {
        type: "EventTicket",
        link: "https://pay.google.com/gp/v/save/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOi",
        createdAt: "Aug 29 2025",
    },
    {
        type: "EventTicket",
        link: "https://pay.google.com/gp/v/save/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOi",
        createdAt: "Aug 29 2025",
    },
    {
        type: "EventTicket",
        link: "https://pay.google.com/gp/v/save/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOi",
        createdAt: "Aug 28 2025",
    },
    {
        type: "GiftCard",
        link: "https://pay.google.com/gp/v/save/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOi",
        createdAt: "Aug 28 2025",
    },
    {
        type: "EventTicket",
        link: "https://pay.google.com/gp/v/save/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOi",
        createdAt: "Aug 26 2025",
    },
];

export default function GoogleWallet() {
    const [search, setSearch] = useState("");

    const filtered = data.filter(
        (item) =>
            item.type.toLowerCase().includes(search.toLowerCase()) ||
            item.link.toLowerCase().includes(search.toLowerCase())
    );

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert("Link copied!");
    };

    return (
        <>
            <div className=" p-4 pt-19">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Google Wallet
                    </h1>
                </div>

            </div>
            <div className="w-full px-4 py-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <svg
                            className="absolute left-3 top-2.5 text-gray-400 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>
                    </div>
                    <Link href="/dashboards/googleWallet/addGoogleWallets" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
                        Add Google Wallet
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto shadow rounded-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="text-gray-600 uppercase text-sm leading-normal bg-gray-100">
                                <th className="py-3 px-6 text-left">Type</th>
                                <th className="py-3 px-6 text-left">Link</th>
                                <th className="py-3 px-6 text-center">Created At</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {filtered.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={`border-b hover:bg-gray-50 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="py-3 px-6 whitespace-nowrap">{item.type}</td>
                                    <td className="py-3 px-6">
                                        <div className="flex items-center space-x-2">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline truncate max-w-[200px]"
                                            >
                                                {item.link}
                                            </a>
                                            <button
                                                onClick={() => handleCopy(item.link)}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <Copy size={18} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-md">
                                            {item.createdAt}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="py-4 text-center text-gray-400">
                                        No results found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
