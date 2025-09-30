
"use client";
import React, { useState, useRef, useEffect } from "react";

const AdharModalOtp = ({ isOpen, onClose, onSubmit }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        setOtp("123456".split("")); // default OTP autofill
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const getOtpValue = () => otp.join("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-[#f9fafe] rounded-2xl shadow-xl w-full max-w-md p-6 relative">
                <h2 className="text-2xl font-bold text-center text-indigo-900">
                    OTP Verification
                </h2>
                {/* <p className="text-center text-gray-500 mt-2">
                    Default OTP : <span className="font-semibold">123456</span>
                </p> */}
                <p className="text-center text-gray-600 text-sm">
                    An OTP has been sent to the mobile number linked with your Aadhaar
                </p>

                <div className="flex justify-center gap-3 mt-6">
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            ref={(el) => (inputRefs.current[i] = el)}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            maxLength="1"
                            className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg text-lg font-semibold bg-white text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                    ))}
                </div>

                <button
                    onClick={() => onSubmit(getOtpValue())}
                    className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    Submit OTP
                </button>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default AdharModalOtp