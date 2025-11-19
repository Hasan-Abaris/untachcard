
import React from "react";

const CustomSection = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };

    return (
        <>
            {data?.map((item) => {
                return (
                    <div
                        key={item?._id}
                        className="rounded-lg shadow-lg p-6 max-w-md mx-auto mb-4"
                        style={{ background: themeBg, color: fontColor, fontFamily: cardFont }}
                    >
                        <h2
                            className="text-center text-blue-500 font-semibold text-lg mb-2"
                            style={{ color: fontColor, fontFamily: cardFont }}
                        >
                            {item?.title}
                        </h2>
                        <p style={{ color: fontColor, fontFamily: cardFont }}>
                            {stripHtml(item?.description)}
                        </p>
                    </div>
                );
            })}
        </>

    );
};

export default CustomSection;
