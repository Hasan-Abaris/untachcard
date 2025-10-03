
import Image from "next/image";

const Portfolio = () => {
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Portfolio</h3>
            <Image
                src="/assets/cardPreview/portifolio-seven.jpg"
                alt="Portfolio"
                width={600}
                height={300}
                className="rounded-lg"
            />
            <h4 className="mt-4 text-lg font-semibold">
                Project Management Systems
            </h4>
            <p className="text-gray-400 text-sm mt-2">
                Professional Project Management Systems and CRM applications.
            </p>
            <button className="mt-3 px-4 py-2 border rounded-md">View</button>
        </div>
    );
};

export default Portfolio;
