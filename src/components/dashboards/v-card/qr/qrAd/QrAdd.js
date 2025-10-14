"use client";

import { fetchUseCard } from "@/app/reduxToolkit/slice";
import { Select, Spin } from "antd";
import axios from "axios";
import QRCodeStyling from "qr-code-styling";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";

const QrAdd = ({ isOpen, onClose, onSubmit, editCard }) => {
    if (!isOpen) return null;

    const dispatch = useDispatch();
    const { cardData, loading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        cardId: "",
    });

    const [qrType, setQrType] = useState("normal");
    const [text, setText] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [fgColor, setFgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [cornerRadius, setCornerRadius] = useState(20);
    const [size, setSize] = useState(300);
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false);

    const qrRef = useRef(null);
    const qrCode = useRef(null);

    // Initialize QR on mount
    useEffect(() => {
        qrCode.current = new QRCodeStyling({
            width: size,
            height: size,
            data: " ",
            image: "",
            dotsOptions: {
                color: fgColor,
                type: "rounded",
            },
            backgroundOptions: {
                color: bgColor,
            },
            cornersSquareOptions: {
                type: "extra-rounded",
            },
            qrOptions: {
                errorCorrectionLevel: "H",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 10,
                imageSize: 0.3,
            },
        });

        qrCode.current.append(qrRef.current);
    }, []);

    // Update QR live when values change
    useEffect(() => {
        if (!qrCode.current) return;

        const qrData =
            qrType === "text"
                ? text || " "
                : qrType === "image"
                    ? "Image QR"
                    : "Normal QR";

        qrCode.current.update({
            width: size,
            height: size,
            data: qrData,
            image: qrType === "image" ? image : "",
            dotsOptions: {
                color: fgColor,
                type: "rounded",
            },
            backgroundOptions: {
                color: bgColor,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 10,
                imageSize: 0.3,
            },
        });
    }, [text, fgColor, bgColor, size, qrType, image]);

    // Upload image to Cloudinary
    const handleChangeImage = async (e) => {
        setLoader(true);
        const { files } = e.target;
        const imageData = new FormData();
        imageData.append("image", files[0]);

        try {
            const res = await axios.post(
                `https://onlineparttimejobs.in/api/cloudinaryImage/addImage`,
                imageData
            );
            setImage(res.data?.url);
            setLoader(false);
        } catch (error) {
            console.error("Image Upload Error:", error);
            setLoader(false);
        }
    };

    // Download QR
    const downloadQR = () => {
        qrCode.current.download({ name: "MyQRCode", extension: "png" });
    };

    // Submit Data
    const handleSubmit = async () => {
        setLoader(true);

        const clone = {
            cardId: formData.cardId,
            foreground_color: fgColor,
            background_color: bgColor,
            corner_radius: cornerRadius,
            qr_type: qrType,
            size: size,
            text: text,
            text_color: textColor,
            image: image,
            image_source: "online",
        };

        console.log("FINAL CLONE:", clone);

        try {
            const token = window.localStorage.getItem("token");

            if (editCard?._id) {
                // UPDATE existing
                const res = await axios.put(
                    `https://onlineparttimejobs.in/api/card-qr/user/update/${editCard?._id}`,
                    clone,
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                if (res?.data?.success) {
                    toastSuccessMessage(res?.data?.msg);
                    setLoader(false);
                    onClose();
                } else {
                    toastSuccessMessageError(res?.data?.msg);
                    setLoader(false);
                }
            } else {
                // ADD new
                const res = await axios.post(
                    `https://onlineparttimejobs.in/api/card-qr/user/add`,
                    clone,
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                if (res?.data?.success) {
                    toastSuccessMessage(res?.data?.msg);
                    setLoader(false);
                    onClose();
                } else {
                    toastSuccessMessageError(res?.data?.msg);
                    setLoader(false);
                }
            }
        } catch (error) {
            console.error(error);
            toastSuccessMessageError(error?.message);
            setLoader(false);
        }
    };

    const getIdData = async (id) => {
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`https://onlineparttimejobs.in/api/card-qr/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            console.log(res?.data);

            setFormData(res?.data)
            const data = res?.data
            setQrType(data?.qr_type)
            setText(data?.text)
            setTextColor(data?.text_color)
            setFgColor(data?.foreground_color)
            setBgColor(data?.background_color)
            setCornerRadius(data?.corner_radius)
            setSize(data?.size)
            setImage(data?.image)

        } catch (error) {

        }
    }


    useEffect(() => {
        if (editCard?._id) getIdData(editCard._id);
    }, [editCard]);

    useEffect(() => {
        dispatch(fetchUseCard());
    }, [dispatch]);

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
                    QR Code Generator
                </h2>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* LEFT SIDE */}
                    <div className="w-full md:w-1/2 space-y-6">
                        {/* Select Card */}
                        <div>
                            <label className="block text-gray-700 mb-2">Select Card</label>
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
                                        (option?.label ?? "")
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
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

                        {/* Foreground */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Foreground Color
                            </label>
                            <input
                                type="color"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                                className="w-full h-10 cursor-pointer"
                            />
                        </div>

                        {/* Background */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Background Color
                            </label>
                            <input
                                type="color"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                                className="w-full h-10 cursor-pointer"
                            />
                        </div>

                        {/* Corner Radius */}
                        <div>
                            <label className="block text-gray-700 mb-2">Corner Radius</label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={cornerRadius}
                                onChange={(e) => setCornerRadius(e.target.value)}
                                className="w-full accent-blue-600"
                            />
                        </div>

                        {/* QR Type */}
                        <div>
                            <label className="block text-gray-700 mb-2">QR Type</label>
                            <select
                                value={qrType}
                                onChange={(e) => setQrType(e.target.value)}
                                className="w-full border rounded-md p-2"
                            >
                                <option value="normal">Normal</option>
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>
                        </div>

                        {/* Conditional Inputs */}
                        {qrType === "text" && (
                            <>
                                <div>
                                    <label className="block text-gray-700 mb-2">Text</label>
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        className="w-full border rounded-md p-2"
                                        placeholder="Enter your text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Text Color</label>
                                    <input
                                        type="color"
                                        value={textColor}
                                        onChange={(e) => setTextColor(e.target.value)}
                                        className="w-full h-10 cursor-pointer"
                                    />
                                </div>
                            </>
                        )}

                        {qrType === "image" && (
                            <div>
                                <label className="block text-gray-700 mb-2">Upload Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleChangeImage}
                                    className="w-full"
                                />
                                {loader && (
                                    <p className="text-sm text-blue-600">Uploading...</p>
                                )}
                                {image && (
                                    <img
                                        src={image}
                                        alt="Uploaded"
                                        className="mt-2 w-24 h-24 object-cover rounded-md border"
                                    />
                                )}
                            </div>
                        )}

                        {/* Size */}
                        <div>
                            <label className="block text-gray-700 mb-2">Size</label>
                            <input
                                type="range"
                                min="100"
                                max="400"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="w-full accent-blue-600"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loader}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        >
                            {loader
                                ? "Processing..."
                                : editCard
                                    ? "Update"
                                    : "Save"}
                        </button>
                    </div>

                    {/* RIGHT SIDE PREVIEW */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <div
                            className="relative"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                            }}
                        >
                            <div ref={qrRef} />
                            {qrType === "text" && text && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center font-semibold"
                                    style={{
                                        color: textColor,
                                        fontSize: size / 8,
                                        pointerEvents: "none",
                                    }}
                                >
                                    {text}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={downloadQR}
                            className="bg-pink-600 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition-all mt-3"
                        >
                            Download My QR Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrAdd;
