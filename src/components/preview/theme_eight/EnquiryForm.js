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
            className="rounded-2xl shadow-lg p-6 max-w-md mx-auto"
            style={{ background: themeBg, color: fontColor, fontFamily: cardFont }}
        >
            <h2 className="text-center font-semibold text-lg mb-4" style={{ color: fontColor }}>
                {data?.section_title || "Enquiry Form"}
            </h2>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    value={initialValue?.name}
                    onChange={handleChange}

                    className="w-full px-4 py-2 rounded border focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        name="email"
                        value={initialValue?.email}
                        onChange={handleChange}

                        className="px-4 py-2 rounded border focus:outline-none"
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        autoComplete="off"
                        name="mobile"
                        value={initialValue?.mobile}
                        onChange={handleChange}

                        className="px-4 py-2 rounded border focus:outline-none"
                    />
                </div>
                <textarea
                    placeholder="Type your message"
                    rows="4"
                    name="query"
                    value={initialValue?.query}
                    onChange={handleChange}

                    className="w-full px-4 py-2 rounded border focus:outline-none"
                ></textarea>
                <button
                    type="button"
                    disabled={!initialValue?.name || !initialValue?.email || !initialValue?.query || !initialValue?.mobile}
                    onClick={submitData}
                    // style={{ background: fontColor, color: cardBg, fontFamily: cardFont }}
                    className="px-6 py-2 rounded hover:opacity-90"
                >
                    Send
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default EnquiryForm;
