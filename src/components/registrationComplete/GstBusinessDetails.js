
"use client";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { toast } from "react-toastify";


// import {
//     getDetailByPin,
//     GstBusiness,
//     GstBusinessAfterVerifide,
// } from "@/api/login/Login"; 
// import { toastErrorMessage, toastSuccessMessage } from "./ToastShare";

export default function GstBusinessDetails({ nextStep, prevStep, getVarifyallData, allData }) {
    const [data, setData] = useState({
        isGstAvailable: false,
        GSTIN: "",
        businessName: "",
        shop_name: "",
        business_pincode: "",
        business_city: "",
        business_Address: "",
        gst_register_type: "",
        business_state: "",
    });

    const [noRegister, setNoRegister] = useState({
        isGstAvailable: false,
        businessName: "",
        shop_name: "",
        business_pincode: "",
        business_city: "",
        business_Address: "",
        business_Area: "",
        business_state: "",
    });

    const [submitVerified, setSubmitVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    // Handle change in GST inputs
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Handle GST Available / Not Available
    const handleGstToggle = (val) => {
        setData({
            ...data,
            isGstAvailable: val,
            GSTIN: "",
            businessName: "",
            shop_name: "",
            business_pincode: "",
            business_city: "",
            business_Address: "",
            gst_register_type: "",
            business_state: "",
        });
        setNoRegister({
            isGstAvailable: false,
            shop_name: allData?.shop_name || "",
            business_city: allData?.business_city || "",
            business_state: allData?.business_state || "",
        });
        setSubmitVerified(false);
    };

    // Fetch details by pincode
    const onHitPincode = async (pincode) => {
        // console.log(pincode);

        // if (pincode.length !== 6) return;
        // try {
        //     console.log('dfgdfgdf');

        //     const res = await getDetailByPin(pincode);
        //     if (res.data?.error === true) {
        //         setNoRegister((prev) => ({
        //             ...prev,
        //             business_city: "",
        //             business_Address: "",
        //             business_Area: "",
        //             business_state: "",
        //         }));
        //     } else {
        //         setNoRegister((prev) => ({
        //             ...prev,
        //             business_city: res.data?.data?.city,
        //             business_Address: `${res.data?.data?.city} ${res.data?.data?.district} ${res.data?.data?.state}`,
        //             business_Area: res.data?.data?.sub_distance,
        //             business_state: res.data?.data?.state,
        //         }));
        //     }
        // } catch (error) {
        //     // console.error("Error fetching pincode details:", error);
        // }
    };

    // Handle non-GST input changes
    const handleNoGstChange = (e) => {
        const { name, value } = e.target;
        if (name === "business_pincode" && value.length <= 6) {
            setNoRegister({ ...noRegister, [name]: value });
            if (value.length === 6) onHitPincode(value);
        } else {
            setNoRegister({ ...noRegister, [name]: value });
        }
    };

    // Submit GST form
    const handleSubmitGst = async (e) => {
        // e.preventDefault();
        // console.log('ddss');

        // console.log(data);

        // if (!data.shop_name) {
        //     toastSuccessMessageError("Please enter Shop Name");
        //     return;
        // }
        // setLoading(true);
        // try {
        //     const res = await GstBusinessAfterVerifide({
        //         ...data,
        //         user_id: window.localStorage.getItem("userIdToken"),
        //     });
        //     setLoading(false);
        //     if (res?.data?.statusCode === "200") {
        //         toastSuccessMessage(res?.data?.message);
        //         setTimeout(() => nextStep(), 1000);
        //     } else {
        //         toastSuccessMessageError(res?.data?.message)
        //     }
        // } catch (error) {
        //     setLoading(false);
        // }
    };

    // Submit non-GST form
    const handleSubmitNoGst = async (e) => {
        // e.preventDefault();
        // console.log(noRegister);

        // setLoading(true);
        // try {
        //     const res = await GstBusinessAfterVerifide({
        //         ...noRegister,
        //         user_id: window.localStorage.getItem("userToken"),
        //     });
        //     setLoading(false);
        //     if (res?.data?.statusCode === "200") {
        //         toastSuccessMessage(res?.data?.message);
        //         setTimeout(() => nextStep(), 1000);
        //     } else {
        //         toastSuccessMessageError(res?.data?.message)
        //     }
        // } catch (error) {
        //     setLoading(false);
        // }
    };


    useEffect(() => {
        if (allData?.is_gst == true) {
            setNoRegister({
                isGstAvailable: false,
                businessName: "",
                shop_name: allData?.shop_name,
                business_pincode: allData?.business_pincode ?? "",
                business_city: "",
                business_Address: "",
                business_Area: "",
                business_state: "",
            })
        }
        if (allData?.business_pincode && allData.business_pincode.length === 6) {
            onHitPincode(allData.business_pincode);
        }
    }, [allData])

    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold text-center mb-6">GST & Business Details</h3>

            {/* Radio Options */}
            <div className="flex justify-center gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="gstAvailable"
                        checked={data.isGstAvailable === true}
                        onChange={() => handleGstToggle(true)}
                    />
                    <span>Yes (Registered with GST)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="gstAvailable"
                        checked={data.isGstAvailable === false}
                        onChange={() => handleGstToggle(false)}
                    />
                    <span>No (Not Registered)</span>
                </label>
            </div>

            {/* GST Available Form */}
            {data.isGstAvailable ? (
                <form onSubmit={handleSubmitGst} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="GSTIN"
                        value={data.GSTIN}
                        onChange={handleChange}
                        placeholder="Enter GST Number"
                        className="border rounded p-2"
                    />
                    <input
                        type="text"
                        name="shop_name"
                        value={data.shop_name}
                        onChange={handleChange}
                        placeholder="Enter Shop Name"
                        className="border rounded p-2"
                    />

                    {submitVerified && (
                        <>
                            <input
                                type="text"
                                name="business_pincode"
                                value={data.business_pincode}
                                disabled
                                className="border rounded p-2"
                                placeholder="Business Pincode"
                            />
                            <input
                                type="text"
                                name="businessName"
                                value={data.businessName}
                                readOnly
                                className="border rounded p-2"
                                placeholder="Business GST Name"
                            />
                            <input
                                type="text"
                                name="business_city"
                                value={data.business_city}
                                disabled
                                className="border rounded p-2"
                                placeholder="Business City"
                            />
                            <input
                                type="text"
                                name="business_Address"
                                value={data.business_Address}
                                disabled
                                className="border rounded p-2"
                                placeholder="Business Address"
                            />
                            <input
                                type="text"
                                name="gst_register_type"
                                value={data.gst_register_type}
                                disabled
                                className="border rounded p-2"
                                placeholder="GST Register Type"
                            />
                        </>
                    )}

                    {/* Action Buttons */}
                    <div className="col-span-2 flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-2 bg-gray-400 text-white rounded"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            // disabled={loading}
                            className="px-6 py-2 bg-green-500 text-white rounded"
                        >
                            {/* {loading ? "Submitting..." : "Submit"} */}
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                /* Non-GST Form */
                <form onSubmit={handleSubmitNoGst} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="number"
                        name="business_pincode"
                        value={noRegister.business_pincode ?? ""}
                        onChange={handleNoGstChange}
                        placeholder="Enter Pincode"
                        className="border rounded p-2"
                    />
                    <input
                        type="text"
                        name="business_state"
                        value={noRegister.business_state}
                        onChange={handleNoGstChange}
                        placeholder="Enter State"
                        className="border rounded p-2"
                        disabled
                    />
                    <input
                        type="text"
                        name="business_city"
                        value={noRegister.business_city}
                        onChange={handleNoGstChange}
                        placeholder="Enter City"
                        className="border rounded p-2"
                        disabled
                    />
                    <input
                        type="text"
                        name="business_Area"
                        value={noRegister.business_Area}
                        onChange={handleNoGstChange}
                        placeholder="Area"
                        className="border rounded p-2"
                        disabled
                    />
                    <input
                        type="text"
                        name="business_Address"
                        value={noRegister.business_Address}
                        onChange={handleNoGstChange}
                        placeholder="Enter Address"
                        className="border rounded p-2"
                        disabled
                    />
                    <input
                        type="text"
                        name="shop_name"
                        value={noRegister.shop_name}
                        onChange={handleNoGstChange}
                        placeholder="Enter Shop Name"
                        className="border rounded p-2"

                    />

                    {/* Action Buttons */}
                    <div className="col-span-2 flex justify-between mt-4">
                        <button
                            type="submit"
                            // disabled={loading}
                            className="px-6 py-2 bg-green-500 text-white rounded cursor-pointer"
                        >
                            {loading ? "Submitting..." : "Submit"}

                        </button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className="px-6 py-2 bg-blue-500 text-white rounded"
                        >
                            Next
                        </button>

                    </div>
                </form>
            )}
        </div>
    );
}
