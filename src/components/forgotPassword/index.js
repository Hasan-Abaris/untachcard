"use client";
import { useState } from "react";


import { message } from "antd";

import { ToastContainer, toast } from "react-toastify";
import dynamic from "next/dynamic";
import ForgotPasswordOtp from "./forgotPasswordOtp/ForgotPasswordOtp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";


const ForgotPassword = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [pageDynemic, setPageDynemic] = useState(true)
    const [initialValue, setInitialValue] = useState({
        mobileNo: "",
        pan: "",
    });

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "mobileNo") {
            if (/^\d{0,10}$/.test(value)) {
                setInitialValue({ ...initialValue, [name]: value });
            }
        } else {
            setInitialValue({ ...initialValue, [name]: value.toUpperCase() });
        }
    };

    const validate = () => {
        const { mobileNo, pan } = initialValue;

        if (!mobileNo) {
            toast.error("Mobile number is required");
            return false;
        }
        if (mobileNo.length !== 10) {
            toast.error("Mobile number must be 10 digits");
            return false;
        }
        if (!pan) {
            toast.error("PAN is required");
            return false;
        }

        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
            toast.error("Enter valid PAN number (e.g., ABCDE1234F)");
            return false;
        }
        return true;
    };

    const SubmitData = async () => {
        if (!validate()) return;

        const payload = {
            mobileNo: "+91" + initialValue.mobileNo,
            pan: initialValue.pan,
        };

        // console.log("Sending payload =>", payload);
        setOpen(true)
        // try {
        //     const res = await mobileGenerateOtp(payload);

        //     console.log("API Response =>", res);
        //     if (res?.data?.statusCode === 200) {
        //         // console.log("Success:", res?.data);

        //         // save user id
        //         const userId = res?.data?.data?.user;
        //         // setUserID(userId);
        //         window.localStorage.setItem("forgotUser", userId);
        //         toastSuccessMessage(res?.data?.message);
        //         setOpen(true)
        //     } else {
        //         // console.warn("Unexpected response format:", res);
        //         toast.error(res?.data?.message);
        //     }
        // } catch (error) {
        //     console.error("API Error =>", error);
        //     toast.error("Failed to send OTP. Please check your network or try again.");
        // }
    };

    const handleOtpSubmit = async (otp) => {
        // console.log(otp);
        // const clone = { otp: otp, user_id: window?.localStorage.getItem("forgotUser") }
        // try {
        //     const res = await fogotPassVerifyByMobile(clone);
        //     if (res?.data?.statusCode == '200') {
        //         toastSuccessMessage(res?.data?.data?.message);
        //         setTimeout(() => {
        //             // handlemobileotpclose();
        //             setOpen(false)
        //             setPageDynemic(false)
        //             // setOpenReset(true);
        //         }, 2000);
        //     } else if (res?.data?.statusCode == '400') {
        //         toastErrorMessage(res?.data?.message);
        //     } else if (res?.data?.error === true && res?.data?.statusCode != '400') {
        //         toastErrorMessage(res?.data?.data?.message);
        //     }
        // } catch (error) {

        // }

    }


    const [resetInitialValue, setResetInitialValue] = useState({
        user_id: "",
        password: "",
        repassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    // Handle input change
    const handleChangeReset = (e) => {
        const { name, value } = e.target;
        setResetInitialValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Validation
    const validatereset = () => {
        if (!resetInitialValue.password) {
            toast.error("Password is required");
            return false;
        }
        if (resetInitialValue.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return false;
        }
        if (resetInitialValue.password !== resetInitialValue.repassword) {
            toast.error("Passwords do not match");
            return false;
        }
        return true;
    };

    const resetSubmitData = async () => {
        // if (!validatereset()) return;

        // const payload = {
        //     user_id: window.localStorage.getItem("forgotUser"),
        //     password: resetInitialValue.password,
        //     repassword: resetInitialValue?.repassword
        // };
        // try {
        //     const res = await resetApi(payload)
        //     // console.log(res?.data.data.message);
        //     if (res?.data?.statusCode == "200") {
        //         toastSuccessMessage("Paswoord reset successfully")
        //         setTimeout(() => {
        //             router?.push("/login")
        //         }, 1000)
        //     }
        //     if (res?.data?.statusCode == 402) {
        //         toastErrorMessage("Failed to reset Paswoord")
        //     }
        // } catch (error) {
        // }
        // console.log("Reset Password Payload =>", payload);


    }


    return (
        <div className="flex items-center justify-center min-h-screen relative bg-[url('/assets/banner/loginBananer.jpg')] bg-cover bg-center">
            {/* Background Shape */}
            <div className="absolute inset-0">
                <svg
                    className="w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#1e293b"
                        d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,192C560,171,640,117,720,117.3C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Card */}
            <div className="relative w-full max-w-md bg-pink-600 p-8 rounded-lg shadow-lg z-10">
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                    FORGOT PASSWORD
                </h2>

                {pageDynemic ? (
                    <form className="space-y-4">
                        <div>
                            <label className="text-white">Mobile</label>
                            <input
                                type="text"
                                name="mobileNo"
                                value={initialValue.mobileNo}
                                onChange={handleChange}
                                autoComplete="off"
                                data-lpignore="true"
                                data-form-type="other"
                                className="w-full mt-1 px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                                placeholder="Enter 10 digit mobile"
                                maxLength={10}
                            />
                        </div>
                        <div>
                            <label className="text-white">Pan Card</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="pan"
                                    value={initialValue.pan}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    data-lpignore="true"
                                    data-form-type="other"
                                    className="w-full mt-1 px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 pr-10"
                                    placeholder="Enter Pan Card Number"
                                    maxLength={10}
                                />
                            </div>
                        </div>
                        {/* Buttons */}
                        <button
                            type="button"
                            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                            onClick={SubmitData}
                        >
                            SEND OTP →
                        </button>
                    </form>
                ) : (<form className="space-y-4">
                    <div>
                        <label className="text-gray-300">New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={resetInitialValue.password}
                                onChange={handleChangeReset}
                                autoComplete="off"
                                data-lpignore="true"
                                data-form-type="other"
                                className="w-full mt-1 px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 pr-10"
                                placeholder="Enter New Password"
                            />
                            <span
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-300">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showRePassword ? "text" : "password"}
                                name="repassword"
                                value={resetInitialValue.repassword}
                                onChange={handleChangeReset}
                                autoComplete="off"
                                data-lpignore="true"
                                data-form-type="other"
                                className="w-full mt-1 px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 pr-10"
                                placeholder="Enter Confirm Password"
                            />
                            <span
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                onClick={() => setShowRePassword(!showRePassword)}
                            >
                                {showRePassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <button
                        type="button"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                        onClick={resetSubmitData}
                    >
                        Submit →
                    </button>
                </form>)}





            </div>

            <ForgotPasswordOtp
                isOpen={open}
                onClose={() => setOpen(false)}
                onSubmit={handleOtpSubmit}
            />

            <ToastContainer />
        </div>
    );
};

export default dynamic(() => Promise.resolve(ForgotPassword), { ssr: false });
