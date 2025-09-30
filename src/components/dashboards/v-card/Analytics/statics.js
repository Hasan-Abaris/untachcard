"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const labels = [
    "27-08-25","28-08-25","29-08-25","30-08-25","31-08-25","01-09-25",
    "02-09-25","03-09-25","04-09-25","05-09-25","06-09-25","07-09-25",
    "08-09-25","09-09-25","10-09-25","11-09-25","12-09-25","13-09-25",
    "14-09-25","15-09-25","16-09-25","17-09-25","18-09-25","19-09-25",
    "20-09-25","21-09-25","22-09-25","23-09-25","24-09-25","25-09-25","26-09-25"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Visitors",
        data: labels.map((date, index) => (index >= 28 ? 3 : 0)), // last 2 days have 3 visitors
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#3B82F6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "vCard Analytics",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">vCard Analytics</h1>
        <button className="border border-indigo-300 text-indigo-500 px-4 py-2 rounded hover:bg-indigo-50">
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="card-body pt-0">
          <div className="chart-container">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
