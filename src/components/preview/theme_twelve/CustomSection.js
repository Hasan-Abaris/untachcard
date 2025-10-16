
import React from "react";

const CustomSection = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };
    return (
        <>
            {data?.map((item) => {
                return <div className="rounded-lg shadow-lg p-6 max-w-md mx-auto"
                    key={item?._id}
                    style={{
                        background: cardBg || "#000",
                        color: fontColor || "#fff",
                    }}>
                    <h2 className="text-center font-semibold text-lg mb-2">{item?.title}</h2>
                    {/* <h3 className="text-xl font-semibold mb-2">Insert whatever you like</h3> */}
                    <p className="text-gray-300">
                        {stripHtml(item?.description)}
                    </p>
                </div>
            })}
        </>
    );
};

export default CustomSection;