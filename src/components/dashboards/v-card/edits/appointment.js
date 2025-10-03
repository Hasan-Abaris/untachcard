import React, { useState } from 'react';

const daysOfWeek = [
  'MONDAY', 'TUESDAY', 'WEDNESDAY', 
  'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'
];

function Appointment() {
  const [appointments, setAppointments] = useState(
    daysOfWeek.map(day => ({
      day,
      selected: false,
      startTime: '12:00 AM',
      endTime: '12:15 AM'
    }))
  );

  const [appointmentType, setAppointmentType] = useState('Free');

  const handleDayChange = index => {
    const newAppointments = [...appointments];
    newAppointments[index].selected = !newAppointments[index].selected;
    setAppointments(newAppointments);
  };

  const handleTimeChange = (index, field, value) => {
    const newAppointments = [...appointments];
    newAppointments[index][field] = value;
    setAppointments(newAppointments);
  };

  const handleSave = () => {
    console.log('Saved appointments:', appointments, 'Type:', appointmentType);
    alert('Appointments saved!');
  };

  const handleDiscard = () => {
    setAppointments(daysOfWeek.map(day => ({
      day,
      selected: false,
      startTime: '12:00 AM',
      endTime: '12:15 AM'
    })));
    setAppointmentType('Free');
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment Scheduler</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-gray-600">Day</th>
              <th className="px-4 py-2 text-gray-600">Start Time</th>
              <th className="px-4 py-2 text-gray-600">End Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={appt.day} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <label className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={appt.selected}
                      onChange={() => handleDayChange(index)}
                      className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    {appt.day}
                  </label>
                </td>
                <td className="px-4 py-2">
                  <input
                    type="time"
                    value={appt.startTime}
                    onChange={e => handleTimeChange(index, 'startTime', e.target.value)}
                    disabled={!appt.selected}
                    className="w-full p-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="time"
                    value={appt.endTime}
                    onChange={e => handleTimeChange(index, 'endTime', e.target.value)}
                    disabled={!appt.selected}
                    className="w-full p-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <strong className="text-gray-700">Appointment Type:</strong>
        <div className="flex space-x-6 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="Free"
              checked={appointmentType === 'Free'}
              onChange={e => setAppointmentType(e.target.value)}
              className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            Free
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Paid"
              checked={appointmentType === 'Paid'}
              onChange={e => setAppointmentType(e.target.value)}
              className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            Paid
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save
        </button>
        <button
          onClick={handleDiscard}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Discard
        </button>
      </div>
    </div>
  );
}

export default Appointment;