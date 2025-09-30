
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';

export default function VenueCard({ data, isGrid }) {
    return (
        <div className={`bg-white rounded-lg shadow hover:shadow-xl transition ${isGrid ? '' : 'flex'} relative`}>
            {/* Image */}
            <div className={`${isGrid ? '' : 'w-1/3'}`}>
                <img src={data.image} alt={data.name} className="w-full h-48 object-cover rounded-t-lg" />
                {data.handpicked && (
                    <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded font-semibold z-10">
                        👑 Handpicked
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={`p-4 ${isGrid ? '' : 'w-2/3'}`}>
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">{data.name}</h2>
                    <div className="flex items-center text-pink-600 text-sm font-semibold">
                        <FaStar className="mr-1" /> {data.rating} <span className="text-gray-600 ml-1">({data.reviews} reviews)</span>
                    </div>
                </div>
                <p className="flex items-center text-gray-500 text-sm mt-1"><FaMapMarkerAlt className="mr-1" /> {data.location}</p>
                <p className="flex items-center text-gray-500 text-sm"><BiBuildingHouse className="mr-1" /> {data.category}</p>

                <div className="mt-2 text-sm text-gray-700">
                    {data.veg && (
                        <p><strong>Veg:</strong> ₹{data.veg}/plate</p>
                    )}
                    {data.nonVeg && (
                        <p><strong>Non veg:</strong> ₹{data.nonVeg}/plate</p>
                    )}
                    {data.rental && (
                        <p><strong>Rental cost:</strong> ₹{data.rental}</p>
                    )}
                </div>

                <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
                    <span>{data.capacity}</span>
                    <span>{data.rooms} Rooms</span>
                    {data.more && <span>+{data.more} more</span>}
                </div>
            </div>
        </div>
    );
}

