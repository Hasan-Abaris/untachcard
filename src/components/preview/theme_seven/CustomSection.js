
import React from "react";

const CustomSection = ({ data }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };

    return (
        <>
            {data?.map((item) => {
                return <div className="bg-black text-white rounded-lg shadow-lg p-6 max-w-md mx-auto" key={item?._id}>
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
