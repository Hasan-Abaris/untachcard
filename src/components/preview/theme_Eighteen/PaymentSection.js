import React from "react";

const PaymentSection = () => {
    return (
        <div className="bg-black text-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-center font-semibold text-lg mb-4">Payment</h2>
            <div className="space-y-2">
                <p>
                    <span className="font-semibold">Paypal:</span> yourid@domain.com
                </p>
                <p>
                    <span className="font-semibold">UPI:</span> yourid@domain.com
                </p>
                <p>
                    <span className="font-semibold">Crypto Wallet:</span>{" "}
                    faffsdf-5465dfgsdf-dfs44dfgfdg-dfgsdfg
                </p>
            </div>
            <div className="mt-4 text-center">
                <p className="font-semibold mb-2">Pay through QR code</p>
                <img
                    src="/assets/cardPreview/qr.png"
                    alt="QR Code"
                    className="w-40 h-40 mx-auto rounded-md shadow-md"
                />
            </div>
        </div>
    );
};

export default PaymentSection;
