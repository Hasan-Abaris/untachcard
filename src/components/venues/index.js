"use client"
import { useState } from "react";
import SearchBar from "./SearchBar";
import CitySlider from "./CitySlider";
import ToggleView from "./ToggleView";
import VenueList from "./VenueList";
import LatestReview from "./LatestReview";




const Venues = () => {
    const [isGrid, setIsGrid] = useState(true);

    const venues = [
        {
            name: "Aureva Farm",
            location: "Gurgaon",
            category: "Banquet Halls, Marriage Garden",
            veg: 1500,
            nonVeg: 1800,
            capacity: "100-2000 pax",
            rooms: 12,
            more: 6,
            rating: 4.8,
            reviews: 21,
            image: "/assets/cityimage/n1.webp",
            handpicked: true,
        },
        {
            name: "Mallu Farms",
            location: "Chattarpur, Delhi",
            category: "Banquet Halls, Marriage Garden",
            veg: 2500,
            nonVeg: 2700,
            capacity: "200-1500 pax",
            rooms: 4,
            more: 8,
            rating: 4.7,
            reviews: 58,
            image: "/assets/cityimage/n2.jpeg",
            handpicked: true,
        },
        {
            name: "Sambrama by Swanlines",
            location: "Kaggalipura, Bangalore",
            category: "Banquet Halls, Marriage Garden",
            rental: "4,50,000",
            capacity: "500-4000 pax",
            rooms: 30,
            more: 5,
            rating: 5.0,
            reviews: 2,
            image: "/assets/cityimage/n3.jpeg",
            handpicked: true,
        },
        {
            name: "Koti Resort Shimla, A Member of Radisson Individuals Retreats",
            location: "Kaggalipura, Bangalore",
            category: "Banquet Halls, Marriage Garden",
            rental: "4,50,000",
            capacity: "500-4000 pax",
            rooms: 30,
            more: 5,
            rating: 5.0,
            reviews: 2,
            image: "/assets/cityimage/n4.jpeg",
            handpicked: true,
        },

        {
            name: "ORO The Estates, Nandi Hills",
            location: "Kaggalipura, Bangalore",
            category: "Banquet Halls, Marriage Garden",
            rental: "4,50,000",
            capacity: "500-4000 pax",
            rooms: 30,
            more: 5,
            rating: 5.0,
            reviews: 2,
            image: "/assets/cityimage/n5.jpg",
            handpicked: true,
        },
        {
            name: "Balkrishna Banquets",
            location: "Kaggalipura, Bangalore",
            category: "Banquet Halls, Marriage Garden",
            rental: "4,50,000",
            capacity: "500-4000 pax",
            rooms: 30,
            more: 5,
            rating: 5.0,
            reviews: 2,
            image: "/assets/cityimage/n6.jpeg",
            handpicked: true,
        },
    ];
    return (
        < main className="max-w-7xl mx-auto px-4 py-6 bg-gray-50 min-h-screen mt-18" >
            <SearchBar />
            <CitySlider />
            <ToggleView isGrid={isGrid} setIsGrid={setIsGrid} />
            <VenueList data={venues} isGrid={isGrid} />
            <LatestReview />
        </main >
    )
}

export default Venues