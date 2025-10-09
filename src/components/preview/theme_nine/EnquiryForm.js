import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { base_url } from "@/server";
import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const EnquiryForm = ({ data, themeBg, cardBg, fontColor, cardFont }) => {
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
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto text-center"
            style={{
                background:
                    data?.card_bg_type === "Image" && dataDetails?.card_bg
                        ? `url(${data.card_bg}) center/cover no-repeat`
                        : cardBg,
                color: fontColor,
                fontFamily: cardFont
            }}
        >
            <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded-lg px-4 py-2"
                    name="name"
                    value={initialValue?.name}
                    onChange={handleChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-lg px-4 py-2"
                        name="email"
                        value={initialValue?.email}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        className="border rounded-lg px-4 py-2"
                        name="mobile"
                        value={initialValue?.mobile}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    className="w-full border rounded-lg px-4 py-2"
                    rows="4"
                    name="query"
                    value={initialValue?.query}
                    onChange={handleChange}
                ></textarea>
                <button
                    className="border px-6 py-2 rounded-lg hover:bg-black hover:text-white"
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

export default EnquiryForm;
