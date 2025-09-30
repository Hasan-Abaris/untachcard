import React from "react";

const reviews = [
  {
    name: "Khoslam",
    rating: 5.0,
    date: "17 Apr 2025",
    text: `This is my second time using the Genie service — first for my wedding and now for my brother’s — and I can confidently say, it only keeps getting better! Akash Chopra has truly been a genie in every sense. His impeccable service, attention to detail, and calm demeanor made the entire experience stress-free and seamless. From scouting the perfect venue to arranging photographers, makeup artists, decorators, and even sound systems — he went above and beyond to make it all happen effortlessly.`,
  },
  {
    name: "Abhishek & Preethi",
    rating: 5.0,
    date: "3 Mar 2025",
    text: `We had our Mehndi and Wedding in Bangalore and Reception in Delhi, which meant double the work — two sets of venues, vendors, and endless decisions. That’s where Ritvi stepped in, and honestly, we couldn’t have managed it all without her help. 😊 What we really appreciated was how she didn’t just wait for us to ask questions — she was constantly thinking ahead for us. She gave practical suggestions when we were stuck, honest feedback when something didn’t quite fit, and spot-on recommendations for everything — venues, decor, photographers, even Mehndi artists. 😇 What stood out the most was how she cared about both Bangalore and Delhi functions equally, never once treating either as an afterthought. She understood that both cities were equally important to us, and she made sure every detail — big or small — got attention. 😌 If you want someone who’s not just a planner but someone who truly has your back, Ritvi is the one. I would absolutely recommend her to anyone planning their wedding — especially if you’re juggling multiple locations like we were. 😁 And just to add — the WedMeGood paid package was totally worth it. It’s such a relief to have someone narrow down the endless options and guide you towards the right choices. 🙏 Cheers! Abhishek & Preethi (Lots of love — from Singapore)`,
  },
  {
    name: "Meghana Bhasin",
    rating: 5.0,
    date: "31 Mar 2025",
    text: `I used the WedMeGood Genie service along with the app to explore vendors, trends, and planning ideas—and it was a game-changer! The WMG Genie team was spot on, providing me with a curated list of venues within my budget and a dedicated expert to guide me at every step. Thanks to their recommendations, I found the perfect venue, and my wedding turned out to be absolutely dreamy! Highly recommend this app for a stress-free and seamless wedding planning experience.`,
  },
];

function Customersreview() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        maxWidth: "800px",
        margin: "72px auto",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#333",
        }}
      >
        Let them speak for Us!
      </div>
      <div
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        Some impressions from our customers
      </div>

      {reviews.map((review, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                marginRight: "15px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#E72E77",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "24px",
                }}
              >
                👤
              </div>
            </div>
            <div style={{ flex: 1, wordWrap: "break-word", width: "100%" }}>
              <div style={{ marginBottom: "5px" }}>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {review.name}
                </span>
                <span style={{ color: "#E72E77", marginRight: "5px" }}>★</span>
                <span style={{ color: "#333", paddingLeft: "5px" }}>{review.rating}</span>
              </div>
              <div style={{ color: "#999", marginBottom: "10px", fontSize: "14px" }}>
                {review.date}
              </div>
              <div style={{ lineHeight: "1.6", color: "#555", fontSize: "15px" }}>
                {review.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Customersreview;