// templates.js
export const weddingTemplates = [
  {
    id: 1,
    title: "Blooming in Love",
    thumbnail: "https://image.wedmegood.com/e-invite-images/6f72e0ea-ccb0-42a7-aa9f-f806938d1178-cover_(1).JPEG",
    json: {
      width: 800,
      height: 600,
      objects: [
        { type: "text", text: "Bride & Groom", fontSize: 40, top: 100, left: 150, fill: "black" },
        { type: "text", text: "Wedding Date: 01 Jan 2026", fontSize: 24, top: 200, left: 150, fill: "black" }
      ]
    }
  },
  {
    id: 2,
    title: "Black Garden",
    thumbnail: "https://image.wedmegood.com/e-invite-images/380878c9-0012-4c39-8317-e18b8966efbb-cover.JPEG",
    json: {
      width: 800,
      height: 600,
      objects: [
        { type: "text", text: "You’re Invited", fontSize: 36, top: 120, left: 100, fill: "white" }
      ]
    }
  }
];
