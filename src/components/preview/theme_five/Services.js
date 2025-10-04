import React from 'react';

function Services() {
  return (
    <div className=" flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-black rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-white">Services</h4>
        </div>
        <div className="w-full">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr className=" text-white">
                <td className="border border-gray-300 p-3 text-center">Service 1</td>
                <td className="border border-gray-300 p-3 text-center">Description 1</td>
                <td className="border border-gray-300 p-3 text-center">Price</td>
                <td className="border border-gray-300 p-3 text-center">Availability</td>
              </tr>
              <tr  className=" text-white">
                <td className="border border-gray-300 p-3 text-center">Service 2</td>
                <td className="border border-gray-300 p-3 text-center">Description 2</td>
                <td className="border border-gray-300 p-3 text-center">Price</td>
                <td className="border border-gray-300 p-3 text-center">Availability</td>
              </tr>
              <tr  className=" text-white">
                <td className="border border-gray-300 p-3 text-center">Service 3</td>
                <td className="border border-gray-300 p-3 text-center">Description 3</td>
                <td className="border border-gray-300 p-3 text-center">Price</td>
                <td className="border border-gray-300 p-3 text-center">Availability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Services;