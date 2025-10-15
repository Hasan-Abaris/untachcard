"use client";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { X, Copy, Download, Share2, Mail, Linkedin, Facebook, Twitter, MessageCircle } from "lucide-react";

export default function ShareVCardModal({ isOpen, onClose, data, qrUrl, theme }) {
    const [copied, setCopied] = useState(false);
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    const shareUrl = `https://i-tap-cards-9vx4.vercel.app/preview/${theme}/${theme}/${data?.slug}`
    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getField = (type) =>
        data?.fields.find((item) => item.type.toLowerCase() === type.toLowerCase());
    const mobile = getField("mobile");
    const email = getField("email");
    const address = getField("address");
    const website = getField("website");
    const facebook = getField("facebook");
    const instagram = getField("instagram");
    const twitter = getField("twitter");
    const linkedin = getField("linkedin");

    useEffect(() => {
        if (!shareUrl) return;
        QRCode.toDataURL(shareUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: "#000000",
                light: "#ffffff",
            },
        })
            .then((url) => setQrCodeUrl(url))
            .catch((err) => console.error("QR Code error:", err));
    }, [shareUrl]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#111] text-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X size={22} />
                </button>


                <h2 className="text-center text-xl font-semibold mb-6">
                    Share My <span className="text-blue-400">vCard</span>
                </h2>


                <div className="bg-white p-4 rounded-lg w-[250px] h-[250px] mx-auto flex items-center justify-center">
                    {qrCodeUrl ? (
                        <img
                            src={qrCodeUrl}
                            alt="QR Code"
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <span className="text-black text-sm">Generating QR...</span>
                    )}
                </div>


                <button
                    onClick={() => {
                        const a = document.createElement("a");
                        a.href = qrCodeUrl;
                        a.download = `${data?.slug || "vcard"}-qrcode.png`;
                        a.click();
                    }}
                    className="mt-5 w-full border border-gray-500 rounded-lg py-2 hover:bg-gray-800 transition-all"
                >
                    <Download className="inline-block mr-2" size={18} />
                    Download My QR Code
                </button>
                <div className="flex justify-center items-center gap-4 mt-6 text-gray-300">
                    {mobile && (<a href={`https://wa.me/?text=${mobile?.url}`} target="_blank" className="hover:text-green-400"><MessageCircle size={22} /></a>)}
                    {facebook && (<a href={`https://www.facebook.com/sharer/sharer.php?u=${facebook?.url}`} target="_blank" className="hover:text-blue-500"><Facebook size={22} /></a>)}
                    {twitter && (<a href={`https://twitter.com/intent/tweet?url=${twitter?.url}`} target="_blank" className="hover:text-sky-400"><Twitter size={22} /></a>)}
                    {linkedin && (<a href={`https://www.linkedin.com/shareArticle?url=${linkedin?.url}`} target="_blank" className="hover:text-blue-400"><Linkedin size={22} /></a>)}
                    {email && (<a href={`mailto:${email.url}`} className="hover:text-pink-400"><Mail size={22} /></a>)}
                    {/* {facebook && ()} */}
                    <button className="hover:text-gray-100"
                        onClick={() => {
                            if (navigator.share) {
                                navigator
                                    .share({
                                        title: "My vCard",
                                        text: "Check out my digital vCard!",
                                        url: shareUrl,
                                    })
                                    .then(() => console.log("Share successful"))
                                    .catch((error) => console.log("Error sharing:", error));
                            } else {
                                alert("Sharing is not supported in your browser.");
                            }
                        }}
                    ><Share2 size={22} /></button>
                </div>
                <div className="flex items-center mt-6 bg-[#222] rounded-lg overflow-hidden">
                    <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-gray-300"
                    />
                    <button
                        onClick={handleCopy}
                        className="px-3 py-2 hover:bg-gray-700 transition-all"
                    >
                        {copied ? (
                            <span className="text-green-400 text-sm">Copied!</span>
                        ) : (
                            <Copy size={18} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
