import React from "react";
import { FiPlus } from "react-icons/fi";

const packagesData = [
  {
    id: 1,
    label: "Recommended for friends of the bride",
    title: "Wedsta Silver Package",
    price: "4,500",
    bgColor: "#FFF9E5",
    services: [
      { name: "Makeup", available: true },
      { name: "Hair (Straightening/Curls/Blow ...)", available: true },
      { name: "Draping", available: false },
      { name: "Lashes", available: false },
      { name: "Nail Polish", available: false },
    ],
    experience: "2 yrs+",
    products: "Mac, Kryolan and similar brands",
    images: [
      "/assets/images/m1.jpg",
      "/assets/images/m2.jpg",
      "/assets/images/m3.jpg",
    ],
  },
  {
    id: 2,
    label: "Recommended for close family",
    title: "Wedsta Gold Package",
    price: "7,000",
    bgColor: "#FFF3D6",
    services: [
      { name: "Makeup", available: true },
      { name: "Hair (Buns/Braids/Any Hairstyle)", available: true },
      { name: "Draping", available: true },
      { name: "Lashes", available: true },
      { name: "Nail Polish", available: false },
    ],
    experience: "4 yrs+",
    products: "Huda Beauty, Bobbi Brown, Sephora...",
    images: [
      "/assets/images/m4.jpg",
      "/assets/images/m5.jpg",
      "/assets/images/bridalwear.jpg",
    ],
  },
  {
    id: 3,
    label: "Recommended for bride in small functions",
    Labelcolor: "lavenderblush",
    title: "Wedsta Diamond Package",
    price: "10,000",
    bgColor: "#FFE9E3",
    services: [
      { name: "Makeup", available: true },
      { name: "Hair (Buns/Braids/Any Hairstyle)", available: true },
      { name: "Draping", available: true },
      { name: "Lashes", available: true },
      { name: "Nail Polish", available: true },
    ],
    experience: "6 yrs+",
    products: "Chanel, Dior, Smashbox and similar brands",
    images: [
      "https://i.imgur.com/ghi1.jpg",
      "https://i.imgur.com/ghi2.jpg",
      "https://i.imgur.com/ghi3.jpg",
    ],
  },
];

function Packages() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1240px]">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Package</h2>
      <p className="text-gray-500 mb-8">
        Discount available for bookings of 2 and more. No coupon required.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packagesData.map((pkg) => (
          <div key={pkg.id} className="rounded-xl" style={{ backgroundColor: pkg.bgColor }}>
            {/* Top Label */}
            <div className="text-center text-[13px] font-medium bg-lavenderblush rounded-t-xl py-2">
              {pkg.label}
            </div>

            {/* Card Content */}
            <div className="bg-white rounded-b-xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-lg font-bold mb-4">{pkg.title}</h3>

              {/* Services List */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">Services :</p>
                <ul className="space-y-1 text-sm">
                  {pkg.services.map((service, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center ${service.available ? "text-gray-900" : "text-gray-400 line-through"}`}
                    >
                      {service.available ? "✔" : "✖"}
                      <span className="ml-2">{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience & Products */}
              <div className="text-sm mb-4">
                <p>
                  <span className="font-semibold">Artist Experience :</span> {pkg.experience}
                </p>
                <p>
                  <span className="font-semibold">Products :</span> {pkg.products}
                </p>
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xl font-bold text-pink-600">₹ {pkg.price}</span>
                  <div className="text-xs text-gray-500">/person</div>
                </div>

                <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-md flex items-center gap-1 hover:bg-pink-50 transition">
                  ADD <FiPlus size={16} />
                </button>
              </div>

              {/* Image Scroll */}
              <div className="flex gap-2 overflow-x-auto mt-4">
                {pkg.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${pkg.title} ${idx + 1}`}
                    className="rounded-lg w-16 h-16 object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
