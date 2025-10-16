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
        <div className="rounded-lg p-4 shadow-md max-w-md mx-auto"
            style={{
                background: cardBg || "#000",
                color: fontColor || "#fff",
            }}
        >
            <h3 className="font-semibold mb-3" style={{ color: fontColor || "#fff" }}>Enquiry Form</h3>
            <form className="space-y-3">
                <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded bg-transparent" name="name" value={initialValue?.name} onChange={handleChange} />
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded bg-transparent" name="email" value={initialValue?.email} onChange={handleChange} />
                <input type="number" placeholder="Mobile" className="w-full px-3 py-2 border rounded bg-transparent" name="mobile" value={initialValue?.mobile} onChange={handleChange} />
                <textarea placeholder="Type your message" className="w-full px-3 py-2 border rounded bg-transparent" name="query" value={initialValue?.query} onChange={handleChange}></textarea>
                <button type="button" className="px-4 py-2 border rounded-md" disabled={!initialValue?.name || !initialValue?.email || !initialValue?.query || !initialValue?.mobile} onClick={submitData}>Send</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default EnquiryForm;
