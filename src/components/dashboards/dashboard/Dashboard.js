"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const monthlyData = [
    { name: "Jan", vcards: 0, stores: 0 },
    { name: "Feb", vcards: 2, stores: 1 },
    { name: "Mar", vcards: 5, stores: 2 },
    { name: "Apr", vcards: 8, stores: 3 },
    { name: "May", vcards: 12, stores: 4 },
    { name: "Jun", vcards: 15, stores: 6 },
    { name: "Jul", vcards: 18, stores: 7 },
    { name: "Aug", vcards: 25, stores: 8 },
    { name: "Sep", vcards: 32, stores: 9 },
    { name: "Oct", vcards: 28, stores: 10 },
    { name: "Nov", vcards: 30, stores: 11 },
    { name: "Dec", vcards: 33, stores: 11 },
  ];

  const platformData = [
    { name: "AndroidOS", value: 40, color: "#3B82F6" },
    { name: "Windows", value: 25, color: "#F97316" },
    { name: "OS X", value: 20, color: "#44403C" },
    { name: "iOS", value: 10, color: "#10B981" },
    { name: "Others", value: 5, color: "#EF4444" },
  ];

  // Devices - Exact from your SVG
  const deviceData = [
    { name: "WebKit", value: 1733, color: "#4263eb" },
    { name: "Macintosh", value: 253, color: "#f76707" },
    { name: "iPhone", value: 73, color: "#330902" },
    { name: "Others", value: 42, color: "#1092a3" },
    { name: "Nexus", value: 14, color: "#ed023d" },
  ];

  const weeklyAudience = [
    { day: "Monday", vcards: 0, stores: 0 },
    { day: "Tuesday", vcards: 35, stores: 5 },
    { day: "Wednesday", vcards: 38, stores: 45 },
    { day: "Thursday", vcards: 25, stores: 10 },
    { day: "Friday", vcards: 55, stores: 40 },
    { day: "Saturday", vcards: 0, stores: 0 },
    { day: "Sunday", vcards: 0, stores: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8 mt-25">
        <p className="text-sm text-gray-500">OVERVIEW</p>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-100 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium">CURRENT PLAN</p>
          <h2 className="text-2xl font-bold text-blue-700 mt-2">PROFESSIONAL</h2>
          <button className="text-blue-600 text-sm mt-4 hover:underline">Show details →</button>
        </div>
        <div className="bg-green-100 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium">BUSINESS CARDS</p>
          <h2 className="text-4xl font-bold text-green-700 mt-2">35</h2>
          <button className="text-green-600 text-sm mt-4 hover:underline">Show details →</button>
        </div>
        <div className="bg-orange-100 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium">STORES</p>
          <h2 className="text-4xl font-bold text-orange-700 mt-2">12</h2>
          <button className="text-orange-600 text-sm mt-4 hover:underline">Show details →</button>
        </div>
        <div className="bg-purple-100 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 font-medium">REMAINING DAYS</p>
          <h2 className="text-4xl font-bold text-purple-700 mt-2">741</h2>
          <button className="text-purple-600 text-sm mt-4 hover:underline">Show details →</button>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Monthly Overview */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-4">OVERVIEW</h3>
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fill: "#9CA3AF" }} />
              <YAxis tick={{ fill: "#9CA3AF" }} />
              <Tooltip />
              <Bar dataKey="vcards" fill="#FB923C" radius={[8, 8, 0, 0]} barSize={16} />
              <Bar dataKey="stores" fill="#10B981" radius={[8, 8, 0, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-400 rounded"></div>
              <span className="text-2xl font-bold text-gray-800">33</span>
              <span className="text-sm text-gray-600">vCards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-2xl font-bold text-gray-800">11</span>
              <span className="text-sm text-gray-600">Stores</span>
            </div>
          </div>
        </div>

        {/* Right Column: Platforms + Devices (stacked vertically) */}
        <div className="space-y-8">
          {/* Platforms */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-6">PLATFORMS</h3>
            <div className="flex flex-col items-center">
              <ResponsiveContainer width={220} height={220}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 space-y-3 w-full">
                {platformData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Devices - EXACT FROM YOUR SVG */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-6">Devices</h3>
            <div className="flex flex-col items-center">
              <ResponsiveContainer width={220} height={220}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`device-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="mt-6 space-y-3 w-full">
                {deviceData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This Week's Audience */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-sm font-medium text-gray-500 mb-4">This week's audience of cards</h3>
        <ResponsiveContainer width="100%" height={355}>
          <AreaChart data={weeklyAudience}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
            <XAxis dataKey="day" tick={{ fill: "#373d3f", fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fill: "#373d3f", fontSize: 11 }} tickLine={false} axisLine={false} domain={[0, 60]} />
            <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #ddd" }} />
            <Area type="monotone" dataKey="vcards" stroke="#4263eb" strokeWidth={2} fill="rgba(66,99,235,0.16)" dot={false} />
            <Area type="monotone" dataKey="stores" stroke="#f76707" strokeWidth={2} fill="rgba(247,103,7,0.16)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;