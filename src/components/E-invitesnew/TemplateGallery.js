import React, { useState } from "react";

const TemplateGallery = ({ templates, onCardClick, category }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCategoryGradient = (category) => {
    const gradients = {
      wedding: "from-pink-500/10 to-rose-500/10",
      engagement: "from-purple-500/10 to-indigo-500/10", 
      divorce: "from-blue-500/10 to-cyan-500/10",
      memorial: "from-gray-500/10 to-slate-600/10"
    };
    return gradients[category] || "from-gray-500/10 to-slate-600/10";
  };

  return (
    <div className={`bg-gradient-to-br ${getCategoryGradient(category)} rounded-3xl p-8`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => onCardClick(template)}
            onMouseEnter={() => setHoveredCard(template.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={template.img}
                alt={template.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Edit Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors shadow-lg">
                  ✏️ Edit
                </button>
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ₹{template.price}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {template.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {template.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {template.desc}
              </p>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                  Customize
                </button>
                <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
                  Preview
                </button>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 border-2 border-transparent group-hover:border-indigo-300 rounded-2xl transition-all duration-300 pointer-events-none ${
              hoveredCard === template.id ? 'shadow-lg shadow-indigo-200' : ''
            }`} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200">
          Load More Templates
        </button>
      </div>
    </div>
  );
};

export default TemplateGallery;