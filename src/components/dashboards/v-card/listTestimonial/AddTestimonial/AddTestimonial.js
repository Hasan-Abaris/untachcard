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

const AddTestimonial = ({ isOpen, onClose, onSubmit, editCard }) => {
  const dispatch = useDispatch();
  const { cardData, loading } = useSelector((state) => state.auth);

  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    image: "",
    description: "",
    cardId: "",
    image_source: "online",
  });

  // ✅ Fetch vCards on mount
  useEffect(() => {
    dispatch(fetchUseCard());
  }, [dispatch]);

  // ✅ Populate form when editing
  useEffect(() => {
    if (editCard?._id) {
      getIdData(editCard._id);
    } else {
      setFormData({
        title: "",
        rating: "",
        image: "",
        description: "",
        cardId: "",
        image_source: "online",
      });
    }
  }, [editCard]);

  // ✅ Get testimonial data by ID
  const getIdData = async (id) => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(
        `https://onlineparttimejobs.in/api/card-testimonials/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res?.data?.data) {
        setFormData(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching testimonial:", error);
    }
  };

  // ✅ Handle field change
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
      setFormData((prev) => ({
        ...prev,
        [name]: res.data?.url,
      }));
      setLoader(false);
    } catch (error) {
      console.error("Image Upload Error:", error);
      setLoader(false);
      toastSuccessMessageError("Image upload failed!");
    }
  };

  // ✅ Handle form submit (Add / Update)
  const handleSubmit = async () => {
    setLoader(true);
    const token = window.localStorage.getItem("token");

    try {
      const url = editCard?._id
        ? `https://onlineparttimejobs.in/api/card-testimonials/user/update/${editCard._id}`
        : `https://onlineparttimejobs.in/api/card-testimonials/user/add`;

      const method = editCard?._id ? axios.put : axios.post;

      const res = await method(url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res?.data?.success) {
        toastSuccessMessage(res?.data?.msg || "Operation successful!");
        setTimeout(() => {
          setLoader(false);
          onClose();
        }, 800);
      } else {
        toastSuccessMessageError(
          res?.data?.message || "Something went wrong!"
        );
        setLoader(false);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toastSuccessMessageError(error?.message || "Request failed!");
      setLoader(false);
    }
  };

  // ✅ Render nothing if modal is closed
  if (!isOpen) return null;

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

        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          {editCard ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4">
          {/* Select Card */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Card</label>
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

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full border rounded-lg px-3 py-2 focus:outline-indigo-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter rating (1–5)"
              min="1"
              max="5"
              className="w-full border rounded-lg px-3 py-2 focus:outline-indigo-500"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write testimonial description..."
              className="w-full border rounded-lg px-3 py-2 h-24 focus:outline-indigo-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChangeImage}
              className="w-full border rounded-lg px-3 py-2"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Uploaded"
                className="mt-2 h-16 rounded-md object-cover border"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-6">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loader}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loader
                ? "Processing..."
                : editCard
                ? "Update Testimonial"
                : "Save Testimonial"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonial;
