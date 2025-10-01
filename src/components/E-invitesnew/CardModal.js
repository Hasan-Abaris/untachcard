import React, { useState } from "react";

const CardModal = ({ card, onClose }) => {
  const [title, setTitle] = useState(card.title);
  const [desc, setDesc] = useState(card.desc || "");
  const [customText, setCustomText] = useState("");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [activeTab, setActiveTab] = useState("edit");

  const fonts = ["Arial", "Georgia", "Times New Roman", "Helvetica", "Playfair Display", "Montserrat"];
  const colorPalette = ["#000000", "#333333", "#666666", "#8B4513", "#800080", "#FF6B6B", "#4ECDC4", "#45B7D1"];

  const handleSave = () => {
    const savedData = {
      title,
      description: desc,
      customText,
      font: selectedFont,
      color: selectedColor
    };
    
   
    localStorage.setItem(`template_${card.id}`, JSON.stringify(savedData));
    
    alert(`✅ Template Saved Successfully!\n\nTitle: ${title}\nDescription: ${desc}\nCustom Text: ${customText}\nFont: ${selectedFont}\nColor: ${selectedColor}`);
    onClose();
  };

  const handleDownload = () => {
    alert(`📥 Downloading ${title} template...\nFormat: High-resolution PNG\nSize: 1920x1080px`);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <span className="text-xl font-bold">×</span>
          </button>
          
          <h2 className="text-2xl font-bold mb-2">Customize Your Template</h2>
          <p className="opacity-90">Make it uniquely yours with our editing tools</p>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
          {/* Preview Section */}
          <div className="lg:w-1/2 p-6 bg-gray-50">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Live Preview</h3>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-64 lg:h-80 object-cover"
              />
              
              {/* Overlay with custom text */}
              {customText && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                  style={{ 
                    fontFamily: selectedFont,
                    color: selectedColor
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs text-center">
                    <p className="font-semibold text-lg">{customText}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Quick Actions */}
            <div className="flex space-x-3 mt-4">
              <button 
                onClick={handleDownload}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
              >
                📥 Download
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                📤 Share
              </button>
            </div>
          </div>

          {/* Editor Section */}
          <div className="lg:w-1/2 p-6">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
              {[
                { id: "edit", label: "✏️ Edit", },
                { id: "style", label: "🎨 Style" },
                { id: "text", label: "📝 Text" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "edit" && (
                <>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Template Title</label>
                    <input 
                      type="text" 
                      value={title} 
                      onChange={e => setTitle(e.target.value)} 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Enter template title..."
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Description</label>
                    <textarea 
                      value={desc} 
                      onChange={e => setDesc(e.target.value)} 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      rows="4"
                      placeholder="Describe your template..."
                    />
                  </div>
                </>
              )}

              {activeTab === "style" && (
                <>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-3">Font Family</label>
                    <div className="grid grid-cols-2 gap-2">
                      {fonts.map((font) => (
                        <button
                          key={font}
                          onClick={() => setSelectedFont(font)}
                          className={`p-3 border-2 rounded-lg text-left transition-all ${
                            selectedFont === font
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          style={{ fontFamily: font }}
                        >
                          {font}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-3">Color Palette</label>
                    <div className="flex flex-wrap gap-3">
                      {colorPalette.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                            selectedColor === color ? 'border-indigo-500 shadow-lg' : 'border-gray-200'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "text" && (
                <>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Custom Text Overlay</label>
                    <textarea 
                      value={customText} 
                      onChange={e => setCustomText(e.target.value)} 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      rows="3"
                      placeholder="Add your custom message..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Text Preview</h4>
                    <div 
                      className="p-3 bg-white rounded border"
                      style={{ 
                        fontFamily: selectedFont,
                        color: selectedColor
                      }}
                    >
                      {customText || "Your custom text will appear here..."}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Save Button */}
            <button 
              onClick={handleSave}
              className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💾 Save Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
