
import React from "react";

const CustomSection = ({ data }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };
    return (
        <>
            {data?.map((item,index) => {
                return <div key={index} className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
                    backgroundImage: "url('/assets/banner/theme-ten.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <h3 className="font-bold text-lg mb-2">{item?.title}</h3>
                    {/* <h4 className="font-semibold text-xl">Insert whatever you like</h4> */}
                    <p className="mt-2 text-gray-600">
                        {stripHtml(item?.description)}
                    </p>
                </div>

            })}
        </>

    );
};

export default CustomSection;
