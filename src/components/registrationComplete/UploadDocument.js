"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { FaEye, FaFilePdf } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// dummy functions -> apni API import se replace karo


const UploadDocument = ({ nextStep, getVarifyallData, allData }) => {
    const [initialValue, setInitialValue] = useState({
        adhaar_front_card: "",
        adhaar_back_card: "",
        pan_card: "",
        gst: "",
        bank_proof: "",
        shop_internal_photo: "",
        shop_outside_photo: "",
    });

    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [btnDisable, setBtnDisable] = useState(true);
    const [isGstAvailable, setIsGstAvailable] = useState(false);

    // Modal state
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState({ type: "image", url: "" });

    // GST Validation
    useEffect(() => {
        // const gstIdVerified = async () => {
        //     try {
        //         const res = await userValidate();
        //         if (res?.data?.isGstAvailable) setIsGstAvailable(true);
        //     } catch (error) {
        //         console.error("GST Validation Error:", error);
        //     }
        // };
        // gstIdVerified();
    }, []);

    // GeoLocation
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition({
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    });
                },
                (err) => console.error("Geolocation Error:", err)
            );
        }
    }, []);

    const onChangeHandleImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Allowed types
        const allowedTypes =
            e.target.name === "gst"
                ? ["image/jpeg", "image/png", "image/webp", "application/pdf"]
                : ["image/jpeg", "image/png", "image/webp"];

        if (!allowedTypes.includes(file.type)) {
            toast.error("Invalid file type selected.");
            return;
        }

        // Size validation (225KB - 500KB)
        if (file.size > 500 * 1024 || file.size < 225 * 1024) {
            toast.error("File size must be between 225KB and 500KB.");
            return;
        }

        // try {
        //     const formData = new FormData();
        //     formData.append("image", file);

        //     const res = await cloudImage(formData);
        //     const newUrl = res.data?.data?.url;

        //     setTimeout(() => {
        //         const clone = { ...initialValue, [e.target.name]: newUrl };
        //         setInitialValue(clone);
        //         if (
        //             clone.adhaar_front_card &&
        //             clone.adhaar_back_card &&
        //             clone.pan_card &&
        //             clone.bank_proof
        //         ) {
        //             setBtnDisable(false);
        //         }

        //         toast.success("File uploaded successfully!");

        //     }, 1000)
        //     // Enable submit if mandatory docs uploaded

        // } catch (err) {
        //     setTimeout(() => {
        //         console.error("Upload Error:", err);
        //         toast.error("Upload failed!");
        //     }, 1000)
        // }
    };

    const submitData = async () => {
        // try {
        //     const res = await uploadDocumentset({
        //         ...initialValue,
        //         latitude: position.latitude,
        //         longitude: position.longitude,
        //         user_id:
        //             typeof window !== "undefined"
        //                 ? localStorage.getItem("userIdToken")
        //                 : "",
        //     });
        //     if (res?.data?.statusCode === "200") {
        //         toast.success("Documents uploaded successfully!");
        //         nextStep();
        //     }
        // } catch (err) {
        //     console.error("Document Upload Error:", err);
        //     toast.error("Upload failed.");
        // }
    };

    const openPreview = (url, type) => {
        setModalContent({ url, type });
        setOpenModal(true);
    };

    const renderFilePreview = (url, label) => {
        const isPdf = url.toLowerCase().endsWith(".pdf");
        if (isPdf) {
            return (
                <div
                    onClick={() => openPreview(url, "pdf")}
                    className="flex items-center gap-2 cursor-pointer mt-2 p-2 border rounded bg-gray-50"
                >
                    <FaFilePdf className="text-red-600" size={22} />
                    <span>{label} (PDF)</span>
                    <FaEye className="ml-auto text-gray-600" />
                </div>
            );
        }
        return (
            <div
                onClick={() => openPreview(url, "image")}
                className="relative w-32 h-20 mt-2 cursor-pointer"
            >
                <img
                    src={`${baseUrlImage}${url}`}
                    alt={label}
                    className="w-full h-full object-cover rounded"
                />
                <FaEye className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1" />
            </div>
        );
    };

    useEffect(() => {
        if (allData?.is_document == true) {
            setInitialValue({
                adhaar_front_card: allData?.docs?.adhaar_front_card,
                adhaar_back_card: allData?.docs?.adhaar_back_card,
                pan_card: allData?.docs?.pan_card,
                gst: allData?.docs?.gst,
                bank_proof: allData?.docs?.bank_proof,
                shop_internal_photo: allData?.docs?.shop_internal_photo,
                shop_outside_photo: allData?.docs?.shop_outside_photo,
                latitude: position.latitude,
                longitude: position.longitude,
                user_id:
                    typeof window !== "undefined"
                        ? localStorage.getItem("userIdToken")
                        : "",
            })
            setBtnDisable(false);

        }
    }, [allData])

    return (
        <div>
            <h3 className="text-lg font-semibold mb-6">Upload Required Documents</h3>

            <div className="space-y-6">
                {/* Aadhaar Front */}
                <div className="w-full">
                    <label className="block mb-2 text-sm">Upload Aadhaar Front</label>
                    <input
                        type="file"
                        name="adhaar_front_card"
                        className="w-full border rounded px-3 py-2"
                        onChange={onChangeHandleImage}
                    />
                    {initialValue.adhaar_front_card &&
                        renderFilePreview(initialValue.adhaar_front_card, "Aadhaar Front")}
                </div>

                {/* Aadhaar Back */}
                <div className="w-full">
                    <label className="block mb-2 text-sm">Upload Aadhaar Back</label>
                    <input
                        type="file"
                        name="adhaar_back_card"
                        className="w-full border rounded px-3 py-2"
                        onChange={onChangeHandleImage}
                    />
                    {initialValue.adhaar_back_card &&
                        renderFilePreview(initialValue.adhaar_back_card, "Aadhaar Back")}
                </div>

                {/* PAN Card */}
                <div className="w-full">
                    <label className="block mb-2 text-sm">Upload PAN Card Front</label>
                    <input
                        type="file"
                        name="pan_card"
                        className="w-full border rounded px-3 py-2"
                        onChange={onChangeHandleImage}
                    />
                    {initialValue.pan_card &&
                        renderFilePreview(initialValue.pan_card, "PAN Card")}
                </div>

                {/* Bank Proof */}
                <div className="w-full">
                    <label className="block mb-2 text-sm">Upload Bank Proof</label>
                    <input
                        type="file"
                        name="bank_proof"
                        className="w-full border rounded px-3 py-2"
                        onChange={onChangeHandleImage}
                    />
                    {initialValue.bank_proof &&
                        renderFilePreview(initialValue.bank_proof, "Bank Proof")}
                </div>

                {/* Shop Internal Photo */}
                <div className="w-full">
                    <label className="block mb-2 text-sm">Upload Shop Interior Photo</label>
                    <input
                        type="file"
                        name="shop_internal_photo"
                        className="w-full border rounded px-3 py-2"
                        onChange={onChangeHandleImage}
                    />
                    {initialValue.shop_internal_photo &&
                        renderFilePreview(
                            initialValue.shop_internal_photo,
                            "Shop Interior"
                        )}
                </div>

                {/* Shop Outside Photo */}
                <div className="w-full">
                    <label className="block mb-2 text-sm">Upload Shop Exterior Photo</label>
                    <input
                        type="file"
                        name="shop_outside_photo"
                        className="w-full border rounded px-3 py-2"
                        onChange={onChangeHandleImage}
                    />
                    {initialValue.shop_outside_photo &&
                        renderFilePreview(initialValue.shop_outside_photo, "Shop Exterior")}
                </div>

                {/* GST (Optional) */}
                {isGstAvailable && (
                    <div className="w-full">
                        <label className="block mb-2 text-sm">Upload GST Certificate</label>
                        <input
                            type="file"
                            name="gst"
                            className="w-full border rounded px-3 py-2"
                            onChange={onChangeHandleImage}
                        />
                        {initialValue.gst &&
                            renderFilePreview(initialValue.gst, "GST Certificate")}
                    </div>
                )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={submitData}
                    disabled={btnDisable}
                    className={`px-6 py-2 rounded text-white ${btnDisable
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                        }`}
                >
                    Submit
                </button>
                <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                    Next
                </button>
            </div>

            {/* Preview Modal */}
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4">
                        <Dialog.Title className="text-lg font-semibold mb-4">
                            Document Preview
                        </Dialog.Title>
                        {/* {modalContent.type === "image" ? (
                            <img
                                src={`${baseUrlImage}${modalContent.url}`}
                                alt="Preview"
                                className="w-full h-auto rounded"
                            />
                        ) : (
                            <iframe
                                src={`${baseUrlImage}${modalContent.url}#toolbar=0`}
                                className="w-full h-[80vh]"
                                title="PDF Preview"
                            />
                        )} */}
                        <div className="mt-4 flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-600 text-white rounded"
                                onClick={() => setOpenModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};

export default UploadDocument;
