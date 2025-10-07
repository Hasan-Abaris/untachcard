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
    })
    const handleChange = async (e) => {
        const clone = { ...initialValue }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValue(clone)
    }

    const submitData = async () => {
        // console.log('dfgdf');

        const clone = { ...initialValue, cardId: data?._id }
        try {
            const res = await axios.post(`${base_url}card-inquiry/inquiry`, clone);
            // console.log(res?.data);
            if (res?.data?.success) {
                toastSuccessMessage("Your inquiry has been submitted successfully. We’ll get back to you soon!")
                setInitialValue({
                    name: "",
                    email: "",
                    mobile: "",
                    query: "",
                    cardId: ""
                })
            } else {
                toastSuccessMessageError(res?.data?.msg)
            }

        } catch (error) {
            toastSuccessMessageError(error?.message)
        }

    }
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Enquiry Form</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                    name="name" value={initialValue?.name} onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                        name="email" value={initialValue?.email} onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        autoComplete="off"
                        className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                        name="mobile" value={initialValue?.mobile} onChange={handleChange}
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    rows="4"
                    className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none"
                    name="query" value={initialValue?.query} onChange={handleChange}
                ></textarea>
                <button
                    type="button"
                    className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300"
                    disabled={!initialValue?.name || !initialValue?.email || !initialValue?.query || !initialValue?.mobile} onClick={submitData}
                >
                    Send
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default EnquiryForm;
