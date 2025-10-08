"use client";
import { base_url } from "@/server";
import axios from "axios";
import React, { useEffect, useState } from "react";

const InquiriesDetails = ({ isOpen, onClose, detailsId }) => {
    if (!isOpen) return null;

    const [detailsData, setDetailsData] = useState(null)
    // console.log(detailsData);

    const getByIdData = async (id) => {
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`${base_url}card-inquiry/public/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDetailsData(res?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        if (detailsId?._id) {
            getByIdData(detailsId?._id)
        }
    }, [detailsId])

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">Inquiry Details</h2>
                <hr className="my-4" />

                {/* Inquiry Info */}
                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                    <p>
                        <span className="font-semibold">vCard Name : {detailsData?.cardId?.title}</span>{" "}
                    </p>
                    <p>
                        <span className="font-semibold">Name: {detailsData?.name}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Email: {detailsData?.email}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Phone: {detailsData?.mobile}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Message: {detailsData?.query}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InquiriesDetails;
