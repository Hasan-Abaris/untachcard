import React from "react";

function Packages() {
  return (
    <div style={{ maxWidth: "1200px", margin: "72px auto", padding: "5px" }}>
      <div className="container">
        <div className="margin-t-50">
          <div className="w-100 sc-eerKOB spackage">
            <div className="h4" style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>
              Select Package
            </div>
            <div className="subHead" style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
              WMG Genie can help out!
            </div>
          </div>
        </div>

        {/* Package Cards */}
        <div className="itemWraper margin-v-20" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {/* Destination Wedding Package */}
          <div className="packageItem padding-20 bg-white shadow border-radius-10 overflow-hidden" style={cardStyle}>
            <div className="w-100 sc-jzJRlG ghlzyK" style={packageHeader}>
              <div className="packageName" style={packageNameStyle}>
                Destination Wedding Package
              </div>
              <div className="price" style={priceStyle}>
                <span className="discount" style={discountStyle}>₹ 4999/-</span>
                <span>₹ 1999/-</span>
              </div>
            </div>
            <div className="subText" style={subTextStyle}>
              Perfect for all your destination wedding venue and vendor needs.
            </div>
            <ul style={listStyle}>
              <li>Find venues with all-inclusive pricing (rooms, 3 meals, and event spaces), with available dates and quotes that fit your budget.</li>
              <li>Get personalized vendor recommendations for photographers, decorators, planners, caterers, makeup artists, and more</li>
              <li>Enjoy up to two meetings (virtual or in-person) for expert assistance</li>
              <li>Benefit from top-tier price negotiations</li>
              <li>Continuous support through follow-ups and virtual assistance until booking is finalized</li>
              <li>Professional vetting of vendor contracts</li>
              <li>
                Choose a free digital invite or enjoy 50% off{" "}
                <a href="https://www.wedmegood.com/wedding-invitations/video-templates" target="_blank" rel="noopener noreferrer">
                  Video invites
                </a>
              </li>
              <li>Offer valid for 90 day</li>
            </ul>
            <div className="button" style={buttonStyle}>
              Continue <i className="fa fa-angle-right"></i>
            </div>
          </div>

          {/* City Wedding Package */}
          <div className="packageItem padding-20 bg-white shadow border-radius-10 overflow-hidden" style={cardStyle}>
            <div className="w-100 sc-jzJRlG ghlzyK" style={packageHeader}>
              <div className="packageName" style={packageNameStyle}>
                City Wedding Package
              </div>
              <div className="price" style={priceStyle}>
                <span className="discount" style={discountStyle}>₹ 2999/-</span>
                <span>₹ 749/-</span>
              </div>
            </div>
            <div className="subText" style={subTextStyle}>
              Ideal for hometown or local wedding planning.
            </div>
            <ul style={listStyle}>
              <li>Receive venue suggestions with date availability and quotes tailored to your budget and location</li>
              <li>Get expert vendor recommendations in any 5 categories of your choice</li>
              <li>One video meeting for personalized assistance</li>
              <li>Benefit from the best price negotiations</li>
              <li>Ongoing virtual support until the booking is finalized</li>
              <li>
                Enjoy 20% off on{" "}
                <a href="https://www.wedmegood.com/wedding-invitations/video-templates" target="_blank" rel="noopener noreferrer">
                  Video invites
                </a>
              </li>
              <li>Offer valid for 60 days</li>
            </ul>
            <div className="button" style={buttonStyle}>
              Continue <i className="fa fa-angle-right"></i>
            </div>
          </div>

          {/* Single Wedding Service */}
          <div className="packageItem padding-20 bg-white shadow border-radius-10 overflow-hidden" style={cardStyle}>
            <div className="w-100 sc-jzJRlG ghlzyK" style={packageHeader}>
              <div className="packageName" style={packageNameStyle}>
                Single Wedding Service
              </div>
              <div className="price" style={priceStyle}>
                <span className="discount" style={discountStyle}>₹ 500/-</span>
                <span>₹ 100/-</span>
              </div>
            </div>
            <div className="subText" style={subTextStyle}>
              Ideal for venue booking or single wedding service
            </div>
            <ul style={listStyle}>
              <li>Tailored suggestions for venues or vendors (based on your selection), customized to your budget and preferred location (One city)</li>
              <li>Expert price negotiations to ensure the best deals</li>
              <li>Ongoing virtual support until your booking is confirmed</li>
              <li>Offer valid for 45 days.</li>
            </ul>
            <div className="button" style={buttonStyle}>
              Continue <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Inline style objects */
const cardStyle = {
  flex: "1 1 30%",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  padding: "28px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minWidth: "400px",
};

const packageHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
};

const packageNameStyle = {
  fontWeight: "bold",
  fontSize: "18px",
};

const priceStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#e91e63",
};

const discountStyle = {
  textDecoration: "line-through",
  color: "#777",
  marginRight: "8px",
  fontWeight: "normal",
};

const subTextStyle = {
  marginBottom: "10px",
  color: "#555",
};

const listStyle = {
  paddingLeft: "20px",
  marginBottom: "20px",
  lineHeight: "1.5",
};

const buttonStyle = {
  marginTop: "auto",
  textAlign: "right",
  color: "#e91e63",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Packages;
