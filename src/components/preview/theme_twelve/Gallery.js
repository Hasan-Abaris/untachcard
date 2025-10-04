import Image from "next/image";

const Gallery = () => {
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Gallery</h3>
            <div className="flex gap-4">
                <Image src="/assets/cardPreview/g-seven1.jpg" alt="Gallery" width={200} height={120} className="rounded" />
                <Image src="/assets/cardPreview/g-seven2.jpg" alt="Gallery" width={200} height={120} className="rounded" />
            </div>
        </div>
    );
};

export default Gallery;
