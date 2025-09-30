
import { useEffect, useState } from "react"

import AdharModalOtp from "./adharModalOtp/AdharModalOtp";


const IdentityVerification = ({ nextStep, getVarifyallData, allData }) => {
    console.log(allData);

    //pan
    const [panData, setPanData] = useState(null)
    const [initialPan, setInitialPan] = useState({
        pan: '',
        user_id: ''
    })
    const onchnagePan = (e) => {
        const clone = { ...initialPan }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialPan(clone)
    }

    // const
    const VerifyPan = async () => {
        // const clone = { ...initialPan, user_id: window.localStorage.getItem("userToken") }
        // try {
        //     const res = await panNumberVarify(clone)
        //     if (res?.data?.error == false) {
        //         toastSuccessMessage(res?.data?.message)
        //         // setPanData(res?.data?.data)
        //         getVarifyallData()

        //     } else {
        //         toastSuccessMessageError(res?.data?.message)
        //     }
        // } catch (error) {

        // }
    }

    useEffect(() => {
        if (allData?.is_pan_verified == true) {
            setInitialPan({
                pan: allData?.pan_number || "",
                user_id: typeof window !== "undefined" ? window.localStorage.getItem("userToken") : ""
            })
        }
    }, [allData])

    //pan

    //adhar

    const [open, setOpen] = useState(false)
    const [initialAdhar, setInitialAdhar] = useState({
        adhaarNumber: '',
        user_id: ''
    })

    const onchnageAdhar = (e) => {
        const { name, value } = e.target;
        if (/^\d{0,12}$/.test(value)) {
            setInitialAdhar({
                ...initialAdhar,
                [name]: value
            });
        }
    };

    const adharGenerateOtpSub = async () => {
        // // setloader2(true);
        // if (!/^\d{12}$/.test(initialAdhar.adhaarNumber)) {
        //     toastSuccessMessageError("Please enter a valid 12-digit Aadhaar number");
        //     return;
        // }
        // const clone = {
        //     ...initialAdhar,
        //     user_id: window.localStorage.getItem("userToken"),
        // }
        // try {
        //     const res = await adharGenerateOtp(clone);
        //     // setloader2(false);
        //     if (res?.data?.statusCode == 200) {
        //         window.localStorage.setItem("ref_id", res.data.data.ref_id);
        //         toastSuccessMessage("Aadhaar OTP sent successfully");
        //         // setTimeout(() => {
        //         //     setadharOtpGet(true);
        //         // }, 1000);
        //         setTimeout(() => {
        //             setOpen(true);
        //         }, 1000);
        //     }

        //     if (res?.data?.error == true) {
        //         toastSuccessMessageError(res?.data?.message);
        //         setOpen(true);
        //     }
        // } catch (error) {
        //     // setloader2(false);
        // }
    };


    const handleOtpSubmit = async (val) => {
        // const clone = { otp: val, user_id: window.localStorage.getItem("userIdToken"), ref_id: window.localStorage.getItem("ref_id"), }
        // try {
        //     const res = await subOtp(clone);
        //     setloader3(false);
        //     if (res?.data?.statusCode == "401") {
        //         toastSuccessMessageError(res?.data?.message);
        //     }
        //     if (res?.data?.statusCode == 200) {
        //         toastSuccessMessage("Identity verified successfully");
        //         setOpen(false)
        //         setTimeout(() => nextStep(), 1000);
        //         // setState(1);
        //         // window.localStorage.setItem("steps", 1);
        //         // setTimeout(() => {
        //         //   setState((prev) => prev + 1);
        //         //   window.localStorage.setItem("steps", state);
        //         // }, 1000);
        //     } else {
        //         alert(res?.data?.message);
        //         // setOtpVerificationFailed(true);
        //         // setadharOtpGet(false);
        //         // setpAdhbuttonDis(false);
        //     }
        // } catch (error) {
        //     // setloader3(false);
        //     // setOtpVerificationFailed(true);
        //     // setadharOtpGet(false);
        //     // setpAdhbuttonDis(false);
        // }
        // finally {
        //     // setOtpAdhar('');
        // }
    };
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Identity Verification</h3>

            <label className="block mb-2 text-sm">Enter PAN Number</label>
            <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-4"
                placeholder="Enter your PAN"
                name="pan"
                value={initialPan.pan ?? ""}
                onChange={onchnagePan}
            />
            {allData && <p>
                Name : {allData?.pan_name}
            </p>}
            <button className="px-4 py-2 bg-pink-500 text-white rounded mb-6 cursor-pointer" disabled={!initialPan?.pan} onClick={VerifyPan}>
                Verify PAN
            </button>

            <label className="block mb-2 text-sm">Enter Aadhaar Number</label>
            <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-4"
                placeholder="Enter your Aadhaar"
                name="adhaarNumber"
                value={initialAdhar.adhaarNumber ?? ""}
                onChange={onchnageAdhar}
            />
            <button className="px-4 py-2 bg-pink-500 text-white rounded mb-6 cursor-pointer" onClick={adharGenerateOtpSub}>
                Verify Aadhaar
            </button>

            <div className="flex justify-end">
                <button onClick={nextStep} className="px-6 py-2 bg-blue-500 text-white rounded">
                    Next
                </button>
            </div>

            <AdharModalOtp
                isOpen={open}
                onClose={() => setOpen(false)}
                onSubmit={handleOtpSubmit}
            />
        </div>
    )
}

export default IdentityVerification