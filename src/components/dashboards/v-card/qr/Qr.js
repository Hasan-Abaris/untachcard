
"use client";
import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const Qr = () => {
    const [qrType, setQrType] = useState("Text");
    const [text, setText] = useState("fg");
    const [fgColor, setFgColor] = useState("#9b3939");
    const [bgColor, setBgColor] = useState("#d18686");
    const [cornerRadius, setCornerRadius] = useState(20);
    const [textColor, setTextColor] = useState("#2b3b4f");
    const [size, setSize] = useState(300);
    const qrRef = useRef(null);
    const qrCode = useRef(null);

    useEffect(() => {
        qrCode.current = new QRCodeStyling({
            width: size,
            height: size,
            data: text,
            image: "",
            dotsOptions: {
                color: fgColor,
                type: "rounded"
            },
            backgroundOptions: {
                color: bgColor
            },
            cornersSquareOptions: {
                type: "extra-rounded"
            },
            qrOptions: {
                errorCorrectionLevel: "H"
            }
        });
        qrCode.current.append(qrRef.current);
    }, []);

    // Update QR when any value changes
    useEffect(() => {
        qrCode.current.update({
            width: size,
            height: size,
            data: text,
            dotsOptions: { color: fgColor },
            backgroundOptions: { color: bgColor },
            imageOptions: { hideBackgroundDots: false },
        });
    }, [text, fgColor, bgColor, size]);

    const downloadQR = () => {
        qrCode.current.download({ name: "MyQRCode", extension: "png" });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            < div className=" mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">QR Code</h1>

            </div>
            <div className="flex flex-col md:flex-row gap-10">
                {/* LEFT SIDE - Settings */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2">Foreground Color</label>
                        <input
                            type="color"
                            value={fgColor}
                            onChange={(e) => setFgColor(e.target.value)}
                            className="w-full h-10 cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Background Color</label>
                        <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="w-full h-10 cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Corner Radius</label>
                        <input
                            type="range"
                            min="0"
                            max="50"
                            value={cornerRadius}
                            onChange={(e) => setCornerRadius(e.target.value)}
                            className="w-full accent-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">QR Type</label>
                        <select
                            value={qrType}
                            onChange={(e) => setQrType(e.target.value)}
                            className="w-full border rounded-md p-2"
                        >
                            <option>Text</option>
                            <option>URL</option>
                            <option>Email</option>
                            <option>Phone</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Text</label>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full border rounded-md p-2"
                            placeholder="Enter your text or URL"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Text Color</label>
                        <input
                            type="color"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            className="w-full h-10 cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Size</label>
                        <input
                            type="range"
                            min="100"
                            max="400"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-full accent-blue-600"
                        />
                    </div>

                    <button
                        onClick={downloadQR}
                        className="bg-pink-600 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition-all"
                    >
                        Download My QR Code
                    </button>
                </div>

                {/* RIGHT SIDE - Preview */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <div ref={qrRef} />
                </div>
            </div>
        </div>
    );
};

export default Qr;
