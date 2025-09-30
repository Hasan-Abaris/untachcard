"use client";


import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const VideoKyc = ({ allData }) => {
    const liveVideoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [videoUrl, setVideoUrl] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    // 🎥 Start Recording
    const handleStartRecording = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });

            if (liveVideoRef.current) {
                liveVideoRef.current.srcObject = mediaStream;
                await liveVideoRef.current.play();
            }

            const mediaRecorder = new MediaRecorder(mediaStream, {
                mimeType: "video/webm;codecs=vp9",
            });

            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    setRecordedChunks((prev) => [...prev, event.data]); // ✅ direct state update
                }
            };

            mediaRecorder.onstop = () => {
                if (recordedChunks.length > 0) {
                    const blob = new Blob(recordedChunks, { type: "video/webm" });
                    const url = URL.createObjectURL(blob);
                    setVideoUrl(url);
                }

                // stop camera after recording
                mediaStream.getTracks().forEach((track) => track.stop());
            };

            setRecordedChunks([]); // clear previous chunks
            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Camera error:", error);
            toast.error("Unable to access camera. Please allow permission.");
        }
    };

    // ⏹ Stop Recording
    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    // 🔄 Retake
    const handleRetake = () => {
        setVideoUrl(null);
        setRecordedChunks([]);
    };

    // ⬆ Upload
    const handleUpload = async () => {
        if (!recordedChunks || recordedChunks.length === 0) {
            toast.error("No video recorded!");
            return;
        }

        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const formData = new FormData();
        formData.append("video", blob, "recorded_video.webm");
        formData.append("user_id", window.localStorage.getItem("userIdToken"));

        // try {
        //     setIsUploading(true);
        //     const res = await videoKycUpload(formData);
        //     if (res?.data?.statusCode === "200") {
        //         toast.success(res?.data?.message || "Video uploaded successfully!");
        //     } else {
        //         toast.error(res?.data?.message || "Upload failed");
        //     }
        // } catch (err) {
        //     toast.error("Error uploading video");
        //     console.error(err);
        // } finally {
        //     setIsUploading(false);
        // }
    };

    // 📌 Load video from API if exists
    useEffect(() => {
        if (allData?.is_kycVid === true && allData?.kycVideo) {
            setVideoUrl(`${baseUrlImage}${allData.kycVideo}`);
        }
    }, [allData]);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 text-center">
                Video KYC Upload
            </h3>

            {/* 🎬 Video Area */}
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
                {!videoUrl ? (
                    <video
                        ref={liveVideoRef}
                        muted
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <video
                        src={videoUrl}
                        controls
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* 🎛 Controls */}
            <div className="flex justify-center gap-3 flex-wrap">
                {!videoUrl && !isRecording && (
                    <button
                        onClick={handleStartRecording}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        🎥 Start Recording
                    </button>
                )}

                {isRecording && (
                    <button
                        onClick={handleStopRecording}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        ⏹ Save
                    </button>
                )}

                {videoUrl && (
                    <>
                        <button
                            onClick={handleRetake}
                            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                        >
                            🔄 Retake
                        </button>
                        <button
                            onClick={handleUpload}
                            disabled={isUploading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            {isUploading ? "Uploading..." : "⬆ Upload"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default VideoKyc;
