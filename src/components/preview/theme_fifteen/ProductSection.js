"use client";
import Image from "next/image";
import { useState } from "react";

const ProductServices = ({ data = [], cardStyles, viewMoreUrl }) => {
  if (!data || data.length === 0)
    return <p className="text-center mt-10">No products found</p>;

  const bgStyle =
    cardStyles?.card_bg_type === "Color"
      ? { backgroundColor: cardStyles.card_bg }
      : cardStyles?.card_theme_bg_type === "Image"
      ? {
          backgroundImage: `url(/assets/assets/uploads/card-background/${cardStyles.card_theme_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  const fontStyle = {
    fontFamily: cardStyles?.card_font || "sans-serif",
    color: cardStyles?.card_font_color || "#000000",
  };

  // Use the first two items for Products and Services, or use defaults if less than 2
  const [product, service] = [
    data[0] || {
      title: "Digital Content Strategy & Writing",
      description:
        "Our writing services cover digital media, product descriptions, landing page...",
      image: "/default-product.jpg",
    },
    data[1] || {
      title: "Blog Content Creation",
      description:
        "We craft SEO-friendly, audience-focused blog articles that drive traffic and...",
      image: "/default-product.jpg",
    },
  ];

  return (
    <div className="pt-4 px-4 mt-0 flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Products Label */}
      <div className="absolute top-6 right-6 bg-pink-500 text-white px-6 py-2 rounded-l-full font-semibold">
        Products
      </div>

      <div className="vcard__product mt-20 pb-6 w-full max-w-6xl" style={bgStyle}>
        <div className="flex justify-center space-x-6">
          {/* Product Card */}
          <div
            className="card product-card border-0 rounded-xl shadow-lg overflow-hidden relative max-w-sm p-4"
            style={{
              ...fontStyle,
              background: "linear-gradient(to bottom, #f5f7fa, #e0e7ff)",
            }}
          >
            <div className="product-profile relative h-48 w-full">
              <Image
                src={
                  product?.image
                    ? product.image.startsWith("http")
                      ? product.image
                      : `/uploads/${product.image}`
                    : "/default-product.jpg"
                }
                alt={product.title || "Product"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="product-details p-4 text-center">
              <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
              <p className="text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div
            className="card product-card border-0 rounded-xl shadow-lg overflow-hidden relative max-w-sm p-4"
            style={{
              ...fontStyle,
              background: "linear-gradient(to bottom, #e0f7fa, #81d4fa)",
            }}
          >
            <div className="product-profile relative h-48 w-full">
              <Image
                src={
                  service?.image
                    ? service.image.startsWith("http")
                      ? service.image
                      : `/uploads/${service.image}`
                    : "/default-product.jpg"
                }
                alt={service.title || "Service"}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="product-details p-4 text-center">
              <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm line-clamp-3">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* View More */}
        {viewMoreUrl && (
          <div className="text-center mt-8">
            <a
              href={viewMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              View More Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductServices;