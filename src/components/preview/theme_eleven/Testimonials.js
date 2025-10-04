


export const Testimonials = ({ data }) => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-lg font-semibold mb-4 text-center">Testimonials</h2>
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <img
                        src={item.image || "/user.jpg"}
                        alt={item.name}
                        className="w-16 h-16 rounded-full mb-2"
                    />
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                    <p className="text-sm text-gray-700">{item.message}</p>
                </div>
            ))}
        </div>
    );
};