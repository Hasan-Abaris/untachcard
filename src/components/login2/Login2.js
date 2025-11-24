
"use client";
import { loginUser } from "@/app/reduxToolkit/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toastSuccessMessage } from "../common/messageShow/MessageShow";


export default function Login2() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [loginAttempt, setLoginAttempt] = useState(false);

    const { loading, error, data } = useSelector((state) => state.auth);
    console.log(loading, error, data?._id);



    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleChangeLogin = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setLoginAttempt(true);
        dispatch(loginUser(loginForm));
    };


    useEffect(() => {
        if (loginAttempt && data?._id) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data._id);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("email", data.email);
            localStorage.setItem("userName", `${data.firstname} ${data.lastname}`);

            toastSuccessMessage("Login Successfully");

            window.dispatchEvent(new Event("loginStatusChanged"));

            setTimeout(() => {
                router.push("/dashboards/vcards/demo/1");
            }, 1000);

        }
    }, [data, loginAttempt]);


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Login to your account.
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        name="email"
                        value={loginForm.email}
                        onChange={handleChangeLogin}
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        name="password"
                        value={loginForm.password}
                        onChange={handleChangeLogin}
                    />
                </div>

                {/* Errors */}
                {error && (
                    <p className="text-red-500 text-sm mb-2">
                        {typeof error === "string"
                            ? error
                            : error?.message || "Something went wrong"}
                    </p>
                )}

                {/* Login Button */}
                <button
                    type="button"
                    onClick={handleLoginSubmit}
                    className="w-full py-2 border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition cursor-pointer"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "LOGIN"}
                </button>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">OR LOGIN WITH</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login */}
                <div className="flex justify-center space-x-4 mb-6">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
                        <FaFacebookF />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white hover:bg-sky-500">
                        <FaTwitter />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600">
                        <FaGoogle />
                    </button>
                </div>

                {/* Register */}
                <p className="text-center text-gray-600 text-sm">
                    Don’t have an account?{" "}
                    <Link
                        href="/resister"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Register Now
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}
