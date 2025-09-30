"use client";

import React, { useEffect, useState } from "react";
import { Select, Spin } from "antd";
import { toast } from "react-toastify";



const { Option } = Select;

const BankDetails = ({ nextStep, setState, bankDetail }) => {
    const [accountType, setAccountType] = useState("Saving");
    const [loader, setLoader] = useState(false);
    const [bankList, setBankList] = useState([]);
    const [selectedBank, setSelectedBank] = useState(null);

    const [formValues, setFormValues] = useState({
        name: "",
        ifsc: "",
        bankAccount: "",
        phone: "",
        bank_id: "",
    });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const toastSuccess = (msg) =>
        toast.success(msg, { position: "top-center", autoClose: 2000 });
    const toastError = (msg) =>
        toast.error(msg, { position: "top-center", autoClose: 2000 });

    // ✅ Handle Inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        if (value.length <= 10) {
            setFormValues((prev) => ({ ...prev, phone: value }));
        }
    };

    // ✅ Fetch Bank List
    const fetchBankList = async () => {
        // try {
        //     const res = await getAllBank();
        //     const mapped = res?.data?.data?.map((item) => ({
        //         value: item.bankID,
        //         label: item.bank_name,
        //         ifsc: item.ifsc_code,
        //     }));
        //     setBankList(mapped);
        // } catch (error) {
        //     console.error(error);
        // }
    };

    const handleBankSelect = (value) => {
        const bank = bankList.find((b) => b.value === value);
        setSelectedBank(bank);
        setFormValues((prev) => ({
            ...prev,
            bank_id: bank?.value || "",
            ifsc: bank?.ifsc || "",
        }));
    };

    // ✅ Verify Account Holder
    const handleVerify = async () => {
        setLoader(true);
        // try {
        //     const res = await bankAccountVery({
        //         ...formValues,
        //         user_id: window.localStorage.getItem("userToken"),
        //         account_type: accountType,
        //         bank_name: selectedBank?.label,
        //     });

        //     if (res?.data?.statusCode === "200") {
        //         toastSuccess("Bank Details Verified Successfully");
        //         setFormValues((prev) => ({
        //             ...prev,
        //             name: res.data.data.data.nameAtBank,
        //         }));
        //         setIsSubmitDisabled(false);
        //     } else {
        //         toastError(res?.data?.message);
        //     }
        // } catch (error) {
        //     console.error(error);
        //     toastError("Verification failed");
        // }
        // setLoader(false);
    };

    // ✅ Save Bank Details
    const handleSave = async () => {
        // try {
        //     const res = await bankAccountSave({
        //         ...formValues,
        //         bank_account_name: formValues.name,
        //         bank_account_number: formValues.bankAccount,
        //         bank_ifsc: formValues.ifsc,
        //         account_type: accountType,
        //         bank_name: selectedBank?.label,
        //         bank_id: selectedBank?.value,
        //         user_id: window.localStorage.getItem("userIdToken"),
        //     });
        //     if (res?.data?.statusCode === "200") {
        //         toastSuccess(res?.data?.message);
        //         setTimeout(() => {
        //             setState(4);
        //             window.localStorage.setItem("steps", "4");
        //             nextStep?.();
        //         }, 1000);
        //     } else {
        //         toastError(res?.data?.message);
        //     }
        // } catch (error) {
        //     console.error(error);
        //     toastError("Something went wrong");
        // }
    };

    // ✅ Prefill data if exists
    useEffect(() => {
        if (bankDetail?.bank_ifsc) {
            setFormValues({
                name: bankDetail?.bank_account_name,
                ifsc: bankDetail?.bank_ifsc,
                bankAccount: bankDetail?.bank_account_number,
                phone: bankDetail?.phone || "",
                bank_id: bankDetail?.bank_id,
            });
            setSelectedBank({
                value: bankDetail?.bank_id,
                label: bankDetail?.bank_name,
                ifsc: bankDetail?.bank_ifsc,
            });
        }
    }, [bankDetail]);

    useEffect(() => {
        fetchBankList();
    }, []);

    return (
        <div className="">
            <h3 className="text-xl font-bold mb-2">Add Your Bank Account</h3>
            <p className="text-gray-400 mb-6 text-sm">
                Enter your savings or current account details. The name must match your
                PAN card.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-[#2a2a2a] text-white placeholder-gray-400"
                    placeholder="Enter Name"
                />

                {/* Bank Select */}
                <Select
                    showSearch
                    allowClear
                    className="w-full"
                    placeholder="Select Bank"
                    value={selectedBank?.value}
                    onChange={handleBankSelect}
                // dropdownStyle={{ backgroundColor: "#1a1a1a", color: "white" }}
                >
                    {bankList.map((bank) => (
                        <Option key={bank.value} value={bank.value}>
                            {bank.label}
                        </Option>
                    ))}
                </Select>

                {/* IFSC */}
                <input
                    type="text"
                    name="ifsc"
                    value={formValues.ifsc}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-[#2a2a2a] text-white placeholder-gray-400"
                    placeholder="Enter IFSC"
                />

                {/* Phone */}
                <input
                    type="number"
                    name="phone"
                    value={formValues.phone}
                    onChange={handlePhoneChange}
                    className="w-full border rounded-lg px-3 py-2 bg-[#2a2a2a] text-white placeholder-gray-400"
                    placeholder="Enter Phone Number"
                />

                {/* Account Number */}
                <input
                    type="text"
                    name="bankAccount"
                    value={formValues.bankAccount}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 bg-[#2a2a2a] text-white placeholder-gray-400"
                    placeholder="Enter Account Number"
                />

                {/* Account Type */}
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 bg-[#2a2a2a] text-white"
                >
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>
            </div>

            <div className="flex justify-between mt-6">
                <button
                    onClick={handleVerify}
                    disabled={
                        !formValues.bankAccount ||
                        !formValues.ifsc ||
                        !formValues.phone ||
                        !selectedBank
                    }
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50"
                >
                    {loader ? <Spin /> : "Verify Account Holder"}
                </button>

                <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>

                <button
                    onClick={handleSave}
                    disabled={isSubmitDisabled}
                    className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg disabled:opacity-50"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default BankDetails;
