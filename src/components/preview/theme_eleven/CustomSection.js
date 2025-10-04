
const CustomSection = () => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-center font-semibold text-lg mb-4">Custom Section</h2>
            <h3 className="text-xl font-semibold mb-2">Insert whatever you like</h3>
            <p className="">
                This is custom area, totally customizable into anything you like using
                basic HTML with the built-in editor.{" "}
                <span className="font-semibold">
                    Below are examples of some custom sections.
                </span>
            </p>
        </div>
    );
};

export default CustomSection;