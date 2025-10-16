"use client";

import { fetchUseCard } from "@/app/reduxToolkit/slice";
import Loader from "@/components/common/loader/Loader";
import { toastSuccessMessage, toastSuccessMessageError } from "@/components/common/messageShow/MessageShow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const NewVcardModal = ({ isOpen, onClose, onSubmit, editCard }) => {
  console.log(editCard?._id);

  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const [dataTheme, setDataTheme] = useState([])
  const [formData, setFormData] = useState(
    {
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
      // saas_id: 0,
      google_analytics: 0,
      is_home: 0,
      image_source: "online"
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (key) => {
    setFormData((prev) => ({ ...prev, [key]: prev[key] ? 0 : 1 }));
  };

  const handleChangeImage = async (e) => {
    setLoader(true)
    const { name, files } = e.target
    const imageData = new FormData()
    imageData.append('image', files[0])

    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, imageData)
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          [name]: res.data?.url
        }))
        setLoader(false)
      }, 1000);
    } catch (error) {
      console.error('Image Upload Error:', error)
      setLoader(false)
    }
  }

  const themeData = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(`https://onlineparttimejobs.in/api/card-theme/public`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setDataTheme(res?.data?.data);

    } catch (error) {

    }
  }

  const handleThemeSelect = async (e) => {
    const { value } = e.target; // theme _id
    // setFormData((prev) => ({ ...prev, theme_name: value }));
    if (!value) return;

    setLoader(true);
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(`https://onlineparttimejobs.in/api/card-theme/${value}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const themeData = res?.data?.data;
      // console.log(themeData);

      if (themeData) {
        setFormData((prev) => ({
          ...prev,
          // ...themeData,
          theme_id: value,
          theme_name: themeData?.theme_name,
          card_bg_type: themeData?.card_bg_type,
          card_font: themeData?.card_font,
          card_font_color: themeData?.card_font_color,
          card_theme_bg_type: themeData?.card_theme_bg_type
        }));
      }
    } catch (error) {
      console.error("Theme data fetch error:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleSubmit = async () => {
    console.log(formData);
    setLoader(true)
    const payload = {
      ...formData,
      theme_id: formData.theme_id,
    };
    if (editCard?._id) {
      try {
        const token = window.localStorage.getItem("token");
        const res = await axios.put(`https://onlineparttimejobs.in/api/card/user/update/${editCard?._id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res?.data?.success) {
          toastSuccessMessage(res?.data?.msg)
          setLoader(false)

          setTimeout(() => {
            dispatch(fetchUseCard());
            onClose()
          }, 1000)
        } else {
          setLoader(false)
          toastSuccessMessageError(res?.data?.message)
        }
      } catch (error) {
        setLoader(false)
        toastSuccessMessageError(error?.message)

      }
    } else {
      try {
        const token = window.localStorage.getItem("token");
        const res = await axios.post(`https://onlineparttimejobs.in/api/card/user/add`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        })
        dispatch(fetchUseCard());

        if (res?.data?.success) {
          toastSuccessMessage(res?.data?.msg)
          setLoader(false)

          setTimeout(() => {
            dispatch(fetchUseCard());
            onClose()
          }, 1000)
        } else {
          setLoader(false)
          toastSuccessMessageError(res?.data?.message)
        }
      } catch (error) {
        setLoader(false)
        toastSuccessMessageError(error?.message)

      }
    }
  }


  const getIdData = async (id) => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.get(`https://onlineparttimejobs.in/api/card/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      console.log(res);
      const data = res?.data;
      setFormData((prev) => ({
        ...prev,
        ...data,
        theme_id: data?.theme_id || "",
        theme_name: data?.theme_name || "",
      }));

    } catch (error) {

    }
  }


  useEffect(() => {
    if (editCard?._id) {
      getIdData(editCard?._id)
    }
  }, [editCard])

  useEffect(() => {
    themeData()
  }, [])


  if (!isOpen) return null;

  return (
    <>
      {loader && <Loader />}
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
            {editCard?._id ? "Edit Card" : "Add Card"}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div>
              <label className="block text-sm font-medium">Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-medium">Sub Title</label>
              <input
                type="text"
                name="sub_title"
                value={formData.sub_title}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Theme Name</label>
              {/* <input
                type="text"
                name="theme_name"
                value={formData.theme_name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              /> */}
              <select
                className="w-full border rounded-lg px-3 py-2"
                name="theme_id"
                value={formData.theme_id}
                onChange={handleThemeSelect}
              >
                <option value="">Select Theme Name</option>
                {dataTheme && dataTheme?.map((opt) => (
                  <option key={opt?._id} value={opt?._id}>
                    {opt?.theme_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-sm font-medium">Theme Bg Type</label>
              <input
                type="text"
                name="card_theme_bg_type"
                value={formData.card_theme_bg_type}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Theme Bg</label>
              <input
                type="text"
                name="card_theme_bg"
                value={formData.card_theme_bg}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Row 4 */}
            {/* <div>
              <label className="block text-sm font-medium">Social Option</label>
              <input
                type="text"
                name="social_options"
                value={formData.social_options}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div> */}
            {/* <div>
              <label className="block text-sm font-medium">Hide Branding</label>
             
              <select
                className="w-full border rounded-lg px-3 py-2"
                name="hide_branding"
                value={formData.hide_branding}
                onChange={handleChange}
              >
                <option value="">Select Hide Branding</option>
                <option value={0}>Yes</option>
                <option value={1}>No</option>
              </select>
            </div> */}

            {/* Row 5 */}
            {/* <div>
              <label className="block text-sm font-medium">Views</label>
              <input
                type="number"
                name="views"
                value={formData.views}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div> */}
            <div>
              <label className="block text-sm font-medium">Card Bg Type</label>
              <input
                type="text"
                name="card_bg_type"
                value={formData.card_bg_type}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Row 6 */}
            <div>
              <label className="block text-sm font-medium">Card Bg</label>
              <input
                type="text"
                name="card_bg"
                value={formData.card_bg}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Card Font Color</label>
              <input
                type="color"
                name="card_font_color"
                value={formData.card_font_color}
                onChange={handleChange}
                className="w-16 h-10 border rounded"
              />
            </div>

            {/* Row 7 */}
            <div>
              <label className="block text-sm font-medium">Card Font</label>
              <input
                type="text"
                name="card_font"
                value={formData.card_font}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium">Scans</label>
              <input
                type="number"
                name="scans"
                value={formData.scans}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div> */}

            {/* Row 8 */}
            <div>
              <label className="block text-sm font-medium">Enquiry Email</label>
              <input
                type="email"
                name="enquery_email"
                value={formData.enquery_email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Profile Upload */}
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
                  alt="Profile"
                  className="mt-2 h-16 rounded-md object-cover"
                />
              )}
            </div>

            {/* Banner Upload */}
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
                  alt="Banner"
                  className="mt-2 h-16 rounded-md object-cover"
                />
              )}
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 h-24"
              />
            </div>

            {/* Switches Section */}
            <div className="col-span-2 grid grid-cols-3 gap-3 mt-4">
              {Object.keys(formData)
                .filter((key) => typeof formData[key] === "number")
                .map((key) => (
                  <div key={key} className="flex justify-between items-center p-2 border rounded-lg">
                    <span className="text-sm capitalize">
                      {key.replaceAll("_", " ")}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleToggle(key)}
                      className={`w-10 h-5 rounded-full relative transition ${formData[key] ? "bg-blue-600" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${formData[key] ? "translate-x-5" : "translate-x-0"
                          }`}
                      ></div>
                    </button>
                  </div>
                ))}
            </div>

            <div className="col-span-2 flex justify-end mt-6">
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={handleSubmit}
              >
                {editCard?._id ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default NewVcardModal;
