"use client";

import { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Select, Spin } from "antd";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";


const fieldOptions = [
    { label: "Mobile / Phone", value: "mobile" },
    { label: "Email", value: "email" },
    { label: "Address", value: "address" },
    { label: "WhatsApp", value: "whatsapp" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "Website", value: "website" },
    { label: "Facebook", value: "facebook" },
    { label: "Twitter", value: "twitter" },
    { label: "Instagram", value: "instagram" },
    { label: "Telegram", value: "telegram" },
    { label: "Skype", value: "skype" },
    { label: "YouTube", value: "youtube" },
    { label: "TikTok", value: "tiktok" },
    { label: "Snapchat", value: "snapchat" },
    { label: "PayPal", value: "paypal" },
    { label: "Github", value: "github" },
    { label: "Pinterest", value: "pinterest" },
    { label: "WeChat", value: "wechat" },
    { label: "Signal", value: "signal" },
    { label: "Discord", value: "discord" },
    { label: "Reddit", value: "reddit" },
    { label: "Spotify", value: "spotify" },
    { label: "Vimeo", value: "vimeo" },
    { label: "Soundcloud", value: "soundcloud" },
    { label: "Dribbble", value: "dribbble" },
    { label: "Behance", value: "behance" },
    { label: "Flickr", value: "flickr" },
    { label: "Twitch", value: "twitch" },
    { label: "Custom URL", value: "custom" },
];

const iconOptions = Object.keys(Icons)
    .filter((key) => key.startsWith("Fa"))
    .map((key) => ({
        label: key.replace("Fa", ""),
        value: key,
    }));

const ContactDetailsAdd = ({ isOpen, onClose, editCard }) => {

    if (!isOpen) return null;
    const dispatch = useDispatch()
    const { cardData, loading, error } = useSelector((state) => state.auth)
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        cardId: "",
        type: "",
        icon: "",
        title: "",
        url: "",
        order_by_id: 0,
    });
    const [iconSearch, setIconSearch] = useState("");
    const [iconDropdown, setIconDropdown] = useState(false);

    useEffect(() => {
        if (editCard) {
            setFormData(editCard);
        } else {
            setFormData({
                cardId: "",
                type: "",
                icon: "",
                title: "",
                url: "",
                order_by_id: 0,
            });
        }
    }, [editCard, isOpen]);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        // console.log(formData);
        setLoader(true)
        if (editCard?._id) {
            try {
                const token = window.localStorage.getItem("token");
                const res = await axios.put(`https://onlineparttimejobs.in/api/card-fields/user/update/${editCard?._id}`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                if (res?.data?.success) {
                    toastSuccessMessage(res?.data?.msg)
                    setLoader(false)

                    setTimeout(() => {
                        // dispatch(fetchUseCard());
                        onClose()
                    }, 1000)
                } else {
                    setLoader(false)
                    toastSuccessMessageError(res?.data?.message)
                }
            } catch (error) {
                setLoader(false)
                toastSuccessMessageError(error?.message)

            }
        } else {
            try {
                const token = window.localStorage.getItem("token");
                const res = await axios.post(`https://onlineparttimejobs.in/api/card-fields/user/add`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                // dispatch(fetchUseCard());

                if (res?.data?.success) {
                    toastSuccessMessage(res?.data?.msg)
                    setLoader(false)

                    setTimeout(() => {
                        // dispatch(fetchUseCard());
                        onClose()
                    }, 1000)
                } else {
                    setLoader(false)
                    toastSuccessMessageError(res?.data?.msg)
                }
            } catch (error) {
                setLoader(false)
                toastSuccessMessageError(error?.message)

            }
        }
    }


    const getIdData = async (id) => {
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`https://onlineparttimejobs.in/api/card-fields/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            // console.log(res);
            setFormData(res?.data)

        } catch (error) {

        }
    }


    useEffect(() => {
        if (editCard?._id) getIdData(editCard._id);
    }, [editCard]);


    const SelectedIcon = Icons[formData.icon] || Icons["FaRegQuestionCircle"];
    const filteredIcons = iconOptions.filter((icon) =>
        icon.label.toLowerCase().includes(iconSearch.toLowerCase())
    );
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] p-6 relative animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
                    {editCard ? "Edit Update" : "Create"}
                </h2>

                <div className="space-y-5">
                    {/* Select vCard */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Select vCard<span className="text-red-500">*</span>
                        </label>
                        {loading ? (
                            <Spin />
                        ) : (
                            <Select
                                showSearch
                                placeholder="Search or select card"
                                className="w-full"
                                value={formData.cardId || undefined}
                                onChange={(value) =>
                                    setFormData((prev) => ({ ...prev, cardId: value }))
                                }
                                filterOption={(input, option) =>
                                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                                }
                                options={
                                    cardData?.data?.map((card) => ({
                                        label: card.title || "Untitled Card",
                                        value: card._id,
                                    })) || []
                                }
                            />
                        )}
                    </div>

                    {/* Select Field Type */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Select Field Type<span className="text-red-500">*</span>
                        </label>
                        <select
                            className="w-full border px-3 py-2 rounded-md focus:outline-indigo-500"
                            value={formData.type}
                            onChange={(e) => handleChange("type", e.target.value)}
                        >
                            <option value="">Select Field Type</option>
                            {fieldOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Icon Selector */}
                    {formData.type && (
                        <div className="relative">
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Select Icon<span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 flex items-center justify-center border rounded text-xl">
                                    <SelectedIcon />
                                </div>

                                {/* Icon Dropdown */}
                                <div className="relative w-full">
                                    <button
                                        onClick={() => setIconDropdown((prev) => !prev)}
                                        className="w-full border px-3 py-2 rounded-md text-left"
                                    >
                                        {formData.icon || "Choose Icon"}
                                    </button>

                                    {iconDropdown && (
                                        <div className="absolute top-full left-0 w-full max-h-60 overflow-y-auto border bg-white rounded-md shadow-lg mt-1 z-50">
                                            <input
                                                type="text"
                                                placeholder="Search icon..."
                                                value={iconSearch}
                                                onChange={(e) => setIconSearch(e.target.value)}
                                                className="w-full border-b px-3 py-2 text-sm focus:outline-none"
                                            />
                                            <div className="grid grid-cols-6 gap-2 p-2">
                                                {filteredIcons.slice(0, 60).map((icon) => {
                                                    const IconComp = Icons[icon.value];
                                                    return (
                                                        <button
                                                            key={icon.value}
                                                            onClick={() => {
                                                                handleChange("icon", icon.value);
                                                                setIconDropdown(false);
                                                            }}
                                                            className={`p-2 border rounded-md hover:bg-pink-100 flex justify-center items-center ${formData.icon === icon.value
                                                                ? "bg-pink-200 border-pink-500"
                                                                : ""
                                                                }`}
                                                        >
                                                            <IconComp />
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Dynamic Fields */}
                    {formData.type && (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter title"
                                    className="w-full border px-3 py-2 rounded-md focus:outline-indigo-500"
                                    value={formData.title}
                                    onChange={(e) => handleChange("title", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    URL / Value
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter URL or value"
                                    className="w-full border px-3 py-2 rounded-md focus:outline-indigo-500"
                                    value={formData.url}
                                    onChange={(e) => handleChange("url", e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700 transition"
                        >
                            {editCard ? "Update" : "Create"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetailsAdd