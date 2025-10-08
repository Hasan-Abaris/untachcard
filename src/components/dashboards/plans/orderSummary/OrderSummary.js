
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CreditCard } from "lucide-react";
import { useParams } from "next/navigation";
import axios from "axios";
import { base_url } from "@/server";
import { useRazorpay } from "react-razorpay";
import Loader from "@/components/common/loader/Loader";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import { ToastContainer } from "react-toastify";

const OrderSummary = () => {
    const params = useParams()
    // console.log(params);
    const [paymentData, setPaymentData] = useState(null)
    console.log(paymentData?.orderId);

    const [loader, setLoader] = useState(false)
    const [plan, setPlan] = useState(null)
    const getByIdData = async (id) => {
        setLoader(true)
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`${base_url}card-plans/public/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            // console.log(res?.data);
            setPlan(res?.data)
            setLoader(false)

        } catch (error) {
            setLoader(false)
        }
    }

    useEffect(() => {
        if (params?.id) {
            getByIdData(params?.id)
        }

    }, [params])



    const proceedToPayment = async () => {
        setLoader(true);
        const clone = { trans_type: "Razorpay", planId: params?.id };
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.post(`${base_url}card-transaction/payment-initiate`, clone, {
                headers: { Authorization: `Bearer ${token}` },
            })
            // console.log(res);
            if (res?.data?.error == false) {
                const data = res?.data?.data;
                console.log(data);

                setPaymentData(data);
                handlePayment(data);
                setLoader(false);
            } else {
                toastSuccessMessageError(res?.data?.message);
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };



    const Razorpay = useRazorpay();
    const handlePayment = useCallback(
        async (data) => {
            console.log("paymetRzor", data);
            // const filterSecrateKy = paymentSelectData?.map((item) => {
            //   return item
            // })
            // console.log(filterSecrateKy);

            // const filterRoazarKey = filterSecrateKy?.filter((item) => {
            //   return item?.slug == 'razorpay'
            // })
            // console.log('filterRoazarKey', filterRoazarKey[0]?.key);
            try {
                // const res = await rozarPayApi(rozarPayData);
                // "rzp_test_9VeeiBAgDSX9Tq"
                // console.log('hkjbhjkhjlknl', user);
                // rzp_test_Y1vZ5apL1BJ4Gg
                const options = {
                    // data?.paymentCred
                    key: data?.paymentCred,
                    amount: data?.order?.amount,
                    // amount: payableAmount * 100,
                    currency: data?.order?.currency,
                    name: "iTap Cards",
                    description: "Transaction",
                    image: "https://your-logo-url.com", // Optional logo URL
                    order_id: data?.order?.id,
                    handler: (response) => {
                        console.log(response);
                        checkoutApi(response, data);
                        // alert(`Payment ID: ${response.razorpay_payment_id}`);
                    },
                    prefill: {
                        name: data?.user?.name,
                        email: data?.user?.email,
                        contact: data?.user?.mobile ? data?.user?.mobile : "999999999",
                    },
                    theme: {
                        color: "#3399cc",
                    },
                };

                // const rzpay = new Razorpay(options);
                const rzpay = new window.Razorpay(options);

                rzpay.on("payment.failed", function (response) {
                    // console.log(response);
                    // alert(response.error.code);
                    // alert(response.error.description);
                    // alert(response.error.source);
                    // alert(response.error.step);
                    // alert(response.error.reason);
                    // alert(response.error.metadata.order_id);
                    // alert(response.error.metadata.payment_id);
                });
                rzpay.open();
            } catch (error) {
                console.error("Error in handlePayment:", error);
            }
        },
        [Razorpay]
    );

    const checkoutApi = async (razordata, paymentData) => {
        console.log(razordata, paymentData);

        const clone = {
            orderId: paymentData?.orderId,
            razorpay_order_id: razordata?.razorpay_order_id,
            razorpay_payment_id: razordata?.razorpay_payment_id,
            razorpay_signature: razordata?.razorpay_signature,
        };
        console.log(clone);

        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.post(`${base_url}card-transaction/checkout-razor`, clone, {
                headers: { Authorization: `Bearer ${token}` },
            })
            if (res?.data?.error == false) {

                toastSuccessMessage(res?.data?.message);

            } else {
                toastSuccessMessageError(res?.data?.message);
            }
        } catch (error) {
            toastSuccessMessageError(error?.message);
        }
    };
    return (
        <>
            {loader && <Loader />}
            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Order Summary
                    </h1>
                </div>
            </div>
            <div className=" bg-gray-50 flex items-center justify-center pb-10 px-4 ">
                <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 w-full max-w-xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-2 bg-pink-600 rounded-full"></span>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                            Order Summary
                        </h2>
                    </div>

                    <p className="text-gray-500 mb-6 text-sm md:text-base">
                        Check your order and select your payment method from the options below.
                    </p>

                    {/* Table Section */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-3 text-sm font-semibold text-gray-600 border-b border-gray-200 pb-2">
                            <span>Plan</span>
                            <span className="text-center">Payment Type</span>
                            <span className="text-right">Price</span>
                        </div>

                        <div className="grid grid-cols-3 text-sm text-gray-800 pt-3">
                            <span>
                                {plan?.title}

                            </span>
                            <span className="text-center">
                                {plan?.billing_type}
                            </span>
                            <span className="text-right">
                                ₹ {plan?.price}
                            </span>
                        </div>
                    </div>

                    {/* VAT & Total */}
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-gray-700 text-sm md:text-base mb-2">
                            {/* <span className="font-medium">VAT (10%)</span> */}
                            <span>
                                {/* + ${vat} */}
                            </span>
                        </div>

                        <div className="flex justify-between items-center font-semibold text-gray-900 text-base md:text-lg">
                            <span>Total</span>
                            <span>
                                ₹ {plan?.price}
                            </span>
                        </div>
                    </div>

                    {/* Pay Now Button */}
                    <div className="mt-8 flex justify-end">
                        <button type="button" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all" onClick={proceedToPayment}>
                            <CreditCard size={18} />
                            Pay Now
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default OrderSummary;
