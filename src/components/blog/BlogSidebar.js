"use client";
import React, { useState } from "react";
import Image from "next/image";

const BlogContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("recent");
  const [vendorInput, setVendorInput] = useState(""); // State for vendor input
  const [cityInput, setCityInput] = useState(""); // State for city input

  const articles = [
    {
      href: "/blog/fuss-free-sangeet-dupatta-draping-styles-that-let-you-dance-in-style/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2024/10/Collage17.jpg",
      title: "Fuss-Free Sangeet Dupatta Draping Styles That Let You Dance in Style!",
      author: "Apoorva",
      date: "17 Sep, 2025",
      readTime: "3 min read",
      excerpt:
        "Your Sangeet night is all about letting loose, dancing your heart out and having a ball. But with all that twirling and grooving, the last thing you need is your dupatta weighing you down or getting...",
    },
    {
      href: "/blog/this-delhi-wedding-had-pinterest-pretty-decor-a-chill-bride-a-groom-in-sneakers/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/Collage_Fotor22.jpg",
      title: "This Delhi Wedding Had Pinterest-Pretty Décor, A Chill Bride & A Groom in Sneakers!",
      author: "Sakshi",
      date: "15 Sep, 2025",
      readTime: "4 min read",
      excerpt:
        "If we had to describe this wedding in three words, it would be pretty, personal, and playful! From decor that looked straight out of Pinterest boards to a bride who ditched the heavy clichés for a...",
    },
    {
      href: "/blog/10-best-beach-wedding-resorts-in-goa-for-your-dream-destination-wedding/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/goa.jpg",
      title: "10 Best Beach Wedding Resorts In Goa For Your Dream Destination Wedding!",
      author: "Sakshi",
      date: "15 Sep, 2025",
      readTime: "7 min read",
      excerpt:
        "Goa, with its pristine beaches, Portuguese heritage, and laid-back charm, has emerged as India's most coveted destination wedding location. Whether you envision exchanging vows against golden sunsets...",
    },
    {
      href: "/blog/what-if-we-told-you-this-gorgeous-bridal-look-was-ai/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/WMG-Blogs-36.png",
      title: "What If We Told You This Pretty Bridal Look Was AI?",
      author: "Smridhi Sablok",
      date: "12 Sep, 2025",
      readTime: "2 min read",
      excerpt:
        "At first glance, this pastel pink lehenga looks like every bride's dream—ethereal, elegant, and straight out of a fairytale. But here's the twist: it's not a designer's sketch or a couture creation...",
    },
    {
      href: "/blog/noura-nectar-from-skinn-by-titan-the-fragrance-every-modern-bride-needs-in-her-trousseau/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/Collage_Fotor12.jpg",
      title: "NOURA Nectar from Skinn by Titan: The Fragrance Every Modern Bride Needs in Her Trousseau!",
      author: "Apoorva",
      date: "10 Sep, 2025",
      readTime: "3 min read",
      excerpt:
        "There's something magical about the way a fragrance lingers, long after the music fades, the lights dim and the wedding day becomes a beautiful memory. For a bride, a perfume isn't just another accessory...",
    },
    {
      href: "/blog/this-couple-tied-the-knot-with-a-cosy-court-marriage-at-home/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/WMG-Blogs-38.png",
      title: "This Couple Tied The Knot With A Cosy Court Marriage At Home!",
      author: "Smridhi Sablok",
      date: "17 Sep, 2025",
      readTime: "1 min read",
      excerpt:
        "Not all love stories need grandeur, sometimes, it's the quiet, intimate ones that touch the heart the most. Mitali and Aditya chose to celebrate their forever in the coziest way possible: a court marriage...",
    },
    {
      href: "/blog/sister-of-the-bride-style-meet-komal/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/08/komal-sob.jpg",
      title: "Sister Of The Bride Style – Meet Komal",
      author: "Apoorva",
      date: "15 Sep, 2025",
      readTime: "5 min read",
      excerpt:
        "Talk about brides stealing the show, but what about the sister of the bride who knows exactly how to turn heads? Meet Komal Mirani—the ultimate style muse we didn't know we needed! From chic to...",
    },
    {
      href: "/blog/gorgeous-anand-karaj-in-amritsar-that-was-a-total-serve/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/Collage_Fotor3.jpg",
      title: "Gorgeous Anand Karaj In Amritsar That Was A Total Serve!",
      author: "Sakshi",
      date: "12 Sep, 2025",
      readTime: "6 min read",
      excerpt:
        "What started as a simple DM during lockdown turned into a full-blown love story! This wedding in Amritsar was every bit as colorful, heartfelt, and larger-than-life as a big, fat Punjabi celebration...",
    },
    {
      href: "/blog/a-jaipur-wedding-with-pretty-views-pastel-magic/",
      img: "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2025/09/Collage_Fotor13.jpg",
      title: "A Jaipur Wedding With Pretty Views & Pastel Magic!",
      author: "Sakshi",
      date: "10 Sep, 2025",
      readTime: "2 min read",
      excerpt:
        "When a wedding is set against the breathtaking backdrop of Beuna Vista Jaipur and captured through the lens of the super-talented team at The Candid House, you already know it's going to be...",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mt-7">
      {/* Main Content (w-9/12) */}
      <div className="w-full md:w-9/12">
        {/* Search and Sort Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <div className="flex items-center border-b border-gray-300">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <input
                className="w-full py-2 outline-none text-gray-700"
                placeholder="Search Wedding Articles"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 text-right text-sm text-gray-500">
            <label className="mr-4">
              <input
                type="radio"
                name="sort"
                value="recent"
                checked={sortOption === "recent"}
                onChange={() => setSortOption("recent")}
                className="hidden"
              />
              <i className="fa fa-chevron-down text-blue-600 mr-2"></i>
              <span className="font-bold">LATEST</span>
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="random"
                checked={sortOption === "random"}
                onChange={() => setSortOption("random")}
                className="hidden"
              />
              <i className="fa fa-random text-gray-500 mr-2"></i>
              <span className="font-bold">RANDOM</span>
            </label>
          </div>
        </div>

        {/* Articles Section */}
        <div className="overflow-x-hidden">
          <div className="-mx-6">
            <div className="flex flex-wrap -mx-4">
              {articles.map((article, index) => (
                <div key={index} className="w-full md:w-1/2 px-4 mb-6">
                  <a href={article.href}>
                    <div className="article p-6">
                      <img
                        className="w-full h-64 object-cover rounded-md"
                        src={article.img}
                        alt={article.title}
                      />
                      <h2 className="text-gray-800 text-2xl font-serif text-center mt-6 px-4">
                        {article.title}
                      </h2>
                      <p className="text-center text-sm text-gray-600 mt-4">
                        <span className="mr-2">{`BY ${article.author}`}</span>
                        <span className="mr-2">|</span>
                        <span className="mr-2">{article.date}</span>
                        <span className="mr-2">|</span>
                        <span>{article.readTime}</span>
                      </p>
                      <p className="text-gray-500 mt-6">{article.excerpt}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar (w-3/12) */}
      <div className="w-full md:w-3/12 mt-10 md:mt-0 px-14">
        <div className="text-center p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-serif text-black mb-4">I am looking for</h2>
          <div className="selection-box">
            <div className="black">
              <div className="select block text-center regular">
                <div className="Select Select--single is-searchable">
                  <div className="Select-control">
                    <span className="Select-multi-value-wrapper" id="react-select-17--value">
                      <div className="Select-placeholder">
                        {vendorInput || "Wedding Vendors"}
                      </div>
                      <div className="Select-input" style={{ display: "inline-block" }}>
                        <input
                          role="combobox"
                          aria-expanded="false"
                          aria-owns=""
                          aria-haspopup="false"
                          aria-activedescendant="react-select-17--value"
                          value={vendorInput}
                          onChange={(e) => setVendorInput(e.target.value)}
                          style={{ boxSizing: "content-box", width: "5px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            visibility: "hidden",
                            height: "0px",
                            overflow: "scroll",
                            whiteSpace: "pre",
                            fontSize: "14px",
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            fontStyle: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                          }}
                        ></div>
                      </div>
                    </span>
                    <span className="Select-arrow-zone">
                      <span className="Select-arrow"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="select block mt-5 text-center regular">
                <div className="Select Select--single is-searchable">
                  <div className="Select-control">
                    <span className="Select-multi-value-wrapper" id="react-select-18--value">
                      <div className="Select-placeholder">{cityInput || "In City"}</div>
                      <div className="Select-input" style={{ display: "inline-block" }}>
                        <input
                          role="combobox"
                          aria-expanded="false"
                          aria-owns=""
                          aria-haspopup="false"
                          aria-activedescendant="react-select-18--value"
                          value={cityInput}
                          onChange={(e) => setCityInput(e.target.value)}
                          style={{ boxSizing: "content-box", width: "5px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            visibility: "hidden",
                            height: "0px",
                            overflow: "scroll",
                            whiteSpace: "pre",
                            fontSize: "14px",
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            fontStyle: "normal",
                            letterSpacing: "normal",
                            textTransform: "none",
                          }}
                        ></div>
                      </div>
                    </span>
                    <span className="Select-arrow-zone">
                      <span className="Select-arrow"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-box-container mt-4">
            <div className="button-box">
              <button
                type="button"
                className="button h6"
                style={{ fontFamily: "sans-serif" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="sc-krvtoX kPedJT">
            <div className="sc-cbkKFq kAtguk">
              <a
                target="_blank"
                className="Blog_mweb"
                href="https://www.wedmegood.com/top-stunning-wedding-venues-2024"
                data-id="0"
              >
                <img
                  className="mt-12"
                  src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/536475/485facef-9946-4f18-ab16-52141a38d1a4gala-banner-web (1).jpg"
                  alt="Gala_2025"
                />
              </a>
              <a
                target="_blank"
                className="Blog_sidebar"
                href="https://www.wedmegood.com/genie?utm_source=blog_banner&utm_medium=blogs&utm_campaign=genie"
                data-id="1"
              >
                <img
                  className="mt-12"
                  src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/1994777/4f914309-af64-45e8-b0cd-7a5fffdaa61cgenie-blog-banner.jpg"
                  alt="Genie Blog Banner"
                />
              </a>
              <a
                target="_blank"
                className="Blog_sidebar"
                href="https://www.wedmegood.com/photos?utm_source=blog_banner&utm_medium=Blog&utm_campaign=Photo+redirect"
                data-id="2"
              >
                <img
                  className="mt-12"
                  src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/1994777/789de60c-ee1b-46e6-bdc0-a32c59e33568gallery.jpg"
                  alt="Gallery"
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/wedmegood/" rel="nofollow">
                <img
                  className="mt-12"
                  src="https://image.wedmegood.com/blog/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a target="_blank" href="https://www.facebook.com/wedmegood" rel="nofollow">
                <img
                  className="mt-12"
                  src="https://image.wedmegood.com/blog/facebook.jpg"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;