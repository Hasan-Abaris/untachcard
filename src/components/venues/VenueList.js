import VenueCard from "./VenueCard";

export default function VenueList({ data, isGrid }) {
    return (
        <div className={`grid ${isGrid ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
            {data.map((item, index) => (
                <VenueCard key={index} data={item} isGrid={isGrid} />
            ))}
        </div>
    );
}
