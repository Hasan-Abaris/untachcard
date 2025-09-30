const SimilarVenues = () => {
    const venues = [
        {
            id: 1,
            name: "Wood Castle Spa & Resort",
            image: "/assets/details/sm1.webp", // Replace with actual image
            location: "Jim Corbett",
            type: "4 Star & Above Wedding Hotels",
            vegPrice: "₹ 2,000",
            nonVegPrice: "₹ 2,400",
            rating: 4.7,
            reviews: 25,
            pax: "100-800 pax",
            rooms: "65 Rooms",
            extra: "+6 more"
        },
        {
            id: 2,
            name: "Corbett Adventure Resort",
            image: "/assets/details/sm2.jpg",
            location: "Jim Corbett",
            type: "Marriage Garden / Banquet Hall",
            vegPrice: "₹ 2,500",
            nonVegPrice: "₹ 3,000",
            rating: 5.0,
            reviews: 22,
            pax: "100-500 pax",
            rooms: "60 Rooms",
            extra: "+11 more"
        },
        {
            id: 3,
            name: "The Den Corbett Resort",
            image: "/assets/details/sm3.webp",
            location: "Jim Corbett",
            type: "4 Star & Above Wedding Hotels",
            vegPrice: "₹ 3,100",
            rating: 4.8,
            reviews: 20,
            pax: "100-350 pax",
            rooms: "54 Rooms",
            extra: "+7 more"
        },
        {
            id: 4,
            name: "Saraca Resort & Spa",
            image: "/assets/details/sm4.jpg",
            location: "Jim Corbett",
            type: "4 Star & Above Wedding Hotels",
            vegPrice: "₹ 1,800",
            nonVegPrice: "₹ 2,200",
            rating: 4.5,
            reviews: 19,
            pax: "30-200 pax",
            rooms: "44 Rooms",
            extra: "+11 more"
        },
    ];

    return (
        <div className="bg-white border rounded-md p-6 mt-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Browse Similar Wedding Venues</h2>
                <button className="text-pink-600 border border-pink-500 px-4 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                    View More
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {venues.map((venue) => (
                    <div
                        key={venue.id}
                        className="border rounded-lg overflow-hidden shadow-sm bg-white"
                    >
                        <div className="relative">
                            <img
                                src={venue.image}
                                alt={venue.name}
                                className="w-full h-44 object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-0.5 text-xs font-semibold rounded">
                                🔰
                            </span>
                            <span className="absolute bottom-2 right-2 bg-white text-black px-2 py-0.5 text-xs rounded-full opacity-80">
                                📷
                            </span>
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-sm truncate">{venue.name}</h3>
                            <div className="flex items-center text-pink-600 text-sm font-semibold mt-1">
                                ⭐ {venue.rating} <span className="text-gray-500 ml-1 text-xs">({venue.reviews})</span>
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                                📍 {venue.location}
                            </div>
                            <div className="text-xs text-gray-600">
                                🏛️ {venue.type}
                            </div>
                            <div className="text-sm mt-2">
                                <div>
                                    Veg: <span className="font-semibold">{venue.vegPrice}</span> per plate
                                </div>
                                {venue.nonVegPrice && (
                                    <div>
                                        Non veg: <span className="font-semibold">{venue.nonVegPrice}</span> per plate
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                <span className="bg-gray-100 px-2 py-1 rounded">{venue.pax}</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">{venue.rooms}</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">{venue.extra}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarVenues;
