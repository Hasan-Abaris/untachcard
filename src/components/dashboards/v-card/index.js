"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiCopy,
  FiBarChart2,
  FiUsers,
  FiPhone,
} from "react-icons/fi";

const VcardsPage = () => {
  const [vcards, setVcards] = useState([
    {
      id: 1,
      name: "TechCorp",
      subtitle: "IT Solutions",
      preview: "https://vcards.infyom.com/techcorp",
      img: "/vcard.png",
      createdAt: "Sep 25 2025",
      active: true,
    },
    {
      id: 2,
      name: "GreenMart",
      subtitle: "Organic Store",
      preview: "https://vcards.infyom.com/greenmart",
      img: "/vcard2.png",
      createdAt: "Sep 25 2025",
      active: true,
    },
    {
      id: 3,
      name: "Sanvi Infosys",
      subtitle: "Computer Sales",
      preview: "https://vcards.infyom.com/sanvi",
      img: "/vcard3.png",
      createdAt: "Sep 25 2025",
      active: true,
    },
    {
      id: 4,
      name: "MiSa",
      subtitle: "Software Agency",
      preview: "https://vcards.infyom.com/misa",
      img: "/vcard4.png",
      createdAt: "Sep 25 2025",
      active: true,
    },
    {
      id: 5,
      name: "Hema",
      subtitle: "Engineer",
      preview: "https://vcards.infyom.com/hema",
      img: "/vcard5.png",
      createdAt: "Sep 24 2025",
      active: true,
    },
    {
      id: 6,
      name: "FoodieHub",
      subtitle: "Restaurant",
      preview: "https://vcards.infyom.com/foodiehub",
      img: "/vcard.png",
      createdAt: "Sep 24 2025",
      active: false,
    },
    {
      id: 7,
      name: "FitZone",
      subtitle: "Gym & Fitness",
      preview: "https://vcards.infyom.com/fitzone",
      img: "/vcard2.png",
      createdAt: "Sep 24 2025",
      active: true,
    },
    {
      id: 8,
      name: "GlamStudio",
      subtitle: "Salon",
      preview: "https://vcards.infyom.com/glamstudio",
      img: "/vcard3.png",
      createdAt: "Sep 23 2025",
      active: true,
    },
    {
      id: 9,
      name: "EduSpark",
      subtitle: "Online Coaching",
      preview: "https://vcards.infyom.com/eduspark",
      img: "/vcard4.png",
      createdAt: "Sep 23 2025",
      active: false,
    },
    {
      id: 10,
      name: "HealthNest",
      subtitle: "Clinic",
      preview: "https://vcards.infyom.com/healthnest",
      img: "/vcard5.png",
      createdAt: "Sep 22 2025",
      active: true,
    },
    {
      id: 11,
      name: "QuickFix",
      subtitle: "Repair Services",
      preview: "https://vcards.infyom.com/quickfix",
      img: "/vcard.png",
      createdAt: "Sep 22 2025",
      active: true,
    },
    {
      id: 12,
      name: "BakeHouse",
      subtitle: "Bakery",
      preview: "https://vcards.infyom.com/bakehouse",
      img: "/vcard2.png",
      createdAt: "Sep 22 2025",
      active: true,
    },
    {
      id: 13,
      name: "StyleHive",
      subtitle: "Fashion Boutique",
      preview: "https://vcards.infyom.com/stylehive",
      img: "/vcard3.png",
      createdAt: "Sep 21 2025",
      active: true,
    },
    {
      id: 14,
      name: "PetCare",
      subtitle: "Pet Grooming",
      preview: "https://vcards.infyom.com/petcare",
      img: "/vcard4.png",
      createdAt: "Sep 21 2025",
      active: true,
    },
    {
      id: 15,
      name: "ArtNest",
      subtitle: "Art Studio",
      preview: "https://vcards.infyom.com/artnest",
      img: "/vcard5.png",
      createdAt: "Sep 21 2025",
      active: false,
    },
    {
      id: 16,
      name: "TravelPro",
      subtitle: "Travel Agency",
      preview: "https://vcards.infyom.com/travelpro",
      img: "/vcard.png",
      createdAt: "Sep 20 2025",
      active: true,
    },
    {
      id: 17,
      name: "BookNook",
      subtitle: "Book Store",
      preview: "https://vcards.infyom.com/booknook",
      img: "/vcard2.png",
      createdAt: "Sep 20 2025",
      active: true,
    },
    {
      id: 18,
      name: "SweetSpot",
      subtitle: "Dessert Shop",
      preview: "https://vcards.infyom.com/sweetspot",
      img: "/vcard3.png",
      createdAt: "Sep 19 2025",
      active: true,
    },
    {
      id: 19,
      name: "LensCraft",
      subtitle: "Photography",
      preview: "https://vcards.infyom.com/lenscraft",
      img: "/vcard4.png",
      createdAt: "Sep 19 2025",
      active: true,
    },
    {
      id: 20,
      name: "BrightMind",
      subtitle: "Counseling",
      preview: "https://vcards.infyom.com/brightmind",
      img: "/vcard5.png",
      createdAt: "Sep 18 2025",
      active: true,
    },
    {
      id: 21,
      name: "CodeNest",
      subtitle: "Software Dev",
      preview: "https://vcards.infyom.com/codenest",
      img: "/vcard.png",
      createdAt: "Sep 18 2025",
      active: true,
    },
    {
      id: 22,
      name: "DailyBites",
      subtitle: "Cafe",
      preview: "https://vcards.infyom.com/dailybites",
      img: "/vcard2.png",
      createdAt: "Sep 18 2025",
      active: true,
    },
    {
      id: 23,
      name: "MegaMart",
      subtitle: "Supermarket",
      preview: "https://vcards.infyom.com/megamart",
      img: "/vcard3.png",
      createdAt: "Sep 17 2025",
      active: false,
    },
    {
      id: 24,
      name: "GlowSkin",
      subtitle: "Skin Clinic",
      preview: "https://vcards.infyom.com/glowskin",
      img: "/vcard4.png",
      createdAt: "Sep 17 2025",
      active: true,
    },
    {
      id: 25,
      name: "BuildUp",
      subtitle: "Construction",
      preview: "https://vcards.infyom.com/buildup",
      img: "/vcard5.png",
      createdAt: "Sep 17 2025",
      active: true,
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">vCards</h1>
        <div className="flex gap-3">
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <Link href="/Dashboard/vcards/create">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer">
              New vCard
            </button>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">VCARD NAME</th>
              <th className="px-4 py-3">PREVIEW URL</th>
              <th className="px-4 py-3">STATS</th>
              <th className="px-4 py-3">SUBSCRIBERS</th>
              <th className="px-4 py-3">CONTACT</th>
              <th className="px-4 py-3">STATUS</th>
              <th className="px-4 py-3">CREATED AT</th>
              <th className="px-4 py-3">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {vcards.map((card) => (
              <tr key={card.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={card.img}
                    alt="vCard"
                    className="w-8 h-8 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-indigo-600">{card.name}</p>
                    {card.subtitle && (
                      <p className="text-xs text-gray-500">{card.subtitle}</p>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-indigo-500">
                    <a
                      href={card.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {card.preview}
                    </a>
                    <FiCopy className="cursor-pointer hover:text-indigo-700" />
                  </div>
                </td>
                <Link href="/Dashboard/vcards/stats">
                  <td className="px-4 py-3">
                    <FiBarChart2 className="text-indigo-500 cursor-pointer bg-amber-100" />
                  </td>
                </Link>
                <td className="px-4 py-3">
                  <FiUsers className="text-indigo-500 cursor-pointer" />
                </td>
                <td className="px-4 py-3">
                  <FiPhone className="text-indigo-500 cursor-pointer" />
                </td>
                <td className="px-4 py-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={card.active}
                    />
                    <div className="relative w-10 h-5 bg-gray-200 peer-checked:bg-indigo-500 rounded-full peer transition"></div>
                  </label>
                </td>
                <td className="px-4 py-3">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                    {card.createdAt}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2 relative">
                  <Link href={`/Dashboard/vcards/edit/${card.id}`}>
                    <FiEdit2 className="text-indigo-500 cursor-pointer hover:text-indigo-700" />
                  </Link>
                  <div className="relative">
                    <FiMoreVertical
                      className="text-gray-500 cursor-pointer hover:text-gray-700"
                      onClick={() => toggleDropdown(card.id)}
                    />
                    {dropdownOpen[card.id] && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <ul className="py-1">
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            QR Code
                          </li>
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            Download vCard
                          </li>
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            Inquiries
                          </li>
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            Duplicate vCard
                          </li>
                          <li className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VcardsPage;
