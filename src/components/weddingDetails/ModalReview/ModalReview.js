
"use client";
import { useEffect } from "react";

export default function UploadModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative bg-white rounded-lg w-full max-w-lg mx-4 shadow-lg">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                <div className="p-8">
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
                        {/* Upload icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mx-auto text-gray-400 mb-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-4 4m4-4l4 4"
                            />
                        </svg>
                        <p className="text-sm text-gray-600">Max file size: 16 MB</p>
                        <p className="text-sm text-gray-600">
                            Accepted: <span className="font-medium">jpg, jpeg, png</span>
                        </p>
                        <p className="text-sm text-gray-600 mb-4">Max files: 5</p>
                        <label className="inline-block">
                            <input type="file" multiple className="hidden" />
                            <span className="cursor-pointer inline-block px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
                                Choose Files
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
