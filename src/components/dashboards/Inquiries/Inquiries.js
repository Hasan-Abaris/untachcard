"use client"

import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import InquiriesDetails from './InquiriesDetails/InquiriesDetails';
import axios from 'axios';
import { base_url } from '@/server';
import Loader from '@/components/common/loader/Loader';
import { Pagination, Popconfirm } from 'antd';
import { toastSuccessMessage, toastSuccessMessageError } from '@/components/common/messageShow/MessageShow';
import { ToastContainer } from 'react-toastify';

const Inquiries = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inquiryData, setInquiryData] = useState([]);
    const [loader, seyLoader] = useState(false)
    const [detailsId, setDetailsId] = useState(null);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(10);
    const [total, setTotal] = useState(0);


    const inquryGet = async () => {
        seyLoader(true)
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`${base_url}card-inquiry/my-inquiry?page=0&count=10`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setInquiryData(res?.data?.data || []);
            setTotal(res?.data?.totalRecords || 0);
            seyLoader(false)
        } catch (error) {
            seyLoader(false)
            alert("server side error")
        }
    }

    useEffect(() => {
        inquryGet();
    }, [page, count]);

    const totalPages = Math.ceil(total / count);

    const openDeatils = async (item) => {
        setDetailsId(item)
        setIsOpen(true)
    }

    const handleDelete = async (id) => {
        try {
            seyLoader(true);
            const token = window.localStorage.getItem("token");
            const res = await axios.delete(`${base_url}card-inquiry/delete/public/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res?.data?.success) {
                toastSuccessMessage(res?.data?.msg);
                inquryGet();
            } else {
                toastSuccessMessageError(res?.data?.msg || "Unable to delete inquiry.");
            }
        } catch (error) {
            message.error("Delete failed! Server error.");
        } finally {
            seyLoader(false);
        }
    };
    return (
        <>
            {loader && <Loader />}

            <div className="pt-19 p-4">
                <div className=" bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-pink-600 text-center">
                        Cards Inquiries
                    </h1>
                </div>
            </div>

            <div className="w-full px-4 py-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-1/3">
                        {/* <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"

                        /> */}
                        {/* <svg
                            className="absolute left-3 top-2.5 text-gray-400 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg> */}
                    </div>

                </div>

                {/* Table */}
                <div className="overflow-x-auto shadow rounded-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="text-gray-600 uppercase text-sm leading-normal bg-gray-100">
                                <th className="py-3 px-6 text-left">VCARD NAME</th>
                                <th className="py-3 px-6 text-left">NAME</th>
                                <th className="py-3 px-6 text-center">EMAIL</th>
                                <th className="py-3 px-6 text-center">PHONE</th>
                                <th className="py-3 px-6 text-center">ATTACHMENT</th>
                                <th className="py-3 px-6 text-center">CREATED ON
                                </th>

                                <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {inquiryData.length > 0 ? (
                                inquiryData.map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <td>{item.cardId?.title || "N/A"}</td>
                                        <td>
                                            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-md">
                                                {item.name}
                                            </span>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.attachment || "N/A"}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td className="py-4 px-4 text-center text-blue-500 flex justify-center gap-3">
                                            <FaEye size={25} onClick={() => openDeatils(item)} />
                                            <Popconfirm
                                                title="Delete Inquiry"
                                                description="Are you sure you want to delete this inquiry?"
                                                okText="Yes"
                                                cancelText="No"
                                                onConfirm={() => handleDelete(item._id)}
                                            >
                                                <MdDelete
                                                    size={22}
                                                    color="red"
                                                    className="cursor-pointer hover:scale-110 transition"
                                                />
                                            </Popconfirm>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-4">No inquiries found</td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                </div>

                {total > 0 && (
                    <div className="flex  mt-6 justify-between">
                        Total Data {total}
                        <Pagination
                            current={page}
                            pageSize={count}
                            total={total}
                            onChange={(p, ps) => {
                                setPage(p);
                                setCount(ps);
                            }}
                            showSizeChanger
                            pageSizeOptions={['10', '20', '50']}
                        />
                    </div>
                )}

                <InquiriesDetails
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    detailsId={detailsId}
                />

                <ToastContainer />
            </div>
        </>
    )
}

export default Inquiries