import React from "react";

const WorkingHours = () => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-center text-lg font-bold">Working Hours</h2>
            <ul className="mt-3 space-y-1">
                <li><strong>Monday:</strong> 08:00 AM to 05:00 PM</li>
                <li><strong>Tuesday:</strong> 08:00 AM to 05:00 PM</li>
                <li><strong>Wednesday:</strong> 08:00 AM to 05:00 PM</li>
                <li><strong>Thursday:</strong> 08:00 AM to 05:00 PM</li>
                <li><strong>Friday:</strong> 08:00 AM to 05:00 PM</li>
                <li><strong>Saturday and Sunday:</strong> Closed</li>
            </ul>
        </div>
    );
};

export default WorkingHours