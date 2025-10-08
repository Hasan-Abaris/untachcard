import React from "react";
import Profile from "./profile";
import Gallery from "./Gallery";
import ProductSection from "./ProductSection";

export default function Thirteenpagemain() {
  const products = [
    {
      title: "Luxury Villa Design",
      price: "350,000.00",
      image: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/products/24899/P1.jpg",
      link: "#",
    },
    {
      title: "Contemporary Apartment Complex",
      price: "1,000,000.00",
      image: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/products/24900/P2.jpg",
      link: "#",
    },
    {
      title: "Corporate Office Interiors",
      price: "150,000.00",
      image: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/products/24901/P3.jpg",
      link: "#",
    },
    {
      title: "Retail Showroom Design",
      price: "60,000.00",
      image: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/products/24902/P4.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center overflow-visible">
      {/* Profile Section */}
      <section className="w-full max-w-5xl px-4 mt-12 mb-16">
        <Profile />
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-6xl px-4 mb-12">
        <Gallery
          images={[
            "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/gallery/24904/G1.jpg",
            "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/gallery/24905/G2.jpg",
            "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/gallery/24906/G3.jpg",
            "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/gallery/24907/G4.jpg",
          ]}
        />
      </section>

      {/* Product Section */}
      <section className="w-full max-w-6xl px-4 mb-12">
        <ProductSection products={products} />
      </section>
    </div>
  );
}
