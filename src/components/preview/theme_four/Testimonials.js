
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Testimonials</h3>
            <div className="text-center">
                <Image
                    src="/assets/cardPreview/resti-seven.jpg"
                    alt="Captain America"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto"
                />
                <p className="mt-2 font-semibold">Captain America</p>
                <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-400 text-sm mt-2">
                    TimWork is the best tool to make up projects quickly.
                </p>
            </div>
        </div>
    );
};

export default Testimonials;
