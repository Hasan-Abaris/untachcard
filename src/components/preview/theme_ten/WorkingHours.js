
import React from "react";

const WorkingHours = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm">
                <li><b>Monday:</b> 08:00 AM to 05:00 PM</li>
                <li><b>Tuesday:</b> 08:00 AM to 05:00 PM</li>
                <li><b>Wednesday:</b> 08:00 AM to 05:00 PM</li>
                <li><b>Thursday:</b> 08:00 AM to 05:00 PM</li>
                <li><b>Friday:</b> 08:00 AM to 05:00 PM</li>
                <li><b>Saturday and Sunday:</b> Closed</li>
            </ul>
        </div>
    );
};

export default WorkingHours;
