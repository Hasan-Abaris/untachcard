"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header2() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

  const sections = ["home", "about", "products", "clients", "brochure", "contact"];

  // scroll active section detection
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const profileLinks = [
    { name: "My Orders", href: "/account/my-orders" },
    { name: "My WishList", href: "/account/my-wishlist" },
    { name: "My Cart", href: "/account/my-cart" },
    // { name: "My Wallet", href: "/account/my-wallet" },
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
    { name: "Cards", href: "/dashboards/vcards" },
    { name: "WhatsApp Stores", href: "/dashboards/whatsAppStores" },
    { name: "Google Wallet", href: "/dashboards/googleWallet" },
    { name: "WhatsApp Product Orders", href: "/dashboards/whatsAppProductOrder" },
    { name: "Inquiries", href: "/dashboards/Inquiries" },
    { name: "Appointments", href: "/dashboards/appointments" },
    { name: "Product Orders", href: "/dashboards/productOrders" },
    { name: "Virtual Backgrounds", href: "/dashboards/virtualBackgrounds" },
    { name: "My NFC Cards", href: "/dashboards/myNFCcards" },
    { name: "Storage", href: "/dashboards/storage" },
  ];

  return (
    <header className="fixed w-full bg-black/70 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-xl">
          <Link href="/">iTap Cards</Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`uppercase text-sm font-semibold hover:text-blue-400 ${activeSection === item ? "text-blue-500" : ""
                }`}
            >
              {item}
            </a>
          ))}

          {/* Dashboard Dropdown */}
          <div className="relative group">
            <button className="uppercase text-sm font-semibold hover:text-blue-400">
              Dashboard
            </button>
            <div className="w-70 absolute hidden group-hover:block bg-white text-black rounded shadow-md mt-2 top-4">
              {dashboardLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative group">
            <button className="uppercase text-sm font-semibold hover:text-blue-400">
              Profile
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-md mt-2 top-4 w-70">
              {profileLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/login2"
            className="bg-blue-600 px-4 py-2 rounded text-white"
          >
            Login
          </Link>
          <button className="bg-gray-600 px-4 py-2 rounded text-white">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-4 py-3 space-y-3">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block uppercase font-semibold ${activeSection === item ? "text-blue-400" : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Mobile Dashboard Dropdown */}
          <div>
            <button
              onClick={() => setMobileDashboardOpen(!mobileDashboardOpen)}
              className="w-full text-left font-semibold mt-2"
            >
              Dashboard {mobileDashboardOpen ? "▲" : "▼"}
            </button>
            {mobileDashboardOpen && (
              <div className="ml-3">
                {dashboardLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-200 text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Profile Dropdown */}
          <div>
            <button
              onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
              className="w-full text-left font-semibold mt-2"
            >
              Profile {mobileProfileOpen ? "▲" : "▼"}
            </button>
            {mobileProfileOpen && (
              <div className="ml-3">
                {profileLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-200 text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/login2"
            className="bg-blue-600 px-4 py-2 rounded text-white block text-center"
          >
            Login
          </Link>
          <button className="w-full bg-gray-600 px-4 py-2 rounded text-white">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
