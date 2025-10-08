"use client";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { base_url } from "@/server";
import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const EnquiryForm = ({ data }) => {
    const [initialValue, setInitialValue] = useState({
        name: "",
        email: "",
        mobile: "",
        query: "",
        cardId: ""
    });

    const handleChange = (e) => {
        const clone = { ...initialValue };
        const value = e.target.value;
        const name = e.target.name;
        clone[name] = value;
        setInitialValue(clone);
    };

    const submitData = async () => {
        const clone = { ...initialValue, cardId: data?._id };
        try {
            const res = await axios.post(`${base_url}card-inquiry/inquiry`, clone);
            if (res?.data?.success) {
                toastSuccessMessage("Your inquiry has been submitted successfully. We’ll get back to you soon!");
                setInitialValue({
                    name: "",
                    email: "",
                    mobile: "",
                    query: "",
                    cardId: ""
                });
            } else {
                toastSuccessMessageError(res?.data?.msg);
            }
        } catch (error) {
            toastSuccessMessageError(error?.message);
        }
    };

    return (
        <div className="flex justify-center p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full hover:shadow-2xl transition relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 opacity-30 -z-10 rounded-2xl"></div>

                <h3 className="font-bold text-2xl mb-6 text-center text-gray-800">Enquiry Form</h3>

                <form className="space-y-5">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        name="name"
                        value={initialValue?.name}
                        onChange={handleChange}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            name="email"
                            value={initialValue?.email}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder="Mobile"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            name="mobile"
                            value={initialValue?.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        placeholder="Type your message"
                        rows="4"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
                        name="query"
                        value={initialValue?.query}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!initialValue?.name || !initialValue?.email || !initialValue?.query || !initialValue?.mobile}
                        onClick={submitData}
                    >
                        Send Enquiry
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EnquiryForm;
