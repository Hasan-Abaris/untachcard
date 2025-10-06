
import Image from "next/image";

const ProductServices = () => {
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Products and Services</h3>
            <div className="relative">
                <Image
                    src="/assets/cardPreview/product-seven.jpg"
                    alt="Product"
                    width={600}
                    height={300}
                    className="rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded text-xs">
                    SAAS
                </span>
                <span className="absolute bottom-2 left-2 bg-black px-2 py-1 rounded text-xs">
                    Price: 19-29 USD
                </span>
            </div>
            <h4 className="mt-4 text-lg font-semibold">TimWork and TimWork SaaS</h4>
            <p className="text-gray-400 text-sm mt-2">
                TimWork is a perfect, robust, lightweight, superfast web application to
                fulfill all your CRM, Project Management, and Team Collaboration needs.
            </p>
            <button className="mt-3 px-4 py-2 border rounded-md">Enquiry →</button>
        </div>
    );
};

export default ProductServices;
