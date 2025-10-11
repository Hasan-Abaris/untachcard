"use client";

import Link from "next/link";
import { cards } from "../../data/vcards";
import Card from "../../components/all-templates/Card";

export default function AllTemplatespage() {
  const themes = [
    {
      id: 1,
      name: "Theme One",
      image: "/assets/theme/theme1.png",
      preview: "/preview/theme_one/theme_one/demo",
    },
    {
      id: 2,
      name: "Theme Two",
      image: "/assets/theme/theme2.png",
      preview: "/preview/theme_two/theme_two/demo",
    },
    {
      id: 3,
      name: "Theme Three",
      image: "/assets/theme/theme3.png",
      preview: "/preview/theme_three/theme_three/demo",
    },
    {
      id: 4,
      name: "Theme Four",
      image: "/assets/theme/theme4.png",
      preview: "/preview/theme_four/theme_four/demo",
    },
    {
      id: 5,
      name: "Theme Five",
      image: "/assets/theme/theme5.png",
      preview: "/preview/theme_five/theme_five/demo",
    },
    {
      id: 6,
      name: "Theme Six",
      image: "/assets/theme/theme6.png",
      preview: "/preview/theme_six/theme_six/demo/theme_six",
    },
    {
      id: 7,
      name: "Theme Seven",
      image: "/assets/theme/theme7.png",
      preview: "/preview/theme_seven/theme_seven/demo",
    },
    {
      id: 8,
      name: "Theme Eight",
      image: "/assets/theme/theme8.png",
      preview: "/preview/theme_eight/theme_eight/demo",
    },
    {
      id: 9,
      name: "Theme Nine",
      image: "/assets/theme/theme9.png",
      preview: "/preview/theme_nine/theme_nine/demo",
    },
    {
      id: 10,
      name: "Theme Ten",
      image: "/assets/theme/theme10.png",
      preview: "/preview/theme_ten/theme_ten/demo",
    },
    {
      id: 11,
      name: "Theme Eleven",
      image: "/assets/theme/theme11.png",
      preview: "/preview/theme_eleven/theme_eleven/demo",
    },
    {
      id: 12,
      name: "Theme fourteen",
      image: "/assets/theme/theme12.png",
      preview: "/preview/theme_twelve/theme_twelve/demo",
    },
    {
      id: 13,
      name: "Theme Thirteen",
      image: "/assets/theme/theme12.png",
      preview: "/preview/theme_thirteen/theme_thirteen/demo",
    },
     {
      id: 14,
      name: "Theme Fourteen",
      image: "/assets/theme/theme12.png",
      preview: "/preview/theme_fourteen/theme_fourteen/demo",
    },
    {
      id: 15,
      name: "Theme Fifteen",
      image: "/assets/theme/theme12.png",
      preview: "/preview/theme_fifteen/theme_fifteen/demo",
    },
  ];

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        All Visiting Card Templates
      </h1>

      <div
        className="card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {themes.map((theme) => (
          <div
            key={theme.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <label className="imagecheck">
              <input
                type="radio"
                name="theme_name"
                value={theme.name}
                className="imagecheck-input"
              />
              <figure className="imagecheck-figure">
                <img
                  src={theme.image}
                  alt={theme.name}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <figcaption
                  style={{
                    color: "#555",
                    fontSize: "1.1rem",
                    marginTop: "10px",
                  }}
                >
                  {theme.name}
                </figcaption>
              </figure>
            </label>
            <Link
              href={theme.preview}
              target="_blank"
              style={{
                display: "inline-block",
                backgroundColor: "#ff0000",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Preview
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
