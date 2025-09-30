
// app/login/page.tsx  (or components/Login2.tsx)
"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Login2() {
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
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Remember me + Forgot password */}
                <div className="flex items-center justify-between mb-4 text-sm">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-gray-600">Remember Me</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                {/* Login Button */}
                <button className="w-full py-2 border border-black-600 text-black-600 font-semibold rounded-md hover:bg-black hover:text-white transition cursor-pointer">
                    LOGIN
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
                    <Link href="/resister" className="text-blue-600 font-medium hover:underline">
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
}
