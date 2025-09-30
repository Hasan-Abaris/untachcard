"use client";

import { useEffect, useState } from "react";


const PersonalDetails = ({ nextStep, getVarifyallData, allData }) => {
    const [countryData, setCountrydata] = useState(null)
    const [initalPresnolDetail, setInitalPresnolDetail] = useState({
        state: "",
        country: "",
        presentAddr: "",
        alternate_mobileNo: "",
        mobileNo: " ",
        name: "",
        pin: "",
        educationQualification: "",
    })

    const onChangePresnolDetail = (e) => {
        const clone = { ...initalPresnolDetail }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitalPresnolDetail(clone)
    }

    const getAllApi = async () => {
        // try {
        //     const res = await SignUpCountry()
        //     console.log(res);
        //     if (res?.data?.error == false) {
        //         setCountrydata(res.data?.data)
        //     }
        // } catch (error) {

        // }
    }

    const submitData = async () => {
        // const clone = { ...initalPresnolDetail, user_id: window.localStorage.getItem("userToken"), }
        // // console.log(clone);

        // try {
        //     const res = await personalDetails(clone);
        //     // setloader(false);
        //     if (res?.data?.error == false) {
        //         toastSuccessMessage(res?.data?.message);
        //         getVarifyallData()
        //         setTimeout(() => nextStep(), 1000);
        //     } else {
        //         toastSuccessMessageError(res?.data?.message)
        //     }

        //     // setTimeout(() => {
        //     //     setState(2);
        //     //     window.localStorage.setItem("steps", 2);
        //     // }, 1000);
        // } catch (error) {
        //     // setloader(false);
        // }
    }

    useEffect(() => {
        getAllApi()
    }, [])


    useEffect(() => {
        if (allData?.is_personalDetails == true) {
            setInitalPresnolDetail({
                state: allData?.state,
                country: allData?.country,
                presentAddr: allData?.presentAddr,
                alternate_mobileNo: allData?.alternate_mobileNo,
                mobileNo: allData?.mobile,
                name: allData?.name,
                pin: allData?.pin,
                educationQualification: allData?.educationQualification,
            })
        }
    }, [allData])
    return (
        <div>
            <h3 className="text-lg font-semibold mb-6">Personal Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Name */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">Name</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Name"
                        name="name"
                        value={initalPresnolDetail?.name}
                        onChange={onChangePresnolDetail}
                    />
                </div>

                {/* Mobile */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">Mobile</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Mobile"
                        name="mobileNo"
                        value={initalPresnolDetail?.mobileNo}
                        onChange={onChangePresnolDetail}
                    />
                </div>

                {/* Alternate Mobile */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">Alternate Mobile</label>
                    <input
                        type="number"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Alternate Mobile"
                        name="alternate_mobileNo"
                        value={initalPresnolDetail?.alternate_mobileNo}
                        onChange={onChangePresnolDetail}
                    />
                </div>

                {/* Present Address */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">Present Address</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Present Address"
                        name="presentAddr"
                        value={initalPresnolDetail?.presentAddr}
                        onChange={onChangePresnolDetail}
                    />
                </div>

                {/* Country Select */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">Select Country</label>
                    <select className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400" name="country"
                        value={initalPresnolDetail?.country}
                        onChange={onChangePresnolDetail}>
                        <option value="">-- Select Country --</option>
                        {countryData && countryData?.map((item) => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Pin Code */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">Pin Code</label>
                    <input
                        type="number"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Pin"
                        name="pin"
                        value={initalPresnolDetail?.pin ?? ""}
                        onChange={onChangePresnolDetail}
                    />
                </div>

                {/* State */}
                <div className="col-span-3">
                    <label className="block mb-2 text-sm">State</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter State"
                        name="state"
                        value={initalPresnolDetail?.state ?? ''}
                        onChange={onChangePresnolDetail}
                    />
                </div>

                {/* Education Qualification */}
                <div className="col-span-6">
                    <label className="block mb-2 text-sm">Education Qualification</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Education Qualification"
                        name="educationQualification"
                        value={initalPresnolDetail?.educationQualification}
                        onChange={onChangePresnolDetail}
                    />
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <button className="px-6 py-2 bg-green-500 text-white rounded" onClick={submitData}>
                    Submit
                </button>
                <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PersonalDetails;
