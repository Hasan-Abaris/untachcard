
import React from "react";

const CustomSection = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };
    return (
        <>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
                    style={{
                        background: cardBg,
                        color: fontColor,
                        fontFamily: cardFont,
                    }}
                >
                    <div
                        className="rounded-xl p-4"
                        style={{
                            background: cardBg || "rgba(255,255,255,0.75)",
                            color: fontColor || "#000",
                            fontFamily: cardFont || "inherit",
                        }}
                    >
                        <h3
                            className="font-bold text-lg mb-2 text-center"
                            style={{
                                color: fontColor || "#000",
                                fontFamily: cardFont || "inherit",
                            }}
                        >
                            {item?.title}
                        </h3>

                        <p
                            className="mt-2 text-sm text-center"
                            style={{
                                color: fontColor || "#444",
                                fontFamily: cardFont || "inherit",
                            }}
                        >
                            {stripHtml(item?.description)}
                        </p>
                    </div>
                </div>
            ))}
        </>

    );
};

export default CustomSection;
