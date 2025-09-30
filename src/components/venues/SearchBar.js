
export default function SearchBar() {
    return (
        <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
            <div>
                <h1 className="text-2xl font-bold">Wedding Venues</h1>
                <p className="text-gray-600">
                    Showing <strong>38105 results</strong> as per your search criteria
                </p>
            </div>
            <input
                type="text"
                placeholder="Search Wedding Venues..."
                className="w-full sm:w-80 px-4 py-2 border rounded-lg shadow-sm focus:outline-pink-500"
            />
        </div>
    );
}
