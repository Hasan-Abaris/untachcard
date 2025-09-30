"use client";
import React, { useState } from "react";
import TemplateGallery from "./TemplateGallery";
import CardModal from "./CardModal";

function LifeEventTemplates() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("wedding");

  const templates = {
    wedding: [
      { id: 1, title: "Blooming Romance", img: "https://image.wedmegood.com/e-invite-images/6f72e0ea-ccb0-42a7-aa9f-f806938d1178-cover_(1).JPEG", desc: "Elegant floral wedding invitation with romantic touches", category: "wedding", price: 1299 },
      { id: 2, title: "Golden Elegance", img: "https://image.wedmegood.com/e-invite-images/380878c9-0012-4c39-8317-e18b8966efbb-cover.JPEG", desc: "Luxurious gold-themed wedding card", category: "wedding", price: 1599 },
      { id: 3, title: "Modern Minimalist", img: "https://image.wedmegood.com/e-invite-images/ec553b5f-80da-4228-8ff5-7ead0cd50b73-Cover.JPEG", desc: "Clean, contemporary wedding design", category: "wedding", price: 999 },
      { id: 4, title: "Vintage Garden", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400", desc: "Classic garden-themed wedding invitation", category: "wedding", price: 1199 },
      { id: 5, title: "Royal Palace", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400", desc: "Majestic royal wedding card design", category: "wedding", price: 1799 },
      { id: 6, title: "Bohemian Dreams", img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400", desc: "Free-spirited boho wedding invitation", category: "wedding", price: 1099 }
    ],
    engagement: [
      { id: 7, title: "Promise Ring", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400", desc: "Romantic engagement announcement card", category: "engagement", price: 899 },
      { id: 8, title: "Love Story", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400", desc: "Tell your love story beautifully", category: "engagement", price: 1099 },
      { id: 9, title: "Sparkle & Shine", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400", desc: "Glittery engagement celebration card", category: "engagement", price: 799 },
      { id: 10, title: "Heart to Heart", img: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400", desc: "Intimate engagement announcement", category: "engagement", price: 999 },
      { id: 11, title: "Future Together", img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400", desc: "Modern engagement card design", category: "engagement", price: 1199 },
      { id: 12, title: "Eternal Bond", img: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400", desc: "Elegant engagement invitation", category: "engagement", price: 1299 }
    ],
    divorce: [
      { id: 13, title: "New Beginnings", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", desc: "Positive fresh start announcement", category: "divorce", price: 599 },
      { id: 14, title: "Moving Forward", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", desc: "Graceful transition announcement", category: "divorce", price: 699 },
      { id: 15, title: "Peaceful Paths", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", desc: "Serene separation notice", category: "divorce", price: 549 },
      { id: 16, title: "Respectful Closure", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", desc: "Dignified divorce announcement", category: "divorce", price: 649 },
      { id: 17, title: "Freedom Flight", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", desc: "Liberation-themed card", category: "divorce", price: 599 },
      { id: 18, title: "Gentle Goodbye", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", desc: "Soft farewell message", category: "divorce", price: 699 }
    ],
    memorial: [
      { id: 19, title: "Eternal Memory", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", desc: "Beautiful memorial service invitation", category: "memorial", price: 799 },
      { id: 20, title: "Celebration of Life", img: "https://images.unsplash.com/photo-1544967882-c8ba434bb5b2?w=400", desc: "Uplifting life celebration card", category: "memorial", price: 899 },
      { id: 21, title: "Peaceful Rest", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", desc: "Serene memorial announcement", category: "memorial", price: 749 },
      { id: 22, title: "Garden of Memories", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", desc: "Nature-themed memorial card", category: "memorial", price: 849 },
      { id: 23, title: "Loving Tribute", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", desc: "Heartfelt memorial service invite", category: "memorial", price: 799 },
      { id: 24, title: "Heavenly Peace", img: "https://images.unsplash.com/photo-1544967882-c8ba434bb5b2?w=400", desc: "Spiritual memorial card design", category: "memorial", price: 899 }
    ]
  };

  const categories = [
    { id: "wedding", name: "Wedding", icon: "💒", color: "from-pink-500 to-rose-500" },
    { id: "engagement", name: "Engagement", icon: "💍", color: "from-purple-500 to-indigo-500" },
    { id: "divorce", name: "Divorce", icon: "🕊️", color: "from-blue-500 to-cyan-500" },
    { id: "memorial", name: "Memorial", icon: "🌹", color: "from-gray-500 to-slate-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            Life Event Templates
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Beautiful, editable templates for every milestone in life
          </p>
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-white text-gray-800 shadow-lg'
                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Stats */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-bold text-lg">{category.name}</h3>
              <p className="text-sm opacity-90">{templates[category.id].length} Templates</p>
            </div>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {categories.find(cat => cat.id === activeCategory)?.icon} {" "}
            {categories.find(cat => cat.id === activeCategory)?.name} Templates
          </h2>
          <p className="text-gray-600">Choose from our premium collection of editable templates</p>
        </div>

        {/* Template Gallery */}
        <TemplateGallery 
          templates={templates[activeCategory]} 
          onCardClick={setSelectedCard}
          category={activeCategory}
        />
      </div>

      {/* Modal */}
      {selectedCard && (
        <CardModal 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
        />
      )}
    </div>
  );
}

export default LifeEventTemplates;
