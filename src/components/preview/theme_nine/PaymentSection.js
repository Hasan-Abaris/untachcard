
import React from "react";

const PaymentSection = () => {
    return (
        <div className="bg-yellow-400 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-nine.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-center text-lg font-bold">Payment</h2>
            <div className="mt-3 space-y-2">
                <p>
                    <strong>Paypal:</strong> yourid@domain.com
                </p>
                <p>
                    <strong>UPI:</strong> yourid@domain.com
                </p>
                <p>
                    <strong>Crypto Wallet:</strong> faffsdf-5465dfgsdf-dfs44dfgfdg-dfgsdfg
                </p>
                <p className="font-semibold">Pay through QR code</p>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay"
                    alt="QR Code"
                    className="mx-auto"
                />
            </div>
        </div>
    );
};

export default PaymentSection;
