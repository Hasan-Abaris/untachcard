
import React from "react";

const CustomSection = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };

    return (
        <>

            {data.map((item) => (
                <div
                    key={item?._id}
                    className="rounded-lg shadow-lg p-6 max-w-md mx-auto"
                    style={{
                        background: cardBg || "#000",
                        color: fontColor || "#fff",
                    }}
                >
                    <h2
                        className="text-center font-semibold text-lg mb-2"
                        style={{ color: fontColor || "#fff" }}
                    >
                        {item?.title}
                    </h2>

                    <p
                        className="opacity-90 text-sm leading-relaxed"
                        style={{ color: fontColor || "#ccc" }}
                    >
                        {stripHtml(item?.description)}
                    </p>
                </div>
            ))}

        </>

    );
};

export default CustomSection;
