"use client";

import React from "react";
import Select from "react-select";

const citiesOptions = [
  { value: "all", label: "All Cities" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "delhi", label: "Delhi" },
  // add more cities here
];

const culturesOptions = [
  { value: "all", label: "All Cultures" },
  { value: "indian", label: "Indian" },
  { value: "western", label: "Western" },
  // add more cultures
];

const themesOptions = [
  { value: "all", label: "All Themes" },
  { value: "traditional", label: "Traditional" },
  { value: "modern", label: "Modern" },
  // add more themes
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "45px",
    borderRadius: "0.5rem",
    padding: "0 0.5rem",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 0.25rem",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "45px",
  }),
};

const FiltersSection = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-3 md:gap-6 py-4 bg-white shadow-md">
      {/* City Filter */}
      <div className="w-40 md:w-52">
        <Select
          options={citiesOptions}
          defaultValue={citiesOptions[0]}
          styles={customStyles}
          isClearable
        />
      </div>

      {/* Culture Filter */}
      <div className="w-40 md:w-52">
        <Select
          options={culturesOptions}
          defaultValue={culturesOptions[0]}
          styles={customStyles}
          isClearable
        />
      </div>

      {/* Theme Filter */}
      <div className="w-40 md:w-52">
        <Select
          options={themesOptions}
          defaultValue={themesOptions[0]}
          styles={customStyles}
          isClearable
        />
      </div>

      {/* Search Box */}
      <div className="w-full md:w-64">
        <input
          type="text"
          placeholder="Search by vendors, bride/groom"
          className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
    </div>
  );
};

export default FiltersSection;
