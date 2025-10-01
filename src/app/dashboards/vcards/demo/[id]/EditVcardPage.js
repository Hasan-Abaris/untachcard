"use client";

import Link from "next/link";
import { useState } from "react";
import BasicDetails from "@/components/dashboards/v-card/edits/BasicDetails";
import Templates from "@/components/all-templates/index";
import Dynamiccard from "@/components/dashboards/v-card/edits/Dynamiccard";
import Buisnesscard from "@/components/dashboards/v-card/edits/buisnesscard";
import Customizecard from "@/components/dashboards/v-card/edits/Customizecard";
import Services from "@/components/dashboards/v-card/edits/Services";
import Products from "@/components/dashboards/v-card/edits/Products";
import InstaEmbeded from "@/components/dashboards/v-card/edits/InstaEmbeded";
import Gallery from "@/components/dashboards/v-card/edits/galleries";
import Blog from "@/components/dashboards/v-card/edits/blog";
import Testimonial from "@/components/dashboards/v-card/edits/testimonial";
import Iframe from "@/components/dashboards/v-card/edits/iframe";
import Appointment from "@/components/dashboards/v-card/edits/appointment";
import Socialmedia from "@/components/dashboards/v-card/edits/socialmedia";
import CustomLink from "@/components/dashboards/v-card/edits/CustomLink";
import Banner from "@/components/dashboards/v-card/edits/banner";
import Advance from "@/components/dashboards/v-card/edits/advance";
import Font from "@/components/dashboards/v-card/edits/Font";
import Seo from "@/components/dashboards/v-card/edits/Seo";
import Privacy from "@/components/dashboards/v-card/edits/Privacy";
import Terms from "@/components/dashboards/v-card/edits/Terms&C";
import Managesection from "@/components/dashboards/v-card/edits/managesection";

const menuItems = [
  { key: "basic", label: "Basic Details" },
  // { key: "templates", label: "Card Templates" },
  { key: "templates", label: "Card Templates" },

  { key: "dynamic", label: "Dynamic Card" },
  { key: "hours", label: "Business Hours" },
  { key: "qrcode", label: "Customize QR Code" },
  { key: "services", label: "Services" },
  { key: "products", label: "Products" },
  { key: "insta", label: "InstaEmbed" },
  { key: "gallery", label: "Galleries" },
  { key: "blogs", label: "Blogs" },
  { key: "testimonials", label: "Testimonials" },
  { key: "iframe", label: "Iframes" },
  { key: "appointment", label: "Appointments" },
  { key: "social_links", label: "Social links – Website" },
  { key: "custom_links", label: "Custom Links" },
  { key: "banner", label: "Banner" },
  { key: "advanced", label: "Advanced" },
  { key: "fonts", label: "Fonts" },
  { key: "seo", label: "SEO" },
  { key: "privacy", label: "Privacy Policy" },
  { key: "terms", label: "Terms & Conditions" },
  { key: "manage_section", label: "Manage Section" },
];

export default function EditVcardPage() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="h-auto ">
      <div className="flex bg-gray-50  mt-  15 ">
        {/* Sidebar (Fixed) */}
        <aside className="w-64 bg-white border-r shadow-sm sticky top-0">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Edit Card </h2>
          </div>
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`block w-full text-left px-3 py-2 rounded-md transition ${activeTab === item.key
                  ? "bg-indigo-100 text-indigo-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 pb-24 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Edit Card</h1>
            <Link
              href="/Dashboard/vcards"
              className="px-4 py-2 border rounded-md text-indigo-600 hover:bg-indigo-50"
            >
              Back
            </Link>
          </div>

          {/* Dynamic Content Box */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === "basic" && <BasicDetails />}
            {activeTab === "templates" && <Templates />}
            {activeTab === "dynamic" && <Dynamiccard />}
            {activeTab === "hours" && <Buisnesscard />}
            {activeTab === "qrcode" && <Customizecard />}
            {activeTab === "services" && <Services />}
            {activeTab === "products" && <Products />}
            {activeTab === "insta" && <InstaEmbeded />}
            {activeTab === "gallery" && <Gallery />}
            {activeTab === "blogs" && <Blog />}
            {activeTab === "testimonials" && <Testimonial />}
            {activeTab === "iframe" && <Iframe />}
            {activeTab === "appointment" && <Appointment />}
            {activeTab === "social_links" && <Socialmedia />}
            {activeTab === "custom_links" && <CustomLink />}
            {activeTab === "banner" && <Banner />}
            {activeTab === "advanced" && <Advance />}
            {activeTab === "fonts" && <Font />}
            {activeTab === "seo" && <Seo />}
            {activeTab === "privacy" && <Privacy />}
            {activeTab === "terms" && <Terms />}
            {activeTab === "manage_section" && <Managesection />}
          </div>
        </main>
      </div>
    </div>
  );
}
