

export const Gallery = ({ data }) => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-lg font-semibold mb-4 text-center">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
                {data.map((img, i) => (
                    <img
                        key={i}
                        src={img || "/gallery.jpg"}
                        alt="gallery"
                        className="w-full h-28 object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};