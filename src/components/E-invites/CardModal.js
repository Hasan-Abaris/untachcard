import React, { useState } from "react";
import Image from "next/image";

const CardModal = ({ card, onClose }) => {
  const [title, setTitle] = useState(card.title);
  const [desc, setDesc] = useState(card.desc || "");

  const handleSave = () => {
    // For demo: just alert the changes
    alert(`Saved!\nTitle: ${title}\nDescription: ${desc}`);
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 50
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "600px",
        position: "relative"
      }}>
        <button 
          onClick={onClose} 
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            background: "none",
            cursor: "pointer"
          }}>×</button>

        <img src={card.img} alt={card.title} style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px" }} />

        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "bold" }}>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Description:</label>
          <textarea 
            value={desc} 
            onChange={e => setDesc(e.target.value)} 
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc", minHeight: "80px" }}
          />
        </div>

        <button 
          onClick={handleSave}
          style={{ marginTop: "15px", padding: "10px 20px", backgroundColor: "#f97316", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CardModal;
