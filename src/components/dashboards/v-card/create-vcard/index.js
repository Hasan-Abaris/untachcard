"use client";

import { fetchUseCard } from "@/app/reduxToolkit/slice";
import Loader from "@/components/common/loader/Loader";
import {
  toastSuccessMessage,
  toastSuccessMessageError,
} from "@/components/common/messageShow/MessageShow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const NewVcardModal = ({ isOpen, onClose, onSubmit, editCard }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [dataTheme, setDataTheme] = useState([]);

  const safe = (v) => (v === undefined || v === null ? "" : v);

  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    sub_title: "",
    theme_id: "",
    theme_name: "",
    card_theme_bg_type: "",
    card_theme_bg: "",
    social_options: "",
    hide_branding: 0,
    views: "",
    card_bg_type: "",
    card_bg: "",
    card_font_color: "",
    card_font: "",
    scans: "",
    enquery_email: "",
    profile: "",
    banner: "",
    description: "",
    show_add_to_phone_book: 0,
    show_share: 0,
    show_qr_on_card: 0,
    show_card_view_count_on_a_card: 0,
    show_qr_on_share_popup: 0,
    search_engine_indexing: 0,
    make_setions_conetnt_carousel: 0,
    custom_css: 0,
    custom_js: 0,
    custom_domain_redirect: 0,
    custom_domain_status: 0,
    custom_domain: 0,
    reorder_sections: 0,
    qr_code_options: 0,
    google_analytics: 0,
    is_home: 0,

    theme_preview: "",
    card_theme_bg_1: "",
    card_theme_bg_2: "",
    card_bg_1: "",
    card_bg_2: "",

    image_source: "online",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (key) => {
    setFormData((prev) => ({ ...prev, [key]: prev[key] ? 0 : 1 }));
  };

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

  const themeData = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(
        `https://onlineparttimejobs.in/api/card-theme/public`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setDataTheme(res?.data?.data);
    } catch (error) {}
  };

  const handleThemeSelect = async (e) => {
    const { value } = e.target;
    if (!value) return;

    setLoader(true);
    try {
      const token = window.localStorage.getItem("token");

      const res = await axios.get(
        `https://onlineparttimejobs.in/api/card-theme/${value}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const themeData = res?.data?.data;

      if (themeData) {
        setFormData((prev) => ({
          ...prev,
          theme_id: value,
          theme_name: themeData?.theme_name,

          card_bg_type: themeData.card_bg_type,
          card_font: themeData.card_font,
          card_font_color: themeData.card_font_color,
          card_theme_bg_type: themeData.card_theme_bg_type,

          theme_preview: themeData.theme_preview,
          card_theme_bg_1: themeData.card_theme_bg_1,
          card_theme_bg_2: themeData.card_theme_bg_2,
          card_bg_1: themeData.card_bg_1,
          card_bg_2: themeData.card_bg_2,

          card_theme_bg:
            themeData.card_theme_bg_type === "Image"
              ? themeData.card_theme_bg_1
              : themeData.card_theme_bg,

          card_bg:
            themeData.card_bg_type === "Image"
              ? themeData.card_bg_1
              : themeData.card_bg,
        }));
      }
    } catch (error) {
      console.error("Theme fetch error:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleSubmit = async () => {
    setLoader(true);
    const payload = { ...formData };

    const token = window.localStorage.getItem("token");

    try {
      let res;

      if (editCard?._id) {
        res = await axios.put(
          `https://onlineparttimejobs.in/api/card/user/update/${editCard?._id}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        res = await axios.post(
          `https://onlineparttimejobs.in/api/card/user/add`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      if (res?.data?.success) {
        toastSuccessMessage(res?.data?.msg);
        dispatch(fetchUseCard());
        setTimeout(() => onClose(), 800);
      } else {
        toastSuccessMessageError(res?.data?.message);
      }
    } catch (error) {
      toastSuccessMessageError(error?.message);
    } finally {
      setLoader(false);
    }
  };

  const getIdData = async (id) => {
    try {
      const token = window.localStorage.getItem("token");

      const res = await axios.get(
        `https://onlineparttimejobs.in/api/card/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFormData((prev) => ({ ...prev, ...res.data }));
    } catch {}
  };

  useEffect(() => {
    if (editCard?._id) getIdData(editCard?._id);
  }, [editCard]);

  useEffect(() => {
    themeData();
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {loader && <Loader />}

      <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
        <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden relative">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl z-50"
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="p-6 border-b bg-gray-50">
            <h2 className="text-2xl font-semibold">
              {editCard?._id ? "Edit Card" : "Add Card"}
            </h2>
          </div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-12 h-[80vh]">

            {/* LEFT — PREVIEW */}
            <div className="col-span-4 bg-gray-50 border-r p-4 overflow-y-auto">
              <h3 className="text-lg font-medium mb-3">Live Preview</h3>

              <div className="space-y-4">

                {formData.theme_preview && (
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    <p className="text-sm text-gray-600 mb-1">Theme Preview</p>
                    <img
                      src={formData.theme_preview}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                )}

                {formData.card_theme_bg_1 &&
                  formData.card_theme_bg_type === "Image" && (
                    <div className="bg-white p-3 rounded-xl shadow-md">
                      <p className="text-sm text-gray-600 mb-1">
                        Theme Background
                      </p>
                      <img
                        src={formData.card_theme_bg_1}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  )}

                {formData.card_bg_1 &&
                  formData.card_bg_type === "Image" && (
                    <div className="bg-white p-3 rounded-xl shadow-md">
                      <p className="text-sm text-gray-600 mb-1">
                        Card Background
                      </p>
                      <img
                        src={formData.card_bg_1}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  )}

                {formData.card_bg_type === "Color" && formData.card_bg && (
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    <p className="text-sm text-gray-600 mb-1">
                      Background Color
                    </p>
                    <div
                      className="w-full h-16 rounded-xl border"
                      style={{ background: formData.card_bg }}
                    ></div>
                  </div>
                )}

                {formData.card_font_color && (
                  <div className="bg-white p-3 rounded-xl shadow-md inline-block">
                    <p className="text-sm text-gray-600 mb-1">Font Color</p>
                    <div
                      className="w-10 h-10 rounded border"
                      style={{ background: formData.card_font_color }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="col-span-8 p-6 overflow-y-auto">
              <form className="grid grid-cols-2 gap-4">

                {/* ---- BASIC FIELDS ---- */}
                <div>
                  <label className="block text-sm font-medium">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    value={safe(formData.slug)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={safe(formData.title)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Sub Title</label>
                  <input
                    type="text"
                    name="sub_title"
                    value={safe(formData.sub_title)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                {/* THEME DROPDOWN */}
                <div>
                  <label className="block text-sm font-medium">Theme Name</label>
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    name="theme_id"
                    value={safe(formData.theme_id)}
                    onChange={handleThemeSelect}
                  >
                    <option value="">Select Theme Name</option>
                    {dataTheme?.map((opt) => (
                      <option key={opt._id} value={opt._id}>
                        {opt.theme_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* THEME BG */}
                <div>
                  <label className="block text-sm font-medium">Theme Bg Type</label>
                  <input
                    type="text"
                    name="card_theme_bg_type"
                    value={safe(formData.card_theme_bg_type)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Theme Bg</label>
                  <input
                    type="text"
                    name="card_theme_bg"
                    value={safe(formData.card_theme_bg)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                {/* CARD BG */}
                <div>
                  <label className="block text-sm font-medium">Card Bg Type</label>
                  <input
                    type="text"
                    name="card_bg_type"
                    value={safe(formData.card_bg_type)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Card Bg</label>
                  <input
                    type="text"
                    name="card_bg"
                    value={safe(formData.card_bg)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                {/* FONT OPTIONS */}
                <div>
                  <label className="block text-sm font-medium">
                    Card Font Color
                  </label>
                  <input
                    type="color"
                    name="card_font_color"
                    value={safe(formData.card_font_color)}
                    onChange={handleChange}
                    className="w-16 h-10 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Card Font</label>
                  <input
                    type="text"
                    name="card_font"
                    value={safe(formData.card_font)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium">Enquiry Email</label>
                  <input
                    type="email"
                    name="enquery_email"
                    value={safe(formData.enquery_email)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                {/* PROFILE */}
                <div>
                  <label className="block text-sm font-medium">Profile</label>
                  <input
                    type="file"
                    name="profile"
                    onChange={handleChangeImage}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  {formData.profile && (
                    <img
                      src={formData.profile}
                      className="mt-2 h-16 rounded-md object-cover"
                    />
                  )}
                </div>

                {/* BANNER */}
                <div>
                  <label className="block text-sm font-medium">Banner</label>
                  <input
                    type="file"
                    name="banner"
                    onChange={handleChangeImage}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                  {formData.banner && (
                    <img
                      src={formData.banner}
                      className="mt-2 h-16 rounded-md object-cover"
                    />
                  )}
                </div>

                {/* DESCRIPTION */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium">Description</label>
                  <textarea
                    name="description"
                    value={safe(formData.description)}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 h-24"
                  ></textarea>
                </div>

                {/* SWITCHES */}
                <div className="col-span-2 grid grid-cols-3 gap-3 mt-4">
                  {Object.keys(formData)
                    .filter((key) => typeof formData[key] === "number")
                    .map((key) => (
                      <div
                        key={key}
                        className="flex justify-between items-center p-2 border rounded-lg"
                      >
                        <span className="text-sm capitalize">
                          {key.replaceAll("_", " ")}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleToggle(key)}
                          className={`w-10 h-5 rounded-full relative transition ${
                            formData[key] ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                              formData[key] ? "translate-x-5" : ""
                            }`}
                          ></div>
                        </button>
                      </div>
                    ))}
                </div>

                <div className="col-span-2 flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    {editCard?._id ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default NewVcardModal;
