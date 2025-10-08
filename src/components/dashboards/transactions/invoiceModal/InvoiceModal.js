"use client";

import { useEffect, useState, useRef } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import axios from "axios";
import { base_url } from "@/server";

export default function InvoiceModal({ isOpen, onClose, detailsId }) {
    const [detailsData, setDetailsData] = useState(null);

    // Fetch invoice data
    const getByIdData = async (id) => {
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`${base_url}card-transaction/detail/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDetailsData(res?.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (detailsId?.invoiceId) getByIdData(detailsId.invoiceId);
    }, [detailsId]);

    if (!isOpen) return null;


    const styles = StyleSheet.create({
        page: { padding: 30, fontSize: 12, fontFamily: 'Helvetica' },
        title: { fontSize: 24, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
        headerRow: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
        tableHeader: { display: 'flex', flexDirection: 'row', borderBottom: 1, borderTop: 1, paddingVertical: 5, backgroundColor: '#f3f3f3' },
        tableRow: { display: 'flex', flexDirection: 'row', borderBottom: 0.5, paddingVertical: 5 },
        cell: { flex: 1, paddingHorizontal: 3 },
        cellRight: { flex: 1, paddingHorizontal: 3, textAlign: 'right' },
        total: { marginTop: 10, fontSize: 16, fontWeight: 'bold', textAlign: 'right' },
        bold: { fontWeight: 'bold' },
        subText: { fontSize: 10, color: '#666666' },
    });

    const MyDocument = (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Invoice</Text>
                <View style={styles.headerRow}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#e11d48', fontWeight: 'bold' }}>VCARD</Text>
                        {/* <Text style={styles.subText}>https://i-tap-cards-9vx4.vercel.app/</Text> */}
                    </View>
                    <View>
                        <Text style={styles.subText}>Invoice No:</Text>
                        <Text style={styles.bold}>{detailsData?.invoiceId || "N/A"}</Text>
                    </View>
                </View>
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.bold}>Invoice Date:</Text>
                        <Text>{detailsData?.createdAt ? new Date(detailsData.createdAt).toLocaleDateString() : "N/A"}</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Payment Type:</Text>
                        <Text>{detailsData?.method || "N/A"}</Text>
                    </View>
                </View>
                <View style={styles.tableHeader}>
                    <Text style={styles.cell}>Plan</Text>
                    <Text style={styles.cell}>Payment Status</Text>
                    <Text style={styles.cellRight}>Price</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cell}>{detailsData?.planId?.title || "N/A"}</Text>
                    <Text style={styles.cell}>{detailsData?.paymentStatus || "Pending"}</Text>
                    <Text style={styles.cellRight}>₹ {detailsData?.Amount || "0"}</Text>
                </View>
                <Text style={styles.total}>
                    Total: ₹ {detailsData?.Amount || "0"}
                </Text>
            </Page>
        </Document>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl relative p-8">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-600 hover:text-black"
                >
                    ✕
                </button>

                {/* Modal Preview — exactly like PDF */}
                <div className="p-8 text-gray-800 border rounded-lg mb-4">
                    <h1 className="text-3xl font-bold border-b pb-2 mb-6 text-center">Invoice</h1>

                    <div className="flex justify-between mb-6">
                        <div>
                            <h2 className="text-pink-600 font-bold text-2xl">VCARD</h2>
                            {/* <p className="text-sm text-gray-500 mt-1">www.vcardapp.in</p> */}
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Invoice No:</p>
                            <p className="font-bold">{detailsData?.invoiceId || "N/A"}</p>
                        </div>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-6">
                        <div>
                            <p className="font-semibold">Invoice Date:</p>
                            <p>{detailsData?.createdAt ? new Date(detailsData.createdAt).toLocaleDateString() : "N/A"}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Payment Type:</p>
                            <p>{detailsData?.method || "N/A"}</p>
                        </div>
                    </div>

                    <table className="w-full border-t border-b mb-6">
                        <thead className="bg-gray-100">
                            <tr className="text-left">
                                <th className="py-2 px-3">Plan</th>
                                <th className="py-2 px-3">Payment Status</th>
                                <th className="py-2 px-3 text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-3">{detailsData?.planId?.title || "N/A"}</td>
                                <td className="py-2 px-3">{detailsData?.paymentStatus || "Pending"}</td>
                                <td className="py-2 px-3 text-right">₹ {detailsData?.Amount || "0"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-right mt-4 text-2xl font-bold">
                        Total: <span className="text-pink-700">₹ {detailsData?.Amount || "0"}</span>
                    </div>
                </div>

                {/* PDF Download Button */}
                {detailsData && (
                    <PDFDownloadLink document={MyDocument} fileName={`invoice_${detailsData?.invoiceId}.pdf`}>
                        {({ loading }) =>
                            loading ? "Preparing PDF..." : (
                                <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                                    Download PDF
                                </button>
                            )
                        }
                    </PDFDownloadLink>
                )}
            </div>
        </div>
    );
}
