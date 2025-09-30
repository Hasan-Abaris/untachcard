"use client"

export default function ToggleView({ isGrid, setIsGrid }) {
    return (
        <div className="flex justify-end mt-2 mb-4 space-x-4 text-sm">
            <button
                onClick={() => setIsGrid(false)}
                className={`flex items-center gap-1 ${!isGrid ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}
            >
                <span>☰</span> List
            </button>
            <button
                onClick={() => setIsGrid(true)}
                className={`flex items-center gap-1 ${isGrid ? 'text-pink-600 font-semibold' : 'text-gray-500'}`}
            >
                <span>☷</span> Grid
            </button>
        </div>
    );
}
