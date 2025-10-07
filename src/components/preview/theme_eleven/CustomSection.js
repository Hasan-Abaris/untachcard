
const CustomSection = ({ data }) => {
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]+>/g, "");
    };
    return (
        <>
            {data?.map((item) => {
                return <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
                    backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} key={item?._id}>
                    <h2 className="text-center font-semibold text-lg mb-4">{item?.title}</h2>
                    {/* <h3 className="text-xl font-semibold mb-2">Insert whatever you like</h3> */}
                    <p className="">
                        {stripHtml(item?.description)}
                    </p>
                </div>
            })}
        </>

    );
};

export default CustomSection;