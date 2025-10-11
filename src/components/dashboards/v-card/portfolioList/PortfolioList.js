
import React, { useEffect, useState } from 'react'
import PortfolioAdd from './portfolioAdd/PortfolioAdd';
import { Popconfirm, Select, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProductService } from '@/app/reduxToolkit/slice';
import { base_url } from '@/server';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';

const PortfolioList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editCard, setEditCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [productList, setProductList] = useState([]);
    const [loadingTable, setLoadingTable] = useState(false);

    const dispatch = useDispatch()
    const { cardData, loading, error } = useSelector((state) => state.auth)
    // console.log(cardData);


    const cardOptions =
        cardData?.data?.map((card) => ({
            label: card.title || "Unnamed Card",
            value: card._id,
        })) || [];


    useEffect(() => {
        dispatch(fetchUserProductService());
    }, [dispatch]);


    const handleSelectCard = async (cardId) => {
        setSelectedCard(cardId);
        setLoadingTable(true);
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(
                `https://onlineparttimejobs.in/api/card-portfolio/bycardId/${cardId}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setProductList(res?.data?.data || []);
        } catch (error) {
            console.error(error);
            message.error("Failed to fetch product/service list");
        } finally {
            setLoadingTable(false);
        }
    };




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
        if (!selectedCard) return;
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.delete(`${base_url}card-product/delete/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res?.status === 200) {
                toastSuccessMessage("Delete Successful");
                const updatedRes = await axios.get(
                    `https://onlineparttimejobs.in/api/card-product/bycardId/${selectedCard}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setProductList(updatedRes?.data?.data || []);
            } else {
                toastSuccessMessageError(res?.data?.msg || "Unable to delete product.");
            }
        } catch (error) {
            console.error(error);
            toastSuccessMessageError("Delete failed! Server error.");
        }
    };
    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Portfolio List</h1>
                <div className="flex gap-3">


                    {/* <Link href="/Dashboard/vcards/create"> */}
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer" onClick={handleCreateModal}>
                        New Add
                    </button>
                    {/* </Link> */}
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                    Select Card
                </label>
                <Select
                    showSearch
                    allowClear
                    placeholder="Select a card..."
                    className="w-full max-w-md"
                    options={cardOptions}
                    onChange={handleSelectCard}
                    filterOption={(input, option) =>
                        option.label.toLowerCase().includes(input.toLowerCase())
                    }
                    notFoundContent="No cards found"
                />
            </div>


            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 text-gray-600 text-sm">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">URL</th>
                            {/* <th className="px-4 py-3">Price</th> */}
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {loadingTable ? (
                            <tr>
                                <td colSpan="7" className="text-center py-6">
                                    <Spin />
                                </td>
                            </tr>
                        ) : productList?.length > 0 ? (
                            productList.map((item, index) => (
                                <tr key={item._id} className="border-t">
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">{item.title || "-"}</td>
                                    <td className="px-4 py-3">{item.description || "-"}</td>
                                    <td className="px-4 py-3">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt="Product"
                                                className="w-10 h-10 rounded object-cover"
                                            />
                                        ) : (
                                            "-"
                                        )}
                                    </td>
                                    <td className="px-4 py-3">{item.url || "-"}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => handleEditModal(item)}
                                            className="text-indigo-600 hover:underline"
                                        >
                                            Edit
                                        </button>

                                        <Popconfirm
                                            title="Delete Product & Service"
                                            description="Are you sure you want to delete this Product & Service?"
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
                                <td colSpan="7" className="text-center py-6 text-gray-500">
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <PortfolioAdd
                isOpen={isOpen}
                onClose={handleCloseModal}
                editCard={editCard}
            />
        </div >
    )
}

export default PortfolioList