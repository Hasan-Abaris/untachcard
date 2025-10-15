"use client";

import { fetchUseCard } from "@/app/reduxToolkit/slice";
import {
  toastSuccessMessage,
  toastSuccessMessageError,
} from "@/components/common/messageShow/MessageShow";
import { Select, Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomSectionAdd = ({ isOpen, onClose, onSubmit, editCard }) => {
  const dispatch = useDispatch();
  const { cardData, loading } = useSelector((state) => state.auth);

  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cardId: "",
    image_source: "online",
  });

  // ✅ Fetch vCard list once
  useEffect(() => {
    dispatch(fetchUseCard());
  }, [dispatch]);

  // ✅ Update form data when editing
  useEffect(() => {
    if (editCard?._id) {
      getIdData(editCard._id);
    } else {
      setFormData({
        title: "",
        description: "",
        cardId: "",
        image_source: "online",
      });
    }
  }, [editCard]);

  // ✅ Fetch existing card data for editing
  const getIdData = async (id) => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(
        `https://onlineparttimejobs.in/api/card-custom-section/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res?.data) setFormData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle image upload
  const handleChangeImage = async (e) => {
    setLoader(true);
    const { name, files } = e.target;
    const imageData = new FormData();
    imageData.append("image", files[0]);

    try {
      const res = await axios.post(
        `https://onlineparttimejobs.in/api/cloudinaryImage/addImage`,
        imageData
      );
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          [name]: res.data?.url,
        }));
        setLoader(false);
      }, 1000);
    } catch (error) {
      console.error("Image Upload Error:", error);
      setLoader(false);
    }
  };

  // ✅ Handle Submit (Add / Update)
  const handleSubmit = async () => {
    setLoader(true);
    const token = window.localStorage.getItem("token");

    try {
      const url = editCard?._id
        ? `https://onlineparttimejobs.in/api/card-custom-section/user/update/${editCard._id}`
        : `https://onlineparttimejobs.in/api/card-custom-section/user/add`;

      const method = editCard?._id ? axios.put : axios.post;
      const res = await method(url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res?.data?.success) {
        toastSuccessMessage(res?.data?.msg || "Operation successful!");
        setTimeout(() => {
          setLoader(false);
          onClose();
        }, 1000);
      } else {
        setLoader(false);
        toastSuccessMessageError(res?.data?.message || "Something went wrong!");
      }
    } catch (error) {
      setLoader(false);
      toastSuccessMessageError(error?.message || "Network error!");
    }
  };

  // ✅ Return early if modal not open (safe)
  if (!isOpen) return null;

  // ✅ UI Section
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          {editCard ? "Edit Custom Section" : "Add Custom Section"}
        </h2>

        <form className="grid grid-cols-2 gap-4">
          {/* Select Card */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Card
            </label>
            {loading ? (
              <Spin />
            ) : (
              <Select
                showSearch
                placeholder="Search or select card"
                className="w-full"
                value={formData.cardId || undefined}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, cardId: value }))
                }
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={
                  cardData?.data?.map((card) => ({
                    label: card.title || "Untitled Card",
                    value: card._id,
                  })) || []
                }
              />
            )}
          </div>

          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-indigo-500"
              placeholder="Enter section title"
            />
          </div>

          {/* Description Field */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 h-24 focus:outline-indigo-500"
              placeholder="Enter section description"
            />
          </div>

          {/* Optional Image Upload */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChangeImage}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-6">
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleSubmit}
              disabled={loader}
            >
              {loader
                ? "Processing..."
                : editCard
                ? "Update Section"
                : "Save Section"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomSectionAdd;
