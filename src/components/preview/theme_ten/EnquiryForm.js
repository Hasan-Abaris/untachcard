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
                    name="name" value={initialValue?.name} onChange={handleChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-2"
                        name="email" value={initialValue?.email} onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        className="w-full border rounded-lg px-4 py-2"
                        name="mobile" value={initialValue?.mobile} onChange={handleChange}
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    rows="4"
                    className="w-full border rounded-lg px-4 py-2"
                    name="query" value={initialValue?.query} onChange={handleChange}
                ></textarea>
                <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition" disabled={!initialValue?.name || !initialValue?.email || !initialValue?.query || !initialValue?.mobile} onClick={submitData}>
                    Send
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default EnquiryForm;
