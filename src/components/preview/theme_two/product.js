"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Product() {
  const products = [
    {
      id: 2,
      image:
        "https://vcard.waptechy.com/assets/uploads/product-image/1734443224-maxresdefault.jpg",
      price: "100",
      title: "Иванов Иван",
      description: "yut7i",
      link: "#enquiryform",
      target: "",
    },
  ];

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="card p-4  max-w-md w-full">
        <div className="card-header flex justify-center items-center p-4">
          <h4 className="text-xl font-semibold">Products and Services</h4>
        </div>

        <div className="relative">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <article className="border rounded mb-3 bg-white">
                <div className="article-header relative">
                  <div
                    className="article-image h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  <div className="article-badge absolute top-2 right-2">
                    <div className="article-badge-item bg-gray-800 text-white px-2 py-1 rounded">
                      Price: {product.price || "N/A"}
                    </div>
                  </div>
                </div>
                <div className="article-details p-4">
                  <div className="article-title">
                    <h2 className="text-lg font-semibold text-center">
                      <a href={product.link} target={product.target}>
                        {product.title}
                      </a>
                    </h2>
                  </div>
                  <p className="text-gray-600 text-center">{product.description}</p>
                  <div className="article-cta mt-2 flex justify-center">
                    <a
                      href={product.link}
                      target={product.target}
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      Enquiry <i className="fas fa-chevron-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Product() {
  const products = [
    {
      id: 2,
      image:
        "https://vcard.waptechy.com/assets/uploads/product-image/1734443224-maxresdefault.jpg",
      price: "100",
      title: "Иванов Иван",
      description: "yut7i",
      link: "#enquiryform",
      target: "",
    },
  ];

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="card p-4  max-w-md w-full">
        <div className="card-header flex justify-center items-center p-4">
          <h4 className="text-xl font-semibold">Products and Good Services</h4>
        </div>

        <div className="relative">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <article className="border rounded mb-3 bg-white">
                <div className="article-header relative">
                  <div
                    className="article-image h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  <div className="article-badge absolute top-2 right-2">
                    <div className="article-badge-item bg-gray-800 text-white px-2 py-1 rounded">
                      Price: {product.price || "N/A"}
                    </div>
                  </div>
                </div>
                <div className="article-details p-4">
                  <div className="article-title">
                    <h2 className="text-lg font-semibold text-center">
                      <a href={product.link} target={product.target}>
                        {product.title}
                      </a>
                    </h2>
                  </div>
                  <p className="text-gray-600 text-center">{product.description}</p>
                  <div className="article-cta mt-2 flex justify-center">
                    <a
                      href={product.link}
                      target={product.target}
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      Enquiry <i className="fas fa-chevron-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;