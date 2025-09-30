"use client";
import React, { useState, useEffect } from "react";
import WeddingCardsSlider from "./WeddingCardsSlider";
import VideoCards from "./VideoCards";
import SaveTheCards from "./SaveTheCards";

const templates = {
  wedding: {
    title: "Wedding Invitation",
    fields: [
      { name: "brideName", label: "Bride's Name", type: "text", required: true },
      { name: "groomName", label: "Groom's Name", type: "text", required: true },
      { name: "weddingDate", label: "Wedding Date", type: "date", required: true },
      { name: "weddingTime", label: "Wedding Time", type: "time", required: true },
      { name: "venue", label: "Venue", type: "text", required: true },
      { name: "address", label: "Address", type: "textarea", required: true },
      { name: "rsvpDate", label: "RSVP Date", type: "date", required: true },
      { name: "rsvpContact", label: "RSVP Contact", type: "text", required: true },
      { name: "message", label: "Special Message", type: "textarea", required: false },
    ],
    template: `
      <div style="text-align: center; font-family: 'Times New Roman', serif; max-width: 500px; margin: 0 auto; padding: 2rem; border: 5px double #d4af37; background: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <h1 style="font-size: 2.5rem; color: #d4af37; margin-bottom: 1.5rem; font-weight: bold;">Wedding Invitation</h1>
        <div style="font-size: 1.2rem; margin-bottom: 2rem; line-height: 1.6;">
          <p style="margin-bottom: 0.5rem; color: #666;">Together with their families</p>
          <h2 style="font-size: 2rem; color: #2c3e50; margin: 1rem 0; font-weight: bold;">{brideName}</h2>
          <p style="font-size: 1.5rem; margin: 1rem 0; color: #d4af37;">&</p>
          <h2 style="font-size: 2rem; color: #2c3e50; margin: 1rem 0; font-weight: bold;">{groomName}</h2>
          <p style="margin: 1rem 0; color: #666;">request the pleasure of your company</p>
          <p style="margin: 1rem 0; color: #666;">at their wedding celebration</p>
        </div>
        <div style="margin: 2rem 0; padding: 1.5rem; background: #f9f9f9; border-radius: 8px;">
          <p><strong>Date:</strong> {weddingDate}</p>
          <p><strong>Time:</strong> {weddingTime}</p>
          <p><strong>Venue:</strong> {venue}</p>
          <p>{address}</p>
        </div>
        {messageBlock}
        <div style="margin-top: 2rem; font-size: 0.9rem; color: #777; text-align: left; padding-left: 1rem;">
          <p>RSVP by {rsvpDate}</p>
          <p>{rsvpContact}</p>
        </div>
      </div>
    `,
  },
};

