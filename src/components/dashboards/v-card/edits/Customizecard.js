"use client";
import React, { useState } from "react";

function Customizecard() {
  const [qrCodeColor, setQrCodeColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [style, setStyle] = useState("round");
  const [eyeStyle, setEyeStyle] = useState("circle");
  const [useConfig, setUseConfig] = useState(false);

  return (
    <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg max-w-md">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="qrCodeColor" className="form-label text-gray-700">QR-Code Color:</label>
          <input
            type="color"
            className="form-control form-control-color w-100 mb-3"
            id="qrCodeColor"
            value={qrCodeColor}
            onChange={(e) => setQrCodeColor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="backgroundColor" className="form-label text-gray-700">Background Color:</label>
          <input
            type="color"
            className="form-control form-control-color w-100 mb-3"
            id="backgroundColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="style" className="form-label text-gray-700">Select Style</label>
          <select
            className="form-control form-select w-100"
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="square">square</option>
            <option value="dot">dot</option>
            <option value="round">round</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="eyeStyle" className="form-label text-gray-700">Select Eye Style</label>
          <select
            className="form-control form-select w-100"
            id="eyeStyle"
            value={eyeStyle}
            onChange={(e) => setEyeStyle(e.target.value)}
          >
            <option value="square">square</option>
            <option value="circle">circle</option>
          </select>
        </div>
        <div className="form-check form-switch mb-4">
          <input
            type="checkbox"
            className="form-check-input me-3"
            id="useConfig"
            checked={useConfig}
            onChange={(e) => setUseConfig(e.target.checked)}
          />
          <label className="form-label text-gray-700" htmlFor="useConfig">Use This Configuration</label>
        </div>
        <div className="col-lg-12 d-flex">
          <button
            type="submit"
            className="btn btn-primary me-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
          <a
            href="https://vcards.infyom.com/admin/vcards"
            className="btn btn-secondary px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Discard
          </a>
        </div>
      </div>
    </div>
  );
}

export default Customizecard;