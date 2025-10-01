"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      image:
        "https://vcard.waptechy.com/assets/uploads/product-image/1627536436-Inline-Preview-Image-1.jpg",
      title: "Project Management Systems",
      description: "Professional Project Management Systems and CRM applications.",
      link: "https://codecanyon.net/user/wap_techy/portfolio",
      target: "_blank",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolios.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + portfolios.length) % portfolios.length
    );
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="col-md-5  p-0 max-w-md w-full">
        <div className="card p-4 m-0">
          <div className="card-header flex justify-center items-center">
            <h4 className="text-xl font-semibold">Portfolio</h4>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-250 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 1)}%)` }}
            >
              {portfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="flex-shrink-0 w-full md:w-[429px] mx-2"
                >
                  <article className="border rounded mb-3 bg-white">
                    <div className="article-header">
                      <div
                        className="article-image h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url('${portfolio.image}')` }}
                      ></div>
                      <div className="article-title px-4 pt-2">
                        <h2 className="text-lg font-semibold text-center">
                          <a href={portfolio.link} target={portfolio.target}>
                            {portfolio.title}
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="article-details p-4">
                      <p className="text-gray-600 text-center">
                        {portfolio.description}
                      </p>
                      <div className="article-cta mt-2 flex justify-center">
                        <a
                          href={portfolio.link}
                          target={portfolio.target}
                          className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-100 text-gray-800"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;