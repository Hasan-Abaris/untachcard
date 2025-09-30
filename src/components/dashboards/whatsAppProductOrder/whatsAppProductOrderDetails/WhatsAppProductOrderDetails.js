
import React from 'react'

const WhatsAppProductOrderDeatils = ({ isOpen, onClose, order }) => {
    console.log(isOpen, onClose, order);


    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
                <hr className="my-4" />

                {/* Order Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
                    <div>
                        <p>
                            <span className="font-semibold">Order ID:</span> {order.id}
                        </p>
                        <p>
                            <span className="font-semibold">Phone:</span> {order.phone}
                        </p>
                        <p>
                            <span className="font-semibold">Address:</span> {order.address}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="font-semibold">Name:</span> {order.name}
                        </p>
                        <p>
                            <span className="font-semibold">Status:</span>{" "}
                            <span className="text-yellow-600 font-medium">{order.status}</span>
                        </p>
                    </div>
                </div>

                {/* Order Items */}
                <h3 className="text-lg font-semibold mt-8 mb-2">Order Items</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">#</th>
                                <th className="p-2 border text-left">Product Name</th>
                                <th className="p-2 border">Price</th>
                                <th className="p-2 border">Quantity</th>
                                <th className="p-2 border">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item, i) => (
                                <tr key={i} className="text-center">
                                    <td className="p-2 border">{i + 1}</td>
                                    <td className="p-2 border text-left">{item.name}</td>
                                    <td className="p-2 border">{item.price}</td>
                                    <td className="p-2 border">{item.qty}</td>
                                    <td className="p-2 border">{item.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Grand Total */}
                <div className="flex justify-end mt-4 text-sm">
                    <span className="font-semibold mr-2">Grand Total:</span>
                    <span>{order.items.reduce((sum, i) => sum + i.total, 0)}</span>
                </div>
            </div>
        </div>
    );
}

export default WhatsAppProductOrderDeatils