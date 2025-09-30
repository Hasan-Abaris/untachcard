"use client";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { userLogin, userLoginOtp } from "@/api/Api";
// import {
//     getUserTpinStatus,
//     SaveUserDeatilsLocalStorage,
// } from "@/utils/localStorage";
// import {
//     toastSuccessMessage,
//     toastSuccessMessageError,
// } from "../common/showMesaage/ShowMesaage";
// import LoginOtp from "./loginOtp/LoginOtp";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import LoginOtp from "./loginOtp/LoginOtp";
// import Loader from "../common/loader/Loader";

const Login = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    entity: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  // handle input change
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "entity") {
      value = value.replace(/\D/g, ""); // only digits
      if (value.length > 10) return; // max 10 digits
    }
    setFormData({ ...formData, [name]: value });
  };

  // validation
  const validate = () => {
    let newErrors = {};
    if (!formData.entity) {
      newErrors.entity = "Mobile number is required";
    } else if (formData.entity.length !== 10) {
      newErrors.entity = "Mobile must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit login
  const SubmitData = async () => {
    setOpen(true);
    if (validate()) {
      const payload = {
        entity: "+91" + formData.entity,
        password: formData.password,
      };
      // try {
      //     const res = await userLogin(payload);
      //     if (res?.statusCode === 200) {
      //         SaveUserDeatilsLocalStorage(res?.data?.user);
      //         toastSuccessMessage("Otp Send Successfully");
      //         setOpen(true);
      //     } else if (res?.statusCode === 406) {
      //         toastSuccessMessageError("Please enter correct password");
      //     } else if (res?.statusCode === 405) {
      //         toastSuccessMessageError("Mobile number not register");
      //     }
      // } catch (error) {
      //     console.error("Login Error:", error);
      //     toastSuccessMessageError("Something went wrong");
      // }
    }
  };

  // OTP submit
  const handleOtpSubmit = async (val) => {
    setLoader(true);
    const obj = {
      user_id: window.localStorage.getItem("userIdToken"),
      otp: val,
    };

    // try {
    //     const res = await userLoginOtp(obj);
    //     if (res?.statusCode === 200) {
    //         SaveUserDeatilsLocalStorage(res?.data?.user);
    //         getUserTpinStatus(res?.data?.Tpin_status);
    //         window.localStorage.setItem("regisNumber", res.data?.mobile);
    //         toastSuccessMessage(res?.data?.message || "Login Successfully");

    //         setTimeout(() => {

    //             if (res?.data?.is_approved && res?.data?.is_self_declare) {
    //                 router.push("/dashboard");
    //                 setLoader(false)

    //             } else {
    //                 router.push("/registrationComplete");
    //                 setLoader(false)

    //             }
    //         }, 1000);

    //         setOpen(false);
    //     } else if (res?.statusCode === 403) {
    //         toastSuccessMessageError(res?.message || "Otp not matched");
    //         setLoader(false)
    //     } else {
    //         toastSuccessMessageError(res?.message || "An error occurred");
    //         setLoader(false)
    //     }
    // } catch (error) {
    //     console.error("Error in loginOtp:", error);
    //     toastSuccessMessageError("An unexpected error occurred");
    //     setLoader(false)
    // }
  };

  const SubmitDataComplete = () => {
    router.push("/registrationComplete");
  };

  return (
    <>
      {/* {loader && <Loader />} */}

      <div className="flex items-center justify-center min-h-screen bg-[#0f172a] relative bg-[url('/assets/banner/loginBananer.jpg')] bg-cover bg-center">
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
            Sign In To Your Account
          </h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Mobile */}
            <div>
              <label className="text-white">Mobile</label>
              <input
                type="text"
                name="entity"
                value={formData.entity}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter 10 digit mobile"
              />
              {errors.entity && (
                <p className="text-black-400 text-sm mt-1">{errors.entity}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-white">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 pr-10"
                  placeholder="••••••••"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-black-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Buttons */}
            <button
              type="button"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
              onClick={SubmitData}
            >
              Log in →
            </button>
            <Link
              href="/forgotPassword"
              className="w-full text-center block px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
            >
              Forgot Password ?
            </Link>
            <Link
              href="/registrationComplete"
              className="w-full text-center block px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
            >
              Registration Complete ?
            </Link>
            <Link
              href="/signup"
              className="w-full text-center block px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
            >
              Sign Up ?
            </Link>

            {/* <button type="button" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition" onClick={SubmitDataComplete} > Registration Complete </button> */}
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-back-600" />
            <span className="px-3 text-white">Sign in via</span>
            <hr className="flex-grow border-back-600" />
          </div>

          {/* Social Login */}
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
        <LoginOtp
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={handleOtpSubmit}
        />

        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
