export const ProductServices = ({ data }) => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-lg font-semibold mb-4 text-center">
                Products and Services
            </h2>

            <div
                // key={index}
                className="mb-4 border rounded-lg overflow-hidden shadow"
            >
                <img
                    src={"/product.jpg"}
                    alt={''}
                    className="w-full h-32 object-cover"
                />
                <div className="p-4">
                    <h3 className="font-semibold"></h3>
                    <p className="text-sm text-gray-700"></p>
                    <p className="mt-2 font-bold text-yellow-600">
                        Price: {"19-29 USD"}
                    </p>
                    <button className="mt-3 text-blue-600 text-sm">Enquiry →</button>
                </div>
            </div>

        </div>
    );
};