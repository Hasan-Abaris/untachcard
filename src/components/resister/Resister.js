// app/register/page.tsx  (or components/Register.tsx)
"use client";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Loader from "../common/loader/Loader";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toastSuccessMessage, toastSuccessMessageError } from "../common/messageShow/MessageShow";
import { useRouter } from "next/navigation";
import { base_url } from "@/server";


export default function Register() {
    const router = useRouter()
    const [isLoading, setisLoading] = useState(false)
    const [show, setShow] = useState(false);
    // const baseUrl = base_url();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        password: "",
        conform_password: "",
        currency: "643aedb211b57e222dffe64e",
        language: "63fb926bba4c51937001628a",
        refer_code: "",
        long: "",
        lat: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const cloneData = { ...formData };
        cloneData[name] = value;
        setFormData(cloneData);
    };

    const [file, setFile] = useState(null);
    const onchagePhoto = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);
        const formDatas = new FormData();

        formDatas.append("firstname", formData.firstname);
        formDatas.append("lastname", formData.lastname);
        formDatas.append("email", formData.email);
        formDatas.append("mobile", formData.mobile);
        formDatas.append("password", formData.password);
        formDatas.append("conform_password", formData.conform_password);
        formDatas.append("refer_code", formData.refer_code);
        formDatas.append("currency", formData.currency);
        formDatas.append("language", formData.language);
        formDatas.append("long", formData.long);
        formDatas.append("lat", formData.lat);

        formDatas.append("image", file);

        try {
            console.log('sfgfg');

            const res = await axios.post(`${base_url}user/register`, formDatas);
            console.log(res?.data);
            toastSuccessMessage('Registration Successfully !')
            setisLoading(false);

            setTimeout(() => {
                router.push("/login2");
            }, 1000);
        } catch (error) {
            console.log(error);
            toastSuccessMessageError(error?.response?.data?.message)
            setisLoading(false);

        }
    };
    return (
        <>
            {isLoading && <Loader />}
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
                <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Create an account.
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        {/* File Upload */}
                        <div className="md:col-span-2">
                            <input
                                type="file"
                                className="w-full border rounded-md text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                                name="file"
                                onChange={onchagePhoto}
                            />
                        </div>

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="First Name"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="firstname"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="lastname"
                            onChange={handleChange}
                        />

                        {/* Mobile + Email */}
                        <input
                            type="number"
                            placeholder="Mobile"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="mobile"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="example@123"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="email"
                            onChange={handleChange}
                        />

                        {/* Refer + Password */}
                        <input
                            type="text"
                            placeholder="Refer Code"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="refer_code"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="password"
                            onChange={handleChange}
                        />

                        {/* Confirm Password */}
                        <div className="md:col-span-2">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                name="conform_password"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="md:col-span-2 flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="w-4 h-4" checked={show}
                                onClick={() => {
                                    setShow(!show);
                                }} />
                            <span className="text-gray-600">
                                By signing up you agree to our terms and conditions.
                            </span>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button type="submit" disabled={!show} className="w-full cursor-pointer py-2 border border-black-600 text-black-600 font-semibold rounded-md hover:bg-black hover:text-white transition">
                                CREATE ACCOUNT
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-500 text-sm">OR JOIN WITH</span>
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

                    {/* Login Redirect */}
                    <p className="text-center text-gray-600 text-sm">
                        Already have an account?{" "}
                        <a href="/login2" className="text-blue-600 font-medium hover:underline">
                            login
                        </a>
                    </p>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}
