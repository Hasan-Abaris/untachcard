
import React from "react";

const CustomSection = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };

    return (
        <>
            {data?.map((item) => (
                <div
                    key={item?._id}
                    className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
                    style={{
                        background:
                            data?.card_bg_type === "Image" && data?.card_bg
                                ? `url(${data.card_bg}) center/cover no-repeat`
                                : cardBg,
                        color: fontColor,
                        fontFamily: cardFont,
                    }}
                >
                    <h2 className="text-center text-lg font-bold">{item?.title}</h2>
                    <p className="text-gray-300">{stripHtml(item?.description)}</p>
                </div>
            ))}
        </>

    );
};

export default CustomSection;