function Einvites() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    weddingTime: "",
    venue: "",
    address: "",
    rsvpDate: "",
    rsvpContact: "",
    message: "",
  });
  const [previewHtml, setPreviewHtml] = useState("");

  /** Wedding card list **/
  const weddingCards = [
    { title: "Blooming in Love", img: "https://image.wedmegood.com/e-invite-images/6f72e0ea-ccb0-42a7-aa9f-f806938d1178-cover_(1).JPEG", desc: "Beautiful floral theme wedding card", template: "wedding" },
    { title: "Black Garden", img: "https://image.wedmegood.com/e-invite-images/380878c9-0012-4c39-8317-e18b8966efbb-cover.JPEG", desc: "Elegant black theme garden wedding", template: "wedding" },
    { title: "Scent of Summer", img: "https://image.wedmegood.com/e-invite-images/ec553b5f-80da-4228-8ff5-7ead0cd50b73-Cover.JPEG", desc: "Bright summer vibes for your wedding", template: "wedding" },
    { title: "Vintage Romance", img: "/assets/images/Vintage-Romance.JPG", desc: "Classic vintage style wedding card", template: "wedding" },
    { title: "Royal Elegance", img: "/assets/images/Royal-Elegance.JPG", desc: "Luxurious royal-themed wedding invitation", template: "wedding" },
  ];

  /** Video cards **/
  const videoCards = [
    { title: "Floral Extravaganza", img: "https://image.wedmegood.com/e-invite-images/47b1ab7d-42cd-4355-b82e-a74a11517971-Floral_Extravaganza.JPEG", price: 1799, template: "wedding" },
    { title: "We Said Yes", img: "https://image.wedmegood.com/e-invite-images/8d93892e-9f18-4421-a4e6-a4db85fa82cf-We_Said_Yes.JPEG", price: 1999, template: "wedding" },
  ];

  /** Save-the-date cards **/
  const saveCards = [
    { title: "Romantic Bliss", img: "/assets/images/Romantic-Bliss.jpg", template: "wedding" },
    { title: "Golden Memories", img: "/assets/images/Golden-Memories.jpg", template: "wedding" },
  ];

  /** Build live preview **/
  const updatePreview = () => {
    if (!selectedCard) return;
    const template = templates[selectedCard.template];
    let html = template.template;

    // Replace all placeholders
    template.fields.forEach((field) => {
      html = html.replace(new RegExp(`{${field.name}}`, "g"), formData[field.name] || `[${field.label}]`);
    });

    // Handle message block separately
    const messageBlock = formData.message
      ? `<div style="font-style: italic; margin: 1rem 0; color: #666; padding: 1rem; background: #f1f1f1; border-radius: 4px;">${formData.message}</div>`
      : "";
    html = html.replace("{messageBlock}", messageBlock);

    setPreviewHtml(html);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /** Open Preview in new tab **/
  const previewTemplate = () => {
    const previewWindow = window.open("", "_blank", "width=800,height=600");
    previewWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Template Preview</title>
        <style>
          body { font-family: 'Times New Roman', serif; margin: 2rem; background: #f5f5f5; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>${previewHtml}</body>
      </html>
    `);
    previewWindow.document.close();
  };

  /** Download template as HTML **/
  const downloadTemplate = () => {
    const template = templates[selectedCard.template];
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${template.title}</title>
      </head>
      <body>${previewHtml}</body>
      </html>
    `;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${template.title.toLowerCase().replace(/\s+/g, "-")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /** ESC key closes modal **/
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCard(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    updatePreview();
  }, [formData, selectedCard]);

  return (
    <div className="bg-amber-600 mt-15">
      <header className="text-center py-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Life Event Templates</h1>
        <p className="text-xl opacity-90">Professional templates for life's important moments</p>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <WeddingCardsSlider cards={weddingCards} onCardClick={setSelectedCard} />
        <VideoCards cards={videoCards} onCardClick={setSelectedCard} />
        <SaveTheCards cards={saveCards} onCardClick={setSelectedCard} />

        {selectedCard && (
          <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4">
            <div className="bg-white max-w-5xl w-full rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
              {/* Close */}
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center 
                           text-gray-600 bg-gray-100 rounded-full shadow 
                           hover:bg-red-500 hover:text-white transition-all"
                onClick={() => setSelectedCard(null)}
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b sticky top-0 bg-white z-10 p-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Edit {templates[selectedCard.template].title}
                </h2>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 border-2 border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white"
                    onClick={previewTemplate}
                  >
                    Preview
                  </button>
                  <button
                    className="px-4 py-2 border-2 border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white"
                    onClick={downloadTemplate}
                  >
                    Download
                  </button>
                </div>
              </div>

              {/* Form + Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="flex flex-col gap-4">
                  {templates[selectedCard.template].fields.map((field) => (
                    <div key={field.name} className="flex flex-col">
                      <label className="font-semibold text-gray-800 mb-2">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name]}
                          required={field.required}
                          onChange={handleInputChange}
                          className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 resize-y"
                          style={{ minHeight: "100px" }}
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          required={field.required}
                          onChange={handleInputChange}
                          className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Live Preview */}
                <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50 min-h-[400px] overflow-y-auto">
                  <div
                    className="font-serif leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: previewHtml }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Einvites;
