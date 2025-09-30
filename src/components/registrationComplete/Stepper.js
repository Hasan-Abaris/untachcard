
"use client";
import { useEffect, useState } from "react";
import IdentityVerification from "./IdentityVerification";
import PersonalDetails from "./PersonalDetails";
import GstBusinessDetails from "./GstBusinessDetails";
import BankDetails from "./BankDetails";
import UploadDocument from "./UploadDocument";
import VideoKyc from "./VideoKyc";
import { ToastContainer } from "react-toastify";
// import { userValidate, userValidateAllData } from "@/api/Api";

const steps = [
    { id: 1, label: "Identity Verification" },
    { id: 2, label: "Personal Details" },
    { id: 3, label: "GST & Business Details" },
    { id: 4, label: "Bank Details" },
    { id: 5, label: "Upload Document" },
    { id: 6, label: "Video KYC" },
];

const Stepper = () => {
    const [userValidateData, setUserValidateData] = useState(null)
    const [allData, setAllData] = useState(null)


    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1: return <IdentityVerification nextStep={nextStep} getVarifyallData={getVarifyallData} allData={allData} />;
            case 2: return <PersonalDetails nextStep={nextStep} prevStep={prevStep} getVarifyallData={getVarifyallData} allData={allData} />;
            case 3: return <GstBusinessDetails nextStep={nextStep} prevStep={prevStep} getVarifyallData={getVarifyallData} allData={allData} />;
            case 4: return <BankDetails nextStep={nextStep} prevStep={prevStep} getVarifyallData={getVarifyallData} allData={allData} />;
            case 5: return <UploadDocument nextStep={nextStep} prevStep={prevStep} getVarifyallData={getVarifyallData} allData={allData} />;
            case 6: return <VideoKyc prevStep={prevStep} getVarifyallData={getVarifyallData} allData={allData} />;
            default: return null;
        }
    };

    const userValidateApi = async () => {
        // try {
        //     const res = await userValidate()
        //     setUserValidateData(res?.data)
        // } catch (error) {

        // }
    }


    const getVarifyallData = async () => {
        // try {
        //     const res = await userValidateAllData();
        //     setAllData(res.data);
        // } catch (error) {
        //     // console.error(error);
        // }
    };

    useEffect(() => {
        getVarifyallData()
        userValidateApi()
    }, [])
    return (
        <div className="max-w-7xl mx-auto p-6 mt-18">
            <h2 className="text-2xl font-bold text-center mb-4">Complete Your Registration</h2>
            <p className="text-center text-black mb-8">
                You are just a few steps away from embarking on an exciting financial journey.
            </p>

            {/* Stepper UI */}
            <div className="flex justify-between items-center mb-8">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex-1 text-center relative">
                        <div
                            className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full 
              ${currentStep === step.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
                        >
                            {step.id}
                        </div>
                        <p className="text-sm mt-2">{step.label}</p>
                        {index < steps.length - 1 && (
                            <div className="h-0.5 bg-gray-300 w-full absolute left-1/2 top-5 -z-10"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Render Step Content */}
            <div className=" shadow rounded-xl p-6">{renderStep()}</div>
            <ToastContainer />
        </div>
    )
}

export default Stepper