"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Wedding Cards Slider Component
function WeddingCardsSlider() {
  const cards = [
    {
      title: "Blooming in Love",
      img: "https://image.wedmegood.com/e-invite-images/6f72e0ea-ccb0-42a7-aa9f-f806938d1178-cover_(1).JPEG",
      link: "/wedding-invitations/templates/caricature-pink-lemons-theme/954",
    },
    {
      title: "Black Garden",
      img: "https://image.wedmegood.com/e-invite-images/380878c9-0012-4c39-8317-e18b8966efbb-cover.JPEG",
      link: "/wedding-invitations/templates/fountain-chandelier-caricature-theme/952",
    },
    {
      title: "Scent of Summer",
      img: "https://image.wedmegood.com/e-invite-images/ec553b5f-80da-4228-8ff5-7ead0cd50b73-Cover.JPEG",
      link: "/wedding-invitations/templates/bells-swan-fort-theme/950",
    },
    {
      title: "Enchanted",
      img: "https://image.wedmegood.com/e-invite-images/041a8de6-5af4-42e1-b0a3-ed3f01accaec-cover.JPEG",
      link: "/wedding-invitations/templates/umbrella-palace-caricature-theme/942",
    },
  ];

  return (
    <div className="py-8 mt-14">
      {/* Header */}
      <div className="flex justify-center mb-6 items-center gap-4">
        <a
          className="font-bold text-2xl hover:underline"
          href="/wedding-invitations/wedding-card-designs"
        >
          Wedding Cards
        </a>
        <span className="text-gray-500 text-lg">194 Items</span>
      </div>

      {/* Cards Slider */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-6 flex-wrap justify-center max-w-[1280px]">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              style={{ width: "280px" }} // Matching video card width
            >
              <div className="w-full h-48 overflow-hidden"> {/* Reduced height for consistency */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg truncate">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <a
          href="/wedding-invitations/wedding-card-designs"
          className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          style={{ minWidth: "200px" }}
        >
          View All
        </a>
      </div>
    </div>
  );
}

// Video Cards Component
const VideoCards = () => {
  const videoCards = [
    {
      title: "Floral Extravaganza",
      duration: "00:45",
      price: 1799,
      oldPrice: 2999,
      image: "https://image.wedmegood.com/e-invite-images/47b1ab7d-42cd-4355-b82e-a74a11517971-Floral_Extravaganza.JPEG",
      link: "/wedding-invitations/templates/lemon-caricature-elegant-theme/956",
    },
    {
      title: "We Said Yes",
      duration: "00:50",
      price: 1999,
      oldPrice: 3999,
      image: "https://image.wedmegood.com/e-invite-images/8d93892e-9f18-4421-a4e6-a4db85fa82cf-We_Said_Yes.JPEG",
      link: "/wedding-invitations/templates/bubbles-water-chairs-theme/953",
    },
    {
      title: "Saunter Elises",
      duration: "00:30",
      price: 1499,
      oldPrice: 2999,
      image: "https://image.wedmegood.com/e-invite-images/86d83eee-b04b-466e-b76e-891d3ca11021-Saunter_Elises.JPEG",
      link: "/wedding-invitations/templates/engagement-caricature-fountain-theme/951",
    },
    {
      title: "Lifetime (Photo Card)",
      duration: "00:45",
      price: 2999,
      oldPrice: 5499,
      image: "https://image.wedmegood.com/e-invite-images/94b976de-5554-4e46-8835-4a8189f862bd-Lifetime.JPEG",
      link: "/wedding-invitations/templates/quirky-colorful-photos-theme/949",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap- min-w-3">
          <a
            href="/wedding-invitations/video-templates"
            className="font-bold text-xl"
          >
            Video Cards
          </a>
          <span className="text-gray-500 text-sm">{videoCards.length} Items</span>
        </div>
      </div>

      {/* Slider */}
    <div className="bg-gray-100 p-4 rounded-md">
  <Slider {...settings}>
    {videoCards.map((card, idx) => (
      <a
        key={idx}
        href={card.link}
        className="block relative rounded overflow-hidden shadow-lg cursor-pointer"
        style={{ width: "50px" }} // Make width same as photo cards
      >
        {/* Play overlay */}
        <div className="absolute top-2 left-2 z-10 flex items-center bg-white px-2 py-1 rounded shadow">
          <img
            src="https://images.wedmegood.com/react-frontend-v4/static/media/PlayButton.3efb2c27.png"
            alt="Play"
            className="w-4 h-4 mr-1"
          />
          <span className="text-xs font-semibold">{card.duration}</span>
        </div>


              {/* Image */}
              <div className="w-72 ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="font-semibold text-sm truncate">{card.title}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="text-orange-500 font-bold">₹ {card.price}</span>
                  <span className="line-through text-gray-400">₹ {card.oldPrice}</span>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <a
          href="/wedding-invitations/video-templates"
          className="w-96 text-center py-3 border border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition"
        >
          View all
        </a>
      </div>
    </div>
  );
}
// Save The Cards Component
function SaveTheCards() {
  const saveCards = [
    {
      title: "Romantic Bliss",
      img: "https://image.wedmegood.com/e-invite-images/sample1.jpeg",
      link: "/wedding-invitations/templates/romantic-bliss-theme/960",
    },
    {
      title: "Golden Memories",
      img: "https://image.wedmegood.com/e-invite-images/sample2.jpeg",
      link: "/wedding-invitations/templates/golden-memories-theme/961",
    },
    {
      title: "Vintage Charm",
      img: "https://image.wedmegood.com/e-invite-images/sample3.jpeg",
      link: "/wedding-invitations/templates/vintage-charm-theme/962",
    },
    {
      title: "Elegant Affair",
      img: "https://image.wedmegood.com/e-invite-images/sample4.jpeg",
      link: "/wedding-invitations/templates/elegant-affair-theme/963",
    },
  ];

  return (
    <div className="py-8 mt-14">
      {/* Header */}
      <div className="flex justify-center mb-6 items-center gap-4">
        <a
          className="font-bold text-2xl hover:underline"
          href="/wedding-invitations/save-the-cards"
        >
          Save The Cards
        </a>
        <span className="text-gray-500 text-lg">{saveCards.length} Items</span>
      </div>

      {/* Cards Slider */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-6 flex-wrap justify-center max-w-[1280px]">
          {saveCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              style={{ width: "280px" }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg truncate">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <a
          href="/wedding-invitations/save-the-cards"
          className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          style={{ minWidth: "200px" }}
        >
          View All
        </a>
      </div>
    </div>
  );
}

// Combined Component
function WeddingAndVideoCards() {
  return (
    <div>
      <WeddingCardsSlider />
      <VideoCards />
      <SaveTheCards/>
    </div>
  );
}

export default WeddingAndVideoCards;