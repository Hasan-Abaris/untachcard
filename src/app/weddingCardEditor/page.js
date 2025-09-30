"use client";
import { useEffect, useRef, useState } from "react";

const fabricPromise = import("fabric").then((mod) => mod.fabric);

export default function WeddingCardEditor() {
    const canvasRef = useRef(null);
    const [fabric, setFabric] = useState(null);
    const [selectedObj, setSelectedObj] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fabricPromise.then((f) => setFabric(f));
    }, []);

    useEffect(() => {
        if (!fabric) return;

        const canvas = new fabric.Canvas("card-canvas", {
            width: 400,
            height: 700,
            backgroundColor: "#fff8f0",
            selection: true,
        });
        canvasRef.current = canvas;

        // ✅ Background from external URL (crossOrigin required)
        fabric.Image.fromURL(
            "https://image.wedmegood.com/e-invite-images/96a68f75-d8a8-4b94-bbff-db3b52a04e7f-bgImage.JPEG",
            (img) => {
                img.set({ crossOrigin: "anonymous" });
                img.scaleToWidth(canvas.width);
                img.scaleToHeight(canvas.height);
                canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
            },
            { crossOrigin: "anonymous" }
        );

        // ✅ Couple Image (put couple.png inside /public folder)
        fabric.Image.fromURL(
            "/assets/banner/g1.jpeg",
            (img) => {
                img.scaleToWidth(200);
                img.set({ left: 100, top: 450, selectable: true });
                canvas.add(img);
                canvas.renderAll();
            },
            { crossOrigin: "anonymous" }
        );

        // ✅ Default Text
        const nameText = new fabric.Textbox("ABHIJEET weds VARNIKA", {
            left: 60,
            top: 100,
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            width: 280,
        });

        const dateText = new fabric.Textbox("20.10.2026", {
            left: 130,
            top: 160,
            fontSize: 18,
            fill: "white",
            backgroundColor: "#ec4899",
            textAlign: "center",
            width: 140,
        });

        const venueText = new fabric.Textbox("Venue: Chattarpur Farms, Delhi", {
            left: 60,
            top: 210,
            fontSize: 16,
            textAlign: "center",
            width: 280,
        });

        canvas.add(nameText, dateText, venueText);
        canvas.renderAll();

        // Select object listener
        canvas.on("selection:created", (e) => setSelectedObj(e.target));
        canvas.on("selection:updated", (e) => setSelectedObj(e.target));
        canvas.on("selection:cleared", () => setSelectedObj(null));

        // Save history
        canvas.on("object:modified", saveHistory);
        canvas.on("object:added", saveHistory);

        function saveHistory() {
            setHistory((prev) => [...prev, JSON.stringify(canvas.toJSON())]);
        }

        return () => {
            canvas.dispose();
        };
    }, [fabric]);

    // ➤ Add Text
    const handleAddText = () => {
        if (!canvasRef.current || !fabric) return;
        const text = new fabric.Textbox("New Text", {
            left: 100,
            top: 300,
            fontSize: 18,
            fill: "black",
        });
        canvasRef.current.add(text);
        canvasRef.current.setActiveObject(text);
        canvasRef.current.renderAll();
    };

    // ➤ Delete Selected
    const handleDelete = () => {
        if (canvasRef.current && selectedObj) {
            canvasRef.current.remove(selectedObj);
            setSelectedObj(null);
            canvasRef.current.renderAll();
        }
    };

    // ➤ Change Font Size
    const handleFontSize = (size) => {
        if (selectedObj && selectedObj.type === "textbox") {
            selectedObj.set("fontSize", size);
            canvasRef.current.renderAll();
        }
    };

    // ➤ Undo
    const handleUndo = () => {
        if (history.length < 2) return;
        const prev = history[history.length - 2];
        canvasRef.current.loadFromJSON(prev, () => {
            canvasRef.current.renderAll();
            setHistory(history.slice(0, history.length - 1));
        });
    };

    // ➤ Export
    const handleExport = () => {
        if (!canvasRef.current) return;
        const dataURL = canvasRef.current.toDataURL({ format: "png", quality: 1 });
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "wedding-card.png";
        link.click();
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 mt-20">
            <h2 className="text-2xl font-bold">Wedding Card Editor</h2>

            {/* Canvas */}
            <canvas id="card-canvas" className="border shadow-md"></canvas>

            {/* Controls */}
            <div className="flex flex-wrap gap-3 mt-4">
                <button
                    onClick={handleAddText}
                    className="px-3 py-2 bg-blue-500 text-white rounded"
                >
                    Add Text
                </button>

                <button
                    onClick={handleDelete}
                    className="px-3 py-2 bg-red-500 text-white rounded"
                >
                    Delete
                </button>

                <button
                    onClick={handleUndo}
                    className="px-3 py-2 bg-gray-500 text-white rounded"
                >
                    Undo
                </button>

                <button
                    onClick={() => handleFontSize(30)}
                    className="px-3 py-2 bg-purple-500 text-white rounded"
                >
                    Bigger Text
                </button>

                <button
                    onClick={() => handleFontSize(16)}
                    className="px-3 py-2 bg-yellow-500 text-white rounded"
                >
                    Smaller Text
                </button>

                <button
                    onClick={handleExport}
                    className="px-3 py-2 bg-pink-500 text-white rounded"
                >
                    Save as Image
                </button>
            </div>
        </div>
    );
}
