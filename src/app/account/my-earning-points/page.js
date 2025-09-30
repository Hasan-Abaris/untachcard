"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const myEarningPoints = () => {
  // Static example data
  const pointsHistory = [
    { id: 1, date: "15 Sep 2025", action: "Booked Wedding Venue", points: 500 },
    { id: 2, date: "10 Sep 2025", action: "Reviewed Vendor", points: 100 },
    { id: 3, date: "02 Sep 2025", action: "Referred a Friend", points: 300 },
    { id: 4, date: "25 Aug 2025", action: "Booked Photographer", points: 250 },
    { id: 5, date: "18 Aug 2025", action: "Signed Up", points: 50 },
  ];

  const totalPoints = pointsHistory.reduce(
    (sum, item) => sum + item.points,
    0
  );

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10 mt-20">
        <h1 className="text-2xl font-bold mb-6">My Earning Points</h1>

        {/* Points Summary */}
        <div className="bg-pink-100 rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Points</h2>
          <p className="text-3xl font-bold text-pink-600">{totalPoints}</p>
          <p className="text-gray-600 mt-2">
            Redeem your points for exciting rewards and discounts on bookings.
          </p>
        </div>

        {/* Points History */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-semibold">Date</th>
                <th className="text-left p-3 font-semibold">Action</th>
                <th className="text-left p-3 font-semibold">Points</th>
              </tr>
            </thead>
            <tbody>
              {pointsHistory.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.action}</td>
                  <td className="p-3 font-bold text-pink-600">
                    +{item.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default myEarningPoints;
