"use client";

import { fetchUseCard } from "@/app/reduxToolkit/slice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FiMoreVertical,
  FiEdit2,
  FiCopy,
  FiBarChart2,
  FiUsers,
  FiPhone,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import NewVcardModal from "./create-vcard";
import { Popconfirm } from "antd";
import { MdDelete } from "react-icons/md";
import { base_url } from "@/server";
import axios from "axios";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import Image from "next/image";

const VcardsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editCard, setEditCard] = useState(null);
  // console.log(editCard);


  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const dispatch = useDispatch()
  const { cardData, loading, error } = useSelector((state) => state.auth)
  // console.log(cardData);

  useEffect(() => {
    dispatch(fetchUseCard());
  }, [dispatch]);

  const handleCreateModal = () => {
    setEditCard(null);
    setIsOpen(true);
  };


  const handleEditModal = (card) => {
    // console.log(card);

    setEditCard(card);
    setIsOpen(true);
  };

  // ✅ close modal
  const handleCloseModal = () => {
    setIsOpen(false);
    setEditCard(null);
  };

  const handleDelete = async (id) => {
    console.log();

    try {
      // seyLoader(true);
      const token = window.localStorage.getItem("token");
      const res = await axios.delete(`${base_url}card/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res);


      if (res?.status === 200) {
        toastSuccessMessage("Delete Successfull");
        dispatch(fetchUseCard());
      } else {
        toastSuccessMessageError(res?.data?.msg || "Unable to delete inquiry.");
      }
    } catch (error) {
      toastSuccessMessageError("Delete failed! Server error.");
    } finally {
      // seyLoader(false);
    }
  };


  if (loading) return <p>Loading cards...</p>;

  if (error) {
    // console.error("Card list error:", error);
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded">
        <p className="font-semibold">Error loading cards</p>
        <p className="text-sm">{error.message || JSON.stringify(error)}</p>
      </div>
    );
  }

  if (!cardData) return <p>No card data available</p>;
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Card List</h1>
        <div className="flex gap-3">
          {/* <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
          {/* <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button> */}

          {/* <Link href="/Dashboard/vcards/create"> */}
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer" onClick={handleCreateModal}>
            New vCard
          </button>
          {/* </Link> */}
        </div>
      </div>

      {/* Search Bar */}
      {/* <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div> */}

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              {/* <th className="px-4 py-3">
                <input type="checkbox" />
              </th> */}
              <th className="px-4 py-3">vCards</th>
              <th className="px-4 py-3">PREVIEW URL</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">STATS</th>
              <th className="px-4 py-3">CREATED AT</th>
              <th className="px-4 py-3">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {cardData && cardData?.data?.map((card) => (
              <tr key={card._id} className="border-b hover:bg-gray-50">
                {/* <td className="px-4 py-3">
                  <input type="checkbox" />
                </td> */}
                <td className="px-4 py-3 flex items-center gap-2">
                  {card?.profile ? (
                    <Image
                      src={card?.profile}
                      alt={card.title || "vCard"}
                      className="w-8 h-8 rounded object-cover"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <Image
                      src="/default-avatar.png"
                      alt="Default vCard"
                      className="w-8 h-8 rounded object-cover"
                      width={80}
                      height={80}
                    />
                  )}
                  <div>
                    <p className="font-medium text-indigo-600">{card.title}</p>
                    {/* {card.subtitle && (
                      <p className="text-xs text-gray-500">{card.subtitle}</p>
                    )} */}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-indigo-500">
                    <a
                      // http://localhost:3319
                      href={`https://untachcard.vercel.app/${card?.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {`https://untachcard.vercel.app/${card?.slug}`}
                    </a>
                    <FiCopy className="cursor-pointer hover:text-indigo-700" onClick={() => {
                      const link = `https://untachcard.vercel.app/${card?.slug}`;
                      navigator.clipboard.writeText(link);
                      alert("✅ Link copied to clipboard!");
                    }} />
                  </div>
                </td>

                {/* ✅ Fixed the error here */}
                <td className="px-4 py-3">
                  {/* <Link href="/dashboards/vcards/stats">
                    <FiBarChart2 className="text-indigo-500 cursor-pointer bg-amber-100" />
                  </Link> */}
                  {card?.enquery_email}
                </td>

                <td className="px-4 py-3">
                  {/* <FiUsers className="text-indigo-500 cursor-pointer" /> */}
                  Views:{card?.views} <br />
                  Scans:{card?.scans} <br />
                </td>
                {/* <td className="px-4 py-3">
                  <FiPhone className="text-indigo-500 cursor-pointer" />
                </td> */}
                {/* <td className="px-4 py-3">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={card.active}
                    />
                    <div className="relative w-10 h-5 bg-gray-200 peer-checked:bg-indigo-500 rounded-full peer transition"></div>
                  </label>
                </td> */}
                <td className="px-4 py-3">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                    {card.created || card.createdAt}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2 relative">
                  <FiEdit2
                    className="text-indigo-500 cursor-pointer hover:text-indigo-700"
                    type="button"
                    onClick={() => handleEditModal(card)}
                  />
                  <div className="relative">
                    {/* <FiMoreVertical
                      className="text-gray-500 cursor-pointer hover:text-gray-700"
                      onClick={() => toggleDropdown(card.id)}
                    /> */}

                    <Popconfirm
                      title="Delete Card"
                      description="Are you sure you want to delete this Card?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => handleDelete(card._id)}
                    >
                      <MdDelete
                        size={22}
                        color="red"
                        className="cursor-pointer hover:scale-110 transition"
                      />
                    </Popconfirm>
                    {/* {dropdownOpen[card.id] && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <ul className="py-1">
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            QR Code
                          </li>
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            Download vCard
                          </li>
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            Inquiries
                          </li>
                          <li className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                            Duplicate vCard
                          </li>
                          <li className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                            Delete
                          </li>
                        </ul>
                      </div>
                    )} */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NewVcardModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        editCard={editCard}
      />
    </div >
  );
};

export default VcardsPage;
