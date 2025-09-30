"use client"
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiImage } from "react-icons/fi";

const tabs = [
  { label: "All Albums (194)" },
  { label: "Silver (70)" },
  { label: "Gold (89)" },
  { label: "Diamond (35)" },
];

const workData = [
  {
    title: "Lucknow ChicSplash",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/282192/1709892115_l1.jpg?crop=21,271,954,537",
    package: "Silver package | Shot in Lucknow",
    date: "Uploaded on 8 Mar 2024",
    count: 4,
  },
  {
    title: "Ludhiana Ki Beauty",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/281788/1709620687_g8.jpg?crop=143,59,954,537",
    package: "Gold package | Shot in Ludhiana",
    date: "Uploaded on 5 Mar 2024",
    count: 4,
  },
  {
    title: "Dilli Di Kudiyan",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/281786/1709620535_g6.jpg?crop=80,105,794,447",
    package: "Gold package | Shot in Delhi NCR",
    date: "Uploaded on 8 Mar 2024",
    count: 4,
  },
  {
    title: "Nupur's Dulhan Dazzle",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/281784/1709620209_nnn.JPG?crop=3,346,795,447",
    package: "Gold package | Shot in Delhi NCR",
    date: "Uploaded on 8 Mar 2024",
    count: 4,
  },
  {
    title: "Mayanka's FamilyGlam",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/279965/1708426480_s2.jpg?crop=57,50,954,537",
    package: "Silver package | Shot in Delhi NCR",
    date: "Uploaded on 8 Mar 2024",
    count: 6,
  },
  {
    title: "koyli's makeover",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/189535/1651210919_IMG_20220429_WA0014.jpg?crop=0,352,853,480",
    package: "Diamond package | Shot in Pune",
    date: "Uploaded on 29 Apr 2022",
    count: 3,
  },
  {
    title: "Bhavya's Look",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/189525/1651208852_IMG_20220429_WA0006.jpg?crop=0,245,958,539",
    package: "Diamond package | Shot in Noida",
    date: "Uploaded on 29 Apr 2022",
    count: 6,
  },
  {
    title: "Akansha's classy look",
    img: "https://image.wedmegood.com/resized/400X/uploads/project/189524/1651208565_IMG_20220414_WA0014.jpg?crop=0,107,958,539",
    package: "Diamond package | Shot in Delhi NCR",
    date: "Uploaded on 29 Apr 2022",
    count: 9,
  },
];

function LatestWork() {
  const [activeTab, setActiveTab] = useState("All Albums (194)");

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1240px]">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Our latest work</h2>

      {/* Tabs & Dropdown */}
      <div className="flex justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex gap-6 overflow-x-auto text-[15px]">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab.label)}
              className={`pb-2 whitespace-nowrap border-b-2 transition ${{
                true: "border-pink-500 text-pink-600 font-semibold",
                false: "border-transparent text-gray-600",
              }[activeTab === tab.label]}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dropdown */}
        <div className="relative">
          <select className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
            <option>All Cities</option>
            <option>Lucknow</option>
            <option>Ludhiana</option>
            <option>Delhi NCR</option>
            <option>Pune</option>
            <option>Noida</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workData.map((item, idx) => (
          <div key={idx} className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition cursor-pointer">
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />

            <div className="p-3 flex flex-col">
              {/* Title + Count */}
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm truncate max-w-[150px]">
                  {item.title}
                </p>
                <span className="flex items-center text-xs text-gray-500">
                  <FiImage className="mr-1" size={14} />
                  {item.count}
                </span>
              </div>

              {/* Package */}
              <p className="text-xs text-gray-500 mt-1">{item.package}</p>

              {/* Date */}
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded-md hover:bg-pink-50 transition">
          View More
        </button>
      </div>
    </div>
  );
}

export default LatestWork;