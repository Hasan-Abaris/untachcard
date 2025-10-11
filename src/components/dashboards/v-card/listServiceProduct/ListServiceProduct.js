import { useEffect, useState } from "react";
import AddServiceProduct from "./addServiceProduct/AddServiceProduct";
import { fetchUserProductService } from "@/app/reduxToolkit/slice";
import { useDispatch, useSelector } from "react-redux";


const ListServiceProduct = () => {
    const dispatch = useDispatch()
    const { cardData, loading, error } = useSelector((state) => state.auth)
    console.log(cardData);

    useEffect(() => {
        dispatch(fetchUserProductService());
    }, [dispatch]);

    const [isOpen, setIsOpen] = useState(false);
    const [editCard, setEditCard] = useState(null);




    const handleCreateModal = () => {
        setEditCard(null);
        setIsOpen(true);
    };
    const handleEditModal = (card) => {
        console.log(card);

        setEditCard(card?._id);
        setIsOpen(true);
    };

    // ✅ close modal
    const handleCloseModal = () => {
        setIsOpen(false);
        setEditCard(null);
    };
    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Product & Service List</h1>
                <div className="flex gap-3">
                    {/* <Link href="/Dashboard/vcards/create"> */}
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer" onClick={handleCreateModal}>
                        New Add
                    </button>
                    {/* </Link> */}
                </div>
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
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">

                    </tbody>
                </table>
            </div>
            <AddServiceProduct
                isOpen={isOpen}
                onClose={handleCloseModal}

            />
        </div >

    )
}

export default ListServiceProduct