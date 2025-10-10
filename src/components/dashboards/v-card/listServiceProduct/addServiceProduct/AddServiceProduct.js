
import React from 'react'
import { ToastContainer } from 'react-toastify'

const AddServiceProduct = ({ isOpen, onClose, onSubmit, editData }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
                    {/* {editData ? "Edit Card Master" : "Add Card Master"} */}
                    Add Product & Service
                </h2>

                <form className="grid grid-cols-2 gap-4">
                    {/* Row 1 */}
                    <div>
                        <label className="block text-sm font-medium">Select Card</label>
                        <input
                            type="text"
                            name="slug"

                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"

                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Row 2 */}
                    <div>
                        <label className="block text-sm font-medium">Sub Title</label>
                        <input
                            type="text"
                            name="sub_title"
                            // value={formData.sub_title}
                            // onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Price</label>
                        <input
                            type="text"
                            name="theme_name"
                            // value={formData.theme_name}
                            // onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"

                            className="w-full border rounded-lg px-3 py-2 h-24"
                        />
                    </div>



                    <div>
                        <label className="block text-sm font-medium">URL</label>
                        <input
                            type="text"
                            name="scans"

                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Row 8 */}
                    <div>
                        <label className="block text-sm font-medium">Order By ID</label>
                        <input
                            type="text"
                            name="number"
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Profile Upload */}
                    <div>
                        <label className="block text-sm font-medium">Image</label>
                        <input
                            type="file"
                            name="profile"
                            // onChange={handleChangeImage}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        {/* {formData.profile && (
                            <img
                                src={formData.profile}
                                alt="Profile"
                                className="mt-2 h-16 rounded-md object-cover"
                            />
                        )} */}
                    </div>





                    {/* Switches Section */}


                    <div className="col-span-2 flex justify-end mt-6">
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        // onClick={handleSubmit}
                        >
                            {/* {editData ? "Update" : "Save"} */}
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddServiceProduct