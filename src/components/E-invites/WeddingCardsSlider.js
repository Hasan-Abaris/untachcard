import React from "react";
import Image from "next/image";

const WeddingCardsSlider = ({ cards, onCardClick }) => {
  return (
    <div style={{ padding: "30px 0" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>Wedding Cards</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            style={{ width: "280px", cursor: "pointer", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
            onClick={() => onCardClick(card)}
          >
            <img src={card.img} alt={card.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCardsSlider;
