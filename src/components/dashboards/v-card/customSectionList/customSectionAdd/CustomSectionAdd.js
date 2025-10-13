"use client"
import { fetchUseCard } from '@/app/reduxToolkit/slice';
import { toastSuccessMessage, toastSuccessMessageError } from '@/components/common/messageShow/MessageShow';
import { Select, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const CustomSectionAdd = ({ isOpen, onClose, onSubmit, editCard }) => {
    // console.log(editCard);

    if (!isOpen) return null;
    const dispatch = useDispatch()
    const { cardData, loading, error } = useSelector((state) => state.auth)
    // console.log(cardData);

    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        cardId: "",
        image_source: "online"
    });

    useEffect(() => {
        dispatch(fetchUseCard());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleChangeImage = async (e) => {
        setLoader(true);
        const { name, files } = e.target;
        const imageData = new FormData();
        imageData.append('image', files[0]);

        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, imageData);
            setTimeout(() => {
                setFormData((prev) => ({
                    ...prev,
                    [name]: res.data?.url
                }));
                setLoader(false);
            }, 1000);
        } catch (error) {
            console.error('Image Upload Error:', error);
            setLoader(false);
        }
    };

    const handleSubmit = async () => {
        console.log(formData);
        setLoader(true)
        if (editCard?._id) {
            try {
                const token = window.localStorage.getItem("token");
                const res = await axios.put(`https://onlineparttimejobs.in/api/card-custom-section/user/update/${editCard?._id}`, formData, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/card-custom-section/user/add`, formData, {
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
            const res = await axios.get(`https://onlineparttimejobs.in/api/card-custom-section/${id}`, {
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

    // ✅ Now you can conditionally render safely
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
                    {editCard ? "Edit Custom Section" : "Add Custom Section"}
                </h2>

                <form className="grid grid-cols-2 gap-4">
                    {/* Row 1 */}
                    <div>
                        <label className="block text-sm font-medium">Select Card</label>
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
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 h-24"
                        />
                    </div>

                    <div className="col-span-2 flex justify-end mt-6">
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                            onClick={handleSubmit}
                        >
                            {loader
                                ? "Processing..."
                                : editCard
                                    ? "Update"
                                    : "Save"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CustomSectionAdd