
import React from "react";

const EnquiryForm = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4 text-center">Enquiry Form</h3>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded-lg px-4 py-2"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Mobile"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    rows="4"
                    className="w-full border rounded-lg px-4 py-2"
                ></textarea>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                    Send
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
