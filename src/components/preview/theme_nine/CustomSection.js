
import React from "react";

const CustomSection = ({ data }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };

    return (
        <>
            {data?.map((item) => {
                return <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
                    backgroundImage: "url('/assets/banner/theme-nine.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} key={item?._id}>
                    <h2 className="text-center text-lg font-bold">{item?.title}</h2>
                    <p className="text-gray-300">
                        {stripHtml(item?.description)}

                    </p>
                </div>
            })}
        </>

    );
};

export default CustomSection;
