
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { base_url } from "@/server";
import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
export const EnquiryForm = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
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
        <div
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto backdrop-blur-lg"
            style={{
                backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h2 className="text-lg font-semibold mb-4 text-center">Enquiry Form</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={initialValue?.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={initialValue?.email}
                        onChange={handleChange}
                        className="w-1/2 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        name="mobile"
                        value={initialValue?.mobile}
                        onChange={handleChange}
                        className="w-1/2 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>
                <textarea
                    placeholder="Type your message..."
                    name="query"
                    value={initialValue?.query}
                    onChange={handleChange}
                    rows="3"
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
                <button
                    type="button"
                    className="w-full border py-2 rounded-lg hover:bg-white hover:text-black transition"
                    disabled={
                        !initialValue?.name ||
                        !initialValue?.email ||
                        !initialValue?.query ||
                        !initialValue?.mobile
                    }
                    onClick={submitData}
                >
                    Send
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};