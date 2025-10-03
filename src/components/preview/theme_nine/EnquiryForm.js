
import React from "react";

const EnquiryForm = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
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
                        className="border rounded-lg px-4 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Mobile"
                        className="border rounded-lg px-4 py-2"
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    className="w-full border rounded-lg px-4 py-2"
                    rows="4"
                ></textarea>
                <button className="border px-6 py-2 rounded-lg hover:bg-black hover:text-white">
                    Send
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
