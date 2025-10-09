
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
                    className="rounded-2xl shadow-lg p-6 max-w-md mx-auto backdrop-blur-lg mb-4"
                    style={{
                        background: cardBg,
                        color: fontColor,
                        fontFamily: cardFont,
                    }}
                >
                    <h2 className="text-center font-semibold text-lg mb-4">{item?.title}</h2>
                    <p className="text-center text-sm">{stripHtml(item?.description)}</p>
                </div>
            ))}
        </>

    );
};

export default CustomSection;