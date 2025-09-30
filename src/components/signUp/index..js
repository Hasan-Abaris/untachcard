
"use client";
// import { isMobileExits, isVerifiedMobileOtp, registerUser, SignUpCountry, SignUpState, sinupverifyMobileNoApi, userType } from "@/api/Api";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
// import { toastSuccessMessage, toastSuccessMessageError } from "../common/showMesaage/ShowMesaage";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import MobileOtp from "./mobileOtp/MobileOtp";

const SignUp = () => {
    const router = useRouter()
    const [stateOptions, setStateOptions] = useState(null);
    const [countryOptions, setCountryOptions] = useState(null);
    const [userTypeOptions, setUserTypeOptions] = useState(null);
    const [userData, setUserData] = useState(null);
    const [mobileVeryfideData, setMobileVeryfideData] = useState(null);
    const [verifyMobile, setVerifyMobile] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        state: "",
        mobile: "",
        email: "",
        password: "",
        user_type_id: "",
        refer_id: "",
        // withoutRefer: false,
    });
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
    const [otp, setOtp] = useState("");

    // Change handler
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;

        // Mobile input → allow only digits and max 10
        if (name === "mobile") {
            val = val.replace(/\D/g, "").slice(0, 10);
        }

        setFormData((prev) => ({ ...prev, [name]: val }));

        // Mobile API check when 10 digit complete
        if (name === "mobile" && val.length === 10) {
            checkMobileExist(val);
        }
    };

    // Mobile exist check API
    const checkMobileExist = async (mobile) => {
        const cloneMobile = `+91${mobile}`;
        const clone = { mobileNo: `+91${mobile}` }
        setOpen(true)
        // try {
        //     const res = await isMobileExits(cloneMobile);
        //     if (res?.data?.isExist === false) {
        //         const res = await sinupverifyMobileNoApi(clone)
        //         if (res?.data?.error == false) {
        //             setUserData(res?.data?.data)
        //             setOpen(true)
        //             toastSuccessMessage('OTP send Successfully !')
        //         } else {
        //             toastSuccessMessageError('OTP send Successfully !')
        //         }

        //     } else {
        //         toastSuccessMessageError('Your Number is Already Register!')
        //     }
        // } catch (err) {
        //     console.error("Mobile check error:", err);
        // }
    };

    // Validation
    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.mobile || formData.mobile.length !== 10)
            newErrors.mobile = "Valid 10 digit mobile required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email required";
        if (!formData.password || formData.password.length < 6)
            newErrors.password = "Password must be at least 6 chars";
        if (!formData.user_type_id) newErrors.user_type_id = "User type required";
        if (!formData.refer_id)
            newErrors.refer_id = "Refer ID  required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit

    const getAllApi = async () => {
        // try {
        //     const resState = await SignUpState()
        //     if (resState.data.error === false) {
        //         setStateOptions(resState.data.data)
        //     }
        //     const resCountry = await SignUpCountry()


        //     if (resCountry?.data?.error == false) {
        //         setCountryOptions(resCountry.data.data)
        //     }
        //     const resUserType = await userType()
        //     console.log(resUserType?.error);
        //     if (resUserType?.error == false) {
        //         setUserTypeOptions(resUserType?.data)
        //     }
        // } catch (error) {

        // }
    }


    const handleOtpSubmit = async (val) => {
        // console.log(val);
        // const clone = { otp: val, user_id: userData?.user }
        // try {
        //     const res = await isVerifiedMobileOtp(clone)
        //     console.log(res?.data?.error);

        //     if (res?.data?.error == false) {
        //         toastSuccessMessage(res?.data?.data?.message)
        //         setMobileVeryfideData(res?.data?.data)
        //         // console.log('fdgfdgfd');
        //         setVerifyMobile(true)
        //         setOpen(false)
        //     } else {
        //         toastSuccessMessageError(res?.data?.message)
        //     }
        // } catch (error) {

        // }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {

            const clone = { ...formData, mobile: mobileVeryfideData?.user }
            // try {
            //     const res = await registerUser(clone)
            //     if (res?.statusCode == '200') {
            //         toastSuccessMessage("User created Successfully")
            //         setTimeout(() => {
            //             router.push('/login')
            //         }, 2000)
            //     }
            //     if (res?.statusCode == 402) {
            //         toastSuccessMessageError(res?.message)
            //     }
            //     // setloader5(false)
            // } catch (error) {
            //     setloader5(true)
            //     // console.log(error);
            //     // toastSuccessMessage(res?.data?.message)
            // }
        }
    };

    useEffect(() => {
        getAllApi()
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen  relative bg-[url('/assets/banner/loginBananer.jpg')] bg-cover bg-center ">
            {/* Background wave */}
            <div className="absolute inset-0">
                <svg
                    className="w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#1e293b"
                        d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,192C560,171,640,117,720,117.3C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96V320H0Z"
                    ></path>
                </svg>
            </div>

            {/* Signup Card */}
            <div className="relative w-full max-w-lg bg-pink-600 p-8 rounded-lg shadow-lg z-10 mt-20">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    SIGNUP
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name + State */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white"
                            />
                            {errors.name && (
                                <p className="text-white text-sm">{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white"
                            >
                                <option value="">Select State</option>
                                {stateOptions && stateOptions?.map((item) => {
                                    return <option key={item?._id} value={item?._id}>{item?.name}</option>
                                })}
                            </select>
                            {errors.state && (
                                <p className="text-white text-sm">{errors.state}</p>
                            )}
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="flex items-center relative">
                        <span className="px-3 py-2 bg-gray-700 border border-r-0 border-gray-600 rounded-l-md text-white">
                            <select
                                className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white"
                                defaultValue="+91"
                            >
                                <option value="" disabled>Select Country</option>
                                {countryOptions &&
                                    countryOptions?.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={"+" + item?.phone_code}
                                                selected={item?.name === "India"}
                                            >
                                                {item?.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </span>

                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter Mobile Number"
                            className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 text-white"
                        />

                        {/* Verify Icon */}

                        {verifyMobile && (
                            <FaCheckCircle className="absolute right-3 text-green-500 text-xl" />
                        )}
                    </div>

                    {errors.mobile && (
                        <p className="text-white text-sm">{errors.mobile}</p>
                    )}

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white"
                        />
                        {errors.email && (
                            <p className="text-white text-sm">{errors.email}</p>
                        )}
                    </div>

                    {/* Password + UserType */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white"
                            />
                            {errors.password && (
                                <p className="text-white text-sm">{errors.password}</p>
                            )}
                        </div>
                        <div>
                            <select
                                name="user_type_id"
                                value={formData.user_type_id}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white"
                            >
                                <option value="">Select User Type</option>

                                {userTypeOptions && userTypeOptions?.map((item) => {
                                    return < option key={item._id} value={item._id} >
                                        {item.user_type}
                                    </option>
                                })}
                            </select>
                            {errors.user_type_id && (
                                <p className="text-white text-sm">{errors.user_type_id}</p>
                            )}
                        </div>
                    </div>

                    {/* Refer ID + Without Refer */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                name="refer_id"
                                placeholder="Enter Refer ID"
                                value={formData.refer_id}
                                onChange={handleChange}
                                disabled={formData.withoutRefer}
                                className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white disabled:bg-gray-700"
                            />
                            {errors.refer_id && (
                                <p className="text-white text-sm">{errors.refer_id}</p>
                            )}
                        </div>
                        {/* <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="withoutRefer"
                                checked={formData.withoutRefer}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span className="text-white">Without Refer ID</span>
                        </div> */}
                    </div>

                    {/* Register button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
                    >
                        REGISTER
                    </button>
                </form>

                {/* Social login */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow text-white" />
                    <span className="px-3 text-white">Sign in via</span>
                    <hr className="flex-grow text-white" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        <FaFacebookF />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 bg-white text-red-500 rounded-md hover:bg-gray-200 transition">
                        <FaGoogle />
                    </button>
                </div>
            </div>

            {/* OTP Modal */}
            <MobileOtp
                isOpen={open}
                onClose={() => setOpen(false)}
                onSubmit={handleOtpSubmit}
            />

            <ToastContainer />
        </div>
    );
};

export default SignUp;
