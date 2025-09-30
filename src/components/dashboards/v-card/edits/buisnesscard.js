"use client";
import React, { useState } from "react";

const daysOfWeek = [
  { id: 1, name: "MONDAY" },
  { id: 2, name: "TUESDAY" },
  { id: 3, name: "WEDNESDAY" },
  { id: 4, name: "THURSDAY" },
  { id: 5, name: "FRIDAY" },
  { id: 6, name: "SATURDAY" },
  { id: 7, name: "SUNDAY" },
];

const generateTimeOptions = () => {
  const times = [];
  const periods = ["AM", "PM"];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      let hour = h % 12 || 12;
      let minute = m === 0 ? "00" : m;
      let period = periods[h < 12 ? 0 : 1];
      times.push(`${hour}:${minute} ${period}`);
    }
  }
  return times;
};

const timeOptions = generateTimeOptions();

function Businesscard() {
  const [hours, setHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day.id] = {
        enabled: false,
        start: "9:00 AM",
        end: "5:00 PM",
      };
      return acc;
    }, {})
  );

  const toggleDay = (dayId) => {
    setHours({
      ...hours,
      [dayId]: { ...hours[dayId], enabled: !hours[dayId].enabled },
    });
  };

  const updateTime = (dayId, field, value) => {
    setHours({
      ...hours,
      [dayId]: { ...hours[dayId], [field]: value },
    });
  };

  const handleSave = () => {
    console.log("Business Hours Saved:", hours);
    alert("Business hours saved successfully!");
  };

  return (
    <div className="container mx-auto mt-6 p-4 bg-white rounded-lg shadow-lg max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Business Hours Setup</h2>
      {daysOfWeek.map((day) => (
        <div key={day.id} className="flex items-center mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center w-1/3">
            <input
              type="checkbox"
              id={`dayToggle${day.id}`}
              checked={hours[day.id].enabled}
              onChange={() => toggleDay(day.id)}
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`dayToggle${day.id}`} className="text-lg font-semibold text-gray-700">
              {day.name}
            </label>
          </div>
          <div className="flex-grow">
            {hours[day.id].enabled ? (
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600">From</label>
                  <select
                    value={hours[day.id].start}
                    onChange={(e) => updateTime(day.id, "start", e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {timeOptions.map((time, idx) => (
                      <option key={idx} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600">To</label>
                  <select
                    value={hours[day.id].end}
                    onChange={(e) => updateTime(day.id, "end", e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {timeOptions.map((time, idx) => (
                      <option key={idx} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Closed
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
        <a
          href="https://vcards.infyom.com/admin/vcards"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
        >
          Discard
        </a>
      </div>
    </div>
  );
}

export default Businesscard;