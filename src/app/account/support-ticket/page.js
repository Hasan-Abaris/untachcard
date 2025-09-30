"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ JoditEditor ko dynamically import karo
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function SupportTicket() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    type: "",
    service_id: "",
    priority: "",
  });
  const [departData, setDepartData] = useState([]);
  const [relateData, setRelateData] = useState([]);
  const [priotyData, setPriotyData] = useState([]);
  const [listImage, setListImage] = useState([]);

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const submitTicket = () => {
    const attachments = listImage.map((item) => item.url);
    const data = { ...ticket, description: editor.current?.value, attachments };
    console.log("Submitted ticket:", data);
    toast.success("Support ticket submitted!");
    setTicket({
      name: "",
      email: "",
      phone: "",
      subject: "",
      type: "",
      service_id: "",
      priority: "",
    });
    setContent("");
    setListImage([]);
  };

  const removeImage = (id) => {
    setListImage(listImage.filter((img) => img.id !== id));
  };

  const handleUpload = (e) => {
    const files = e.target.files;
    const newList = [...listImage];
    for (let i = 0; i < files.length; i++) {
      const obj = { id: Math.random(), url: URL.createObjectURL(files[i]) };
      newList.push(obj);
    }
    setListImage(newList);
  };

  useEffect(() => {
    // Fetch data here if needed
  }, []);

  return (
    <div className="min-h-screen bg-[#111a27] text-white px-4 py-6 mt-18">
      <ToastContainer />

      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Support Ticket</h1>
      </div>

      {/* Card */}
      <div className="bg-[#1a2232] rounded-2xl p-6 shadow-lg max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Open Ticket</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Autofill fields */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={ticket.name}
            onChange={handleChange}
            className="bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={ticket.email}
            onChange={handleChange}
            className="bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={ticket.phone}
            onChange={handleChange}
            className="bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={ticket.subject}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          />

          {/* Department */}
          <select
            name="type"
            value={ticket.type}
            onChange={handleChange}
            className="bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          >
            <option disabled value="">
              Select Department
            </option>
            {departData.map((d) => (
              <option key={d._id} value={d._id}>
                {d.department}
              </option>
            ))}
          </select>

          {/* Related Service */}
          <select
            name="service_id"
            value={ticket.service_id}
            onChange={handleChange}
            className="bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          >
            <option disabled value="">
              Select Service
            </option>
            {relateData.map((r) => (
              <option key={r._id} value={r._id}>
                {r.service_name}
              </option>
            ))}
          </select>

          {/* Priority */}
          <select
            name="priority"
            value={ticket.priority}
            onChange={handleChange}
            className="bg-[#111a27] rounded-lg px-4 py-2 border border-gray-700"
          >
            <option disabled value="">
              Select Priority
            </option>
            {priotyData.map((p) => (
              <option key={p._id} value={p._id}>
                {p.priority}
              </option>
            ))}
          </select>

          {/* Message */}
          <div className="col-span-1 md:col-span-3">
            <label className="block mb-2">Message *</label>
            <div className="bg-[#111a27] border border-gray-700 rounded-lg">
              <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="col-span-1 md:col-span-2 flex items-center space-x-4">
            <input
              type="file"
              id="file"
              multiple
              className="hidden"
              onChange={handleUpload}
            />
            <label
              htmlFor="file"
              className="cursor-pointer flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              <span>Choose File</span>
              <FaCloudUploadAlt />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="button"
              disabled={
                !ticket.subject ||
                !editor.current?.value ||
                !ticket.priority ||
                !ticket.type ||
                !ticket.service_id
              }
              className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-40 px-4 py-2 rounded-lg transition"
              onClick={submitTicket}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Uploaded Images */}
        {listImage.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {listImage.map((item) => (
              <div
                key={item.id}
                className="relative h-36 rounded-lg overflow-hidden"
              >
                <img
                  src={item.url}
                  alt="upload"
                  className="w-full h-full object-cover"
                />
                <RxCrossCircled
                  onClick={() => removeImage(item.id)}
                  className="absolute top-2 right-2 text-red-500 text-2xl cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
