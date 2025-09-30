"use client"

import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import InquiriesDetails from './InquiriesDetails/InquiriesDetails';

const Inquiries = () => {
    const [isOpen, setIsOpen] = useState(false);
    const inquiry = {
        vcardName: "tiytuet",
        name: "Rakesh samal",
        email: "rakeshsamalofficial@gmail.com",
        phone: "9827103552",
        message: "Testing email",
    };

    return (
        <>

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
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        />
                        <svg
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
                        </svg>
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
                            <tr className='text-center'>
                                <td>tiytuet</td>
                                <td><span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-md">
                                    Rakesh samal
                                </span></td>
                                <td>rakeshsamalofficial@gmail.com</td>
                                <td>9827103552</td>
                                <td>N/A</td>
                                <td>Aug 06 2025</td>

                                <td className="py-4 px-4 text-center text-blue-500 flex" >
                                    <FaEye size={25} onClick={() => setIsOpen(true)} />

                                    <MdDelete size={25} color='red' />

                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>

                <InquiriesDetails
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    inquiry={inquiry}
                />


            </div>
        </>
    )
}

export default Inquiries