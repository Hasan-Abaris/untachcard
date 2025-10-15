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
            className="rounded-xl shadow-lg p-6 max-w-lg mx-auto"
            style={{
                backgroundImage: "url('/assets/banner/theme-ten.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // background: cardBg,
                color: fontColor,
                fontFamily: cardFont,
            }}
        >
            <h3 className="font-bold text-lg mb-4 text-center">Enquiry Form</h3>

            <form
                className="space-y-4 rounded-xl p-4"
                style={{
                    background: cardBg || "rgba(255,255,255,0.7)",
                    color: fontColor || "#000",
                    fontFamily: cardFont || "inherit",
                }}
            >
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={initialValue.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                // style={{
                //     color: fontColor,
                //     fontFamily: cardFont,
                //     background: "transparent",
                //     borderColor: fontColor ? `${fontColor}33` : "#ccc",
                // }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={initialValue.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    // style={{
                    //     color: fontColor,
                    //     fontFamily: cardFont,
                    //     background: "transparent",
                    //     borderColor: fontColor ? `${fontColor}33` : "#ccc",
                    // }}
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        name="mobile"
                        value={initialValue.mobile}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    // style={{
                    //     color: fontColor,
                    //     fontFamily: cardFont,
                    //     background: "transparent",
                    //     borderColor: fontColor ? `${fontColor}33` : "#ccc",
                    // }}
                    />
                </div>

                <textarea
                    placeholder="Type your message"
                    name="query"
                    rows="4"
                    value={initialValue.query}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                // style={{
                //     color: fontColor,
                //     fontFamily: cardFont,
                //     background: "transparent",
                //     borderColor: fontColor ? `${fontColor}33` : "#ccc",
                // }}
                ></textarea>

                <button
                    type="button"
                    onClick={submitData}
                    disabled={!initialValue.name || !initialValue.email || !initialValue.query || !initialValue.mobile}
                    className="w-full mt-2 rounded-lg px-6 py-2 font-semibold transition"
                // style={{
                //     background: fontColor || "#007bff",
                //     color: fontColor || "#fff",
                //     opacity: (!initialValue.name || !initialValue.email || !initialValue.query || !initialValue.mobile) ? 0.6 : 1,
                // }}
                >
                    Send
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default EnquiryForm;
