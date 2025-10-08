"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { base_url } from "@/server";
import { ChevronDown } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Header2() {
  const router = useRouter();
  // const { data } = useSelector((state) => state.auth);

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sections = ["home", "about", "products", "clients", "brochure", "contact"];

  // Detect active section on scroll
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

  // Logout function
  const profileLinks = [{ name: "My Orders", href: "/account/my-orders" }, { name: "My WishList", href: "/account/my-wishlist" }, { name: "My Cart", href: "/account/my-cart" }, { name: "My Product Reviews", href: "/account/my-reviews" }, { name: "My Earning Points", href: "/account/my-earning-points" }, { name: "RMA History", href: "/account/history" }, { name: "Sent Refund Request", href: "/account/refund-requests" }, { name: "My Billing Address", href: "/account/billing-address" }, { name: "My Shipping Address", href: "/account/shipping-address" }, { name: "Visit Sellers", href: "/account/visit-sellers" }, { name: "My Profile", href: "/account/profile" }, { name: "Change Password", href: "/account/change-password" }, { name: "Track My Order", href: "/account/track-order" }, { name: "Support Ticket", href: "/account/support-ticket" },];
  const dashboardLinks = [{ name: "Dashboard", href: "/dashboards/dashboard" }, { name: "Cards", href: "/dashboards/vcards" }, { name: "Plans", href: "/dashboards/plans" }, { name: "Transactions", href: "/dashboards/transactions" }, { name: "WhatsApp Stores", href: "/dashboards/whatsAppStores" }, { name: "Google Wallet", href: "/dashboards/googleWallet" }, { name: "WhatsApp Product Orders", href: "/dashboards/whatsAppProductOrder" }, { name: "Inquiries", href: "/dashboards/Inquiries" }, { name: "Appointments", href: "/dashboards/appointments" }, { name: "Product Orders", href: "/dashboards/productOrders" }, { name: "Virtual Backgrounds", href: "/dashboards/virtualBackgrounds" }, { name: "My NFC Cards", href: "/dashboards/myNFCcards" }, { name: "Storage", href: "/dashboards/storage" },];


  const [isLogin, setIsLogin] = useState(false);

  // ✅ Check login status on mount + listen for login/logout changes
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin") === "true";
    setIsLogin(loginStatus);

    const handleLoginChange = () => {
      const updated = localStorage.getItem("isLogin") === "true";
      setIsLogin(updated);
    };

    // Listen for updates
    window.addEventListener("loginStatusChanged", handleLoginChange);
    window.addEventListener("storage", handleLoginChange);

    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginChange);
      window.removeEventListener("storage", handleLoginChange);
    };
  }, []);

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await axios.get(`${base_url}auth/logout`, { withCredentials: true });
      window?.localStorage.removeItem("token");
      window?.localStorage.removeItem("isLogin");
      window?.localStorage.removeItem("user_id");
      setIsLogin(false);

      // Trigger update event for all components
      window.dispatchEvent(new Event("loginStatusChanged"));

      router.push("/login2");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };


  return (
    <>
      <header className="fixed w-full bg-black/60 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="font-bold text-xl">
            <Link href="/">iTap Cards</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {sections.map((item) => (
              <div key={item} className="relative group">
                <a
                  href={`#${item}`}
                  className={`uppercase text-sm font-semibold transition-all duration-300 
                  ${activeSection === item ? "text-red-500" : "text-white"} 
                  hover:text-red-500`}
                >
                  {item}
                  <span
                    className={`absolute left-0 right-0 -top-1 mx-auto h-[2px] bg-red-500 transition-all duration-300 
                    ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </a>
              </div>
            ))}

            {isLogin && (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("dashboard")}
                  className="uppercase flex items-center gap-1 text-sm font-semibold hover:text-red-500 transition-all duration-300"
                >
                  Dashboard
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "dashboard" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openDropdown === "dashboard" && (
                  <div className="absolute bg-white text-black rounded shadow-md mt-2 w-48 z-50">
                    {dashboardLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-red-100 hover:text-red-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {isLogin && (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="uppercase flex items-center gap-1 text-sm font-semibold hover:text-red-500 transition-all duration-300"
                >
                  Profile
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "profile" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openDropdown === "profile" && (
                  <div className="absolute bg-white text-black rounded shadow-md mt-2 w-48 z-50">
                    {profileLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-red-100 hover:text-red-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            {isLogin ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition-all"
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/login2"
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-all"
              >
                Login
              </Link>
            )}

            <Link
              href="/get-started"
              className="bg-gray-600 px-4 py-2 rounded text-white hover:bg-gray-700 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
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
                className={`block uppercase font-semibold transition-all duration-300 ${activeSection === item ? "text-red-400" : "text-white"
                  } hover:text-red-500`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {isLogin && (
              <>
                {/* 🔽 Dashboard Dropdown */}
                <button
                  className="flex items-center justify-between w-full uppercase font-semibold hover:text-red-500 transition-all duration-300"
                  onClick={() => toggleDropdown("dashboard")}
                >
                  Dashboard
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openDropdown === "dashboard" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openDropdown === "dashboard" && (
                  <div className="mt-2 ml-3 space-y-2">
                    {dashboardLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-3 py-1 text-sm hover:text-red-500"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* 🔽 Profile Dropdown */}
                <button
                  className="flex items-center justify-between w-full uppercase font-semibold hover:text-red-500 transition-all duration-300 mt-3"
                  onClick={() => toggleDropdown("profile")}
                >
                  Profile
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openDropdown === "profile" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openDropdown === "profile" && (
                  <div className="mt-2 ml-3 space-y-2">
                    {profileLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-3 py-1 text-sm hover:text-red-500"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}

            {isLogin ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 px-4 py-2 rounded text-white"
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/login2"
                className="bg-blue-600 px-4 py-2 rounded text-white block text-center"
              >
                Login
              </Link>
            )}
            <Link
              href="/get-started"
              className="bg-gray-600 px-4 py-2 rounded text-white block text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>

    </>
  );
}
