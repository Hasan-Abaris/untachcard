
"use client";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function AddGoogleWallets() {
    const [form, setForm] = useState({
        issuer: "",
        event: "",
        heroImage: "",
        contentDesc: "",
        barcodeValue: "",
        latitude: "",
        longitude: "",
        seatValue: "",
        rowValue: "",
        sectionValue: "",
        gateValue: "",
        ticketHolder: "",
        ticketNumber: "",
        textHeader: "",
        textBody: "",
        linkUri: "",
        linkDesc: "",
        imgUri: "",
        imgDesc: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <div className="pt-19 p-4" >
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Add Google Wallet
                    </h1>
                </div>

            </div >
            <div className="w-full px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Form */}
                    <div className="bg-white shadow rounded-lg p-4 space-y-4">
                        <label className="block text-sm font-medium">
                            google wallet card*
                        </label>
                        <select
                            className="w-full border rounded-lg p-2"
                            name="cardType"
                            defaultValue="EventTicket"
                        >
                            <option value="EventTicket">EventTicket</option>
                            <option value="GiftCard">GiftCard</option>
                        </select>

                        <h3 className="font-semibold text-blue-600">Contents</h3>
                        <input
                            className="w-full border p-2 rounded"
                            placeholder="Issuer name*"
                            name="issuer"
                            value={form.issuer}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full border p-2 rounded"
                            placeholder="Event Name*"
                            name="event"
                            value={form.event}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full border p-2 rounded"
                            placeholder="Hero Image*"
                            name="heroImage"
                            value={form.heroImage}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full border p-2 rounded"
                            placeholder="Content Description"
                            name="contentDesc"
                            value={form.contentDesc}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full border p-2 rounded"
                            placeholder="Barcode Value"
                            name="barcodeValue"
                            value={form.barcodeValue}
                            onChange={handleChange}
                        />

                        <div className="grid grid-cols-2 gap-2">
                            <input
                                className="border p-2 rounded"
                                placeholder="Latitude"
                                name="latitude"
                                value={form.latitude}
                                onChange={handleChange}
                            />
                            <input
                                className="border p-2 rounded"
                                placeholder="Longitude"
                                name="longitude"
                                value={form.longitude}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <input
                                className="border p-2 rounded"
                                placeholder="Seat Value"
                                name="seatValue"
                                value={form.seatValue}
                                onChange={handleChange}
                            />
                            <input
                                className="border p-2 rounded"
                                placeholder="Row Value"
                                name="rowValue"
                                value={form.rowValue}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <input
                                className="border p-2 rounded"
                                placeholder="Section Value"
                                name="sectionValue"
                                value={form.sectionValue}
                                onChange={handleChange}
                            />
                            <input
                                className="border p-2 rounded"
                                placeholder="Gate Value"
                                name="gateValue"
                                value={form.gateValue}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <input
                                className="border p-2 rounded"
                                placeholder="Ticket Holder Name"
                                name="ticketHolder"
                                value={form.ticketHolder}
                                onChange={handleChange}
                            />
                            <input
                                className="border p-2 rounded"
                                placeholder="Ticket Number"
                                name="ticketNumber"
                                value={form.ticketNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Middle Preview */}
                    <div className="bg-white shadow rounded-lg p-4">
                        <button className="bg-pink-600 text-white w-full py-2 rounded-lg mb-4">
                            G GOOGLE
                        </button>
                        <div className="bg-pink-600 text-white rounded-lg p-4 space-y-3 text-center">
                            <div className="text-left">
                                <div className="font-bold">{form.issuer || "Issuer"}</div>
                            </div>
                            <div className="text-2xl font-bold">{form.event || "Event Name"}</div>
                            <div className="flex justify-between text-sm">
                                <span>Gate {form.gateValue || "—"}</span>
                                <span>Section {form.sectionValue || "—"}</span>
                                <span>Row/seat {form.rowValue || "—"} / {form.seatValue || "—"}</span>
                            </div>
                            <div className="flex justify-center">
                                {form.barcodeValue ? (
                                    <QRCodeSVG value={form.barcodeValue} size={120} />
                                ) : (
                                    <div className="w-[120px] h-[120px] flex items-center justify-center bg-white text-black rounded">
                                        QR
                                    </div>
                                )}
                            </div>
                            {form.heroImage && (
                                <img
                                    src={form.heroImage}
                                    alt="Hero"
                                    className="w-full h-24 object-cover rounded"
                                />
                            )}
                            <div className="text-left">
                                <div className="font-semibold">Ticket holder</div>
                                <div>{form.ticketHolder || "—"}</div>
                                <div className="font-semibold">Ticket number</div>
                                <div>{form.ticketNumber || "—"}</div>
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg">
                            Generate
                        </button>
                    </div>

                    {/* Right Module Data */}
                    <div className="bg-white shadow rounded-lg p-4 space-y-4">
                        <h3 className="font-semibold text-blue-600">Module Data</h3>
                        <div>
                            <label className="block text-sm font-medium">Text Modules Data</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    className="border p-2 rounded"
                                    placeholder="Header"
                                    name="textHeader"
                                    value={form.textHeader}
                                    onChange={handleChange}
                                />
                                <input
                                    className="border p-2 rounded"
                                    placeholder="Body"
                                    name="textBody"
                                    value={form.textBody}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Links Modules Data</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    className="border p-2 rounded"
                                    placeholder="URI"
                                    name="linkUri"
                                    value={form.linkUri}
                                    onChange={handleChange}
                                />
                                <input
                                    className="border p-2 rounded"
                                    placeholder="Description"
                                    name="linkDesc"
                                    value={form.linkDesc}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Image Modules Data</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    className="border p-2 rounded"
                                    placeholder="URI"
                                    name="imgUri"
                                    value={form.imgUri}
                                    onChange={handleChange}
                                />
                                <input
                                    className="border p-2 rounded"
                                    placeholder="Content Description"
                                    name="imgDesc"
                                    value={form.imgDesc}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
