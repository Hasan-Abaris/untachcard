
import React from "react";

const WorkingHours = () => {
    return (
        <div className="bg-black text-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-6">
            <h2 className="text-center font-semibold text-lg mb-4">Working Hours</h2>
            <ul className="space-y-2">
                <li><span className="font-semibold text-yellow-400">Monday:</span> 08:00 AM to 05:00 PM</li>
                <li><span className="font-semibold text-yellow-400">Tuesday:</span> 08:00 AM to 05:00 PM</li>
                <li><span className="font-semibold text-yellow-400">Wednesday:</span> 08:00 AM to 05:00 PM</li>
                <li><span className="font-semibold text-yellow-400">Thursday:</span> 08:00 AM to 05:00 PM</li>
                <li><span className="font-semibold text-yellow-400">Friday:</span> 08:00 AM to 05:00 PM</li>
                <li><span className="font-semibold text-yellow-400">Saturday and Sunday:</span> Closed</li>
            </ul>
        </div>
    );
};

export default WorkingHours;
