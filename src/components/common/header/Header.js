"use client";
import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiUser,
} from "react-icons/fi";
import { navMenus } from "@/data/menuData";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const profileLinks = [
    { name: "My Orders", href: "/account/my-orders" },
    { name: "My WishList", href: "/account/my-wishlist" },
    { name: "My Cart", href: "/account/my-cart" },
    { name: "My Wallet", href: "/account/my-wallet" },
    { name: "My Product Reviews", href: "/account/my-reviews" },
    { name: "My Earning Points", href: "/account/my-earning-points" },
    { name: "RMA History", href: "/account/history" },
    { name: "Sent Refund Request", href: "/account/refund-requests" },
    { name: "My Billing Address", href: "/account/billing-address" },
    { name: "My Shipping Address", href: "/account/shipping-address" },
    { name: "Visit Sellers", href: "/account/visit-sellers" },
    { name: "My Profile", href: "/account/profile" },
    { name: "Change Password", href: "/account/change-password" },
    { name: "Track My Order", href: "/account/track-order" },
    { name: "Support Ticket", href: "/account/support-ticket" },
  ];

  const dashboardLinks = [
    { name: "Dashboard", href: "/dashboards/dashboard" },
    { name: "vCards", href: "/Dashboard/vcards" },
    { name: "WhatsApp Stores", href: "/dashboards/whatsAppStores" },
    { name: "Google Wallet", href: "/dashboards/googleWallet" },
    { name: "WhatsApp Product Orders", href: "/dashboards/whatsAppProductOrder" },
    { name: "Inquiries", href: "/dashboards/Inquiries" },
    { name: "Appointments", href: "/dashboards/appointments" },
    { name: "Product Orders", href: "/dashboards/productOrders" },
    { name: "Virtual Backgrounds", href: "/dashboards/virtualBackgrounds" },
    { name: "My NFC Cards", href: "/dashboards/myNFCcards" },
    // { name: "Affiliations", href: "/dashboard/affiliations" },
    // { name: "Manage Subscription", href: "/dashboards/dashboard" },s
    { name: "Storage", href: "/dashboards/storage" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-600 shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-5">
        {/* Logo */}
        <div className="text-2xl font-serif text-white">
          <Link href="/">Wedding Spot</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-white">
          {navMenus.map((menu, index) => (
            <div key={index} className="group relative">
              <div className="flex items-center gap-1">
                <Link
                  href={menu.path || "#"}
                  className="hover:underline underline-offset-4 hover:text-pink-100 transition"
                >
                  {menu.title}
                </Link>
                {menu.dropdown && <FiChevronDown />}
              </div>
              {menu.dropdown && (
                <div
                  className={`absolute top-full hidden group-hover:grid bg-white text-gray-800 shadow-lg rounded-lg p-6 z-50 transition-all duration-200
      ${index === 0 || index === 1
                      ? "left-0"
                      : "left-1/2 transform -translate-x-1/2"
                    }`}
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(
                      menu.dropdown.columns.length +
                      (menu.dropdown.images ? 1 : 0),
                      4
                    )}, minmax(150px, 1fr))`,
                    gap: "2rem",
                    minWidth: "900px",
                  }}
                >
                  {menu.dropdown.columns.map((col, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-pink-600 mb-2">
                        {col.heading}
                      </h4>
                      <ul className="space-y-1">
                        {col.links.map((link, j) => (
                          <li key={j}>
                            <a
                              href="#"
                              className="hover:text-pink-600 transition-colors"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side (Login, Dashboard, Profile) */}
        <div className="flex items-center gap-4 relative">
          <Link href="/login">
            <button className="bg-white text-pink-600 px-4 py-2 rounded font-medium hover:bg-pink-100 transition">
              Login
            </button>
          </Link>

          {/* Dashboard Dropdown - now floating like Profile */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-white font-medium"
              onClick={() => setDashboardOpen(!dashboardOpen)}
            >
              <span>Dashboard</span>
              {dashboardOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {dashboardOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
                <ul className="space-y-2">
                  {dashboardLinks.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-gray-700 hover:bg-pink-100 rounded"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-white font-medium"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <FiUser className="text-2xl" />
              <span>Hasan</span>
              {profileOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
                <ul className="space-y-2">
                  {profileLinks.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-gray-700 hover:bg-pink-100 rounded"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4 font-medium">
          {navMenus.map((menu, i) => (
            <div key={i} className="border-b pb-2">
              <button
                className="w-full flex justify-between items-center text-gray-800 font-semibold"
                onClick={() => toggleDropdown(i)}
              >
                {menu.title}
                {menu.dropdown &&
                  (openDropdown === i ? (
                    <FiChevronUp className="text-gray-600" />
                  ) : (
                    <FiChevronDown className="text-gray-600" />
                  ))}
              </button>
              {menu.dropdown && openDropdown === i && (
                <div className="ml-4 mt-2 space-y-2">
                  {menu.dropdown.columns.map((col, j) => (
                    <div key={j}>
                      <p className="font-semibold text-pink-600">
                        {col.heading}
                      </p>
                      {col.links.map((link, k) => (
                        <a
                          href="#"
                          key={k}
                          className="block text-gray-600 hover:text-pink-600 ml-2"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
